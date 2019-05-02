import { Component } from '@angular/core';

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
      title: 'Home',
      url: '/menu/home'
    },
    {
      title: 'Messages',
      url: '/menu/messages'
    }
  ];

  selectedPath = '';

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router
  ) {

    this.initializeApp();

    this.router.events.subscribe((event: RouterEvent) => {
      if(event && event.url){
        this.selectedPath = event.url;
      }
    })
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
