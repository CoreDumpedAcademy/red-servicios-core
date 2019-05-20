import { TestBed } from '@angular/core/testing';
import {Storage} from '@ionic/storage';
import { AuthserviceService } from './authservice.service';
import {HttpClient, HttpHandler} from '@angular/common/http';

describe('AuthserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [],
    providers: [
      HttpClient, HttpHandler, Storage
    ]
  }));

  it('should be created', () => {
    const service: AuthserviceService = TestBed.get(AuthserviceService);
    expect(service).toBeTruthy();
  });
});
