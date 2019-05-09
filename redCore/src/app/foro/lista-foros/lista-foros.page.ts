import { Component, OnInit } from '@angular/core';
import { ForoService } from '../foro.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-foros',
  templateUrl: './lista-foros.page.html',
  styleUrls: ['./lista-foros.page.scss'],
})
export class ListaForosPage implements OnInit {

  foros:[{
    title:String,
    description:String,
    members:[{
      username:String,
      picture:String
    }],
    preguntas:[{}],
    created:Date,
    admins:[String]
  }]

  constructor(private foroserv: ForoService, private router: Router) { }

  async loadData(){
    this.foroserv.getForos().subscribe((data:[{
      title:String,
      description:String,
      members:[{
        username:String,
        picture:String
      }],
      preguntas:[{}],
      created:Date,
      admins:[String]}]) => {
      this.foros = data;
    }
    )
  }

  gotoForo(title) {
    this.foroserv.foroAct = title
    this.router.navigateByUrl('lista-preguntas');
  }

  ngOnInit() {
    this.loadData();
  }

}
