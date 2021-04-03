import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { EquiposService } from 'src/app/services/equipos.service';

@Component({
  selector: 'app-laboratorioclinico',
  templateUrl: './laboratorioclinico.component.html',
  styleUrls: ['./laboratorioclinico.component.css']
})
export class LaboratorioclinicoComponent implements OnInit {

  total:number;
  equipos: any[]=[];
  equiposLaboratorio : any[]=[];
  costoLaboratorio:number;
   constructor( private _equiposServices: EquiposService, private firestore: AngularFirestore) {
       
   } 
 
 
   ngOnInit(): void {
     this.getEquipo(),this. getCostosLaboratorio()
   }
   getEquipo(){
     this._equiposServices.getEquiposLaboratorio().subscribe(data => {
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
 
     })}

     
   getLaboratorio(){
    return this.firestore.collection('correctivo', ref=> ref.where("servicio", "==", "Laboratorio Clinico")).snapshotChanges();
   
   }




   getCostosLaboratorio(){
    this. getLaboratorio().subscribe(data => {
      this.equiposLaboratorio = [];
      data.forEach((element: any)=>{
      
        this.equiposLaboratorio.push({
 
          consultorio:element.payload.doc.consultorio,
         ...element.payload.doc.data()
        })    
      }); 
  this.costoLaboratorio=  this.equiposLaboratorio.map((costos)=>costos.costo).reduce((prev,next)=>prev+next,0)
  // this.equipos.map((costos)=>costos.consultorio);
  console.log("consulta prioritaria"+this.costoLaboratorio);
    })}

}
