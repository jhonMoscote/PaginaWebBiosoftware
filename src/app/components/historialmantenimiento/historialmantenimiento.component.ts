import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import * as firebase from 'firebase';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { elementAt } from 'rxjs/operators';
import { EquiposService } from 'src/app/services/equipos.service';
import { getHeapSnapshot } from 'v8';

@Component({
  selector: 'app-historialmantenimiento',
  templateUrl: './historialmantenimiento.component.html',
  styleUrls: ['./historialmantenimiento.component.css']
})
export class HistorialmantenimientoComponent implements OnInit {
  id: string|null
  mantenimientos: any[]=[];
  mantenimientosCorrectivos: any[]=[];
  mantenimientoss: any[]=[];
  horasPreventivo: any[]=[];
  horasCorrectivo: any[]=[];
  numeroFallasPersonal : number;
  numeroFallasEquipos: number;
  numeroFallasElectrico: number;
  fallas: number;
  numerohorasPreventivo: number =0;
  numerohorasCorrectivo: number=0;
  auxpreventivo: number;
  idCorrectivo:string;
  constructor(private firestore: AngularFirestore, private router: Router,private aRoute: ActivatedRoute) { 
   
    
    this.id = this.aRoute.snapshot.paramMap.get('id');
   
  
  }



  ngOnInit(): void {
    this.getEquipo(),  this.getFallasPersonal(),this.getFallasEquipos(), this.getNumeroPreventivo(), this. getPreventivo(),this.getNumeroCorrectivo(),this.getFallasElectricas()
   
    
   

   
  }

 


  consultaCorrectivo(){
 return this.firestore.collection("correctivo", ref => ref.where("ids" ,"==", this.id )).snapshotChanges();

  
  }
  consultaPreventivo(){
    return this.firestore.collection("preventivo", ref => ref.where("id" ,"==", this.id )).snapshotChanges();
   
     
     }
  conteoPersonal(){

return this.firestore.collection("correctivo", ref => ref.where("ids" ,"==", this.id ).where( "criteriofalla" ,"==", "Falla del Personal" )).snapshotChanges();
  
  
     }
  conteoEquipos(){
      return this.firestore.collection("correctivo", ref => ref.where("ids" ,"==", this.id ).where( "criteriofalla" ,"==", "Falla del Equipo" )).snapshotChanges();
 
    }

    conteoElectrico(){
      return this.firestore.collection("correctivo", ref => ref.where("ids" ,"==", this.id ).where( "criteriofalla" ,"==", "Falla Instalación Eléctrica" )).snapshotChanges();
 
    }

    conteoHoraPreventivo(){
      return this.firestore.collection("preventivo", ref => ref.where("ids" ,"==", this.id ).where( "tiempoejecucion" ,">=", 0 )).snapshotChanges();
 
    }
    conteoHoraCorrectivo(){
      return this.firestore.collection("correctivo", ref => ref.where("ids" ,"==", this.id).where( "tiempoejecucion" ,">=", 0 )).snapshotChanges();
 
    }
  getEquipo(){
    this.
    consultaCorrectivo().subscribe(data => {
      this.mantenimientosCorrectivos = [];
      data.forEach((element: any)=>{
        this.mantenimientosCorrectivos.push({

          id: element.payload.doc.id,
          ...element.payload.doc.data()
        })
      });
  
    })
  }

  eliminarUsuario(id: string): Promise<any> {
    return this.firestore.collection('usuarios').doc(id).delete();
  }
  getCorrectivo(id: string): Observable<any>{
    return this.firestore.collection('equipos').doc(id).snapshotChanges();
    
  }

 

  getPreventivo(){
    this.
    consultaPreventivo().subscribe(data => {
      this.mantenimientos = [];
      data.forEach((element: any)=>{
        this.mantenimientos.push({

          id: element.payload.doc.id,
          ...element.payload.doc.data()
        })
      });

    })
  }

  getFallasPersonal(){
    this.
    conteoPersonal().subscribe(data => {
      this.mantenimientoss = [];
      data.forEach((element: any)=>{
        this.mantenimientoss.push({
          
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        })
      });
    this.numeroFallasPersonal = this.mantenimientoss.length;
    })
  }

  getFallasEquipos(){
    this.
    conteoEquipos().subscribe(data => {
      this.mantenimientoss = [];
      data.forEach((element: any)=>{
        this.mantenimientoss.push({
          
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        })
      });
this.numeroFallasEquipos = this.mantenimientoss.length;
    })
  }

  getFallasElectricas(){
    this.conteoElectrico
    ().subscribe(data => {
      this.mantenimientoss = [];
      data.forEach((element: any)=>{
        this.mantenimientoss.push({
          
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        })
      });
this.numeroFallasElectrico = this.mantenimientoss.length;
    })
  }

  getNumeroPreventivo(){
    this.conteoHoraPreventivo().subscribe(data => {
      this.horasPreventivo = [];
      data.forEach((element: any)=>{
      
        this.horasPreventivo.push({
 
         tiempoejecucion:element.payload.doc.tiempoejecucion,
         ...element.payload.doc.data()
        })    
      }); 
  this.numerohorasPreventivo=  this.horasPreventivo.map((horas)=>horas.tiempoejecucion).reduce((prev,next)=>prev+next,0)
    })}

    getNumeroCorrectivo(){
      this.conteoHoraCorrectivo().subscribe(data => {
        this.horasCorrectivo = [];
        data.forEach((element: any)=>{
        
          this.horasCorrectivo.push({
   
           tiempoejecucion:element.payload.doc.tiempoejecucion,
           ...element.payload.doc.data()
          })    
        }); 
    this.numerohorasCorrectivo=  this.horasCorrectivo.map((horas)=>horas.tiempoejecucion).reduce((prev,next)=>prev+next,0)
      })}


 

 



}
