import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Consultoriomedicina6Component } from './consultoriomedicina6.component';

describe('Consultoriomedicina6Component', () => {
  let component: Consultoriomedicina6Component;
  let fixture: ComponentFixture<Consultoriomedicina6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Consultoriomedicina6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Consultoriomedicina6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
