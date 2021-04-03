import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { EquiposService } from 'src/app/services/equipos.service';

@Component({
  selector: 'app-consultorioodontologia1',
  templateUrl: './consultorioodontologia1.component.html',
  styleUrls: ['./consultorioodontologia1.component.css']
})
export class Consultorioodontologia1Component implements OnInit {

  total:number;
  equipos: any[]=[];
  equiposOdontologia: any[]=[];
  costoOdontologia: number;
  
 
   constructor( private _equiposServices: EquiposService, private firestore:AngularFirestore) {
       
   } 
 
 
   ngOnInit(): void {
     this.getEquipo(), this.getCostosOdontologia1()
   }
   getEquipo(){
     this._equiposServices.getEquiposConsultorioOdontologia1().subscribe(data => {
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

 getOdontologia(){
  return this.firestore.collection('correctivo', ref=> ref.where("consultorio", "==", "Consultorio Odontologico 1")).snapshotChanges();
 
 }

 getCostosOdontologia1(){
  this.getOdontologia().subscribe(data => {
    this.equiposOdontologia = [];
    data.forEach((element: any)=>{
    
      this.equiposOdontologia.push({

        consultorio:element.payload.doc.consultorio,
       ...element.payload.doc.data()
      })    
    }); 
this.costoOdontologia=  this.equiposOdontologia.map((costos)=>costos.costo).reduce((prev,next)=>prev+next,0)
// this.equipos.map((costos)=>costos.consultorio);
console.log("medina 1"+this.costoOdontologia);
  })}

}
