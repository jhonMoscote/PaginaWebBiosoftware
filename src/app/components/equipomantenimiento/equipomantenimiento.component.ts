import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EquiposService } from 'src/app/services/equipos.service';

@Component({
  selector: 'app-equipomantenimiento',
  templateUrl: './equipomantenimiento.component.html',
  styleUrls: ['./equipomantenimiento.component.css']
})
export class EquipomantenimientoComponent implements OnInit {
  [x: string]: any;

  id: string| null
  equipos: any[]=[];
  nombreEquipo: string;
  serivicio:string;
  estado: string;
  costos: number;
  serie:string;
  clasificacion:string;
 
  constructor(private firestore: AngularFirestore,private fb: FormBuilder ,private aRoute: ActivatedRoute, private _servicesEquipo: EquiposService) { 
    this.id = this.aRoute.snapshot.paramMap.get('id');

    this.mostrarDatos = this.fb.group({
     
      nombreEquipo:['', Validators.required],
      marca: ['', Validators.required],
      modelo:['', Validators.required],
      serie: ['', Validators.required],
      servicio: ['', Validators.required],
      nactivo : ['', Validators.required],
      ubicacioncon:['', Validators.required]
       
  
      }
      )
    
  }

  ngOnInit(): void {
   this.esVer()
  }
  esVer(){
    if(this.id !== null){
      this._servicesEquipo.getEquipo(this.id).subscribe(data =>{
      this.clasificacion= data.payload.data()['clasificacionRiesgo'];
      if(this.clasificacion == 'Dado de Baja'){
        this.estado = 'Fuera de Servicio';
      }else{
        this.estado = 'Disponible';
      }
      this.nombreEquipo= data.payload.data()['nombreEquipo'];
      this.serivicio = data.payload.data()['servicio'];
    this.serie = data.payload.data()['serie'];
      this.mostrarDatos.patchValue({
        
       
    nombreEquipo: data.payload.data()['nombreEquipo'],
    marca: data.payload.data()['marca'],
    modelo: data.payload.data()['modelo'],
    serie: data.payload.data()['serie'],
    servicio: data.payload.data()['servicio'],
    nactivo : data.payload.data()['nactivo'],
    ubicacioncon: data.payload.data()['ubicacioncon']

    
      })
      
      
      })
    }
  }
  



}
