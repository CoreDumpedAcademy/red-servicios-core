import { ForoService } from './../foro.service';
import { AuthserviceService } from './../../authservice.service';
import { APIService } from './../../api.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-crear-foro',
  templateUrl: './crear-foro.page.html',
  styleUrls: ['./crear-foro.page.scss'],
})
export class CrearForoPage implements OnInit {

  constructor(private API: APIService, private router: Router, private auth: AuthserviceService, private service: ForoService) { }

  currentUser:{
    user:{
      cuentas:{},
      email:String,
      insignias:[{}],
      picture:String,
      rol:Number,
      username:String
    } 
  }
  err:String=''

  loadData() {
    this.auth.getEmail().then((email) => {
      this.API.tieneCuenta(email).subscribe((cuenta:{
        user:{
          cuentas:{},
          email:String,
          insignias:[{}],
          picture:String,
          rol:Number,
          username:String
        }
      }) => {
        this.currentUser = cuenta;
        if (cuenta.user.rol <= 0) this.router.navigateByUrl('')
      })
    }, (error) => {
      this.router.navigateByUrl('login')
    })
  }

  ngOnInit() {
    this.loadData()
  }

  sendData(form:NgForm){
    let body = form.form.value
    this.service.crearForo(body).subscribe((data) => {}, (error) => {
      this.err = 'Foro creado correctamente'
      setTimeout(() => {
        this.router.navigateByUrl('lista-foros')
      }, 2500)
    })
  }

}
