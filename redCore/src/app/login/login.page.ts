import { Storage } from '@ionic/storage';
import { APIService } from './../api.service';
import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from '../authservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  err = '';

  constructor(
    private auth: AuthserviceService,
    private router: Router,
    private api: APIService,
    private storage: Storage
    ) { }

  async login(form) {
    this.auth.login(form.value).subscribe(() => {
      this.api.checkMail(form.value.email).subscribe(
        () => {
          this.router.navigateByUrl('');
        },
        () => {
          this.router.navigateByUrl('nuevos-usuarios');
      });
    }, () => {
      this.err = 'Usuario o contraseña incorrecta';
    });
  }

  goBack() {
    this.router.navigateByUrl('');
  }

  ngOnInit() { }

}
