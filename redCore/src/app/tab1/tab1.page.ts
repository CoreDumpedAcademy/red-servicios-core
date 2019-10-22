import { InsigniaComponent } from './insignia/insignia.component';
import { PopoverController } from '@ionic/angular';
import { APIService } from './../api.service';
import { AuthserviceService } from './../authservice.service';
import {Component} from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { User } from '../interfaces/user';


@Component({
    selector: 'app-tab1',
    templateUrl: 'tab1.page.html',
    styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  email: string;
  user: { user: User };
  hasLoaded = false;
  aux = false;

  picture: string;
  balance: number;
  status: string;

  sliderConfig = {
    loop: false,
    initialSlide: 1,
    spaceBetween: 5,
    centeredSlides: true,
    slidesPerView: 4
  };

  constructor(private router: Router,
              private auth: AuthserviceService,
              private API: APIService,
              private popover: PopoverController) { }

  async loadData() {
    this.email = await this.auth.getEmail();
    this.API.tieneCuenta(this.email).then((promise) => {
      promise.subscribe(
        (data: { user: User }) => {
          this.user = data;
          if (this.aux) {
            this.hasLoaded = true;
          } else { this.aux = true; }
        },
        () => {
          this.router.navigateByUrl('login');
        }
      );
    });
    this.auth.getUser().then(promise => promise.subscribe(
      (data: {
        avatarImage: string,
        balance: number,
        status: string
      }) => {
        this.picture = this.auth.AUTH_SERVER_ADRESS + data.avatarImage;
        this.balance = data.balance;
        this.status = data.status;
        if (this.aux) {
          this.hasLoaded = true;
        } else { this.aux = true; }
      }));
  }

  async verInsignia(ins: {
    descripcion: string,
    nombre: string,
    imagen: string,
    gif: string,
    conseguida: Date
  },                ev) {
    const popover = await this.popover.create({
      component: InsigniaComponent,
      componentProps: {
        data: ins
      },
      mode: 'ios',
      event: ev,
    });
    return popover.present();
  }

  async OnInit() {
    await this.loadData();
  }

  ionViewWillEnter() {
   this.loadData();
  }

}
