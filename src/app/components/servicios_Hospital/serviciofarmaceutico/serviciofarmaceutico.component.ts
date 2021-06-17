import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { EquiposService } from 'src/app/services/equipos.service';

@Component({
  selector: 'app-serviciofarmaceutico',
  templateUrl: './serviciofarmaceutico.component.html',
  styleUrls: ['./serviciofarmaceutico.component.css']
})
export class ServiciofarmaceuticoComponent implements OnInit {

  total:number;
 equipos: any[]=[];
 equiposServicioFarmaceutico: any[]=[];
 costosFarmaceuticos:number;

  constructor( private _equiposServices: EquiposService, private firestore: AngularFirestore) {
      
  } 


  ngOnInit(): void {
    this.getEquipo(), this.getCostosFarmaceutico()
  }
  getEquipo(){
    this._equiposServices.getEquiposServicio().subscribe(data => {
      this.equipos = [];
      data.forEach((element: any)=>{
        this.equipos.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        })
      });

    })
  }


  getServicioFarmaceutico(){
    return this.firestore.collection('correctivo', ref=> ref.where("servicio", "==", "Servicio Farmaceutico")).snapshotChanges();
   
   }




   getCostosFarmaceutico(){
    this.getServicioFarmaceutico().subscribe(data => {
      this.equiposServicioFarmaceutico = [];
      data.forEach((element: any)=>{
      
        this.equiposServicioFarmaceutico.push({
 
          consultorio:element.payload.doc.consultorio,
         ...element.payload.doc.data()
        })    
      }); 
  this.costosFarmaceuticos=  this.equiposServicioFarmaceutico.map((costos)=>costos.costo).reduce((prev,next)=>prev+next,0)
    })}
}
