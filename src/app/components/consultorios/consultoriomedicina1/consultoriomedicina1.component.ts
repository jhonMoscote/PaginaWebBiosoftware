import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { EquiposService } from 'src/app/services/equipos.service';

@Component({
  selector: 'app-consultoriomedicina1',
  templateUrl: './consultoriomedicina1.component.html',
  styleUrls: ['./consultoriomedicina1.component.css']
})
export class Consultoriomedicina1Component implements OnInit {

  
  total:number;
 equipos: any[]=[];
 equiposMedicina: any[]=[];
 costoMedicinaGenaral: number;
 

  constructor( private _equiposServices: EquiposService, private firestore: AngularFirestore) {
      
  } 


  ngOnInit(): void {
    this.getEquipo(), this.getCostosMedicina1()
  }
  getEquipo(){
    this._equiposServices.getEquiposConsultorioMedicina1().subscribe(data => {
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


getMedicina1(){
  return this.firestore.collection('correctivo', ref=> ref.where("consultorio", "==", "Consultorio Medicina General 1")).snapshotChanges();
 
 }

 getCostosMedicina1(){
  this.getMedicina1().subscribe(data => {
    this.equiposMedicina = [];
    data.forEach((element: any)=>{
    
      this.equiposMedicina.push({

        consultorio:element.payload.doc.consultorio,
       ...element.payload.doc.data()
      })    
    }); 
this.costoMedicinaGenaral=  this.equiposMedicina.map((costos)=>costos.costo).reduce((prev,next)=>prev+next,0)
// this.equipos.map((costos)=>costos.consultorio);
console.log("medina 1"+this.costoMedicinaGenaral);
  })}





}
