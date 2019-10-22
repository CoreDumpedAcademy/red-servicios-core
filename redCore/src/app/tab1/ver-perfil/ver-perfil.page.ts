import { Storage } from '@ionic/storage';
import { InsigniaComponent } from './../insignia/insignia.component';
import { User } from './../../interfaces/user';
import { APIService } from './../../api.service';
import { AuthserviceService } from './../../authservice.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-ver-perfil',
  templateUrl: './ver-perfil.page.html',
  styleUrls: ['./ver-perfil.page.scss'],
})
export class VerPerfilPage {

  user: User;
  hasLoaded = false;

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
              private storage: Storage,
              private API: APIService,
              private popover: PopoverController) { }

  async loadData() {
    const user = await this.storage.get('VISIT');
    this.API.checkUser(user).subscribe((data: User) => {
      this.user = data;
      this.hasLoaded = true;
      this.picture = data.picture;
    });
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
