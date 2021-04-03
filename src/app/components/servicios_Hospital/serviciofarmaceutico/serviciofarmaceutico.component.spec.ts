import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciofarmaceuticoComponent } from './serviciofarmaceutico.component';

describe('ServiciofarmaceuticoComponent', () => {
  let component: ServiciofarmaceuticoComponent;
  let fixture: ComponentFixture<ServiciofarmaceuticoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiciofarmaceuticoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiciofarmaceuticoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
