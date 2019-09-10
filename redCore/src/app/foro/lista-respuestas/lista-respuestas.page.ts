import { Pregunta } from './../../interfaces/pregunta';
import { ForoService } from './../foro.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Foro } from 'src/app/interfaces/foro';

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

  async loadData() {
    this.service.getForoAct().then((foro) => {
      if (foro === null) {
        this.router.navigateByUrl('lista-foros');
      }
      this.service.getPreguntaAct().then((index: number) => {
        this.service.getForo(foro).subscribe((data: Foro) => {
          this.title = data.title;
          this.pregunta = data.preguntas[index];
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
