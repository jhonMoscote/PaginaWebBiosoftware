import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterpretacionComponent } from './interpretacion.component';

describe('InterpretacionComponent', () => {
  let component: InterpretacionComponent;
  let fixture: ComponentFixture<InterpretacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterpretacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterpretacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
