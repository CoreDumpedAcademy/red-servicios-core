import { Component } from '@angular/core';
import { AuthserviceService } from '../authservice.service';
import { Router, RouterEvent } from '@angular/router';
import { LoginPage } from '../login/login.page'
import { NavController } from '@ionic/angular';

@Component({
    selector: 'app-tabs',
    templateUrl: 'tabs.page.html',
    styleUrls: ['tabs.page.scss']
})
export class TabsPage {


    constructor(
        private auth: AuthserviceService,
        private router: Router,
        private navCntrl: NavController
        ){}

    isLoggedIn(){
        return this.auth.isLoggedIn;
    }

    redirectToLogin(){
        this.navCntrl.navigateRoot('/login');
    }
}
