import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import 'firebase/firestore';
import { EquiposService } from 'src/app/services/equipos.service';
@Component({
  selector: 'app-riesgobajo',
  templateUrl: './riesgobajo.component.html',
  styleUrls: ['./riesgobajo.component.css']
})
export class RiesgobajoComponent implements OnInit {
  equipos: any[]=[];
  constructor(private _equiposServices: EquiposService) {
   // this.equipos = firestore.collection('equipos', ref => ref.where("clasificacionRiesgo","==", "Riesgo Bajo")).valueChanges();
  } 
  ngOnInit(): void {
    this.getEquipo()
  }
  getEquipo(){
    this._equiposServices.getEquiposAlmacenRiesgoBajo().subscribe(data => {
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
