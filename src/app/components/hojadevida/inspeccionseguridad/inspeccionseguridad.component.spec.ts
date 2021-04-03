import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InspeccionseguridadComponent } from './inspeccionseguridad.component';

describe('InspeccionseguridadComponent', () => {
  let component: InspeccionseguridadComponent;
  let fixture: ComponentFixture<InspeccionseguridadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InspeccionseguridadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InspeccionseguridadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
