import { ForoService } from './../foro.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-respuestas',
  templateUrl: './lista-respuestas.page.html',
  styleUrls: ['./lista-respuestas.page.scss'],
})
export class ListaRespuestasPage implements OnInit {

  pregunta:{
    user:{
      username:String,
      picture:String
    },
    title:String,
    text:String,
    published:Date
    solved:Boolean,
    datewhenSolved:Date,
    respuestas:[
      {
        user:{
          username:String,
          picture:String
        },
        text:String,
        published:Date
      }
    ]
  }

  hasLoaded=false

  constructor(private service: ForoService, private router: Router) {

  }

  async getData() {

  }

  ngOnInit() {
  }

}
