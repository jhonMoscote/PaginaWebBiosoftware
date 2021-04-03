import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FallasPersonalComponent } from './fallas-personal.component';

describe('FallasPersonalComponent', () => {
  let component: FallasPersonalComponent;
  let fixture: ComponentFixture<FallasPersonalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FallasPersonalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FallasPersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
