import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificacionmetrologicaComponent } from './certificacionmetrologica.component';

describe('CertificacionmetrologicaComponent', () => {
  let component: CertificacionmetrologicaComponent;
  let fixture: ComponentFixture<CertificacionmetrologicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificacionmetrologicaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificacionmetrologicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
