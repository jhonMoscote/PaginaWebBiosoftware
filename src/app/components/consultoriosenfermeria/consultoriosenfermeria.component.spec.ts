import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultoriosenfermeriaComponent } from './consultoriosenfermeria.component';

describe('ConsultoriosenfermeriaComponent', () => {
  let component: ConsultoriosenfermeriaComponent;
  let fixture: ComponentFixture<ConsultoriosenfermeriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultoriosenfermeriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultoriosenfermeriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
