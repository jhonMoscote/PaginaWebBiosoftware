import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentosequiposComponent } from './documentosequipos.component';

describe('DocumentosequiposComponent', () => {
  let component: DocumentosequiposComponent;
  let fixture: ComponentFixture<DocumentosequiposComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentosequiposComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentosequiposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
