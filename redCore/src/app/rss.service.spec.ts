import {TestBed} from '@angular/core/testing';
import {RssService} from './rss.service';
import {HttpClient, HttpHandler} from '@angular/common/http';

describe('RssService', () => {
    beforeEach(() => TestBed.configureTestingModule({
        imports: [],
        providers: [
            HttpClient, HttpHandler
        ]
    }));

    it('should be created', () => {
        const service: RssService = TestBed.get(RssService);
        expect(service).toBeTruthy();
    });
});
