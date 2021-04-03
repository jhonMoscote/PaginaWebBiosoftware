import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ReactiveFormsModule } from '@angular/forms';

import { Observable } from 'rxjs';
import 'firebase/firestore';
import { EquiposService } from 'src/app/services/equipos.service';
@Component({
  selector: 'app-riesgoalto',
  templateUrl: './riesgoalto.component.html',
  styleUrls: ['./riesgoalto.component.css']
})
export class RiesgoaltoComponent implements OnInit {
  //equipos: Observable<any[]>;
  equipos: any[]=[];
 
  constructor( private _equiposServices: EquiposService) {
   // this.equipos = firestore.collection('equipos' ).valueChanges();
      //  this.equipos = firestore.collection('equipos', ref => ref.where("clasificacionRiesgo","==", "Riesgo Alto")).valueChanges();
       
  } 

  

  ngOnInit(): void {
    this.getEquipo()
  }
  getEquipo(){
    this._equiposServices.getEquiposAlmacenRiesgoAlto().subscribe(data => {
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
