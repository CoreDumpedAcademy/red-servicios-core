import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  API:String = "http://localhost:3000/api/"

  constructor(private http: HttpClient, private storage: Storage) { }

  async tieneCuenta(email:String) {
    const token = await this.storage.get("TOKEN")
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization' : 'Bearer '+token
      })
    }
    return this.http.get(`${this.API}user/${email}`, httpOptions)
  }

  registrarUsuario(body) {
    return this.http.post(`${this.API}user/`, body)
  }

  checkUser (username:String) {
    return this.http.get(`${this.API}check/username/${username}`);
  }

  checkMail (email:String) {
    return this.http.get(`${this.API}check/email/${email}`);
  }

}
