import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RespuestaPage } from './respuesta.page';

describe('RespuestaPage', () => {
  let component: RespuestaPage;
  let fixture: ComponentFixture<RespuestaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RespuestaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RespuestaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
