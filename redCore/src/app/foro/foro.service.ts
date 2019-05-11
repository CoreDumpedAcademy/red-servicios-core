import { Storage } from '@ionic/storage';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APIService } from '../api.service';
import { AuthserviceService } from '../authservice.service';

@Injectable({
  providedIn: 'root'
})
export class ForoService {

  API:String = 'http://localhost:3000/api/'

  constructor(private http: HttpClient, private service: APIService, private auth: AuthserviceService, private storage: Storage ) {}

  async getCurrentUser() {
    let email= await this.auth.getEmail()
    return this.service.tieneCuenta(email)
  }

  getForos(){
    return this.http.get(`${this.API}foro/`)
  }

  getForo(title:String) {
    return this.http.get(`${this.API}foro/one/${title}`)
  }

  async setForoAct(foroAct) {
    return this.storage.set('FORO', foroAct)
  }

  async getForoAct() {
    return this.storage.get('FORO')
  }
  
  async setPreguntaAct(index) {
    return this.storage.set('PREGUNTA', index)
  }

  async getPreguntaAct() {
    return this.storage.get('PREGUNTA')
  }

  getPregunta() {
    return this.http.get(`${this.API}foro/pregunta/foroAct`)
  }

  crearForo(foro) {
    return this.http.post(`${this.API}foro/`, foro)
  }

  addMember(member:String, title:String) {
    return this.http.post(`${this.API}foro/miembro/${title}/${member}`, {})
  }
  
  removeMember(member:String, title:String) {
    return this.http.post(`${this.API}foro/quitarmiembro/${title}/${member}`, {})
  }

  sendQuestion(question, title) {
    return this.http.post(`${this.API}foro/pregunta/${title}`, question)
  }

  sendAnswer(body, title) { // BODY TIENE UN OBJETO 'answer' Y UN OBJETO 'pos'. POS REPRESENTA LA PREGUNTA
    return this.http.post(`${this.API}foro/respuesta/${title}`, body)
  }
}
