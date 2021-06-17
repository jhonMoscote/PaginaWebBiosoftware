import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ɵangular_packages_platform_browser_dynamic_platform_browser_dynamic_a } from '@angular/platform-browser-dynamic';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { element } from 'protractor';
import { Observable } from 'rxjs';
import { elementAt, map } from 'rxjs/operators';
import { EquiposService } from 'src/app/services/equipos.service';
import { RepuestosService } from 'src/app/services/repuestos.service';
import { RutinaService } from 'src/app/services/rutina.service';
import { RepuestosSeleccionadosService } from 'src/app/ui/repuestos.service';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-mantenimientopreventivo',
  templateUrl: './mantenimientopreventivo.component.html',
  styleUrls: ['./mantenimientopreventivo.component.css']
})
export class MantenimientopreventivoComponent implements OnInit {
  createPreventivo: FormGroup;
  mostrarDatos: FormGroup;
  submitted = false;
  descripcionRepuesto:string;
  referenciaRepuesto:string[]=[];
  costoRepuestoRe:number[]=[];
  id: string| null
  equipos: any[]=[];
  rutinas: any[]=[];
  costoRepuestos :number[] = [];
  cantidadRestante: number[]=[];
  restaRepuesto: number;
  codigo: string;
  repuestos: any []=[];
  AlmacenRepuesto: any[]=[];
  consultorio: string;
  cantidadRepuesto: number[]=[];
  auxRepuesto : any[]=[];
  servicio : string;
  costoRepuesto: number=0;
  costo: number;
  procedimiento: string;
  idAux:number;
  costoTotal : number=0;
  idProducto: string[]=[];
  usuarios :any[]= [];
  usuarios2 :any[]= [];
  rol :string[]= [];
  condicionArea: Boolean;
  contrasena :string[]= [];
  contraArea:string;
  contraBiomedico: string;
  condicionBiomedico: Boolean;
  prueba: any[]=[];
  ids: string;
  periciodidad: string;
  ruta: any[]=[];

  private productoCollection: AngularFirestoreCollection;
  constructor(private fb: FormBuilder,private _servicesEquipo: EquiposService,private aRoute: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService,
    private repuestosSeleccionadosService: RepuestosSeleccionadosService,private _rutinaService: RutinaService,public  AuthService: AuthService, private firestore: AngularFirestore) { 
   
      
      this.id = this.aRoute.snapshot.paramMap.get('id');
     
    

      this.createPreventivo = this.fb.group({
        ids:[''],
        asistencia :[''],
        rutina1 :[''],
        rutina2 :[''],
        rutina3 :[''],
        rutina4:[''],
        rutina5:[''],
        rutina6:[''],
        rutina7:[''],
        rutina8:[''],
        rutina9:[''],
        rutina10:[''],
        rutina11 :[''],
        rutina12 :[''],
        rutina13 :[''],
        rutina14:[''],
        rutina15:[''],
        rutina16:[''],
        rutina17:[''],
        rutina18:[''],
        rutina19:[''],
        rutina20:[''],
        rutina21:[''],
        rutina22:[''],
        rutina23:[''],
        rutina24:[''],
        rutina25:[''],
        rutina26:[''],
        rutina27:[''],
        rutina28:[''],
        rutina29:[''],
        rutina30:[''],
      
        cantidad:[''],
        cantidadDisponible:[''],
        costo:[''],
        referencia:[''],
        costoReporte:[''],
        fecharealizacion:[''],
        tiempoejecucion:[''],
        tiempofuera:[''],
        descripcionExterno:[''],
        costoExterno:[0],
        contraBiomedico:['',Validators.required],
        contraArea:['',Validators.required],
        periocidad:[''],
        calibracion:[''],
        periocidadCalibracion:[''],
        observaciones:['']

 
       
  
      })

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
      this.esVer(),  this.obtenerId(), this.getObternerRutina()

 
    }
    

    esVer(){
      if(this.id !== null){
        
        this._servicesEquipo.getEquipo(this.id).subscribe(data =>{
          this.periciodidad = data.payload.data()['periodicidadTiempo'];
        
        this.consultorio = data.payload.data()['consultorio'];
        this.servicio = data.payload.data()['servicio'];
        this.procedimiento = data.payload.data()['servicio'];
        
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



    obtenerId(): Observable<any>{
    
    return  this.firestore.collection('rutina', ref=>ref.where('ids', '==', this.id)).snapshotChanges();
       
    }

   

    getObternerRutina(){
      this.obtenerId().subscribe(data => {
        this.rutinas = [];
        data.forEach((element: any)=>{
        
          this.rutinas.push({
   
           id:element.payload.doc.id,
           ...element.payload.doc.data()
          })    
        }); 


      })}

  
   

     

      editarRepuestos(id: string) {
   
        this.productoCollection= this.firestore.collection('repuestos');
        this.productoCollection.doc(id).update({cantidadRestante:this.restaRepuesto}).catch(console.log)
     
       }

     
  
  
    agregarMantenimiento(){


      const arreglo = this.repuestosSeleccionadosService.repuestosSeleccionados;
      for(let i = 0; i < arreglo.length; i++){
        this.costoRepuestos[i] =arreglo.map((costo)=>costo.costo*1,0)[i] * arreglo.map((costo)=>costo.cantidad*1,0)[i];
      
        this.cantidadRepuesto[i] = arreglo.map((cant)=>cant.cantidad*1,0)[i];
 
        this.idProducto[i] = arreglo.map((idprod)=> idprod.id)[i];
        this.cantidadRestante[i] = arreglo.map((cant)=>cant.cantidadRestante*1,0)[i];

      
        this.restaRepuesto = this.cantidadRestante[i] -this.cantidadRepuesto[i];
      
        this.editarRepuestos(this.idProducto[i])
       
      } 
     

       this.AlmacenRepuesto = arreglo.map((idprod)=> idprod.id) ,arreglo.map((cant)=>cant.cantidad*1,0), arreglo.map((costo)=>costo.costo*1,0);
   
      
  
      //id del producto
      this.idProducto = arreglo.map((idprod)=> idprod.id);
     // console.log("id" , this.idProducto)
      //suma de la cantidad de repuestos
      this.costoRepuestoRe = this.repuestosSeleccionadosService.repuestosSeleccionados.map((costo)=>costo.costo);
      this.referenciaRepuesto= this.repuestosSeleccionadosService.repuestosSeleccionados.map((ref)=>ref.nombre);      this.cantidadRepuesto = this.repuestosSeleccionadosService.repuestosSeleccionados.map((cant)=>cant.cantidad);
      this.cantidadRepuesto = this.repuestosSeleccionadosService.repuestosSeleccionados.map((cant)=>cant.cantidad);
      // no tocar suma del array de los costos de los repuestos///
      this.costoRepuesto = this.costoRepuestos.reduce((prev,next)=>prev+ next*1,0)   ;  
      // no eliminar chingao
  
     const descripcion =  this.repuestosSeleccionadosService.repuestosSeleccionados.map((cant)=>cant.descripcion);
    // console.log( 'cantidad', this.cantidadRepuesto  )
     //console.log("costo prueba"+ this.costoRepuesto )
   
      this.submitted =true;
      if(this.createPreventivo.invalid){
   
        return;
      }
      const mantenimientocorrectivo: any = {


        asistencia :this.createPreventivo.value.asistencia,
        rutina1 :this.createPreventivo.value.rutina1,
        rutina2 :this.createPreventivo.value.rutina2,
        rutina3 :this.createPreventivo.value.rutina3,
        rutina4:this.createPreventivo.value.rutina4,
        rutina5:this.createPreventivo.value.rutina5,
        rutina6:this.createPreventivo.value.rutina6,
        rutina7:this.createPreventivo.value.rutina7,
        rutina8:this.createPreventivo.value.rutina8,
        rutina9:this.createPreventivo.value.rutina9,
        rutina10:this.createPreventivo.value.rutina10,
        rutina11 :this.createPreventivo.value.rutina11,
        rutina12 :this.createPreventivo.value.rutina12,
        rutina13 :this.createPreventivo.value.rutina13,
        rutina14:this.createPreventivo.value.rutina14,
        rutina15:this.createPreventivo.value.rutina15,
        rutina16:this.createPreventivo.value.rutina16,
        rutina17:this.createPreventivo.value.rutina17,
        rutina18:this.createPreventivo.value.rutina18,
        rutina19:this.createPreventivo.value.rutina19,
        rutina20:this.createPreventivo.value.rutina20,
        rutina21:this.createPreventivo.value.rutina21,
        rutina22:this.createPreventivo.value.rutina22,
        rutina23:this.createPreventivo.value.rutina23,
        rutina24:this.createPreventivo.value.rutina24,
        rutina25:this.createPreventivo.value.rutina25,
        rutina26:this.createPreventivo.value.rutina26,
        rutina27:this.createPreventivo.value.rutina27,
        rutina28:this.createPreventivo.value.rutina28,
        rutina29:this.createPreventivo.value.rutina29,
        rutina30:this.createPreventivo.value.rutina30,
        fecharealizacion:this.createPreventivo.value.fecharealizacion,
        tiempoejecucion:this.createPreventivo.value.tiempoejecucion,
        tiempofuera:this.createPreventivo.value.tiempofuera,
        descripcionExterno: this.createPreventivo.value.descripcionExterno,
        costoExterno:this.createPreventivo.value.costoExterno,
        contraBiomedico:this.createPreventivo.value.contraBiomedico,
        contraArea:this.createPreventivo.value.contraArea,
        cantidad: this.cantidadRepuesto,
        observaciones: this.createPreventivo.value.observaciones,
        costo: this.costoRepuesto,
        descripcion: descripcion,
        ids: this.id,
        consultorio : this.consultorio,
        servicio: this.servicio,
        idproducto:  this.idProducto,
        almacenRepuesto : this.AlmacenRepuesto,
        referencia:this.referenciaRepuesto,
        costoReporte:this.costoRepuestoRe,
        fechaCreacion : new Date().toDateString(),
        fechaActualizacion: new Date(),
        periciodidad: this.periciodidad,
        calibracion:this.createPreventivo.value.calibracion,
        periocidadCalibracion:this.createPreventivo.value.periocidadCalibracion
  
      }

     if(this.condicionBiomedico == true && this.condicionArea== true ){
   
        this._servicesEquipo.agregarMantenimientoPreventivo(mantenimientocorrectivo).then(() => {
          this.toastr.success('Mantenimiento Exitoso!!!');
    
    
          window.location.reload();
     
      }).catch(error => {
        console.log(error);
        
      })
      this.router.navigate(['/menuequipo/', this.id])

   } else
    if( this.condicionBiomedico != true){
      
      window.alert("Contraseña Incorrecta Ingeniero Biomedico")
  
    }else 
       if(this.condicionArea != true){
    
      window.alert("contraseña Incorrecta Jefe De Area")
    }
   
    }



    async  validarBiomedico(){
      this.AuthService.getUsuarios().subscribe(data=>{
        this.usuarios2 = [];
        data.forEach((element:any)=>{
          this.usuarios2.push({
            nombre: element.payload.doc.nombre,
            ...element.payload.doc.data()
          })
        });
        this.rol = this.usuarios2.map((rol)=> rol.cargo);
        this.contrasena = this.usuarios2.map((contra)=> contra.contrasena);
       for(let i=0; i < this.rol.length; i++){
        for(let o=0; o < this.contrasena.length; o++){
         if(this.rol[i] == 'INGENIERIO BIOMÉDICO' && this.contrasena[i] == this.contraBiomedico){
           
             this.condicionBiomedico = true;
             return this.condicionBiomedico;
         }else
         if(this.rol[i] == 'INGENIERIO BIOMÉDICO' && this.contrasena[i] != this.contraBiomedico){
           this.condicionBiomedico = false;
         }
        }
       }
      });
    }
  
  
  
    async validarArea(){
      this.AuthService.getUsuarios().subscribe(data=>{
        this.usuarios = [];
        data.forEach((element:any)=>{
          this.usuarios.push({
            nombre: element.payload.doc.nombre,
            ...element.payload.doc.data()
          })
        });
        this.rol = this.usuarios.map((rol)=> rol.cargo);
        this.contrasena = this.usuarios.map((contra)=> contra.contrasena);
       for(let i=0; i < this.rol.length; i++){
        for(let o=0; o < this.contrasena.length; o++){
         if(this.rol[i] == 'JEFE DE SERVICIO' && this.contrasena[i] == this.contraArea){
           
            return this.condicionArea = true;
         }else
         if(this.rol[i] == 'JEFE DE SERVICIO'&& this.contrasena[i] != this.contraArea){
          this.condicionArea = false;
         }
        }
       }
      })
    
    }



}
