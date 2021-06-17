import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquiposdadosbajaComponent } from './equiposdadosbaja.component';

describe('EquiposdadosbajaComponent', () => {
  let component: EquiposdadosbajaComponent;
  let fixture: ComponentFixture<EquiposdadosbajaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EquiposdadosbajaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EquiposdadosbajaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
