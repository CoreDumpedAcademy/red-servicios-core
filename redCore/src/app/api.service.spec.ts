import { TestBed } from '@angular/core/testing';
import { APIService } from './api.service';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {Storage} from '@ionic/storage';

describe('APIService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [],
    providers: [HttpClient, HttpHandler, Storage]
  }));

  it('should be created', () => {
    const service: APIService = TestBed.get(APIService);
    expect(service).toBeTruthy();
  });
});
