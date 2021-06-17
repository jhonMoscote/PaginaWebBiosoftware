import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteCorrectivoComponent } from './reporte-correctivo.component';

describe('ReporteCorrectivoComponent', () => {
  let component: ReporteCorrectivoComponent;
  let fixture: ComponentFixture<ReporteCorrectivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReporteCorrectivoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporteCorrectivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
