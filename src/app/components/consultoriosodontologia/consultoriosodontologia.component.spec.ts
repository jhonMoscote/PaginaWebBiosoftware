import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultoriosodontologiaComponent } from './consultoriosodontologia.component';

describe('ConsultoriosodontologiaComponent', () => {
  let component: ConsultoriosodontologiaComponent;
  let fixture: ComponentFixture<ConsultoriosodontologiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultoriosodontologiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultoriosodontologiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
