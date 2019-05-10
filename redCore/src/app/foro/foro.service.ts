import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APIService } from '../api.service';
import { AuthserviceService } from '../authservice.service';

@Injectable({
  providedIn: 'root'
})
export class ForoService {

  API:String = 'http://localhost:3000/api/'
  foroAct: String;
  preguntaAct: Number;

  constructor(private http: HttpClient, private service: APIService, private auth: AuthserviceService ) {}

  async getCurrentUser() {
    let email= await this.auth.getEmail()
    return this.service.tieneCuenta(email)
  }

  getForos(){
    return this.http.get(`${this.API}foro/`)
  }

  getForo() {
    return this.http.get(`${this.API}foro/one/${this.foroAct}`)
  }
  
  getPregunta() {
    return this.http.get(`${this.API}foro/pregunta/foroAct`)
  }
}
