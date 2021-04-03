import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultoriosmedicinaComponent } from './consultoriosmedicina.component';

describe('ConsultoriosmedicinaComponent', () => {
  let component: ConsultoriosmedicinaComponent;
  let fixture: ComponentFixture<ConsultoriosmedicinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultoriosmedicinaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultoriosmedicinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
