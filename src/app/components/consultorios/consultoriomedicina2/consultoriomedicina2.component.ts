import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { EquiposService } from 'src/app/services/equipos.service';

@Component({
  selector: 'app-consultoriomedicina2',
  templateUrl: './consultoriomedicina2.component.html',
  styleUrls: ['./consultoriomedicina2.component.css']
})
export class Consultoriomedicina2Component implements OnInit {

  total:number;
  equipos: any[]=[];
  costoMedicinaGenaral2: number;
  
 
   constructor( private _equiposServices: EquiposService, private firestore: AngularFirestore) {
       
   } 
 
 
   ngOnInit(): void {
     this.getEquipo()
   }
   getEquipo(){
     this._equiposServices.getEquiposConsultorioMedicina2().subscribe(data => {
       this.equipos = [];
       data.forEach((element: any)=>{
         this.equipos.push({
           id: element.payload.doc.id,
           ...element.payload.doc.data()
         })
       });
 
     })
 
 }

 getMedicina2(){
  return this.firestore.collection('correctivo', ref=> ref.where("consultorio", "==", "Consultorio Medicina General 2")).snapshotChanges();
 
 }

 getCostosMedicina2(){
  this.getMedicina2().subscribe(data => {
    this.equipos = [];
    data.forEach((element: any)=>{
    
      this.equipos.push({

        consultorio:element.payload.doc.consultorio,
       ...element.payload.doc.data()
      })    
    }); 
this.costoMedicinaGenaral2=  this.equipos.map((costos)=>costos.costo).reduce((prev,next)=>prev+next,0)
  })}
}
