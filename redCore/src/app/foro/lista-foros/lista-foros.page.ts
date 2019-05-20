import {APIService} from '../../api.service';
import {AuthserviceService} from '../../authservice.service';
import {Component, OnInit} from '@angular/core';
import {ForoService} from '../foro.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-lista-foros',
    templateUrl: './lista-foros.page.html',
    styleUrls: ['./lista-foros.page.scss'],
})
export class ListaForosPage implements OnInit {

    currentUser: {
        user: {
            rol: number
        }
    };

    foros: [{
        title: string,
        description: string,
        members: [{
            username: string,
            picture: string
        }],
        preguntas: [{}],
        created: Date,
        admins: [string]
    }];
    hasLoaded = false;

    constructor(private foroserv: ForoService, private router: Router, private auth: AuthserviceService, private API: APIService) {
    }

    async loadData() {
        this.foroserv.getForos().subscribe((data: [{
                title: string,
                description: string,
                members: [{
                    username: string,
                    picture: string
                }],
                preguntas: [{}],
                created: Date,
                admins: [string]
            }]) => {
                this.foros = data;
                this.auth.getEmail().then((email) => {
                    if (email === null) {
                        this.router.navigateByUrl('login');
                    }
                    this.API.tieneCuenta(email).subscribe((user: {
                        user: {
                            rol: number
                        }
                    }) => {
                        this.currentUser = user;
                        this.hasLoaded = true;
                    });
                }, (err) => {
                    this.router.navigateByUrl('login');
                }).catch((err) => {
                    this.router.navigateByUrl('login');
                });
            }
        );
    }

    async gotoForo(title) {
        await this.foroserv.setForoAct(title);
        this.router.navigateByUrl('lista-preguntas');
    }

    ngOnInit() {
        this.loadData();
    }

    createForo() {
        this.router.navigateByUrl('crear-foro');
    }

    ionViewWillEnter() {
        this.loadData();
    }


}
