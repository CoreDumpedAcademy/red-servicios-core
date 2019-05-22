import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {Tab3Page} from './tab3.page';
import {IonicStorageModule} from '@ionic/storage';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClient, HttpHandler} from '@angular/common/http';

describe('Tab3Page', () => {
    let component: Tab3Page;
    let fixture: ComponentFixture<Tab3Page>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [Tab3Page],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
            imports: [IonicStorageModule.forRoot(), RouterTestingModule],
            providers: [HttpClient, HttpHandler]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(Tab3Page);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
