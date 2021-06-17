import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarutinaComponent } from './mostrarutina.component';

describe('MostrarutinaComponent', () => {
  let component: MostrarutinaComponent;
  let fixture: ComponentFixture<MostrarutinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostrarutinaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarutinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
