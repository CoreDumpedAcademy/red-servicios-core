import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {CrearForoPage} from './crear-foro.page';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {RouterTestingModule} from '@angular/router/testing';
import {IonicStorageModule} from '@ionic/storage';

describe('CrearForoPage', () => {
    let component: CrearForoPage;
    let fixture: ComponentFixture<CrearForoPage>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CrearForoPage],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
            imports: [RouterTestingModule, IonicStorageModule.forRoot()],
            providers: [HttpClient, HttpHandler]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CrearForoPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
