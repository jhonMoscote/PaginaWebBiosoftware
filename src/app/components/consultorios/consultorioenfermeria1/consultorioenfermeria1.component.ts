import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { EquiposService } from 'src/app/services/equipos.service';

@Component({
  selector: 'app-consultorioenfermeria1',
  templateUrl: './consultorioenfermeria1.component.html',
  styleUrls: ['./consultorioenfermeria1.component.css']
})
export class Consultorioenfermeria1Component implements OnInit {

  total:number;
  equipos: any[]=[];
  equiposEnfermeria: any[]=[];
  costoEnfermeria: number;
  costoEnfermeria2: number;

  
 
   constructor( private _equiposServices: EquiposService,private firestore: AngularFirestore) {
       
   } 
 
 
   ngOnInit(): void {
     this.getEquipo(),this.getCostosEnfermeria1()
   }
   getEquipo(){
     this._equiposServices.getEquiposConsultorioEnfermeria1().subscribe(data => {
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





 getEquipos(){
   return this.firestore.collection('correctivo', ref=> ref.where("costo", ">=", 0)).snapshotChanges();
 }



   getEnfermeria1(){
    return this.firestore.collection('correctivo', ref=> ref.where("consultorio", "==", "Consultorio Enfermeria 1")).snapshotChanges();
   
   }

   getCostosEnfermeria1(){
    this.getEnfermeria1().subscribe(data => {
      this.equiposEnfermeria = [];
      data.forEach((element: any)=>{
      
        this.equiposEnfermeria.push({
 
          consultorio:element.payload.doc.consultorio,
         ...element.payload.doc.data()
        })    
      }); 
  this.costoEnfermeria=  this.equiposEnfermeria.map((costos)=>costos.costo).reduce((prev,next)=>prev+next,0)
  // this.equipos.map((costos)=>costos.consultorio);
  console.log("medina 1"+this.costoEnfermeria);
    })}

}
