import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { EquiposService } from 'src/app/services/equipos.service';

@Component({
  selector: 'app-consultaprioritaria',
  templateUrl: './consultaprioritaria.component.html',
  styleUrls: ['./consultaprioritaria.component.css']
})
export class ConsultaprioritariaComponent implements OnInit {

  total:number;
  equipos: any[]=[];
  equiposConsultaPrioritaria: any[]=[];
  costoConsultaPrioritaria: number;
 
   constructor( private _equiposServices: EquiposService, private firestore: AngularFirestore) {
       
   } 
 
 
   ngOnInit(): void {
     this.getEquipo(),this.getCostosConsultaPrioritaria()
   }
    getEquipo(){
      this._equiposServices.getEquiposConsulta().subscribe(data => {
        this.equipos = [];
        data.forEach((element: any)=>{
          this.equipos.push({
            id: element.payload.doc.id,
            ...element.payload.doc.data()
          })
        });
  
      })

    }

    getConsultaPrioritaria(){
      return this.firestore.collection('correctivo', ref=> ref.where("servicio", "==", "Consulta Prioritaria")).snapshotChanges();
     
     }
  
     
    getCostosConsultaPrioritaria(){
      this.getConsultaPrioritaria().subscribe(data => {
        this.equiposConsultaPrioritaria = [];
        data.forEach((element: any)=>{
        
          this.equiposConsultaPrioritaria.push({
   
            consultorio:element.payload.doc.consultorio,
           ...element.payload.doc.data()
          })    
        }); 
    this.costoConsultaPrioritaria=  this.equiposConsultaPrioritaria.map((costos)=>costos.costo).reduce((prev,next)=>prev+next,0)
      })}
}
