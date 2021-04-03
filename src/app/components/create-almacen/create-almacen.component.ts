import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators,ReactiveFormsModule } from '@angular/forms';
import { Observable } from 'rxjs';

import 'firebase/firestore';
import { RepuestosService } from 'src/app/services/repuestos.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-create-almacen',
  templateUrl: './create-almacen.component.html',
  styleUrls: ['./create-almacen.component.css']
})
export class CreateAlmacenComponent implements OnInit {
  createRepuesto: FormGroup;
  submitted = false;
  
  constructor(private fb: FormBuilder,private _repuestoServices: RepuestosService,
    private router: Router,
    private toastr: ToastrService) { 
  
    this.createRepuesto = this.fb.group({
      nombre:['', Validators.required],
      descripcion:['', Validators.required],
      costo:['', Validators.required],
      cantidadRestante:['', Validators.required],
      cantidadInicial:['', Validators.required],

    }
    )
  }

  ngOnInit(): void {
  }

  agregarRepuesto(){
    this.submitted =true;
    if(this.createRepuesto.invalid){
 
      return;
    }
    const repuesto: any = {
      nombre: this.createRepuesto.value.nombre,
      descripcion: this.createRepuesto.value.descripcion,
      costo: this.createRepuesto.value.costo,
      cantidadInicial: this.createRepuesto.value.cantidadInicial,
      cantidadRestante: this.createRepuesto.value.cantidadRestante,
      fechaCreacion : new Date(),
      fechaActualizacion: new Date()

    }
 
    this._repuestoServices.agregarRepuesto(repuesto).then(() => {
      this.toastr.success('Repuesto agregado con exito');
      this.router.navigate(['/almacen'])
      
    }).catch(error => {
      console.log(error);
      
    })
    console.log(repuesto)
  }
  

}
