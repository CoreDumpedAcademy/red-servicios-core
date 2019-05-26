import {Storage} from '@ionic/storage';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class APIService {

    API = 'http://localhost:3000/api/';

    constructor(private http: HttpClient) {
    }

    tieneCuenta(email: string) {
        return this.http.get(`${this.API}user/${email}`);
    }

    registrarUsuario(body) {
        return this.http.post(`${this.API}user/`, body);
    }

}
