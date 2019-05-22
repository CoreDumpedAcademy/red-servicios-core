import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {IonicStorageModule} from '@ionic/storage';
import {ListaRespuestasPage} from './lista-respuestas.page';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {RouterTestingModule} from '@angular/router/testing';

describe('ListaRespuestasPage', () => {
    let component: ListaRespuestasPage;
    let fixture: ComponentFixture<ListaRespuestasPage>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ListaRespuestasPage],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
            imports: [IonicStorageModule.forRoot(), RouterTestingModule],
            providers: [HttpClient, HttpHandler]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ListaRespuestasPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
