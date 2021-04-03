import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { EquiposService } from 'src/app/services/equipos.service';

@Component({
  selector: 'app-temprana',
  templateUrl: './temprana.component.html',
  styleUrls: ['./temprana.component.css']
})
export class TempranaComponent implements OnInit {

  total:number;
  equipos: any[]=[];
  equiposDetencionTemprana: any[]=[];
  costoDetencion:number;
   constructor( private _equiposServices: EquiposService, private firestore: AngularFirestore) {
       
   } 
 
 
   ngOnInit(): void {
     this.getEquipo(), this.getCostosDetencionTemprana()
   }
   getEquipo(){
     this._equiposServices.getEquiposTemprana().subscribe(data => {
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

    getDetencionTemprana(){
      return this.firestore.collection('correctivo', ref=> ref.where("servicio", "==", "Detencion Temprana")).snapshotChanges();
     
     }
  
  
  
  
     getCostosDetencionTemprana(){
      this.getDetencionTemprana().subscribe(data => {
        this.equiposDetencionTemprana = [];
        data.forEach((element: any)=>{
        
          this.equiposDetencionTemprana.push({
   
            consultorio:element.payload.doc.consultorio,
           ...element.payload.doc.data()
          })    
        }); 
    this.costoDetencion=  this.equiposDetencionTemprana.map((costos)=>costos.costo).reduce((prev,next)=>prev+next,0)
    // this.equipos.map((costos)=>costos.consultorio);
    console.log("consulta prioritaria"+this.costoDetencion);
      })}
}
