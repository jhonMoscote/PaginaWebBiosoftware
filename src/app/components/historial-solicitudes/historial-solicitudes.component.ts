import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { threadId } from 'worker_threads';

@Component({
  selector: 'app-historial-solicitudes',
  templateUrl: './historial-solicitudes.component.html',
  styleUrls: ['./historial-solicitudes.component.css']
})
export class HistorialSolicitudesComponent implements OnInit {
  id: string|null
  SolicitudesCorrectivos: any[]=[];
  constructor(private ARoute: ActivatedRoute,private firestore: AngularFirestore) {
   this.id =  this.ARoute.snapshot.paramMap.get('id');
   }

  ngOnInit(): void {
    this. getReporte()
  }

  consultaCorrectivo(){
    return this.firestore.collection("Reporte", ref => ref.where("ids" ,"==", this.id )).snapshotChanges();
   
     }

     getReporte(){
      this.
      consultaCorrectivo().subscribe(data => {
        this.SolicitudesCorrectivos = [];
        data.forEach((element: any)=>{
          this.SolicitudesCorrectivos.push({
  
            id: element.payload.doc.id,
            ...element.payload.doc.data()
          })
        });
        console.log(this.SolicitudesCorrectivos)
    
      })
    }

}
