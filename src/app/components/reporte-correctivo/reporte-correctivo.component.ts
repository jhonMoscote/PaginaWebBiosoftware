import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { EquiposService } from 'src/app/services/equipos.service';
import {Repuesto} from 'src/app/services/repuesto';
@Component({
  selector: 'app-reporte-correctivo',
  templateUrl: './reporte-correctivo.component.html',
  styleUrls: ['./reporte-correctivo.component.css']
})

export class ReporteCorrectivoComponent implements OnInit {
 
  id: string|null
  mostrarDatos: FormGroup;
  correctivos: any[]=[];
  usuarios: any []=[];
  idAux:string;
  cantidad: number[]=[];  
  descripcion:string[]=[];
  referencia: string[]=[];

  costo:number[]=[];

  celular: string[]=[];
  correo: string[]=[];
  identificacion: string[]=[];
  nombre:string[]=[];
  cargo:any[]=[];

  nombreArea:string;
  celularArea: string;
  correroArea:string;
  identificacionArea:string;
  cargoArea:string;

  nombreBio:string;
  celularBio: string;
  correroBio:string;
  identificacionBio:string;
  cargoBio:string;

  contraseñas:any[]=[];
  contraBiomedico:string;
  contraArea: string;
  repuesto: any[]=[{referencia:this.referencia, cantidad:this.cantidad, descripcion: this.descripcion, costo:this.costo}];
  MostrarCorrectivo: FormGroup;
  constructor(private fb: FormBuilder,private Aroute: ActivatedRoute, private _servicesEquipo: EquiposService,private firestore: AngularFirestore, private auth: AuthService) { 
    this.id = this.Aroute.snapshot.paramMap.get('id');
   
 
    this.mostrarDatos = this.fb.group({
     
      nombreEquipo:['', Validators.required],
      marca: ['', Validators.required],
      modelo:['', Validators.required],
      serie: ['', Validators.required],
      servicio: ['', Validators.required],
      nactivo : ['', Validators.required],
      ubicacioncon:['', Validators.required]
       
  
      });
      this.MostrarCorrectivo = this.fb.group({
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
        costoExterno:[0],
        contraBiomedico:['',Validators.required],
        contraArea:['',Validators.required]
      });
  }

  ngOnInit(): void {
    this.getObternerCorrectivo(),this.getRepuestos(),this.getUsuariosArea(),this. getUsuariosBiomedico()
  }

  getCorrectivo(id: string): Observable<any>{
    return this.firestore.collection('correctivo').doc(id).snapshotChanges();
    
  }

  esVer(id: string) {
    if (id !== null) {
 
      this._servicesEquipo.getEquipo(id).subscribe((data) => {
    
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

  getObternerCorrectivo(){
    this.getCorrectivo(this.id).subscribe((data) => {
     this.idAux= data.payload.data()['ids'],
     this.cantidad = data.payload.data()['cantidad'],

     this.MostrarCorrectivo.patchValue({
      asistencia: data.payload.data()['asistencia'],
      fallareportada: data.payload.data()['fallareportada'],
      diagnosticoproblema: data.payload.data()['diagnosticoproblema'],
      trabajorealizado: data.payload.data()['trabajorealizado'],
      nombre: data.payload.data()['nombre'],
      descripcion: data.payload.data()['descripcion'],
      cantidad: data.payload.data()['cantidad'],
      cantidadDisponible:data.payload.data()['cantidadDisponible'],
      costo: data.payload.data()['costo'],
      observaciones: data.payload.data()['observaciones'],
      criteriofalla: data.payload.data()['criteriofalla'],
      tiempoejecucion: data.payload.data()['tiempoejecucion'],
      tiempofuera:data.payload.data()['tiempofuera'],
      descripcionExterno:data.payload.data()['descripcionExterno'],
      costoExterno:data.payload.data()['costoExterno'],
      contraBiomedico:data.payload.data()['contraBiomedico'],
      contraArea:data.payload.data()['contraArea']
    });
     this.esVer(this.idAux)
    
    })

    
  }

  getRepuestos(){
    this.getCorrectivo(this.id).subscribe((data) => {
      this.cantidad = data.payload.data()['cantidad'],
      this.referencia = data.payload.data()['referencia'],
      this.costo= data.payload.data()['costoReporte'],
      this.descripcion =  data.payload.data()['descripcion'],
      this.contraArea= data.payload.data()['contraArea'],
      this.contraBiomedico = data.payload.data()['contraBiomedico'];
 

      for(let i =0; i < this.cantidad.length; i++){

        this.repuesto[i]= [ this.referencia[i], this.cantidad[i], this.descripcion[i],this.costo[i] ];
        
      }
   
  
    });

  
  }


  getUsuariosArea(){

    this.auth.getUsuarios().subscribe((data)=>{

      this.usuarios=[];
      data.forEach((element:any)=>{
        this.usuarios.push({
          contrasena:element.payload.doc.contrasena,
          ...element.payload.doc.data()
        })
      

      });
   
      this.cargo= this.usuarios.map((cargo)=>cargo.cargo);
      this.nombre= this.usuarios.map((nombre)=>nombre.nombre);
      this.celular = this.usuarios.map((celular)=> celular.celular);
      this.identificacion = this.usuarios.map((ident)=>ident.identificacion);
      this.correo = this.usuarios.map((correo)=>correo.correo);

      this.contraseñas = this.usuarios.map((contra)=>contra.contrasena);
      for(let i =0; i < this.usuarios.length; i++){
        if(this.contraArea == this.contraseñas[i]){
          this.nombreArea = this.nombre[i];
          this.cargoArea = this.cargo[i];
          this.identificacionArea = this.identificacion[i];
          this.celularArea = this.celular[i];
          this.correroArea = this.correo[i];
          console.log(this.nombreArea)
        
        }
      }
    })

  }


  getUsuariosBiomedico(){

    this.auth.getUsuarios().subscribe((data)=>{

      this.usuarios=[];
      data.forEach((element:any)=>{
        this.usuarios.push({
          contrasena:element.payload.doc.contrasena,
          ...element.payload.doc.data()
        })
      

      });
   
      this.cargo= this.usuarios.map((cargo)=>cargo.cargo);
      this.nombre= this.usuarios.map((nombre)=>nombre.nombre);
      this.celular = this.usuarios.map((celular)=> celular.celular);
      this.identificacion = this.usuarios.map((ident)=>ident.identificacion);
      this.correo = this.usuarios.map((correo)=>correo.correo);

      this.contraseñas = this.usuarios.map((contra)=>contra.contrasena);
      for(let i =0; i < this.usuarios.length; i++){
        if(this.contraBiomedico == this.contraseñas[i]){
          this.nombreBio = this.nombre[i];
          this.cargoBio = this.cargo[i];
          this.identificacionBio = this.identificacion[i];
          this.celularBio = this.celular[i];
          this.correroBio = this.correo[i];
       
        }
      }
    })

  }
}
