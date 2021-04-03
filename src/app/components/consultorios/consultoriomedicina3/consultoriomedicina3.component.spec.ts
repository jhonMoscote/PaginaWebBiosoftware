import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Consultoriomedicina3Component } from './consultoriomedicina3.component';

describe('Consultoriomedicina3Component', () => {
  let component: Consultoriomedicina3Component;
  let fixture: ComponentFixture<Consultoriomedicina3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Consultoriomedicina3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Consultoriomedicina3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
