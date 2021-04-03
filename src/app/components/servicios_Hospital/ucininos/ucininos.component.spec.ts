import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UcininosComponent } from './ucininos.component';

describe('UcininosComponent', () => {
  let component: UcininosComponent;
  let fixture: ComponentFixture<UcininosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UcininosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UcininosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
