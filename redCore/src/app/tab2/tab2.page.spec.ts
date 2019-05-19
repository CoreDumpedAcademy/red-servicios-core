import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {async, ComponentFixture, getTestBed, TestBed} from '@angular/core/testing';
import {Tab2Page} from './tab2.page';
import {Router} from '@angular/router';
import {RssService} from '../rss.service';

describe('Tab2Page', () => {
    let component: Tab2Page;
    let fixture: ComponentFixture<Tab2Page>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [Tab2Page],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(Tab2Page);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

/*describe('Test for Tab2', () => {

    describe('Test to loadRss', () => {
        it('should return 0', () => {
            expect(Tab2Page.).toBe(0);
        });
    });
});*/

describe('Setup', () => {
    let injector: TestBed;
    let component: Tab2Page;
    let router: Router;
    let rss: RssService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [],
            providers: [Tab2Page, Router, RssService]
        });
        injector = getTestBed();
        component = injector.get(Tab2Page);
        router = injector.get(Router);
        rss = injector.get(RssService);
    });
    describe('LoadRss', () => {
        it('Should Return True if Rss Loaded', () => {
            expect(component.loadRss()).toBe(0);
        });
    });
});
