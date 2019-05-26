import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LostDataPage } from './lost-data.page';

describe('LostDataPage', () => {
  let component: LostDataPage;
  let fixture: ComponentFixture<LostDataPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LostDataPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LostDataPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
