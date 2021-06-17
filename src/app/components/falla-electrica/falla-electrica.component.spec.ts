import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FallaElectricaComponent } from './falla-electrica.component';

describe('FallaElectricaComponent', () => {
  let component: FallaElectricaComponent;
  let fixture: ComponentFixture<FallaElectricaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FallaElectricaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FallaElectricaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
