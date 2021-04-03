import { Component, OnInit } from '@angular/core';
import { EquiposService } from 'src/app/services/equipos.service';

@Component({
  selector: 'app-enfermeria',
  templateUrl: './enfermeria.component.html',
  styleUrls: ['./enfermeria.component.css']
})
export class EnfermeriaComponent implements OnInit {

  total:number;
  equipos: any[]=[];
  
 
   constructor( private _equiposServices: EquiposService) {
       
   } 
 
 
   ngOnInit(): void {
     this.getEquipo()
   }
   getEquipo(){
     this._equiposServices.getEquiposEnfermeria().subscribe(data => {
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

}
