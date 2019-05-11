import { ForoService } from './../foro.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-respuestas',
  templateUrl: './lista-respuestas.page.html',
  styleUrls: ['./lista-respuestas.page.scss'],
})
export class ListaRespuestasPage implements OnInit {

  title:String

  pregunta:{
    user:{
      username:String,
      picture:String
    },
    title:String,
    text:String,
    published:Date
    solved:Boolean,
    datewhenSolved,
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

  async loadData() {
    this.service.getForoAct().then((foro) => {
      this.service.getPreguntaAct().then((index:number) => {
        this.service.getForo(foro).subscribe((data:{
          title:String,
          description:String,
          members: [String],
          preguntas:[{
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
          }],
          created:Date,
          admins:[String]
        }) => {
          this.title = data.title
          this.pregunta = data.preguntas[index]
          this.hasLoaded = true
        })
      })
    })
  }

  ngOnInit() {
    this.loadData()
  }

}
