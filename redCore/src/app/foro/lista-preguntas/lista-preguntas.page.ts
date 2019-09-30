import { Pregunta } from './../../interfaces/pregunta';
import { User } from './../../interfaces/user';
import { Foro } from 'src/app/interfaces/foro';
import { APIService } from './../../api.service';
import { AuthserviceService } from './../../authservice.service';
import { Component, OnInit } from '@angular/core';
import { ForoService } from '../foro.service';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { PopoverController } from '@ionic/angular';
import { PopoverComponent } from './../popover/popover.component';
import { Respuesta } from 'src/app/interfaces/respuesta';

@Component({
  selector: 'app-lista-preguntas',
  templateUrl: './lista-preguntas.page.html',
  styleUrls: ['./lista-preguntas.page.scss'],
})
export class ListaPreguntasPage implements OnInit {

  constructor(private popoverController: PopoverController,
              private service: ForoService,
              private router: Router,
              private auth: AuthserviceService,
              private API: APIService) { }

  foro: Foro;

  hasLoaded = false;
  currentUser: {
    user: {
      username: string,
      picture: string
    }
  };
  isAMember;
  isAnAdmin;

  capitalize(s: string) {
    return s.charAt(0).toUpperCase() + s.slice(1);
  }

  async doRefresh(event) {
    await this.loadData();
    event.target.complete();
  }

  setFecha(pregunta) {
    moment.locale('es');
    if (new Date().getTime() - new Date(pregunta.published).getTime() < 86400000) {
    pregunta.published = this.capitalize(moment(pregunta.published).fromNow());
    } else if (new Date().getTime() - new Date(pregunta.published).getTime() < 172999999) {
      pregunta.published = 'Ayer';
    } else if (new Date().getTime() - new Date(pregunta.published).getTime() > 172800000) {
      pregunta.published = this.capitalize(moment(pregunta.published).format('D[/]MM[/]YY[\n]HH[:]mm'));
    }
  }


  async loadData() {
    this.service.getForoAct().then((foroAct: string) => {
      this.service.getForo(foroAct).subscribe((data: Foro) => {
        this.foro = data;
        this.foro.preguntas.forEach(pregunta => {
          if (pregunta.text.length > 240) {
            pregunta.text = pregunta.text.slice(0, 239) + '...';
          }
          if (pregunta.respuestas && pregunta.respuestas.length) {
            this.setFecha(pregunta.respuestas[pregunta.respuestas.length - 1]);
          } else {
            this.setFecha(pregunta);
          }
        });
        this.auth.getEmail().then((email) => {
          this.API.tieneCuenta(email).then((promise) => {
            promise.subscribe((user: User) => {
              this.currentUser = user;
              this.isAMember = data.members.includes(this.currentUser.user.username);
              this.isAnAdmin = data.members.includes(this.currentUser.user.username);
            });
          });
        });
        this.hasLoaded = true;
      }, (error) => {
        this.router.navigateByUrl('lista-foros');
      });
    });
  }

  async presentPopover(ev: any, index: number) {
    index = Math.abs(index - (this.foro.preguntas.length - 1));
    let data;
    if (this.foro.preguntas[index].respuestas.length > 0) {
      data = this.foro.preguntas[index].respuestas[this.foro.preguntas[index].respuestas.length - 1];
    } else {
      data = '';
    }
    const popover = await this.popoverController.create({
      component: PopoverComponent,
      componentProps: {
        data
      },
      event: ev,
      mode: 'ios'
    });
    return await popover.present();
  }

  async goToQuestion(index: number) {
    await this.service.setPreguntaAct(Math.abs(index - (this.foro.preguntas.length - 1)));
    this.router.navigateByUrl('lista-respuestas');
  }

  async ngOnInit() {
  }

  subscribe() {
    this.service.addMember(this.currentUser.user.username, this.foro.title).subscribe(() => { },
    (error) => {
      console.log(error);
    });
    window.location.reload();
  }

  unsubscribe() {
    this.service.removeMember(this.currentUser.user.username, this.foro.title).subscribe(() => { },
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
