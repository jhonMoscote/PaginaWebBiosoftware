import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutinapreventivaComponent } from './rutinapreventiva.component';

describe('RutinapreventivaComponent', () => {
  let component: RutinapreventivaComponent;
  let fixture: ComponentFixture<RutinapreventivaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutinapreventivaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RutinapreventivaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
