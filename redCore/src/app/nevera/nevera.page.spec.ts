import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NeveraPage } from './nevera.page';

describe('NeveraPage', () => {
  let component: NeveraPage;
  let fixture: ComponentFixture<NeveraPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NeveraPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NeveraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
