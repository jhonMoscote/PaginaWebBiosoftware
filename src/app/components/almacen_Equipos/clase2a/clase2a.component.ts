import { Component, OnInit } from '@angular/core';
import { EquiposService } from 'src/app/services/equipos.service';

@Component({
  selector: 'app-clase2a',
  templateUrl: './clase2a.component.html',
  styleUrls: ['./clase2a.component.css']
})
export class Clase2aComponent implements OnInit {
  equipos: any[]=[];
  baja: boolean =true;
  constructor(private _equiposServices: EquiposService) { }

  ngOnInit(): void {
    this.getEquipo()
  }
 


  getEquipo(){
    this._equiposServices.getEquiposAlmacenClase2A().subscribe(data => {
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
