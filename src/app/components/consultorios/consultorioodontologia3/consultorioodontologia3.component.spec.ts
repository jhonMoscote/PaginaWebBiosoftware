import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Consultorioodontologia3Component } from './consultorioodontologia3.component';

describe('Consultorioodontologia3Component', () => {
  let component: Consultorioodontologia3Component;
  let fixture: ComponentFixture<Consultorioodontologia3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Consultorioodontologia3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Consultorioodontologia3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
