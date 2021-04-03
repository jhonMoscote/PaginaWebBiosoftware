import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { EquiposService } from 'src/app/services/equipos.service';

@Component({
  selector: 'app-consultoriomedicina4',
  templateUrl: './consultoriomedicina4.component.html',
  styleUrls: ['./consultoriomedicina4.component.css']
})
export class Consultoriomedicina4Component implements OnInit {

  total:number;
  equipos: any[]=[];
  equiposMedicina: any[]=[];
  costoMedicinaGenaral4: number;
 
   constructor( private _equiposServices: EquiposService, private firestore: AngularFirestore) {
       
   } 
 
 
   ngOnInit(): void {
     this.getEquipo(), this.getCostosMedicina4()
   }
   getEquipo(){
     this._equiposServices.getEquiposConsultorioMedicina4().subscribe(data => {
       this.equipos = [];
       data.forEach((element: any)=>{
         //console.log(element.payload.doc.id);
         //console.log(element.payload.doc.data());
         this.equipos.push({
           id: element.payload.doc.id,
           ...element.payload.doc.data()
         })
       });
       console.log(this.equipos);
 
     })
 
 }

 getMedicina4(){
  return this.firestore.collection('correctivo', ref=> ref.where("consultorio", "==", "Consultorio Medicina General 4")).snapshotChanges();
 
 }

 getCostosMedicina4(){
  this.getMedicina4().subscribe(data => {
    this.equiposMedicina = [];
    data.forEach((element: any)=>{
    
      this.equiposMedicina.push({

        consultorio:element.payload.doc.consultorio,
       ...element.payload.doc.data()
      })    
    }); 
this.costoMedicinaGenaral4=  this.equiposMedicina.map((costos)=>costos.costo).reduce((prev,next)=>prev+next,0)
// this.equipos.map((costos)=>costos.consultorio);
console.log("medina 4"+this.costoMedicinaGenaral4);
  })}

}
