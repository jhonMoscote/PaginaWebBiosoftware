import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaprioritariaComponent } from './consultaprioritaria.component';

describe('ConsultaprioritariaComponent', () => {
  let component: ConsultaprioritariaComponent;
  let fixture: ComponentFixture<ConsultaprioritariaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultaprioritariaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaprioritariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
