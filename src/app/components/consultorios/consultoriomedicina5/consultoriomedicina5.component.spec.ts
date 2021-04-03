import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Consultoriomedicina5Component } from './consultoriomedicina5.component';

describe('Consultoriomedicina5Component', () => {
  let component: Consultoriomedicina5Component;
  let fixture: ComponentFixture<Consultoriomedicina5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Consultoriomedicina5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Consultoriomedicina5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
