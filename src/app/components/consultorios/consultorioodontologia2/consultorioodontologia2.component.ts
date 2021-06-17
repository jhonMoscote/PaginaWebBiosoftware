import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { EquiposService } from 'src/app/services/equipos.service';

@Component({
  selector: 'app-consultorioodontologia2',
  templateUrl: './consultorioodontologia2.component.html',
  styleUrls: ['./consultorioodontologia2.component.css']
})
export class Consultorioodontologia2Component implements OnInit {

  total:number;
  equipos: any[]=[];
  equiposOdontologia: any[]=[];
  costoOdontologia2: number;
  
 
   constructor( private _equiposServices: EquiposService, private firestore: AngularFirestore) {
       
   } 
 
 
   ngOnInit(): void {
     this.getEquipo(),this.getCostosOdontologia2()
   }
   getEquipo(){
     this._equiposServices.getEquiposConsultorioOdontologia2().subscribe(data => {
       this.equipos = [];
       data.forEach((element: any)=>{
         //console.log(element.payload.doc.id);
         //console.log(element.payload.doc.data());
         this.equipos.push({
           id: element.payload.doc.id,
           ...element.payload.doc.data()
         })
       });
     
 
     })
 
 }

 getOdontologia2(){
  return this.firestore.collection('correctivo', ref=> ref.where("consultorio", "==", "Consultorio Odontologico 2")).snapshotChanges();
 
 }

 getCostosOdontologia2(){
  this.getOdontologia2().subscribe(data => {
    this.equiposOdontologia = [];
    data.forEach((element: any)=>{
    
      this.equiposOdontologia.push({

        consultorio:element.payload.doc.consultorio,
       ...element.payload.doc.data()
      })    
    }); 
this.costoOdontologia2=  this.equiposOdontologia.map((costos)=>costos.costo).reduce((prev,next)=>prev+next,0)

  })}

}
