import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FallasEquipoComponent } from './fallas-equipo.component';

describe('FallasEquipoComponent', () => {
  let component: FallasEquipoComponent;
  let fixture: ComponentFixture<FallasEquipoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FallasEquipoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FallasEquipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
