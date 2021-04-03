import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InspecionComponent } from './inspecion.component';

describe('InspecionComponent', () => {
  let component: InspecionComponent;
  let fixture: ComponentFixture<InspecionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InspecionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InspecionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
