import {TestBed, getTestBed, async} from '@angular/core/testing';
import {RssService} from './rss.service';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

describe('RssService', () => {
    beforeEach(() => TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        providers: [HttpClient, HttpHandler]
    }));

    it('should be created', () => {
        const service: RssService = TestBed.get(RssService);
        expect(service).toBeTruthy();
    });
});

describe('#GETfunction', () => {
    let injector: TestBed;
    let httpMock: HttpTestingController;
    // tslint:disable-next-line:prefer-const
    let component: RssService;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [RssService]
        });
    }));

    injector = getTestBed();
    httpMock = injector.get(HttpTestingController);

    it('Return Defined if is Loaded', () => {
        httpMock.expectOne('https://coredumped.es/wp-json/wp/v2/posts');
        httpMock.verify();
        expect(component.getData()).toBeDefined();
    });
});
