import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UciadultosComponent } from './uciadultos.component';

describe('UciadultosComponent', () => {
  let component: UciadultosComponent;
  let fixture: ComponentFixture<UciadultosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UciadultosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UciadultosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
