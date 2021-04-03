import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PorcentajepreventivosComponent } from './porcentajepreventivos.component';

describe('PorcentajepreventivosComponent', () => {
  let component: PorcentajepreventivosComponent;
  let fixture: ComponentFixture<PorcentajepreventivosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PorcentajepreventivosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PorcentajepreventivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
