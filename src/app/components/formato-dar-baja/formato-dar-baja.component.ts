import { Component, NgZone, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { FormBuilder, FormGroup, RequiredValidator, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EquiposService } from 'src/app/services/equipos.service';
import { AuthService } from 'src/app/services/auth.service';
import { filter } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'src/app/services/user';

@Component({
  selector: 'app-formato-dar-baja',
  templateUrl: './formato-dar-baja.component.html',
  styleUrls: ['./formato-dar-baja.component.css']
})
export class FormatoDarBajaComponent implements OnInit {
  id: string|null;
  createBaja: FormGroup;
  createEquipo: FormGroup;
  nombreEquipo:string;
  marca:string;
  modelo: string;
  serie: string;
  servicio:string;
  nactivo: string;
  clasificacionRiesgo:string;
  usuarios :any[]= [];
  usuarios2:any[]= [];
  rol :string[]= [];
  contrasena :string[]= [];
  contraControl: string;
  contraBiomedico: string;
  contraArea:string;
  contraInventario:string;
  condicionArea: Boolean;
  condicionBiomedico: Boolean;
  condicionInterno: Boolean;
  condicionInventario: Boolean;



  submitted: false;
  private productoCollection: AngularFirestoreCollection;
 
  constructor(public ngZone: NgZone, public afs: AngularFirestore, public afAuth: AngularFireAuth, private router: Router,private aRoute: ActivatedRoute, private fb: FormBuilder,
    private _servicesEquipo: EquiposService,private toastr : ToastrService,private firestore: AngularFirestore,public  AuthService: AuthService) { 
    this.id = this.aRoute.snapshot.paramMap.get('id');
    
    this.createEquipo = this.fb.group({
  
   
      clasificacionRiesgo: [''],
   
    
  
   
    });

    this.createBaja = this.fb.group({
     
      ids: [''],
      fecha: [''],
      hora: [''],
      bajanumero: [''],
      servicio: [''],
      telefonoextension: [''],
      ambiente: [''],
      personaluso: [''],
      motivobaja: [''],
      reporta: [''],
      observaciones: [''],
      firmacontrol: [''],
      firmabiomedico: [''],
      responsablearea: [''],
      almaceninventario:[''],
      nombreEquipo:[''],
      marca:[''],
      modelo:[''],
      serie:[''],
      nactivo:['']

      
    });
  }

  ngOnInit(): void {
    this. esVer() ,this. mostrarUsuarios()
  }

  esVer() {
    if (this.id !== null) {
      this._servicesEquipo.getEquipo(this.id).subscribe((data) => {
        this.nombreEquipo =  data.payload.data()['nombreEquipo'],
        this.marca = data.payload.data()['marca'],
        this.modelo =  data.payload.data()['modelo'],
        this.serie= data.payload.data()['serie'],
        this.nactivo = data.payload.data()['nactivo'],
        this.servicio = data.payload.data()['servicio'];
       
       
      });
    }
  }


  DarBaja() {


    


  
    if (this.createBaja.invalid) {
     
      return;
    }
    const dadoBaja: any = {
     
      ids: this.id,
      fecha:  this.createBaja.value.fecha,
      hora:this.createBaja.value.hora,
      bajanumero: this.createBaja.value.bajanumero,
      servicio: this.servicio,
      telefonoextension: this.createBaja.value.telefonoextension,
      ambiente: this.createBaja.value.ambiente,
      personaluso:this.createBaja.value.personaluso,
      motivobaja: this.createBaja.value.motivobaja,
      reporta: this.createBaja.value.reporta,
      observaciones: this.createBaja.value.observaciones,
      firmacontrol: this.createBaja.value.firmacontrol,
      firmabiomedico: this.createBaja.value.firmabiomedico,
      responsablearea: this.createBaja.value.responsablearea,
      almaceninventario:this.createBaja.value.almaceninventario,
      nombreEquipo:this.nombreEquipo,
      marca:this.marca,
      modelo:this.modelo,
      serie: this.serie,
      nactivo:this.nactivo,
   
      fechaCreacion: new Date().toDateString(),
      fechaActualizacion: new Date(),

    
    };
 
  
    if(this.condicionArea == true && this.condicionBiomedico == true && this.condicionInterno == true && this.condicionInventario == true){
     this. editarEquipo(this.id)

    this._servicesEquipo
      .agregarEquipoBaja(dadoBaja)
      .then(() => {
        this.toastr.success('Equipo Dado de Baja');
        this.router.navigate(['/equipos/']);
      
      })
      .catch((error) => {
        console.log(error);
      });
    }else
    if( this.condicionBiomedico != true){
      
      window.alert("Contraseña Incorrecta Ingeniero Biomedico")
  
    }else 
       if(this.condicionArea != true){
    
      window.alert("contraseña Incorrecta Jefe De Area")
    }
    else 
       if(this.condicionInterno != true){
    
      window.alert("contraseña Incorrecta Control Interno")
    }
    else 
       if(this.condicionInventario != true){
    
      window.alert("contraseña Incorrecta Encargado del Almacen")
    }
 
  }

 
  editarEquipo(id: string) {
   
   this.productoCollection= this.firestore.collection('equipos');
   this.productoCollection.doc(id).update({baja:'si'}).catch(console.log)

  }

  mostrarUsuarios(){

    this.AuthService.getUsuarios().subscribe(data=>{
      this.usuarios = [];
      data.forEach((element:any)=>{
        this.usuarios.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        })
      });
    
     

    })
  }




  async validarControl(){
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
       if(this.rol[i] =='CONTROL INTERNO'&& this.contrasena[i] == this.contraControl){
         
           this.condicionInterno = true;
           return this.condicionInterno;
       
       }else
       if(this.rol[i] == 'CONTROL INTERNO' && this.contrasena[i] != this.contraControl){
         this.condicionInterno = false;
       }
      }
     }
    })
  }

  async validarInventario(){
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
       if(this.rol[i] =='ALMACÉN INVENTARIO'&& this.contrasena[i] == this.contraInventario){
         
           this.condicionInventario = true;
            return this.condicionInventario;
       }
       else
       if(this.rol[i] == 'ALMACÉN INVENTARIO' && this.contrasena[i] != this.contraInventario){
         this.condicionInventario = false;
       }
      }
     }
    })
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
           console.log(this.condicionBiomedico)
           return this.condicionBiomedico;
       }else
       if(this.rol[i] == 'INGENIERIO BIOMÉDICO' && this.contrasena[i] != this.contraBiomedico){
         this.condicionBiomedico = false;
         console.log(this.condicionBiomedico)
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
