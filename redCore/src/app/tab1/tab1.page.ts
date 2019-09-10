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

  constructor(private router: Router, private auth: AuthserviceService, private API: APIService) { }

  async loadData() {
    this.email = await this.auth.getEmail();
    this.API.tieneCuenta(this.email).then((promise) => {
      promise.subscribe(
        (data: User) => {
          this.user = data;
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
        this.hasLoaded = true;
      }));
  }

  verInsignia(ins: {
    descripcion: string,
    nombre: string
  }) {
    console.log(ins);
  }

  // tslint:disable-next-line: use-life-cycle-interface
  async ngOnInit() {
    await this.loadData();
  }

  ionViewWillEnter() {
   this.loadData();
  }

}
