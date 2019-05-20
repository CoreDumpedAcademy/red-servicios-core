import { TestBed } from '@angular/core/testing';
import {Storage} from '@ionic/storage';
import { ForoService } from './foro.service';
import {HttpClient, HttpHandler} from '@angular/common/http';

describe('ForoService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [],
    providers: [
      HttpClient, HttpHandler, Storage
    ]
  }));

  it('should be created', () => {
    const service: ForoService = TestBed.get(ForoService);
    expect(service).toBeTruthy();
  });
});
