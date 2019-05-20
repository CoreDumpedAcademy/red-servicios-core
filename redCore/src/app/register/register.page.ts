import {AuthserviceService} from '../authservice.service';
import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';

@Component({
    selector: 'app-register',
    templateUrl: './register.page.html',
    styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
    form: NgForm;

    constructor(private router: Router, private auth: AuthserviceService) {
    }

    ngOnInit() {
    }

    register(form) {

    }

    goBack() {
        this.router.navigateByUrl('login');
    }

}
