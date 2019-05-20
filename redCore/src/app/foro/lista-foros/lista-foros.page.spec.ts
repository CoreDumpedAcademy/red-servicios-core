import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {Storage} from '@ionic/storage';
import {ListaForosPage} from './lista-foros.page';
import {HttpClient, HttpHandler} from '@angular/common/http';

describe('ListaForosPage', () => {
    let component: ListaForosPage;
    let fixture: ComponentFixture<ListaForosPage>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ListaForosPage],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
            imports: [],
            providers: [
                HttpClient, HttpHandler, Storage
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ListaForosPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
