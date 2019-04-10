import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstatisticasPage } from './estatisticas.page';

describe('EstatisticasPage', () => {
  let component: EstatisticasPage;
  let fixture: ComponentFixture<EstatisticasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstatisticasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstatisticasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
