import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { EquiposService } from 'src/app/services/equipos.service';

@Component({
  selector: 'app-uciadultos',
  templateUrl: './uciadultos.component.html',
  styleUrls: ['./uciadultos.component.css']
})
export class UciadultosComponent implements OnInit {

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
        this.equipos.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        })
      });

    })

}
}
