import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class RssService {

    api = 'https://coredumped.es/wp-json/wp/v2/posts';

    constructor(private http: HttpClient) {
    }

    getData() {
        return this.http.get(`${this.api}`);
    }
}
