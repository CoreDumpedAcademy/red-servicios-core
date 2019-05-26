import {TestBed} from '@angular/core/testing';
import {IonicStorageModule} from '@ionic/storage';
import {AuthserviceService} from './authservice.service';
import {HttpClient, HttpHandler} from '@angular/common/http';

describe('AuthserviceService', () => {
    beforeEach(() => TestBed.configureTestingModule({
        imports: [IonicStorageModule.forRoot()],
        providers: [
            HttpClient, HttpHandler
        ]
    }));

    it('should be created', () => {
        const service: AuthserviceService = TestBed.get(AuthserviceService);
        expect(service).toBeTruthy();
    });
});
