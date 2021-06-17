import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormatoDarBajaComponent } from './formato-dar-baja.component';

describe('FormatoDarBajaComponent', () => {
  let component: FormatoDarBajaComponent;
  let fixture: ComponentFixture<FormatoDarBajaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormatoDarBajaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormatoDarBajaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
