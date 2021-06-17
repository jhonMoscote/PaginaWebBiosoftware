import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { EquiposService } from 'src/app/services/equipos.service';

@Component({
  selector: 'app-urgencias',
  templateUrl: './urgencias.component.html',
  styleUrls: ['./urgencias.component.css']
})
export class UrgenciasComponent implements OnInit {
  total:number;
 equipos: any[]=[];
 equiposPsicologia : any[]=[];
 costoPsicologia:number;

  constructor( private _equiposServices: EquiposService, private firestore: AngularFirestore) {
      
  } 


  ngOnInit(): void {
    this.getEquipo(),this. getCostosPsicologia()
  }
        getEquipo(){
          this._equiposServices.getEquiposPsicologia().subscribe(data => {
            this.equipos = [];
            data.forEach((element: any)=>{
              this.equipos.push({
                id: element.payload.doc.id,
                ...element.payload.doc.data()
              })
            });

          })

        }

        getPsicologia(){
          return this.firestore.collection('correctivo', ref=> ref.where("servicio", "==", "Psicologia")).snapshotChanges();
         
         }

         getCostosPsicologia(){
          this.getPsicologia().subscribe(data => {
            this.equiposPsicologia = [];
            data.forEach((element: any)=>{
            
              this.equiposPsicologia.push({
       
                consultorio:element.payload.doc.consultorio,
               ...element.payload.doc.data()
              })    
            }); 
        this.costoPsicologia=  this.equiposPsicologia.map((costos)=>costos.costo).reduce((prev,next)=>prev+next,0)
          })}
}
