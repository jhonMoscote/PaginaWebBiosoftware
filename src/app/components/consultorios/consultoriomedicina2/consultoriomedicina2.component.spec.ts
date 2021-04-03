import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Consultoriomedicina2Component } from './consultoriomedicina2.component';

describe('Consultoriomedicina2Component', () => {
  let component: Consultoriomedicina2Component;
  let fixture: ComponentFixture<Consultoriomedicina2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Consultoriomedicina2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Consultoriomedicina2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
