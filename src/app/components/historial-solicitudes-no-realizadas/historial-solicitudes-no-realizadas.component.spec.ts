import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorialSolicitudesNoRealizadasComponent } from './historial-solicitudes-no-realizadas.component';

describe('HistorialSolicitudesNoRealizadasComponent', () => {
  let component: HistorialSolicitudesNoRealizadasComponent;
  let fixture: ComponentFixture<HistorialSolicitudesNoRealizadasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistorialSolicitudesNoRealizadasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistorialSolicitudesNoRealizadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
