import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {IonicStorageModule} from '@ionic/storage';
import {ListaPreguntasPage} from './lista-preguntas.page';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {RouterTestingModule} from '@angular/router/testing';

describe('ListaPreguntasPage', () => {
    let component: ListaPreguntasPage;
    let fixture: ComponentFixture<ListaPreguntasPage>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ListaPreguntasPage],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
            imports: [IonicStorageModule.forRoot(), RouterTestingModule],
            providers: [HttpClient, HttpHandler]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ListaPreguntasPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
