import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EquiposService } from 'src/app/services/equipos.service';

@Component({
  selector: 'app-actualizarequipo',
  templateUrl: './actualizarequipo.component.html',
  styleUrls: ['./actualizarequipo.component.css']
})
export class ActualizarequipoComponent implements OnInit {

  [x: string]: any;

  id: string| null
  createEquipo:FormGroup; 
  codigo: string;
  constructor(private fb: FormBuilder ,
    private aRoute: ActivatedRoute, 
    private _servicesEquipo: EquiposService,
    private toastr: ToastrService,
    private router: Router,) { 
    this.createEquipo = this.fb.group({
     
      nombreEquipo:[''],
      codigoecr:[''],
     
   
      registroInvima:[''],
 
      marca: [''],
      modelo:[''],
      serie: [''],
      codigo: [''],
      servicio: [''],
 
      voltaje: [''],
      potencia: [''],
      corriente: [''],
      clasificacionRiesgo: [''],
      ubicacionEquipo:[''],
      accesorios: [''],
      identificacionProtocolo: [''],
      ubicacion : [''],
      nactivo : [''],
      propietario : [''],
      periodicidadTiempo:[''],
      estimado: [''],
      fechaActividad:[''],
      clasificacionBiomedica: [''],
      fechaAdquisicion :[''],
      diagnostico:[''],
      fechaInstalacion: [''],
      prevencion: [''],
      rehabilitacion: [''],
      analisisClinico : [''],
      ttoMto: [''],
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
      alimentacion : [''],
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
      ubicacioncon:['']
       
     

    }
    )
    this.id = this.aRoute.snapshot.paramMap.get('id');
    console.log(this.id);
    

  }
  ngOnInit(): void {
    this.esVer();
 
  }

  agregarEquipo(){
    const equipo: any = {

      nombreEquipo: this.createEquipo.value.nombreEquipo,
      codigoecr: this.createEquipo.value.codigoecr,
     
   
      registroInvima :this.createEquipo.value.registroInvima,

      marca: this.createEquipo.value.marca,
      modelo: this.createEquipo.value.modelo,
      serie: this.createEquipo.value.serie,
      codigo: this.createEquipo.value.codigo,
      servicio: this.createEquipo.value.servicio,

      voltaje: this.createEquipo.value.voltaje,
     potencia: this.createEquipo.value.potencia,
     corriente: this.createEquipo.value.corriente,
      clasificacionRiesgo: this.createEquipo.value.clasificacionRiesgo,
      ubicacionEquipo:this.createEquipo.value.ubicacionEquipo,
      accesorios: this.createEquipo.value.accesorios
      }
    
      this._servicesEquipo.agregarEquipo(equipo).then(() => {
        this.toastr.success('El Equipo fue registrado con exito!', 'Equipo Registrado', {
          positionClass: 'toast-bottom-right'
        });
      
      }).catch(error => {
        console.log(error);
       
      })
    }
 
  
  EditarEquipo(id: string){
    
    const equipo: any = {
    nombreEquipo: this.createEquipo.value.nombreEquipo,
    codigoecr: this.createEquipo.value.codigoecr,
    registroInvima:this.createEquipo.value,
    marca: this.createEquipo.value.marca,
    modelo: this.createEquipo.value.modelo,
    serie: this.createEquipo.value.serie,
    codigo: this.createEquipo.value.codigo,
    servicio: this.createEquipo.value.servicio,
    voltaje: this.createEquipo.value.voltaje,
    potencia: this.createEquipo.value.potencia,
    corriente: this.createEquipo.value.corriente,
    clasificacionRiesgo: this.createEquipo.value.clasificacionRiesgo,
    ubicacionEquipo:this.createEquipo.value.ubicacionEquipo,
    accesorios: this.createEquipo.value.accesorios,
    identificacionProtocolo: this.createEquipo.value.identificacionProtocolo,
    ubicacion : this.createEquipo.value.ubicacion,
    nactivo :this.createEquipo.value.nactivo,
    propietario : this.createEquipo.value.propietario,
    periodicidadTiempo:this.createEquipo.value.periodicidadTiempo,
    estimado: this.createEquipo.value.estimado,
    fechaActividad:this.createEquipo.value.fechaActividad,
    clasificacionBiomedica: this.createEquipo.value.clasificacionBiomedica,
    fechaAdquisicion :this.createEquipo.value.fechaAdquisicion,
    diagnostico:this.createEquipo.value.diagnostico,
    fechaInstalacion: this.createEquipo.value.fechaInstalacion,
    prevencion: this.createEquipo.value.prevencion,
    rehabilitacion:this.createEquipo.value.rehabilitacion,
    analisisClinico : this.createEquipo.value.analisisClinico,
    ttoMto:this.createEquipo.value.ttoMto,
    compra: this.createEquipo.value.compra,
    fabricante:this.createEquipo.value.fabricante,
    manuelOperacion:this.createEquipo.value.manuelOperacion,
    manual: this.createEquipo.value.manual,
    funciones: this.createEquipo.value.funciones,
    sugerencia:this.createEquipo.value.sugerencia,
    donacion: this.createEquipo.value.donacion,
    direccionFabricante:this.createEquipo.value.direccionFabricante,
    vidaUtil: this.createEquipo.value.vidaUtil,
    tecnologia:this.createEquipo.value.tecnologia,
    alimentacion : this.createEquipo.value.alimentacion,
    frecuencia: this.createEquipo.value.frecuencia,
    variable:this.createEquipo.value.variable,
    rangoMedicion:this.createEquipo.value.rangoMedicion,
    temperaturaAmbiente :this.createEquipo.value.temperaturaAmbiente,
    peso: this.createEquipo.value.peso,
    humedad:this.createEquipo.value.humedad,
    limpieza:this.createEquipo.value.limpieza,
    esterilizacion:this.createEquipo.value.esterilizacion,
    desinfeccion:this.createEquipo.value.desinfeccion,
    eventosAdversos: this.createEquipo.value.eventosAdversos,
    preventivas:this.createEquipo.value.preventivas,
    consultorio: this.createEquipo.value.consultorio,
    ubicacioncon:this.createEquipo.value.ubicacioncon,
    }
    this._servicesEquipo.actualizarEquipo(id,equipo).then(() =>{
      
      this.toastr.info('El equipo ha sido modificado con exito', 'Equipo actualizado',{
        positionClass: 'toast-bottom-right'
      })
      this.router.navigate(['../menuequipo/']);
    })
  }

  
 
  esVer(){
    if(this.id !== null){
      this._servicesEquipo.getEquipo(this.id).subscribe(data =>{
      console.log(data.payload.data()['codigoecr']);
      this.createEquipo.patchValue({
        nombreEquipo: data.payload.data()['nombreEquipo'],
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
