import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EquiposService } from 'src/app/services/equipos.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-registrarequipo',
  templateUrl: './registrarequipo.component.html',
  styleUrls: ['./registrarequipo.component.css']
})
export class RegistrarequipoComponent implements OnInit {
  createEquipo: FormGroup;
  submitted: boolean;
  servicio:string;
  peticion :true;
  constructor(private fb: FormBuilder, private _equipoServices: EquiposService, private router: Router, private toastr : ToastrService) { 
     
  
    this.createEquipo = this.fb.group({
      nombreEquipo:['', Validators.required],
      codigoecr:[''],
      registroInvima :[''],
      marca: ['',Validators.required],
      modelo:['',Validators.required],
      serie: ['',Validators.required],
      codigo: [''],
      servicio: ['',Validators.required],
      voltaje: [''],
      potencia: [''],
      corriente: [''],
      clasificacionRiesgo: ['',Validators.required],
      ubicacionEquipo:['',Validators.required],
      accesorios: [''],
      alimentacion : [''],
      identificacionProtocolo: [''],
      nactivo : [''],
      propietario : [''],
      periodicidadTiempo:['',Validators.required],
      estimado: [''],
      fechaActividad:['',Validators.required],
      clasificacionBiomedica: ['',Validators.required],
      fechaAdquisicion :[''],
      fechaInstalacion: [''],
      compra: [''],
      fabricante:[''],
      manuelOperacion:[''],
      manual: [''],
      funciones: [''],
      sugerencia: [''],
      donacion: [''],
      direccionFabricante:[''],
      vidaUtil: [''],
      tecnologia:[''],
      frecuencia: [''],
      variable: [''],
      rangoMedicion:[''],
      temperaturaAmbiente :[''],
      peso: [''],
      humedad:[''],
      limpieza:[''],
      esterilizacion:[''],
      desinfeccion: [''],
      eventosAdversos: [''],
      preventivas:[''],
      consultorio: [''],
      baja:['']

    })

    
  }
 
  ngOnInit(): void {
  
  }


  creaeEquipo(){

    const nuevoEquipo ={

      nombreEquipo:this.createEquipo.value.nombreEquipo,
      identificacionProtocolo: this.createEquipo.value.identificacionProtocolo,
      codigoecr:this.createEquipo.value.codigoecr,
      registroInvima :this.createEquipo.value.registroInvima,
      marca:this.createEquipo.value.marca,
      modelo:this.createEquipo.value.modelo,
      serie: this.createEquipo.value.serie,
      codigo: this.createEquipo.value.codigo,
      servicio: this.createEquipo.value.servicio,
      voltaje: this.createEquipo.value.voltaje,
      potencia: this.createEquipo.value.potencia,
      corriente: this.createEquipo.value.corriente,
      clasificacionRiesgo: this.createEquipo.value.clasificacionRiesgo,
      ubicacionEquipo:this.createEquipo.value.ubicacionEquipo,
      accesorios: this.createEquipo.value.accesorios,
      nactivo : this.createEquipo.value.nactivo,
      propietario : this.createEquipo.value.propietario,
      periodicidadTiempo:this.createEquipo.value.periodicidadTiempo,
      estimado:this.createEquipo.value.estimado,
      fechaActividad:this.createEquipo.value.fechaActividad,
      clasificacionBiomedica: this.createEquipo.value.clasificacionBiomedica,
      fechaAdquisicion :this.createEquipo.value. fechaAdquisicion,
      fechaInstalacion: this.createEquipo.value.fechaInstalacion,
      compra: this.createEquipo.value.compra,
      fabricante:this.createEquipo.value.fabricante,
      manuelOperacion:this.createEquipo.value.manuelOperacion,
      manual: this.createEquipo.value.manual,
      funciones: this.createEquipo.value.funciones,
      sugerencia: this.createEquipo.value.sugerencia,
      donacion: this.createEquipo.value.donacion,
      direccionFabricante:this.createEquipo.value.direccionFabricante,
      vidaUtil: this.createEquipo.value.vidaUtil,
      tecnologia:this.createEquipo.value.tecnologia,
      frecuencia: this.createEquipo.value.frecuencia,
      variable: this.createEquipo.value.variable,
      rangoMedicion:this.createEquipo.value.rangoMedicion,
      temperaturaAmbiente :this.createEquipo.value.temperaturaAmbiente,
      peso: this.createEquipo.value.peso,
      humedad:this.createEquipo.value.humedad,
      limpieza:this.createEquipo.value.limpieza,
      esterilizacion:this.createEquipo.value.esterilizacion,
      desinfeccion: this.createEquipo.value.desinfeccion,
      eventosAdversos: this.createEquipo.value.eventosAdversos,
      preventivas:this.createEquipo.value.preventivas,
      consultorio: this.createEquipo.value.consultorio,
      alimentacion: this.createEquipo.value.alimentacion,
      baja: "no"

    }

    this._equipoServices.agregarEquipo(nuevoEquipo).then(()=>{
      this.toastr.success('Registro Exitoso!!!')
      this.router.navigate(['/servicios/'])
    })
  }





}
