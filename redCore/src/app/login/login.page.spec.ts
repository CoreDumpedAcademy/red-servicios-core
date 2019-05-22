import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {IonicStorageModule} from '@ionic/storage';
import {LoginPage} from './login.page';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {RouterTestingModule} from '@angular/router/testing';

describe('LoginPage', () => {
    let component: LoginPage;
    let fixture: ComponentFixture<LoginPage>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [LoginPage],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
            imports: [IonicStorageModule.forRoot(), RouterTestingModule],
            providers: [HttpClient, HttpHandler]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(LoginPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
