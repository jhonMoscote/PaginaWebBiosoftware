import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EquiposService } from 'src/app/services/equipos.service';
import {  FormGroup,ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-hojadevida',
  templateUrl: './hojadevida.component.html',
  styleUrls: ['./hojadevida.component.css']
})
export class HojadevidaComponent implements OnInit {
  [x: string]: any;

  id: string| null
  equipos: any[]=[];
  codigo: string;
  constructor(private fb: FormBuilder ,private aRoute: ActivatedRoute, private _servicesEquipo: EquiposService) { 
    this.id = this.aRoute.snapshot.paramMap.get('id');
    this.mostrarDatos = this.fb.group({
     
    nombreEquipo:['', Validators.required],
    codigoecr:['', Validators.required],
    registroInvima :['', Validators.required],
    marca: ['', Validators.required],
    modelo:['', Validators.required],
    serie: ['', Validators.required],
    codigo: ['', Validators.required],
    servicio: ['', Validators.required],
    voltaje: ['', Validators.required],
    potencia: ['', Validators.required],
    corriente: ['', Validators.required],
    clasificacionRiesgo: ['', Validators.required],
    ubicacionEquipo:['', Validators.required],
    accesorios: ['', Validators.required],
    identificacionProtocolo: ['', Validators.required],
    nactivo : ['', Validators.required],
    propietario : ['', Validators.required],
    periodicidadTiempo:['', Validators.required],
    estimado: ['', Validators.required],
    fechaActividad:['', Validators.required],
    clasificacionBiomedica: ['', Validators.required],
    fechaAdquisicion :['', Validators.required],
    fechaInstalacion: ['', Validators.required],
    compra: ['', Validators.required],
    fabricante:['', Validators.required],
    manuelOperacion:['', Validators.required],
    manual: ['', Validators.required],
    funciones: ['', Validators.required],
    sugerencia: ['', Validators.required],
    donacion: ['', Validators.required],
    direccionFabricante:['', Validators.required],
    vidaUtil: ['', Validators.required],
    tecnologia:['', Validators.required],
    alimentacion : ['', Validators.required],
    frecuencia: ['', Validators.required],
    variable: ['', Validators.required],
    rangoMedicion:['', Validators.required],
    temperaturaAmbiente :['', Validators.required],
    peso: ['', Validators.required],
    humedad:['', Validators.required],
    limpieza:['', Validators.required],
    esterilizacion:['', Validators.required],
    desinfeccion: ['', Validators.required],
    eventosAdversos: ['', Validators.required],
    preventivas:['', Validators.required],
    consultorio: ['', Validators.required],

     

    }
    )
    

  }
  ngOnInit(): void {
    this.esVer();
 
  }
  esVer(){
    if(this.id !== null){
      this._servicesEquipo.getEquipo(this.id).subscribe(data =>{
      this.mostrarDatos.patchValue({
        
       
    nombreEquipo: data.payload.data()['nombreEquipo'],
    identificacionProtocolo:data.payload.data()['identificacionProtocolo'],
    codigoecr: data.payload.data()['codigoecr'],
    registroInvima : data.payload.data()['registroInvima'],
    marca: data.payload.data()['marca'],
    modelo: data.payload.data()['modelo'],
    serie: data.payload.data()['serie'],
    codigo: data.payload.data()['codigo'],
    servicio: data.payload.data()['servicio'],
    voltaje: data.payload.data()['voltaje'],
    potencia: data.payload.data()['potencia'],
    corriente: data.payload.data()['corriente'],
    clasificacionRiesgo: data.payload.data()['clasificacionRiesgo'],
    ubicacionEquipo:data.payload.data()['ubicacionEquipo'],
    accesorios: data.payload.data()['accesorios'],
    nactivo : data.payload.data()['nactivo'],
    propietario : data.payload.data()['propietario'],
    periodicidadTiempo:data.payload.data()['periodicidadTiempo'],
    estimado: data.payload.data()['estimado'],
    fechaActividad:data.payload.data()['fechaActividad'],
    clasificacionBiomedica: data.payload.data()['clasificacionBiomedica'],
    fechaAdquisicion :data.payload.data()['fechaAdquisicion'],
    fechaInstalacion: data.payload.data()['fechaInstalacion'],
    compra: data.payload.data()['compra'],
    fabricante: data.payload.data()['fabricante'],
    manuelOperacion: data.payload.data()['manuelOperacion'],
    manual: data.payload.data()['manual'],
    funciones: data.payload.data()['funciones'],
    sugerencia: data.payload.data()['sugerencia'],
    donacion: data.payload.data()['donacion'],
    direccionFabricante:data.payload.data()['direccionFabricante'],
    vidaUtil:data.payload.data()['vidaUtil'],
    tecnologia: data.payload.data()['tecnologia'],
    frecuencia: data.payload.data()['frecuencia'],
    variable: data.payload.data()['variable'],
    rangoMedicion:data.payload.data()['rangoMedicion'],
    temperaturaAmbiente :data.payload.data()['temperaturaAmbiente'],
    peso: data.payload.data()['peso'],
    humedad: data.payload.data()['humedad'],
    limpieza: data.payload.data()['limpieza'],
    esterilizacion: data.payload.data()['esterilizacion'],
    desinfeccion: data.payload.data()['desinfeccion'],
    eventosAdversos: data.payload.data()['eventosAdversos'],
    preventivas:data.payload.data()['preventivas'],
    consultorio: data.payload.data()['consultorio'],
    alimentacion : data.payload.data()['alimentacion'],
    
    
   

      })
      
      
      })
    }
  }
 
  }
  


