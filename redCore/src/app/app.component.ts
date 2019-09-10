import { User } from './interfaces/user';
import { APIService } from './api.service';
import { AuthserviceService } from './authservice.service';
import {Component} from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router, RouterEvent } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html'
})
export class AppComponent {

  pages = [
    {
      title: 'Calendario',
      url: '/core/home',
      icon: 'ios-calendar'
    },
    {
      title: 'Nevera',
      url: '/nevera',
      icon: 'ios-cart'
    },
    {
      title: 'Foros',
      url: '/lista-foros',
      icon: 'ios-chatbubbles'
    }
  ];

  selectedPath = '';
  picture: string;
  username: string;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    private service: APIService,
    private auth: AuthserviceService,
  ) {

    this.initializeApp();

    this.router.events.subscribe((event: RouterEvent) => {
      if (event && event.url) {
        this.selectedPath = event.url;
      }
    });
    this.auth.getEmail().then((email) => {
      this.service.tieneCuenta(email).then(promise => {
        promise.subscribe((data: User) => {
          this.picture = 'http://fridge.coredumped.es' + data.user.picture;
          this.username = data.user.username;
        });
      }).catch(() => {
        this.picture = './assets/profileCore.jpg';
        this.username = 'Usuario';
      });
    });
  }


  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
