import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { EquiposService } from 'src/app/services/equipos.service';

@Component({
  selector: 'app-consultoriomedicina6',
  templateUrl: './consultoriomedicina6.component.html',
  styleUrls: ['./consultoriomedicina6.component.css']
})
export class Consultoriomedicina6Component implements OnInit {

  total:number;
  equipos: any[]=[];
  equiposMedicina: any[]=[];
  costoMedicinaGenaral6:number;
  
 
   constructor( private _equiposServices: EquiposService, private firestore: AngularFirestore) {
       
   } 
 
 
   ngOnInit(): void {
     this.getEquipo(),this.getCostosMedicina6()
   }
   getEquipo(){
     this._equiposServices.getEquiposConsultorioMedicina6().subscribe(data => {
       this.equipos = [];
       data.forEach((element: any)=>{
         this.equipos.push({
           id: element.payload.doc.id,
           ...element.payload.doc.data()
         })
       });
 
     })
 
 }
 getMedicina6(){
  return this.firestore.collection('correctivo', ref=> ref.where("consultorio", "==", "Consultorio Medicina General 6")).snapshotChanges();
 
 }




 
 getCostosMedicina6(){
  this.getMedicina6().subscribe(data => {
    this.equiposMedicina = [];
    data.forEach((element: any)=>{
    
      this.equiposMedicina.push({

        consultorio:element.payload.doc.consultorio,
       ...element.payload.doc.data()
      })    
    }); 
this.costoMedicinaGenaral6=  this.equiposMedicina.map((costos)=>costos.costo).reduce((prev,next)=>prev+next,0)
  })}

}
