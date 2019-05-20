import {APIService} from '../api.service';
import {AuthserviceService} from '../authservice.service';
import {Component} from '@angular/core';
import {Router} from '@angular/router';


@Component({
    selector: 'app-tab1',
    templateUrl: 'tab1.page.html',
    styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

    email: string;
    user: string;
    insignias: [{
        nombre: string,
        descripcion: string,
        id: number
    }];
    rol: number;
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

    constructor(private router: Router, private auth: AuthserviceService, private API: APIService) {
    }

    async loadData() {
        this.email = await this.auth.getEmail();
        this.API.tieneCuenta(this.email).subscribe(
            (data: {
                user: {
                    cuentas: {
                        telegram: string,
                        biblioteca: string,
                        slack: string
                    },
                    email: string,
                    rol: number
                    insignias: [{
                        nombre: string,
                        descripcion: string,
                        id: number
                    }],
                    username: string
                }
            }) => {
                this.user = data.user.username;
                this.insignias = data.user.insignias;
                this.rol = data.user.rol;
            },
            () => {
                this.router.navigateByUrl('login');
            }
        );
        this.auth.getUser().then(promise => promise.subscribe(
            (data: {
                avatarImage: string,
                balance: number,
                status: string
            }) => {
                this.picture = this.auth.AUTH_SERVER_ADRESS + data.avatarImage;
                this.balance = data.balance;
                this.status = data.status;
            }));
    }

    verInsignia(ins: {
        descripcion: string,
        nombre: string
    }) {
        console.log(ins);
    }

    async OnInit() {
        await this.loadData();
    }

    ionViewWillEnter() {
        this.loadData();
    }

}
