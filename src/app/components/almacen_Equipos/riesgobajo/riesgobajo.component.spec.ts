import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiesgobajoComponent } from './riesgobajo.component';

describe('RiesgobajoComponent', () => {
  let component: RiesgobajoComponent;
  let fixture: ComponentFixture<RiesgobajoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RiesgobajoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RiesgobajoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
