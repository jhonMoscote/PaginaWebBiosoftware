import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Consultorioenfermeria1Component } from './consultorioenfermeria1.component';

describe('Consultorioenfermeria1Component', () => {
  let component: Consultorioenfermeria1Component;
  let fixture: ComponentFixture<Consultorioenfermeria1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Consultorioenfermeria1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Consultorioenfermeria1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
