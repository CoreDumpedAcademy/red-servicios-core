import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPreguntasPage } from './lista-preguntas.page';

describe('ListaPreguntasPage', () => {
  let component: ListaPreguntasPage;
  let fixture: ComponentFixture<ListaPreguntasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaPreguntasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
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
