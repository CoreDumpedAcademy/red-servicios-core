import { APIService } from './../../api.service';
import { AuthserviceService } from './../../authservice.service';
import { Component, OnInit } from '@angular/core';
import { ForoService } from '../foro.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-preguntas',
  templateUrl: './lista-preguntas.page.html',
  styleUrls: ['./lista-preguntas.page.scss'],
})
export class ListaPreguntasPage implements OnInit {

  constructor(private service: ForoService, private router: Router, private auth: AuthserviceService, private API: APIService) { }

  foro: {
    title:String,
    description:String,
    members: [String],
    preguntas:[{
      title:String,
      text:String,
      published:Date,
      solved:Boolean,
      respuestas:[{}],
      datewhenSolved:Date,
      user:{
        username:String,
        picture:String
      }
    }],
    created:Date,
    admins:[String]
  }

  hasLoaded=false
  currentUser:{
    user: {
      username:String,
      picture:String
    }
  }
  isAMember
  isAnAdmin


  async loadData() {
    this.service.getForoAct().then((foroAct:String) => {
      this.service.getForo(foroAct).subscribe((data:{
        title:String,
        description:String,
        members: [String],
        preguntas:[{
          title:String,
          text:String,
          published:Date,
          solved:Boolean,
          respuestas:[{}],
          datewhenSolved:Date,
          user:{
            username:String,
            picture:String,
          }
        }],
        created:Date,
        admins:[String]
      }) => {
        this.foro = data;
        this.auth.getEmail().then((email) => {
          this.API.tieneCuenta(email).subscribe((user:{
            user: {
              username,
              picture,
              insignias:[],
              rol:number,
            }
          }) => {
            this.currentUser = user
            this.isAMember = data.members.includes(this.currentUser.user.username)
            this.isAnAdmin = data.members.includes(this.currentUser.user.username)
          })
        })
        this.hasLoaded = true
      }, (error) => {
        console.log(error)
        this.router.navigateByUrl('lista-foros')
      })
    })
  }

  async goToQuestion(index:number) {
    await this.service.setPreguntaAct(Math.abs(index-(this.foro.preguntas.length-1)))
    this.router.navigateByUrl('lista-respuestas')
  }

  async ngOnInit() {
    await this.loadData();
  }

  subscribe() {
    this.service.addMember(this.currentUser.user.username,this.foro.title).subscribe(() => { },
    (error) => { console.log(error) })
    window.location.reload()
  }

  unsubscribe() {
    this.service.removeMember(this.currentUser.user.username,this.foro.title).subscribe(()=> { },
    (error) => console.log(error))
    window.location.reload()
  }

  ionViewWillEnter(){
   this.loadData()
  }

  post() {
    this.router.navigateByUrl('post')
  }
}
