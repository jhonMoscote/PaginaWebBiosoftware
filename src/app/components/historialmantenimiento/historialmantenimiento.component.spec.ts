import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorialmantenimientoComponent } from './historialmantenimiento.component';

describe('HistorialmantenimientoComponent', () => {
  let component: HistorialmantenimientoComponent;
  let fixture: ComponentFixture<HistorialmantenimientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistorialmantenimientoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistorialmantenimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
