import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  API:String = "http://localhost:3000/api/"

  constructor(private http: HttpClient) { }

  tieneCuenta(email:String) {
    return this.http.get(`${this.API}/user/${email}`)
  }

}
