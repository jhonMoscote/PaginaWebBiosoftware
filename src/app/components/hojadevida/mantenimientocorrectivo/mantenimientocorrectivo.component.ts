import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { debug } from 'console';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { EquiposService } from 'src/app/services/equipos.service';
import { RepuestosService } from 'src/app/services/repuestos.service';
import { AuthService } from 'src/app/services/auth.service';
import { RepuestosSeleccionadosService } from 'src/app/ui/repuestos.service';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

@Component({
  selector: 'app-mantenimientocorrectivo',
  templateUrl: './mantenimientocorrectivo.component.html',
  styleUrls: ['./mantenimientocorrectivo.component.css'],
  
})
export class MantenimientocorrectivoComponent implements OnInit {
  createCorrectivo: FormGroup;
  mostrarDatos: FormGroup;
  submitted = false;
  id: string | null;
  equipos: any[] = [];
  codigo: string;
  repuesto: string;
  repuestos: any[] = [];
  costoRepuestos :number[] = [];
  nombre: string;

  costoRepuesto :number=0;
  descripcionRepuesto:string;
  referenciaRepuesto:string[]=[];
  costoRepuestoRe:number[]=[];
  auxR:number=0;
  descripcion: string;
  cantidadD: number;
  costo: number;
  consultorio: string;
  servicio: string;
  clasificacionRiesgo: string;
  costoExterno=0;
  usuarios :any[]= [];
  usuarios2 :any[]= [];
  rol :string[]= [];
  condicionArea: Boolean;
  contrasena :string[]= [];
  contraArea:string;
  contraBiomedico: string;
  condicionBiomedico: Boolean;
  cantidadRestante: number[]=[];
  restaRepuesto: number;
   idProducto: string[]=[];
   AlmacenRepuesto: any[]=[];
   cantidadRepuesto: number[]=[];
  private productoCollection: AngularFirestoreCollection;

  constructor(
    private fb: FormBuilder,
    private _servicesEquipo: EquiposService,
    private _repuestoService: RepuestosService,
    private aRoute: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService,
    private repuestosSeleccionadosService: RepuestosSeleccionadosService,
    public  AuthService: AuthService,private firestore: AngularFirestore
  ) {
    this.id = this.aRoute.snapshot.paramMap.get('id');
  

    this.repuesto = document.getElementsByName('repuesto')[''];

    this.createCorrectivo = this.fb.group({
      ids: [''],
      asistencia: [''],
      fallareportada: [''],
      diagnosticoproblema: [''],
      trabajorealizado: [''],
      nombre: [''],
      descripcion: [''],
      cantidad: [''],
      cantidadDisponible: [''],
      costo: [''],
      observaciones: [''],
      criteriofalla: [''],
      tiempoejecucion: [''],
      tiempofuera: [''],
      descripcionExterno:[''],
      referencia:[''],
      costoReporte:[''],
      costoExterno:[0],
      contraBiomedico:['',Validators.required],
      contraArea:['',Validators.required]
    });
    this.mostrarDatos = this.fb.group({
      nombreEquipo: ['', Validators.required],
      marca: ['', Validators.required],
      modelo: ['', Validators.required],
      serie: ['', Validators.required],
      servicio: ['', Validators.required],
      nactivo: ['', Validators.required],
      ubicacioncon: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.esVer()
  
  }
  esVer() {
    if (this.id !== null) {
      this._servicesEquipo.getEquipo(this.id).subscribe((data) => {
        this.consultorio = data.payload.data()['consultorio'];
        this.servicio = data.payload.data()['servicio'];
        this.clasificacionRiesgo = data.payload.data()['clasificacionRiesgo'];
        this.mostrarDatos.patchValue({
          nombreEquipo: data.payload.data()['nombreEquipo'],
          marca: data.payload.data()['marca'],
          modelo: data.payload.data()['modelo'],
          serie: data.payload.data()['serie'],
          servicio: data.payload.data()['servicio'],
          nactivo: data.payload.data()['nactivo'],
          ubicacioncon: data.payload.data()['ubicacioncon'],
        });
      });
    }
  }
  editarRepuestos(id: string) {
   
    this.productoCollection= this.firestore.collection('repuestos');
    this.productoCollection.doc(id).update({cantidadRestante:this.restaRepuesto}).catch(console.log)
 
   }
 

  agregarMantenimiento() {
    
    console.log('mira',this.repuestosSeleccionadosService.repuestosSeleccionados);
    const arreglo = this.repuestosSeleccionadosService.repuestosSeleccionados;
    for(let i = 0; i < arreglo.length; i++){
      this.costoRepuestos[i] =arreglo.map((costo)=>costo.costo*1,0)[i] * arreglo.map((costo)=>costo.cantidad*1,0)[i];

      console.log("costo", this.costoRepuestos)
      this.cantidadRepuesto[i] = arreglo.map((cant)=>cant.cantidad*1,0)[i];
      console.log('cantidad pe', this.cantidadRepuesto),
      this.idProducto[i] = arreglo.map((idprod)=> idprod.id)[i];
      this.cantidadRestante[i] = arreglo.map((cant)=>cant.cantidadRestante*1,0)[i];

    
      this.restaRepuesto = this.cantidadRestante[i] -this.cantidadRepuesto[i];
    
      this.editarRepuestos(this.idProducto[i])
     
    } 
   

     this.AlmacenRepuesto = arreglo.map((idprod)=> idprod.id) ,arreglo.map((cant)=>cant.cantidad*1,0), arreglo.map((costo)=>costo.costo*1,0);
 
    

    //id del producto
    this.idProducto = arreglo.map((idprod)=> idprod.id);
    this.referenciaRepuesto= this.repuestosSeleccionadosService.repuestosSeleccionados.map((ref)=>ref.nombre);
    this.costoRepuestoRe = this.repuestosSeleccionadosService.repuestosSeleccionados.map((costo)=>costo.costo);
   // console.log("id" , this.idProducto)
    //suma de la cantidad de repuestos
    this.cantidadRepuesto = this.repuestosSeleccionadosService.repuestosSeleccionados.map((cant)=>cant.cantidad);
    // no tocar suma del array de los costos de los repuestos///
    this.costoRepuesto = this.costoRepuestos.reduce((prev,next)=>prev+ next*1,0)   ;  
    // no eliminar chingao

   const descripcion =  this.repuestosSeleccionadosService.repuestosSeleccionados.map((cant)=>cant.descripcion);
  // console.log( 'cantidad', this.cantidadRepuesto  )
   //console.log("costo prueba"+ this.costoRepuesto )

    this.submitted =true;
    if (this.createCorrectivo.invalid) {
     
      return;
    }
    const mantenimientocorrectivo: any = {
      asistencia: this.createCorrectivo.value.asistencia,
      fallareportada: this.createCorrectivo.value.fallareportada,
      diagnosticoproblema: this.createCorrectivo.value.diagnosticoproblema,
      trabajorealizado: this.createCorrectivo.value.trabajorealizado,
      nombre: this.createCorrectivo.value.nombre,
      cantidad: this.cantidadRepuesto,
      cantidadDisponible: this.createCorrectivo.value.cantidadDisponible,
      costo: this.costoRepuesto,
      descripcion: descripcion,
      observaciones: this.createCorrectivo.value.observaciones,
      criteriofalla: this.createCorrectivo.value.criteriofalla,
      tiempoejecucion: this.createCorrectivo.value.tiempoejecucion,
      tiempofuera: this.createCorrectivo.value.tiempofuera,
      descripcionExterno: this.createCorrectivo.value.descripcionExterno,
      costoExterno:this.createCorrectivo.value.costoExterno,
      ids: this.id,
      consultorio: this.consultorio,
      servicio: this.servicio,
      referencia:this.referenciaRepuesto,
      costoReporte:this.costoRepuestoRe,
      clasificacionRiesgo: this.clasificacionRiesgo,
      contraBiomedico:this.createCorrectivo.value.contraBiomedico,
      contraArea:this.createCorrectivo.value.contraArea,
      fechaCreacion: new Date().toDateString(),
      fechaActualizacion: new Date(),
    

    
    };
    
  
    if(this.condicionBiomedico == true && this.condicionArea== true ){
    this._servicesEquipo
      .agregarMantenimientoCorrectivo(mantenimientocorrectivo)
      .then(() => {
        this.toastr.success('Mantenimiento Exitoso!!!');
          window.location.reload();
      
      })
      .catch((error) => {
        console.log(error);
      });
  
    this.router.navigate(['/menuequipo/', this.id]);
  }
  else
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
