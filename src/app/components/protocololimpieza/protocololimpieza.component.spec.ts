import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtocololimpiezaComponent } from './protocololimpieza.component';

describe('ProtocololimpiezaComponent', () => {
  let component: ProtocololimpiezaComponent;
  let fixture: ComponentFixture<ProtocololimpiezaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProtocololimpiezaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProtocololimpiezaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
