import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuequipoComponent } from './menuequipo.component';

describe('MenuequipoComponent', () => {
  let component: MenuequipoComponent;
  let fixture: ComponentFixture<MenuequipoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuequipoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuequipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
