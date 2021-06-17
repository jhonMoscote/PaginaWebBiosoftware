import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { EquiposService } from 'src/app/services/equipos.service';

@Component({
  selector: 'app-consultorioenfermeria2',
  templateUrl: './consultorioenfermeria2.component.html',
  styleUrls: ['./consultorioenfermeria2.component.css']
})
export class Consultorioenfermeria2Component implements OnInit {

  total:number;
 equipos: any[]=[];
 equiposEnfermeria: any[]=[];
 costoEnfermeria: number;
 costoEnfermeria2: number;
 

  constructor( private _equiposServices: EquiposService, private firestore :AngularFirestore) {
      
  } 


  ngOnInit(): void {
    this.getEquipo(), this.getCostosEnfermeria2()
  }
  getEquipo(){
    this._equiposServices.getEquiposConsultorioEnfermeria2().subscribe(data => {
      this.equipos = [];
      data.forEach((element: any)=>{
        this.equipos.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        })
      });

    })

}

getEnfermeria2(){
  return this.firestore.collection('correctivo', ref=> ref.where("consultorio", "==", "Consultorio Enfermeria 2")).snapshotChanges();
 
 }

 getCostosEnfermeria2(){
  this.getEnfermeria2().subscribe(data => {
    this.equiposEnfermeria = [];
    data.forEach((element: any)=>{
    
      this.equiposEnfermeria.push({

        consultorio:element.payload.doc.consultorio,
       ...element.payload.doc.data()
      })    
    }); 
this.costoEnfermeria2=  this.equiposEnfermeria.map((costos)=>costos.costo).reduce((prev,next)=>prev+next,0)


  })}

}
