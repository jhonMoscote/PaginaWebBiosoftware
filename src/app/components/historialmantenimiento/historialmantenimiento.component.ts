import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import * as firebase from 'firebase';
import { ToastrService } from 'ngx-toastr';
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
  fallas: number;
  numerohorasPreventivo: number =0;
  numerohorasCorrectivo: number=0;
  auxpreventivo: number;
  constructor(private firestore: AngularFirestore, private router: Router,private aRoute: ActivatedRoute) { 
   
    
    this.id = this.aRoute.snapshot.paramMap.get('id');
    console.log(this.id);
   
  
  }



  ngOnInit(): void {
    this.getEquipo(),  this.getFallasPersonal(),this.getFallasEquipos(), this.getNumeroPreventivo(), this. getPreventivo(),this.getNumeroCorrectivo()
   
    
   

   
  }

 


  consultaCorrectivo(){
 return this.firestore.collection("correctivo", ref => ref.where("id" ,"==", this.id )).snapshotChanges();

  
  }
  consultaPreventivo(){
    return this.firestore.collection("preventivo", ref => ref.where("id" ,"==", this.id )).snapshotChanges();
   
     
     }
  conteoPersonal(){

return this.firestore.collection("correctivo", ref => ref.where("id" ,"==", this.id ).where( "criteriofalla" ,"==", "Falla del Personal" )).snapshotChanges();
  
  
     }
  conteoEquipos(){
      return this.firestore.collection("correctivo", ref => ref.where("id" ,"==", this.id ).where( "criteriofalla" ,"==", "Falla del Equipo" )).snapshotChanges();
 
    }

    conteoHoraPreventivo(){
      return this.firestore.collection("preventivo", ref => ref.where("id" ,"==", this.id ).where( "tiempoejecucion" ,">=", 0 )).snapshotChanges();
 
    }
    conteoHoraCorrectivo(){
      return this.firestore.collection("correctivo", ref => ref.where("id" ,"==", this.id).where( "tiempoejecucion" ,">=", 0 )).snapshotChanges();
 
    }
  getEquipo(){
    this.
    consultaCorrectivo().subscribe(data => {
      this.mantenimientosCorrectivos = [];
      data.forEach((element: any)=>{
        //console.log(element.payload.doc.id);
        //console.log(element.payload.doc.data());
        this.mantenimientosCorrectivos.push({

          id: element.payload.doc.id,
          ...element.payload.doc.data()
        })
      });
      console.log("core"+this.mantenimientosCorrectivos);

    })
  }

  getPreventivo(){
    this.
    consultaPreventivo().subscribe(data => {
      this.mantenimientos = [];
      data.forEach((element: any)=>{
        //console.log(element.payload.doc.id);
        //console.log(element.payload.doc.data());
        this.mantenimientos.push({

          id: element.payload.doc.id,
          ...element.payload.doc.data()
        })
      });
      console.log(this.mantenimientos);
      console.log("preventio")

    })
  }

  getFallasPersonal(){
    this.
    conteoPersonal().subscribe(data => {
      this.mantenimientoss = [];
      data.forEach((element: any)=>{
        //console.log(element.payload.doc.id);
        //console.log(element.payload.doc.data());
        this.mantenimientoss.push({
          
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        })
      });
      console.log("numero"+this.mantenimientoss.length);
this.numeroFallasPersonal = this.mantenimientoss.length;
    })
  }

  getFallasEquipos(){
    this.
    conteoEquipos().subscribe(data => {
      this.mantenimientoss = [];
      data.forEach((element: any)=>{
        //console.log(element.payload.doc.id);
        //console.log(element.payload.doc.data());
        this.mantenimientoss.push({
          
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        })
      });
      console.log("numero equipos"+this.mantenimientoss.length);
this.numeroFallasEquipos = this.mantenimientoss.length;
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
