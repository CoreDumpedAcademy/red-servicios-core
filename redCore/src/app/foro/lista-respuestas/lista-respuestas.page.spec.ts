import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaRespuestasPage } from './lista-respuestas.page';

describe('ListaRespuestasPage', () => {
  let component: ListaRespuestasPage;
  let fixture: ComponentFixture<ListaRespuestasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaRespuestasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
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
