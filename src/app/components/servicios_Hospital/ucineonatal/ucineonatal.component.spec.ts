import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UcineonatalComponent } from './ucineonatal.component';

describe('UcineonatalComponent', () => {
  let component: UcineonatalComponent;
  let fixture: ComponentFixture<UcineonatalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UcineonatalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UcineonatalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

