import { CookieService } from 'ngx-cookie-service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Observable, BehaviorSubject } from  'rxjs';
import { Storage } from '@ionic/storage'

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  cookieValue = ''

  AUTH_SERVER_ADRESS: string = 'https://fridge.coredumped.es';
  authSubject = new BehaviorSubject(false);

  constructor(private http: HttpClient, private storage: Storage, private cookie: CookieService ) { }

  async getUser(email){
    let header = new HttpHeaders();
    let token
    await this.getToken().then(data => token = data)
    header.append('token', token)
    console.log(header)
    return this.http.get(`${this.AUTH_SERVER_ADRESS}/user/`)
  }

  async getEmail() {
    let mail = this.storage.get("EMAIL")
    return mail
  }

  async getToken(){
    let token = this.storage.get("TOKEN")
    return token
  }

  login(user){
    return this.http.post(`${this.AUTH_SERVER_ADRESS}/login`, user).pipe(
      tap(async (res:{
        token: String,
        isAdmin: Boolean
      }) => {
        if(res.token) {
          this.cookie.set('token', res.token.toString());
          this.cookieValue = await this.cookie.get('test');
          await this.storage.set("EMAIL", user.email);
          this.authSubject.next(true);
        }
      })
    )
  }
  async isLoggedIn(){
    var resul:Boolean
    await this.storage.get("EMAIL").then((data) => {
      resul = data == null
    })
    return !resul
  }

  // NO SÉ SI FUNCIONA
  async logOut(){
    await this.storage.remove("TOKEN");
    await this.storage.remove("EMAIL");
  }
}
