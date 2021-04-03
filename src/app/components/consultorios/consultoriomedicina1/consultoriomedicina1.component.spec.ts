import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Consultoriomedicina1Component } from './consultoriomedicina1.component';

describe('Consultoriomedicina1Component', () => {
  let component: Consultoriomedicina1Component;
  let fixture: ComponentFixture<Consultoriomedicina1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Consultoriomedicina1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Consultoriomedicina1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
