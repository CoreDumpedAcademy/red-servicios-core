import { Pregunta } from './../../interfaces/pregunta';
import { ForoService } from './../foro.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Foro } from 'src/app/interfaces/foro';
import * as moment from 'moment';

@Component({
  selector: 'app-lista-respuestas',
  templateUrl: './lista-respuestas.page.html',
  styleUrls: ['./lista-respuestas.page.scss'],
})
export class ListaRespuestasPage implements OnInit {

  title: string;

  pregunta: Pregunta;
  hasLoaded = false;

  constructor(private service: ForoService, private router: Router) {

  }

  capitalize(s: string) {
    return s.charAt(0).toUpperCase() + s.slice(1);
  }

  async loadData() {
    this.service.getForoAct().then((foro) => {
      if (foro === null) {
        this.router.navigateByUrl('lista-foros');
      }
      this.service.getPreguntaAct().then((index: number) => {
        this.service.getForo(foro).subscribe((data: Foro) => {
          this.title = data.title;
          this.pregunta = data.preguntas[index];
          if (new Date().getTime() - new Date(this.pregunta.published).getTime() < 86400000) {
            this.pregunta.published = this.capitalize(moment(this.pregunta.published).fromNow());
            } else if (new Date().getTime() - new Date(this.pregunta.published).getTime() < 172999999) {
              this.pregunta.published = 'Ayer';
            } else if (new Date().getTime() - new Date(this.pregunta.published).getTime() > 172800000) {
              this.pregunta.published = this.capitalize(moment(this.pregunta.published).format('D[/]MM[/]YY[\n]HH[:]mm'));
            }
          this.pregunta.respuestas.forEach(respuesta => {
            moment.locale('es');
            if (new Date().getTime() - new Date(respuesta.published).getTime() < 86400000) {
              respuesta.published = this.capitalize(moment(respuesta.published).fromNow());
            } else if (new Date().getTime() - new Date(respuesta.published).getTime() < 172999999) {
              respuesta.published = 'Ayer';
            } else if (new Date().getTime() - new Date(respuesta.published).getTime() > 172800000) {
              respuesta.published = this.capitalize(moment(respuesta.published).format('D[/]MM[/]YY[\n]HH[:]mm'));
            }
          });
          this.hasLoaded = true;
        });
      });
    });
  }

  ngOnInit() {
    this.loadData();
  }

  ionViewWillEnter() {
   this.loadData();
  }

  contestar() {
    this.router.navigateByUrl('respuesta');
  }
}
