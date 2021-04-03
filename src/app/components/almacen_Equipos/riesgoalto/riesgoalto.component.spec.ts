import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiesgoaltoComponent } from './riesgoalto.component';

describe('RiesgoaltoComponent', () => {
  let component: RiesgoaltoComponent;
  let fixture: ComponentFixture<RiesgoaltoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RiesgoaltoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RiesgoaltoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});



