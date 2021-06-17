import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { EquiposService } from 'src/app/services/equipos.service';

@Component({
  selector: 'app-consultoriomedicina5',
  templateUrl: './consultoriomedicina5.component.html',
  styleUrls: ['./consultoriomedicina5.component.css']
})
export class Consultoriomedicina5Component implements OnInit {

  total:number;
  equipos: any[]=[];
  equiposMedicina: any[]=[];
  costoMedicinaGenaral5:number;
 
   constructor( private _equiposServices: EquiposService, private  firestore: AngularFirestore) {
       
   } 
 
 
   ngOnInit(): void {
     this.getEquipo(),this.getCostosMedicina5()
   }
   getEquipo(){
     this._equiposServices.getEquiposConsultorioMedicina5().subscribe(data => {
       this.equipos = [];
       data.forEach((element: any)=>{
         this.equipos.push({
           id: element.payload.doc.id,
           ...element.payload.doc.data()
         })
       });
 
     })
 
 }

 getMedicina5(){
  return this.firestore.collection('correctivo', ref=> ref.where("consultorio", "==", "Consultorio Medicina General 5")).snapshotChanges();
 
 }

 getCostosMedicina5(){
  this.getMedicina5().subscribe(data => {
    this.equiposMedicina = [];
    data.forEach((element: any)=>{
    
      this.equiposMedicina.push({

        consultorio:element.payload.doc.consultorio,
       ...element.payload.doc.data()
      })    
    }); 
this.costoMedicinaGenaral5=  this.equiposMedicina.map((costos)=>costos.costo).reduce((prev,next)=>prev+next,0)
  })}

}
