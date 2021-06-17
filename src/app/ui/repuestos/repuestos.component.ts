import { Component, Input, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { BehaviorSubject, Observable } from 'rxjs';
import {
  debounceTime,
  filter,
  map,
  startWith,
  switchMap,
  tap,
} from 'rxjs/operators';
import { RepuestosService } from 'src/app/services/repuestos.service';
import { RepuestosSeleccionadosService } from '../repuestos.service';
import { RepuestoModel } from './respuesto.model';

@Component({
  selector: 'app-repuestos',
  templateUrl: './repuestos.component.html',
  styleUrls: ['./repuestos.component.css'],
})
export class RepuestosComponent implements OnInit {
  _respuestosFiltrados$ = new BehaviorSubject<string[]>([]);
  respuestosFiltrados$ = this._respuestosFiltrados$.asObservable();

  repuestosForm: FormGroup;
costoTotal : number;
cantidad:number;
repuesto: any []=[];
repues : {};
  constructor(
    private _formBuilder: FormBuilder,
    private _repuestoService: RepuestosService,
    public repuestosSeleccionadosService: RepuestosSeleccionadosService
  ) {
    this.repuestosForm = this._formBuilder.group({
      respuestosArray: this._formBuilder.array([]),
    });
  }

  ngOnInit() {
    
  }


  get respuestosArray(): FormArray {
    return this.repuestosForm.get('respuestosArray') as FormArray;
  }

  addItem($event) {
    $event.preventDefault();
   
    this.repuestosSeleccionadosService.agregarRepuestoSeleccionado({
      nombre: '',
      descripcion: '',
       costo: 0,
      cantidadRestante: 0,
      cantidad: 0,
      id:''
    });
  
    const formGroup = this.addRespuestoFormGroup();
    this.addListenerAutocomplete(formGroup.get('referencia'));
    console.log(this.addListenerAutocomplete(formGroup.get('referencia')));
    this.respuestosArray.push(formGroup);
    
  }

  addListenerAutocomplete(control: AbstractControl) {
   
    control.valueChanges
      .pipe(
        startWith(''),
        debounceTime(300),
        switchMap((value) => this.consultarRepuestos(value))
      )
      .subscribe();
  
  }

  consultarRepuestos(value: string): any {

    return this.getRepuestos().pipe(
      map((respuestos) =>
        respuestos.filter((repuesto) =>
          (repuesto.nombre as string).includes(value)
        )
      ),
      tap((repuestos) => this._respuestosFiltrados$.next(repuestos))
      
    );

  }



  seleccionarRepuesto(index: number, event: MatAutocompleteSelectedEvent) {
  
    this.repuestosSeleccionadosService.actualizarRepuestoSeleccionado(
      index,
      event.option.value
    );

  }

  displayFn(repuesto?: RepuestoModel): string | undefined {
  
    return repuesto ? repuesto.nombre : '';

  }

  getRepuestos() {
   
    return this._repuestoService.getRepuestos().pipe(
      map((respuesta: any) => {
        return respuesta.map((item) => ({
          id: item.payload.doc.id,
          ...item.payload.doc.data(),
                })
                );})
    );
  }

 /* getNumeroPreventivo(){
    this.getRepuestos().subscribe(data => {
      this.repuesto = [];
      data.forEach((element: any)=>{
      
        this.repuesto.push({
 
         tiempoejecucion:element.payload.doc.tiempoejecucion,
         ...element.payload.doc.data()
        })    
      }); 
  this.cantidad =  this.repuesto .map((cantidad)=>cantidad.cantidadRestante);
    })}*/



  addRespuestoFormGroup(): FormGroup {
    
    return this._formBuilder.group({
      referencia: ['', Validators.required],
      cantidad: ['', Validators.required],
    });

  }

  onBlurCantidad(value, index: number) {
   
    const repuestoActualizado = {
      ...this.repuestosSeleccionadosService.repuestosSeleccionados[index],
      cantidad: value,
      
      
    };
  
    this.repuestosSeleccionadosService.actualizarRepuestoSeleccionado(
      index,
      
      this.repues = repuestoActualizado,
    );
  
  
   
  }

  

  // removeItem(index: number) {
  //   this.repuestosSeleccionados.splice(index, 1);
  //   this.respuestosArray.removeAt(index);
  // }
}
