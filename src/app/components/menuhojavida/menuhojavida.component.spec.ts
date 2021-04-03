import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuhojavidaComponent } from './menuhojavida.component';

describe('MenuhojavidaComponent', () => {
  let component: MenuhojavidaComponent;
  let fixture: ComponentFixture<MenuhojavidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuhojavidaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuhojavidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
