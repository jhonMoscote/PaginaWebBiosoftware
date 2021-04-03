import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InspeccionfuncionamientoComponent } from './inspeccionfuncionamiento.component';

describe('InspeccionfuncionamientoComponent', () => {
  let component: InspeccionfuncionamientoComponent;
  let fixture: ComponentFixture<InspeccionfuncionamientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InspeccionfuncionamientoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InspeccionfuncionamientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
