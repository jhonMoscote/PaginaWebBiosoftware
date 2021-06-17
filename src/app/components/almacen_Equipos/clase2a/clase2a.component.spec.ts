import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Clase2aComponent } from './clase2a.component';

describe('Clase2aComponent', () => {
  let component: Clase2aComponent;
  let fixture: ComponentFixture<Clase2aComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Clase2aComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Clase2aComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
