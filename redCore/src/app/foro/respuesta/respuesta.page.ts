import {ForoService} from '../foro.service';
import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';

@Component({
    selector: 'app-respuesta',
    templateUrl: './respuesta.page.html',
    styleUrls: ['./respuesta.page.scss'],
})
export class RespuestaPage implements OnInit {

    constructor(private service: ForoService, private router: Router) {
    }

    form: NgForm;

    currentUser: {
        user: {
            username: string,
            picture: string
        }
    };

    pregunta: {
        user: {
            username: string,
            picture: string
        },
        title: string,
        text: string,
        published: Date
        solved: boolean,
        datewhenSolved,
        respuestas: [
            {
                user: {
                    username: string,
                    picture: string
                },
                text: string,
                published: Date
            }
            ]
    };
    index: number;
    hasLoaded = false;
    title: string;

    loadData() {
        this.service.getCurrentUser().then((promise) => {
            promise.subscribe((user: {
                user: {
                    username: string,
                    picture: string
                }
            }) => {
                this.currentUser = user;
                this.service.getForoAct().then((foro) => {
                    this.service.getPreguntaAct().then((index: number) => {
                        this.service.getForo(foro).subscribe((data: {
                            title: string,
                            description: string,
                            members: [string],
                            preguntas: [{
                                user: {
                                    username: string,
                                    picture: string
                                },
                                title: string,
                                text: string,
                                published: Date
                                solved: boolean,
                                datewhenSolved: Date,
                                respuestas: [
                                    {
                                        user: {
                                            username: string,
                                            picture: string
                                        },
                                        text: string,
                                        published: Date
                                    }
                                    ]
                            }],
                            created: Date,
                            admins: [string]
                        }) => {
                            this.title = data.title;
                            this.pregunta = data.preguntas[index];
                            this.index = index;
                            this.hasLoaded = true;
                        });
                    });
                });
            });
        });
    }

    sendData(form: NgForm) {
        const body = {
            answer: {
                user: {
                    username: this.currentUser.user.username,
                    picture: this.currentUser.user.picture
                },
                text: form.form.value.text
            },
            pos: this.index
        };
        this.service.sendAnswer(body, this.title).subscribe(() => {
            },
            (err) => {
                console.log(err);
            });
        this.router.navigateByUrl('lista-respuestas');
    }

    ngOnInit() {
        this.loadData();
    }
}
