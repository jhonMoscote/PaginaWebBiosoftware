import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Consultorioodontologia1Component } from './consultorioodontologia1.component';

describe('Consultorioodontologia1Component', () => {
  let component: Consultorioodontologia1Component;
  let fixture: ComponentFixture<Consultorioodontologia1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Consultorioodontologia1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Consultorioodontologia1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
