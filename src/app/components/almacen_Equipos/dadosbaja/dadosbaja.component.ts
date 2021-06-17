import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { EquiposService } from 'src/app/services/equipos.service';

@Component({
  selector: 'app-dadosbaja',
  templateUrl: './dadosbaja.component.html',
  styleUrls: ['./dadosbaja.component.css']
})
export class DadosbajaComponent implements OnInit {

  equipos: any[]=[];
 
  constructor( private _equiposServices: EquiposService) {
   // this.equipos = firestore.collection('equipos' ).valueChanges();
       // this.equipos = firestore.collection('equipos', ref => ref.where("clasificacionRiesgo","==", "Dado de Baja")).valueChanges();
       
  } 
  ngOnInit(): void {
    this.getEquipo()
  }
  getEquipo(){
    this._equiposServices.getEquiposAlmacenDadosBaja().subscribe(data => {
      this.equipos = [];
      data.forEach((element: any)=>{
        this.equipos.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        })
      });

    })
  }



}
