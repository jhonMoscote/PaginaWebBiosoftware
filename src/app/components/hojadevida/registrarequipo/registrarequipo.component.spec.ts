import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarequipoComponent } from './registrarequipo.component';

describe('RegistrarequipoComponent', () => {
  let component: RegistrarequipoComponent;
  let fixture: ComponentFixture<RegistrarequipoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarequipoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarequipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
