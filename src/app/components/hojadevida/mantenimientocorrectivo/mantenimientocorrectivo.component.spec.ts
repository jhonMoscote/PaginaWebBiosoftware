import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MantenimientocorrectivoComponent } from './mantenimientocorrectivo.component';

describe('MantenimientocorrectivoComponent', () => {
  let component: MantenimientocorrectivoComponent;
  let fixture: ComponentFixture<MantenimientocorrectivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MantenimientocorrectivoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MantenimientocorrectivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
