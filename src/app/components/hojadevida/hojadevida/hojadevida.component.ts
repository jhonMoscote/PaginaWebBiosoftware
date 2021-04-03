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
    console.log(this.id);
    this.mostrarDatos = this.fb.group({
     
    nombreEquipo:['', Validators.required],
    codigoecr:['', Validators.required],
    codigoPrestado : ['', Validators.required],
    sede: ['', Validators.nullValidator ],
    registroInvima :['', Validators.required],
    distintivo: ['', Validators.required],
    marca: ['', Validators.required],
    modelo:['', Validators.required],
    serie: ['', Validators.required],
    codigo: ['', Validators.required],
    servicio: ['', Validators.required],
    numeroInventario: ['', Validators.required],
    voltaje: ['', Validators.required],
    potencia: ['', Validators.required],
    corriente: ['', Validators.required],
    clasificacionRiesgo: ['', Validators.required],
    ubicacionEquipo:['', Validators.required],
    accesorios: ['', Validators.required],
    identificacionProtocolo: ['', Validators.required],
    ubicacion : ['', Validators.required],
    nactivo : ['', Validators.required],
    propietario : ['', Validators.required],
    periodicidadTiempo:['', Validators.required],
    estimado: ['', Validators.required],
    fechaActividad:['', Validators.required],
    clasificacionBiomedica: ['', Validators.required],
    fechaAdquisicion :['', Validators.required],
    diagnostico:['', Validators.required],
    fechaInstalacion: ['', Validators.required],
    prevencion: ['', Validators.required],
    rehabilitacion: ['', Validators.required],
    analisisClinico : ['', Validators.required],
    ttoMto: ['', Validators.required],
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
    ubicacioncon:['', Validators.required]
     

    }
    )
    

  }
  ngOnInit(): void {
    this.esVer();
 
  }
  esVer(){
    if(this.id !== null){
      this._servicesEquipo.getEquipo(this.id).subscribe(data =>{
      console.log(data.payload.data()['codigoecr']);
      this.mostrarDatos.patchValue({
        
       
    nombreEquipo: data.payload.data()['nombreEquipo'],
    codigoecr: data.payload.data()['codigoecr'],
    codigoPrestado :data.payload.data()['codigoPrestado'],
    sede: data.payload.data()['sede'],
    registroInvima : data.payload.data()['registroInvima'],
    distintivo: data.payload.data()['distintivo'],
    marca: data.payload.data()['marca'],
    modelo: data.payload.data()['modelo'],
    serie: data.payload.data()['serie'],
    codigo: data.payload.data()['codigo'],
    servicio: data.payload.data()['servicio'],
    numeroInventario: data.payload.data()['numeroInventario'],
    voltaje: data.payload.data()['voltaje'],
   potencia: data.payload.data()['potencia'],
   corriente: data.payload.data()['corriente'],
    clasificacionRiesgo: data.payload.data()['clasificacionRiesgo'],
    ubicacionEquipo:data.payload.data()['ubicacionEquipo'],
    accesorios: data.payload.data()['accesorios'],
    identificacionProtocolo:data.payload.data()['identificacionProtocolo'],
    ubicacion : data.payload.data()['ubicacion'],
    nactivo : data.payload.data()['nactivo'],
    propietario : data.payload.data()['propietario'],
    periodicidadTiempo:data.payload.data()['periodicidadTiempo'],
    estimado: data.payload.data()['estimado'],
    fechaActividad:data.payload.data()['fechaActividad'],
    clasificacionBiomedica: data.payload.data()['clasificacionBiomedica'],
    fechaAdquisicion :data.payload.data()['fechaAdquisicion'],
    diagnostico: data.payload.data()['diagnostico'],
    fechaInstalacion: data.payload.data()['fechaInstalacion'],
    prevencion: data.payload.data()['prevencion'],
    rehabilitacion: data.payload.data()['rehabilitacion'],
    analisisClinico : data.payload.data()['analisisClinico'],
    ttoMto: data.payload.data()['ttoMto'],
    compra: data.payload.data()['compra'],
    fabricante: data.payload.data()['fabricante'],
    manuelOperacion: data.payload.data()['manuelOperacion'],
    descripcion: data.payload.data()['descripcion'],
    donacion: data.payload.data()['donacion'],
    direccionFabricante:data.payload.data()['direccionFabricante'],
    vidaUtil:data.payload.data()['vidaUtil'],
    tecnologia: data.payload.data()['tecnologia'],
    alimentacion : data.payload.data()['alimentacion'],
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
    ubicacioncon: data.payload.data()['ubicacioncon'],
    sugerencia: data.payload.data()['sugerencia'],
    funciones: data.payload.data()['funciones'],
    manual: data.payload.data()['manual']

      })
      
      
      })
    }
  }
 
  }
  


