import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerPerfilPage } from './ver-perfil.page';

describe('VerPerfilPage', () => {
  let component: VerPerfilPage;
  let fixture: ComponentFixture<VerPerfilPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerPerfilPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerPerfilPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
