import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { EquiposService } from 'src/app/services/equipos.service';
import { threadId } from 'worker_threads';

@Component({
  selector: 'app-reporte-preventivo',
  templateUrl: './reporte-preventivo.component.html',
  styleUrls: ['./reporte-preventivo.component.css']
})
export class ReportePreventivoComponent implements OnInit {
  mostrarDatos: FormGroup;
  MostrarPreventivo: FormGroup;
  idAux:string;
  cantidad: number[]=[]; 
  descripcion:string[]=[];
  referencia: string[]=[];
  usuarios: any []=[];
  celular: string[]=[];
  correo: string[]=[];
  identificacion: string[]=[];
  nombre:string[]=[];
  cargo:any[]=[];
  contraBiomedico:string;
  contraArea: string;
  repuesto: any[]=[];
  nombreArea:string;
  celularArea: string;
  correroArea:string;
  identificacionArea:string;
  cargoArea:string;
  contraseñas:any[]=[];
  nombreBio:string;
  celularBio: string;
  correroBio:string;
  identificacionBio:string;
  cargoBio:string;
  costo:number[]=[];
  id: string|null;
  rutinas: any[]=[];
  constructor(private auth: AuthService,private fb: FormBuilder, private Aroute: ActivatedRoute,private _servicesEquipo: EquiposService,private firestore: AngularFirestore) { 
    this.id = this.Aroute.snapshot.paramMap.get('id');
    this.idAux;
    this.mostrarDatos = this.fb.group({
     
      nombreEquipo:['', Validators.required],
      marca: ['', Validators.required],
      modelo:['', Validators.required],
      serie: ['', Validators.required],
      servicio: ['', Validators.required],
      nactivo : ['', Validators.required],
      ubicacioncon:['', Validators.required]
       
  
      });
      this.MostrarPreventivo = this.fb.group({
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
        cantidad:[''],
        observaciones:[''],
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
        periciodidad:[''],
        calibracion:[''],
        periocidadCalibracion:['']
      });
  }

  ngOnInit(): void {
    this. getObternerPreventivo(),this.getRepuestos(),this.getUsuariosArea(),this. getUsuariosBiomedico()
  }

  getPreventivo(id: string): Observable<any>{
    return this.firestore.collection('preventivo').doc(id).snapshotChanges();
    
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


  getObternerPreventivo(){
    this.getPreventivo(this.id).subscribe((data) => {
     this.idAux = data.payload.data()['ids'],
   
     this.cantidad = data.payload.data()['cantidad'],
   
     this.MostrarPreventivo.patchValue({
     
     
      asistencia :data.payload.data()['asistencia'],
      rutina1 :data.payload.data()['rutina1'],
      rutina2 :data.payload.data()['rutina2'],
      rutina3 :data.payload.data()['rutina3'],
      rutina4:data.payload.data()['rutina4'],
      rutina5:data.payload.data()['rutina5'],
      rutina6:data.payload.data()['rutina6'],
      rutina7:data.payload.data()['rutina7'],
      rutina8:data.payload.data()['rutina8'],
      rutina9:data.payload.data()['rutina9'],
      rutina10:data.payload.data()['rutina10'],
      rutina11 :data.payload.data()['rutina11'],
      rutina12 :data.payload.data()['rutina12'],
      rutina13 :data.payload.data()['rutina13'],
      rutina14:data.payload.data()['rutina14'],
      rutina15:data.payload.data()['rutina15'],
      rutina16:data.payload.data()['rutina16'],
      rutina17:data.payload.data()['rutina17'],
      rutina18:data.payload.data()['rutina18'],
      rutina19:data.payload.data()['rutina19'],
      rutina20:data.payload.data()['rutina20'],
      cantidad:data.payload.data()['cantidad'],
      observaciones:data.payload.data()['observaciones'],
      cantidadDisponible:data.payload.data()['cantidadDisponible'],
      costo:data.payload.data()['costo'],
      referencia:data.payload.data()['referencia'],
      costoReporte:data.payload.data()['costoReporte'],
      fecharealizacion:data.payload.data()['fecharealizacion'],
      tiempoejecucion:data.payload.data()['tiempoejecucion'],
      tiempofuera:data.payload.data()['tiempofuera'],
      descripcionExterno:data.payload.data()['descripcionExterno'],
      costoExterno:data.payload.data()['costoExterno'],
      contraBiomedico:data.payload.data()['contraBiomedico'],
      contraArea:data.payload.data()['contraArea'],
      periciodidad:data.payload.data()['periciodidad'],
      calibracion:data.payload.data()['calibracion'],
      periocidadCalibracion:data.payload.data()['periocidadCalibracion'],
    });
     this.esVer(this.idAux)
    this.obtenerId(this.idAux)
    ,this.getObternerRutina()
    })
    
    
  }

  

  obtenerId(id:string): Observable<any>{
   
    
    return  this.firestore.collection('rutina', ref=>ref.where('ids', '==', id)).snapshotChanges();
       
    }

    getRepuestos(){
      this.getPreventivo(this.id).subscribe((data) => {
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
   

    getObternerRutina(){
      this.obtenerId(this.idAux).subscribe(data => {
        this.rutinas = [];
        data.forEach((element: any)=>{
        
          this.rutinas.push({
   
           id:element.payload.doc.id,
           ...element.payload.doc.data()
          })    
        }); 
    //this.idAux =  this.rutinas.map((ids)=>ids.id)
   
    // this.equipos.map((costos)=>costos.consultorio);

      })}

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
