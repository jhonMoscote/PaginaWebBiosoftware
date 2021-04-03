import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EquiposService } from 'src/app/services/equipos.service';

@Component({
  selector: 'app-fallas-equipo',
  templateUrl: './fallas-equipo.component.html',
  styleUrls: ['./fallas-equipo.component.css']
})
export class FallasEquipoComponent implements OnInit {

  [x: string]: any;

  id: string| null
  mantenimientos: any[]=[];
  mantenimientoss: any[]=[];
 
  constructor(private firestore: AngularFirestore,private fb: FormBuilder ,private aRoute: ActivatedRoute, private _servicesEquipo: EquiposService) { 
    this.id = this.aRoute.snapshot.paramMap.get('id');


    
  }

  ngOnInit(): void {
    this.getEquipo(), this.getEquipso()
   
    
   

   
  }

 

// Document reference


// Update read count


  consultaCorrectivo(){
 return this.firestore.collection("correctivo", ref => ref.where("id" ,"==", this.id ).where( "criteriofalla" ,"==", "Falla del Equipo" )).snapshotChanges();

  
  }
conteoPersonal(){
return this.firestore.collection("correctivo", ref => ref.where("id" ,"==", this.id ).where( "criteriofalla" ,"==", "Falla del Equipo")).snapshotChanges();

//var  query = rr.where("capital", "==", true);
 
     }
  getEquipo(){
    this.
    consultaCorrectivo().subscribe(data => {
      this.mantenimientos = [];
      data.forEach((element: any)=>{
        //console.log(element.payload.doc.id);
        //console.log(element.payload.doc.data());
        this.mantenimientos.push({

          id: element.payload.doc.id,
          ...element.payload.doc.data()
        })
      });
      console.log("prueba"+this.mantenimientos);

    })
  }

  getEquipso(){
    this.
    conteoPersonal().subscribe(data => {
      this.mantenimientoss = [];
      data.forEach((element: any)=>{
        //console.log(element.payload.doc.id);
        //console.log(element.payload.doc.data());
        this.mantenimientoss.push({
         

          
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        })
      });
     
      console.log(this.mantenimientoss);

    })
  }
}
