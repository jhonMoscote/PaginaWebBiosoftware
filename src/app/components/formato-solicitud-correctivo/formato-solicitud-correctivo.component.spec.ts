import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormatoSolicitudCorrectivoComponent } from './formato-solicitud-correctivo.component';

describe('FormatoSolicitudCorrectivoComponent', () => {
  let component: FormatoSolicitudCorrectivoComponent;
  let fixture: ComponentFixture<FormatoSolicitudCorrectivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormatoSolicitudCorrectivoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormatoSolicitudCorrectivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
