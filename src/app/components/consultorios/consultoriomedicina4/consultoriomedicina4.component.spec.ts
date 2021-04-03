import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Consultoriomedicina4Component } from './consultoriomedicina4.component';

describe('Consultoriomedicina4Component', () => {
  let component: Consultoriomedicina4Component;
  let fixture: ComponentFixture<Consultoriomedicina4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Consultoriomedicina4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Consultoriomedicina4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
