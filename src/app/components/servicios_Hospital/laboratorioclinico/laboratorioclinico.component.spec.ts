import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaboratorioclinicoComponent } from './laboratorioclinico.component';

describe('LaboratorioclinicoComponent', () => {
  let component: LaboratorioclinicoComponent;
  let fixture: ComponentFixture<LaboratorioclinicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaboratorioclinicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaboratorioclinicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
