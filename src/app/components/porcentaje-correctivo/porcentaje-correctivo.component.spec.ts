import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PorcentajeCorrectivoComponent } from './porcentaje-correctivo.component';

describe('PorcentajeCorrectivoComponent', () => {
  let component: PorcentajeCorrectivoComponent;
  let fixture: ComponentFixture<PorcentajeCorrectivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PorcentajeCorrectivoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PorcentajeCorrectivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
