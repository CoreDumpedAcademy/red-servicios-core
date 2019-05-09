import { Component, OnInit } from '@angular/core';
import { ForoService } from '../foro.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-preguntas',
  templateUrl: './lista-preguntas.page.html',
  styleUrls: ['./lista-preguntas.page.scss'],
})
export class ListaPreguntasPage implements OnInit {

  constructor(private service: ForoService, private router: Router) { }

  foro: {
    title:String,
    description:String,
    members: {
      username: String,
      picture: String
    },
    preguntas:[{
      title:String,
      text:String,
      published:String,
      solved:Boolean,
      respuestas:[{}],
      datewhenSolved:Date,
    }],
    created:Date,
    admins:[String]
  }

  async getData() {
    await this.service.getForo().subscribe((data:{
      title:String,
      description:String,
      members: {
        username: String,
        picture: String
      },
      preguntas:[{
        title:String,
        text:String,
        published:String,
        solved:Boolean,
        respuestas:[{}],
        datewhenSolved:Date,
      }],
      created:Date,
      admins:[String]
    }) => {
      this.foro = data
      this.hasLoaded=true
      console.log(this.foro)
    },
    (err) => this.router.navigateByUrl(''))
  }
  hasLoaded=false
  async ngOnInit() {
    await this.getData()
  }
}
