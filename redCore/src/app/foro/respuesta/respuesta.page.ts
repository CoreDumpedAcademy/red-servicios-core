import { Foro } from './../../interfaces/foro';
import { Pregunta } from './../../interfaces/pregunta';
import { ForoService } from './../foro.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-respuesta',
  templateUrl: './respuesta.page.html',
  styleUrls: ['./respuesta.page.scss'],
})
export class RespuestaPage implements OnInit {

  constructor(private service: ForoService, private router: Router) { }

  currentUser: {
    user: {
      username: string,
      picture: string
    }
  };

  pregunta: Pregunta;

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
            this.service.getForo(foro).subscribe((data: Foro) => {
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
    this.service.sendAnswer(body, this.title).subscribe(() => {},
    (err) => { console.log(err); });
    this.router.navigateByUrl('lista-respuestas');
  }

  ngOnInit() {
    this.loadData();
  }
}
