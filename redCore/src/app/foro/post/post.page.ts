import {AuthserviceService} from '../../authservice.service';
import {APIService} from '../../api.service';
import {ForoService} from '../foro.service';
import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';

@Component({
    selector: 'app-post',
    templateUrl: './post.page.html',
    styleUrls: ['./post.page.scss'],
})
export class PostPage implements OnInit {

    hasLoaded = false;
    foro;
    currentUser: {
        username: string,
        picture: string
    };
    form: NgForm;

    constructor(private service: ForoService, private router: Router, private API: APIService, private auth: AuthserviceService) {
    }

    loadData() {
        this.auth.getEmail().then((email) => {
            this.API.tieneCuenta(email).subscribe((cuenta: {
                user: {
                    username: string,
                    picture: string
                }
            }) => {
                this.currentUser = cuenta.user;
                this.service.getForoAct().then((foro) => {
                    this.foro = foro;
                    this.hasLoaded = true;
                });
            });
        }, (err) => this.router.navigateByUrl('login'));
    }

    ngOnInit() {
        this.loadData();
    }

    sendData(form: NgForm) {
        const body = {
            user: {
                username: this.currentUser.username,
                picture: this.currentUser.picture
            },
            title: form.form.value.title,
            text: form.form.value.text
        };
        this.service.sendQuestion(body, this.foro).subscribe(() => {
        }, (err) => {
            console.log(err);
        });
        this.router.navigateByUrl('lista-preguntas');
    }

}
