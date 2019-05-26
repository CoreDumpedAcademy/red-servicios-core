import {TestBed} from '@angular/core/testing';
import {IonicStorageModule} from '@ionic/storage';
import {ForoService} from './foro.service';
import {HttpClient, HttpHandler} from '@angular/common/http';

describe('ForoService', () => {
    beforeEach(() => TestBed.configureTestingModule({
        imports: [IonicStorageModule.forRoot()],
        providers: [HttpClient, HttpHandler]
    }));

    it('should be created', () => {
        const service: ForoService = TestBed.get(ForoService);
        expect(service).toBeTruthy();
    });
});
