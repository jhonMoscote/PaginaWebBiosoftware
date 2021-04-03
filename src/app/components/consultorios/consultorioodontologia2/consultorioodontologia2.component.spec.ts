import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Consultorioodontologia2Component } from './consultorioodontologia2.component';

describe('Consultorioodontologia2Component', () => {
  let component: Consultorioodontologia2Component;
  let fixture: ComponentFixture<Consultorioodontologia2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Consultorioodontologia2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Consultorioodontologia2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
