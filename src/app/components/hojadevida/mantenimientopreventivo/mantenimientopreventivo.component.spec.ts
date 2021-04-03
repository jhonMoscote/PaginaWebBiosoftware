import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MantenimientopreventivoComponent } from './mantenimientopreventivo.component';

describe('MantenimientopreventivoComponent', () => {
  let component: MantenimientopreventivoComponent;
  let fixture: ComponentFixture<MantenimientopreventivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MantenimientopreventivoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MantenimientopreventivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
