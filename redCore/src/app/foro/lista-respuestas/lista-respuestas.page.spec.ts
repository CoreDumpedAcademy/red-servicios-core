import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {Storage} from '@ionic/storage';
import {ListaRespuestasPage} from './lista-respuestas.page';
import {HttpClient, HttpHandler} from '@angular/common/http';

describe('ListaRespuestasPage', () => {
    let component: ListaRespuestasPage;
    let fixture: ComponentFixture<ListaRespuestasPage>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ListaRespuestasPage],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
            imports: [],
            providers: [
                HttpClient, HttpHandler, Storage
            ]
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
