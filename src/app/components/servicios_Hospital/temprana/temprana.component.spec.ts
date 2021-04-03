import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempranaComponent } from './temprana.component';

describe('TempranaComponent', () => {
  let component: TempranaComponent;
  let fixture: ComponentFixture<TempranaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TempranaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TempranaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
