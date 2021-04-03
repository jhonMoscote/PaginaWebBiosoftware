import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-porcentaje-correctivo',
  templateUrl: './porcentaje-correctivo.component.html',
  styleUrls: ['./porcentaje-correctivo.component.css']
})
export class PorcentajeCorrectivoComponent implements OnInit {
  mantenimientoss :any[]=[];
  numeronorealizados:number;
  constructor(private firestore: AngularFirestore) { }

  ngOnInit(): void {
    this.getFallasPersonal()
  }
  consultaPreventivo(){
    return this.firestore.collection("correctivo", ref => ref.where("asistencia" ,"==", "Correctivo" )).snapshotChanges();
   
     
     }

  getFallasPersonal(){
    this.
    consultaPreventivo().subscribe(data => {
      this.mantenimientoss = [];
      data.forEach((element: any)=>{
        //console.log(element.payload.doc.id);
        //console.log(element.payload.doc.data());
        this.mantenimientoss.push({
          
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        })
      });
      console.log("numero"+this.mantenimientoss.length);
this.numeronorealizados = this.mantenimientoss.length;
    })
  }

}
