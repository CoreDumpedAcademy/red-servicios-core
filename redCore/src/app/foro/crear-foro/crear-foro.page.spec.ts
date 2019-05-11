import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearForoPage } from './crear-foro.page';

describe('CrearForoPage', () => {
  let component: CrearForoPage;
  let fixture: ComponentFixture<CrearForoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearForoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
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
