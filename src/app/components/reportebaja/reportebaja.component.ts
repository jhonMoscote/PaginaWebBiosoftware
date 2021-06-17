import { Component, NgZone, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { EquiposService } from 'src/app/services/equipos.service';
import { ReportesService } from 'src/app/services/reportes.service';

@Component({
  selector: 'app-reportebaja',
  templateUrl: './reportebaja.component.html',
  styleUrls: ['./reportebaja.component.css']
})
export class ReportebajaComponent implements OnInit {
  mostrarBaja: FormGroup;
  createEquipo: FormGroup;
  usuarios: any []=[];
  id: string|null;
  reportes: any[]=[];
  idInforme:string[]=[];
  ideste: string;

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


  nombreAlmacen:string;
  celularAlmacen: string;
  correroAlmacen:string;
  identificacionAlmacen:string;
  cargoAlmacen:string;

  nombreInterno:string;
  celularInterno: string;
  correroInterno:string;
  identificacionInterno:string;
  cargoInterno:string;


  contraseñas:any[]=[];
  contraBiomedico:string;
  contraArea: string;
  contraAlmacen:string;
  contraInterno: string;
  constructor(public ngZone: NgZone, public afs: AngularFirestore, public afAuth: AngularFireAuth, private router: Router,private aRoute: ActivatedRoute, private fb: FormBuilder,
    private auth: AuthService,
    private _reporte: ReportesService,private toastr : ToastrService,private firestore: AngularFirestore) { 

    this.id = this.aRoute.snapshot.paramMap.get('id');

    this.mostrarBaja = this.fb.group({
      fecha:['', Validators.required],
      hora: ['', Validators.required],
      bajanumero:['', Validators.required],
      servicio: ['', Validators.required],
      telefonoextension: ['', Validators.required],
      ambiente: ['', Validators.required],
      personaluso: ['', Validators.required],
      motivobaja: ['', Validators.required],
      reporta: ['', Validators.required],
      observaciones: ['', Validators.required],
      firmacontrol: ['', Validators.required],
      firmabiomedico: ['', Validators.required],
      responsablearea: ['', Validators.required],
      almaceninventario:['', Validators.required],
      nombreEquipo:['', Validators.required],
      marca:['', Validators.required],
      modelo:['', Validators.required],
      serie:['', Validators.required],
      nactivo:['', Validators.required],

      
    })
  }

  ngOnInit(): void {
     this.getEquipo()
  }

  ver(){
    if(this.id !== null){
      this._reporte.getReporte(this.ideste).subscribe(data =>{
     
      this.mostrarBaja.patchValue({

        fecha : data.payload.data()['fecha'],
        hora :data.payload.data()['hora'],
        bajanumero : data.payload.data()['bajanumero'],
        servicio : data.payload.data()['servicio'],
        telefonoextension : data.payload.data()['telefonoextension'],
        ambiente: data.payload.data()['ambiente'],
        personaluso: data.payload.data()['personaluso'],
        motivobaja: data.payload.data()['motivobaja'],
        reporta: data.payload.data()['reporta'],
        observaciones: data.payload.data()['observaciones'],
        firmacontrol: data.payload.data()['firmacontrol'],
        firmabiomedico: data.payload.data()['firmabiomedico'],
        responsablearea: data.payload.data()['responsablearea'],
        almaceninventario: data.payload.data()['almaceninventario'],
        nombreEquipo:data.payload.data()['nombreEquipo'],
        marca:data.payload.data()['marca'],
        modelo:data.payload.data()['modelo'],
        serie:data.payload.data()['serie'],
        nactivo:data.payload.data()['nactivo'],


      })
    })

   }
  }

  verInformesBaja(){

    this._reporte.getReportes().subscribe(data=>{

      this.reportes = [];
      data.forEach((element:any)=>{

        this.reportes.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        })
      });
 


    })
  }

  getEquipo(){
    this._reporte.getReportes().subscribe(data => {
      this.reportes = [];
      data.forEach((element: any)=>{
        this.reportes.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        })
      });
    this.idInforme= this.reportes.map(id=>id.id);
    for(let i=0; i < this.idInforme.length;i++){
           
     this.ideste = this.idInforme[i];
     
     this.getInforme(this.ideste)
    }
   
  

    })
   

}

getInforme(id: string){
  this._reporte.getReporte(id).subscribe(data =>{
    this.contraArea = data.payload.data()['responsablearea'],
      this.contraBiomedico= data.payload.data()['firmabiomedico'],
     this.contraInterno = data.payload.data()['firmacontrol'],
     this.contraAlmacen = data.payload.data()['almaceninventario'],
     this.getUsuariosArea(this.contraArea)
     this.getUsuariosBiomedico(this.contraBiomedico)
     this.getUsuariosInterno(this.contraInterno)
     this.getUsuariosAlmacen(this.contraAlmacen)
  
     this.mostrarBaja.patchValue({

       fecha : data.payload.data()['fecha'],
       hora :data.payload.data()['hora'],
       bajanumero : data.payload.data()['bajanumero'],
       servicio : data.payload.data()['servicio'],
       telefonoextension : data.payload.data()['telefonoextension'],
       ambiente: data.payload.data()['ambiente'],
       personaluso: data.payload.data()['personaluso'],
       motivobaja: data.payload.data()['motivobaja'],
       reporta: data.payload.data()['reporta'],
       observaciones: data.payload.data()['observaciones'],
       firmacontrol: data.payload.data()['firmacontrol'],
       firmabiomedico: data.payload.data()['firmabiomedico'],
       responsablearea: data.payload.data()['responsablearea'],
       almaceninventario: data.payload.data()['almaceninventario'],
       nombreEquipo:data.payload.data()['nombreEquipo'],
       marca:data.payload.data()['marca'],
       modelo:data.payload.data()['modelo'],
       serie:data.payload.data()['serie'],
       nactivo:data.payload.data()['nactivo'],


     })
   })

}

getUsuariosArea(contra: string){

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
      if(contra == this.contraseñas[i]){
        this.nombreArea = this.nombre[i];
        this.cargoArea = this.cargo[i];
        this.identificacionArea = this.identificacion[i];
        this.celularArea = this.celular[i];
        this.correroArea = this.correo[i];
      
      }
    }
  })

}


getUsuariosBiomedico(contra:string){

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
      if(contra == this.contraseñas[i]){
        this.nombreBio = this.nombre[i];
        this.cargoBio = this.cargo[i];
        this.identificacionBio = this.identificacion[i];
        this.celularBio = this.celular[i];
        this.correroBio = this.correo[i];
     
      }
    }
  })

}

getUsuariosInterno(contra: string){

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
      if(contra == this.contraseñas[i]){
        this.nombreInterno = this.nombre[i];
        this.cargoInterno = this.cargo[i];
        this.identificacionInterno = this.identificacion[i];
        this.celularInterno = this.celular[i];
        this.correroInterno = this.correo[i];
     
      }
    }
  })

}

getUsuariosAlmacen(contra:string){

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
      if(contra == this.contraseñas[i]){
        this.nombreAlmacen = this.nombre[i];
        this.cargoAlmacen = this.cargo[i];
        this.identificacionAlmacen = this.identificacion[i];
        this.celularAlmacen = this.celular[i];
        this.correroAlmacen = this.correo[i];
     
      }
    }
  })

}

}
