import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipomantenimientoComponent } from './equipomantenimiento.component';

describe('EquipomantenimientoComponent', () => {
  let component: EquipomantenimientoComponent;
  let fixture: ComponentFixture<EquipomantenimientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EquipomantenimientoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipomantenimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
