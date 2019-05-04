import { AuthserviceService } from './../authservice.service';
import { Storage } from '@ionic/storage';
import { APIService } from './../api.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nuevos-usuarios',
  templateUrl: './nuevos-usuarios.page.html',
  styleUrls: ['./nuevos-usuarios.page.scss'],
})
export class NuevosUsuariosPage implements OnInit {

  error:String = ""
  email:String

  constructor(private api: APIService, private router: Router, private storage: Storage,
    private auth: AuthserviceService) {
    storage.get('EMAIL').then(data => this.email = data)
   }

  ngOnInit() {
  }

  async createAcc(form) {
    await this.api.tieneCuenta(form.value.username).subscribe(
      data => {
        this.error = "Ya existe un usuario con ese nombre"
      },
      async err => {
        let body = {
          email: this.email,
          username: form.value.username,
        }
        await this.api.registrarUsuario(body).subscribe((data) => {
        },
        (error) => {
          this.router.navigateByUrl('');
        }
        )
    })
  }

  goBack() {
    this.router.navigateByUrl('login')
  }

}
