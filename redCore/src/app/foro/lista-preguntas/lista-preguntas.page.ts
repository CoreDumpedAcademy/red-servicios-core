import {APIService} from '../../api.service';
import {AuthserviceService} from '../../authservice.service';
import {Component, OnInit} from '@angular/core';
import {ForoService} from '../foro.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-lista-preguntas',
    templateUrl: './lista-preguntas.page.html',
    styleUrls: ['./lista-preguntas.page.scss'],
})
export class ListaPreguntasPage implements OnInit {

    constructor(private service: ForoService, private router: Router, private auth: AuthserviceService, private API: APIService) {
    }

    foro: {
        title: string,
        description: string,
        members: [string],
        preguntas: [{
            title: string,
            text: string,
            published: Date,
            solved: boolean,
            respuestas: [{}],
            datewhenSolved: Date,
            user: {
                username: string,
                picture: string
            }
        }],
        created: Date,
        admins: [string]
    };

    hasLoaded = false;
    currentUser: {
        user: {
            username: string,
            picture: string
        }
    };
    isAMember;
    isAnAdmin;


    async loadData() {
        this.service.getForoAct().then((foroAct: string) => {
            this.service.getForo(foroAct).subscribe((data: {
                title: string,
                description: string,
                members: [string],
                preguntas: [{
                    title: string,
                    text: string,
                    published: Date,
                    solved: boolean,
                    respuestas: [{}],
                    datewhenSolved: Date,
                    user: {
                        username: string,
                        picture: string,
                    }
                }],
                created: Date,
                admins: [string]
            }) => {
                this.foro = data;
                this.auth.getEmail().then((email) => {
                    this.API.tieneCuenta(email).subscribe((user: {
                        user: {
                            username,
                            picture,
                            insignias: [],
                            rol: number,
                        }
                    }) => {
                        this.currentUser = user;
                        this.isAMember = data.members.includes(this.currentUser.user.username);
                        this.isAnAdmin = data.members.includes(this.currentUser.user.username);
                    });
                });
                this.hasLoaded = true;
            }, (error) => {
                console.log(error);
                this.router.navigateByUrl('lista-foros');
            });
        });
    }

    async goToQuestion(index: number) {
        await this.service.setPreguntaAct(Math.abs(index - (this.foro.preguntas.length - 1)));
        this.router.navigateByUrl('lista-respuestas');
    }

    async ngOnInit() {
        await this.loadData();
    }

    subscribe() {
        this.service.addMember(this.currentUser.user.username, this.foro.title).subscribe(() => {
            },
            (error) => {
                console.log(error);
            });
        window.location.reload();
    }

    unsubscribe() {
        this.service.removeMember(this.currentUser.user.username, this.foro.title).subscribe(() => {
            },
            (error) => console.log(error));
        window.location.reload();
    }

    ionViewWillEnter() {
        this.loadData();
    }

    post() {
        this.router.navigateByUrl('post');
    }
}
