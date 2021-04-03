import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorialmantenimientopreventivoComponent } from './historialmantenimientopreventivo.component';

describe('HistorialmantenimientopreventivoComponent', () => {
  let component: HistorialmantenimientopreventivoComponent;
  let fixture: ComponentFixture<HistorialmantenimientopreventivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistorialmantenimientopreventivoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistorialmantenimientopreventivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
