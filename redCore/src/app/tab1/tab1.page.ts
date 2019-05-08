import { APIService } from './../api.service';
import { AuthserviceService } from './../authservice.service';
import {Component} from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';


@Component({
    selector: 'app-tab1',
    templateUrl: 'tab1.page.html',
    styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  email:String
  user:String
  insignias:[{
    nombre:String,
    descripcion:String,
    id:Number
  }]
  rol:Number
  picture:String
  balance:Number
  status:String

  sliderConfig = {
    loop: false,
    initialSlide: 1,
    spaceBetween: 5,
    centeredSlides: true,
    slidesPerView: 4
  }

  constructor(private router: Router, private auth: AuthserviceService, private API: APIService) { }

  async loadData() {
    this.email = await this.auth.getEmail();
    this.API.tieneCuenta(this.email).subscribe(
      (data:{
        user:{
          cuentas:{
            telegram:String,
            biblioteca:String,
            slack:String
          },
          email:String,
          rol:Number
          insignias:[{
            nombre:String,
            descripcion:String,
            id:Number
          }],
          username:String
        }
      }) => {
        this.user = data.user.username
        this.insignias = data.user.insignias
        this.rol = data.user.rol
      }
    )
    this.auth.getUser().then(promise => promise.subscribe(
      (data:{
        avatarImage:String,
        balance:Number,
        status:String
      })=> {
        this.picture = this.auth.AUTH_SERVER_ADRESS+data.avatarImage
        this.balance = data.balance
        this.status = data.status
      }))
  }

  verInsignia(ins:{
    descripcion:String,
    nombre:String
  }){
    console.log(ins)
  }

  async ngOnInit() {
    await this.loadData();
  }


}
