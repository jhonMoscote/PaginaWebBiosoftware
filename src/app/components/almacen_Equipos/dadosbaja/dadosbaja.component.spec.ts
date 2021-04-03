import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DadosbajaComponent } from './dadosbaja.component';

describe('DadosbajaComponent', () => {
  let component: DadosbajaComponent;
  let fixture: ComponentFixture<DadosbajaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DadosbajaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DadosbajaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
