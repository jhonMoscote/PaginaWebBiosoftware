import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuhojadevidaComponent } from './menuhojadevida.component';

describe('MenuhojadevidaComponent', () => {
  let component: MenuhojadevidaComponent;
  let fixture: ComponentFixture<MenuhojadevidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuhojadevidaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuhojadevidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
