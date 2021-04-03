import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Consultorioenfermeria2Component } from './consultorioenfermeria2.component';

describe('Consultorioenfermeria2Component', () => {
  let component: Consultorioenfermeria2Component;
  let fixture: ComponentFixture<Consultorioenfermeria2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Consultorioenfermeria2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Consultorioenfermeria2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
