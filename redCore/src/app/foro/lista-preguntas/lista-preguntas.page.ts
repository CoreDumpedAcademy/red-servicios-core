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
    members: [{
      username: String,
      picture: String
    }],
    preguntas:[{
      title:String,
      text:String,
      published:Date,
      solved:Boolean,
      respuestas:[{}],
      datewhenSolved:Date,
    }],
    created:Date,
    admins:[String]
  }

  hasLoaded=false
  currentUser
  isAMember
  isAnAdmin

  async getData() {
    await this.service.getForo().subscribe(async (data:{
      title:String,
      description:String,
      members: [{
        username: String,
        picture: String
      }],
      preguntas:[{
        title:String,
        text:String,
        published:Date,
        solved:Boolean,
        respuestas:[{}],
        datewhenSolved:Date,
      }],
      created:Date,
      admins:[String]
    }) => {
      this.foro = data
      await this.service.getCurrentUser().then(
        async (promise) => {
          await promise.subscribe(async (user:{
            user:{
              username
            }
          }) => {
            this.currentUser = user.user.username
            //this.isAMember = await this.isInTheArray(this.foro.members, user.user.username)
            //this.isAnAdmin = await this.foro.admins.includes(user.user.username)
            this.hasLoaded=true
          })
        }
      )
    },
    (err) => this.router.navigateByUrl('lista-foros'))
  }

  /*
  isInTheArray(array:[{username:String}], user:{username:String}) {
    for(let i = 0; i<array.length;i++){
      console.log('owo')
      if(array[i].username === user.username) return true
    }
    return false
  }
  */

  goToQuestion(index:Number){
    this.service.preguntaAct = index;
    this.router.navigateByUrl('lista-respuestas')
  }

  goBack() {
    this.router.navigateByUrl('lista-foros')
  }
  async ngOnInit() {
    await this.getData()
  }
}
