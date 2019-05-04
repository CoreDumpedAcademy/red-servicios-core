import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Observable, BehaviorSubject } from  'rxjs';
import { Storage } from '@ionic/storage'

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {
  AUTH_SERVER_ADRESS: string = 'https://fridge.coredumped.es';
  authSubject = new BehaviorSubject(false);

  constructor(private http: HttpClient, private storage: Storage ) { }

  login(user){
    return this.http.post(`${this.AUTH_SERVER_ADRESS}/login`, user).pipe(
      tap(async (res:{
        token: String,
        isAdmin: Boolean
      }) => {
        if(res.token) {
          await this.storage.set("TOKEN", res.token);
          await this.storage.set("EMAIL", user.email);
          this.authSubject.next(true);
        }
      })
    )
  }
  async isLoggedIn(){
    var resul:Boolean
    await this.storage.get("EMAIL").then((data) => {
      console.log(data.email);
      resul = data == null
    })
    return !resul
  }

  // NO SÉ SI FUNCIONA
 async logOut(){
    try {await this.storage.remove("TOKEN");
         await this.storage.remove("EMAIL");
    } 
    catch (error) {
      console.log("error" + error);
    }
    finally {this.isLoggedIn;}
  }
}
