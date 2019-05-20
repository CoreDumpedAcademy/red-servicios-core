import {APIService} from '../api.service';
import {Component, OnInit} from '@angular/core';
import {AuthserviceService} from '../authservice.service';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

    err = '';
    form: NgForm ;

    constructor(private auth: AuthserviceService, private router: Router, private api: APIService) {
    }

    async login(form) {
        this.auth.login(form.value).subscribe((res) => {
            if (this.auth.isLoggedIn()) {
                this.api.tieneCuenta(form.value.email).subscribe((data) => {
                    this.router.navigateByUrl('');
                }, (err) => {
                    this.router.navigateByUrl('nuevos-usuarios');
                });
            } else {
                alert('jo');
            }
        }, (err) => {
            this.err = 'Usuario o contraseña incorrectos';
        });
    }

    goBack() {
        this.router.navigateByUrl('');
    }

    ngOnInit() {
    }

}
