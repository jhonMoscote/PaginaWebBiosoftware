import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { element } from 'protractor';
import { BrowserModule } from '@angular/platform-browser';


import {map} from 'rxjs/operators';
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
        //console.log(element.payload.doc.id);
        //console.log(element.payload.doc.data());
        this.equipos.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data(),
          

        })
        
        
      });
      console.log(this.equipos);
  

    })
  }


  }


   //this.equipos = firestore.collection('equipos' ).valueChanges();
 //this.equipos = firestore.collection('equipos', ref => ref.where("servicio","==", "UCI NEONATAL")).valueChanges();
       /*this.ItemsCollection = firestore.collection<any>('equipos');
        this.equipos = this.ItemsCollection.snapshotChanges().pipe(
          map(actions => actions.map(a =>{
            const data = a.payload.doc.data() as any;
            const id = a.payload.doc.id;
            return{id,...data};
            
          }))
        );*/

  

  




