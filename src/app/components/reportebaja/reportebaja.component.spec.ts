import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportebajaComponent } from './reportebaja.component';

describe('ReportebajaComponent', () => {
  let component: ReportebajaComponent;
  let fixture: ComponentFixture<ReportebajaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportebajaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportebajaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
