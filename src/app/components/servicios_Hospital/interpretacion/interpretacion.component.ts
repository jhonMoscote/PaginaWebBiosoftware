import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { EquiposService } from 'src/app/services/equipos.service';

@Component({
  selector: 'app-interpretacion',
  templateUrl: './interpretacion.component.html',
  styleUrls: ['./interpretacion.component.css']
})
export class InterpretacionComponent implements OnInit {

  total:number;
  equipos: any[]=[];
  equiposToma: any[]=[];
  equiposTomas: number;
 
   constructor( private _equiposServices: EquiposService, private firestore: AngularFirestore) {
       
   } 
 
 
   ngOnInit(): void {
     this.getEquipo(),this.getCostosToma()
   }
   getEquipo(){
     this._equiposServices.getEquiposInterpretacion().subscribe(data => {
       this.equipos = [];
       data.forEach((element: any)=>{
         this.equipos.push({
           id: element.payload.doc.id,
           ...element.payload.doc.data()
         })
       });
 
     })

  }

  
  getToma(){
    return this.firestore.collection('correctivo', ref=> ref.where("servicio", "==", "Toma e interpretacion de Radiografias Odontologicas")).snapshotChanges();
   
   }

   getCostosToma(){
    this.getToma().subscribe(data => {
      this.equiposToma = [];
      data.forEach((element: any)=>{
      
        this.equiposToma.push({
 
          consultorio:element.payload.doc.consultorio,
         ...element.payload.doc.data()
        })    
      }); 
  this.equiposTomas=  this.equiposToma.map((costos)=>costos.costo).reduce((prev,next)=>prev+next,0)

    })}
}
