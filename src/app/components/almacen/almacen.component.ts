import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { element } from 'protractor';
import { Observable } from 'rxjs';
import { RepuestosService } from 'src/app/services/repuestos.service';

@Component({
  selector: 'app-almacen',
  templateUrl: './almacen.component.html',
  styleUrls: ['./almacen.component.css']
})
export class AlmacenComponent implements OnInit {

  repuestos: any[]=[];
  constructor(private _repuestoService: RepuestosService) {
   //this.repuestos = firestore.collection('repuestos' ).valueChanges();
        // this.equipos = firestore.coll ection('equipos', ref => ref.where("servicio","==", "HOSPITALIZACION")).valueChanges();
        
   } 
  ngOnInit(): void {
    this.getRepuestos()
  }
  getRepuestos(){
    this._repuestoService.getRepuestos().subscribe(data => {
      this.repuestos = [];
      data.forEach((element: any)=>{
        //console.log(element.payload.doc.id);
        //console.log(element.payload.doc.data());
        this.repuestos.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        })
      });
      console.log(this.repuestos);

    })
  }

}
