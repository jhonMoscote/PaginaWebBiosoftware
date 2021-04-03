import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarequipoComponent } from './actualizarequipo.component';

describe('ActualizarequipoComponent', () => {
  let component: ActualizarequipoComponent;
  let fixture: ComponentFixture<ActualizarequipoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarequipoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualizarequipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
