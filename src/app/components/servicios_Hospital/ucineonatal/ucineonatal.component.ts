import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { EquiposService } from 'src/app/services/equipos.service';

@Component({
  selector: 'app-ucineonatal',
  templateUrl: './ucineonatal.component.html',
  styleUrls: ['./ucineonatal.component.css']
})
export class UcineonatalComponent implements OnInit {
  total:number;
 equipos: any[]=[];
 estado: string;
 

  constructor( private _equiposServices: EquiposService,private firestore: AngularFirestore) {
      
  } 


  ngOnInit(): void {
    this.getEquipo()
  }
  getEquipo(){
    this._equiposServices.getEquiposMedicina().subscribe(data => {
      this.equipos = [];
      data.forEach((element: any)=>{
        this.equipos.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data(),
          

        })
        
        
      });
  

    })
  }


  }




  

  




