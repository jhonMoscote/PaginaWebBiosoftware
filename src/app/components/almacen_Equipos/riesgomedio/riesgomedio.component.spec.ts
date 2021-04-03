import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiesgomedioComponent } from './riesgomedio.component';

describe('RiesgomedioComponent', () => {
  let component: RiesgomedioComponent;
  let fixture: ComponentFixture<RiesgomedioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RiesgomedioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RiesgomedioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
