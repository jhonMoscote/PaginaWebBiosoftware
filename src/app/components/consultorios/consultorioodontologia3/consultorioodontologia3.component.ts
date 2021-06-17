import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { EquiposService } from 'src/app/services/equipos.service';

@Component({
  selector: 'app-consultorioodontologia3',
  templateUrl: './consultorioodontologia3.component.html',
  styleUrls: ['./consultorioodontologia3.component.css']
})
export class Consultorioodontologia3Component implements OnInit {

  total:number;
  equipos: any[]=[];
  equiposOdontologia: any[]=[];
  costoOdontologia3:number;
   constructor( private _equiposServices: EquiposService, private firestore: AngularFirestore) {
       
   } 
 
 
   ngOnInit(): void {
     this.getEquipo(),this.getCostosOdontologia3()
   }
   getEquipo(){
     this._equiposServices.getEquiposConsultorioOdontologia3().subscribe(data => {
       this.equipos = [];
       data.forEach((element: any)=>{
         this.equipos.push({
           id: element.payload.doc.id,
           ...element.payload.doc.data()
         })
       });
 
     })
 
 }

 getOdontologia3(){
  return this.firestore.collection('correctivo', ref=> ref.where("consultorio", "==", "Consultorio Odontologico 3")).snapshotChanges();
 
 }

 getCostosOdontologia3(){
  this.getOdontologia3().subscribe(data => {
    this.equiposOdontologia = [];
    data.forEach((element: any)=>{
    
      this.equiposOdontologia.push({

        consultorio:element.payload.doc.consultorio,
       ...element.payload.doc.data()
      })    
    }); 
this.costoOdontologia3=  this.equiposOdontologia.map((costos)=>costos.costo).reduce((prev,next)=>prev+next,0)

  })}

}
