import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-porcentaje-correctivo',
  templateUrl: './porcentaje-correctivo.component.html',
  styleUrls: ['./porcentaje-correctivo.component.css']
})
export class PorcentajeCorrectivoComponent implements OnInit {
  mantenimientoss :any[]=[];
  mantenimientosCorrectivos: any[]=[];
  numeronorealizados:number;
  NumeroProgramadosCorrectivos: number;
  constructor(private firestore: AngularFirestore) { }

  ngOnInit(): void {
    this.getFallasPersonal(), this.getNumeroCorrectivos()
  }
  consultaPreventivo(){
    return this.firestore.collection("correctivo", ref => ref.where("asistencia" ,"==", "Correctivo" )).snapshotChanges();
   
     
     }


  consultaCorrectivo(){
    return this.firestore.collection("Reporte").snapshotChanges();
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
      
this.numeronorealizados = this.mantenimientoss.length;
    })
  }

  getNumeroCorrectivos(){
    this.consultaCorrectivo().subscribe(data=>{
      this.mantenimientosCorrectivos=[];
      data.forEach((element:any)=>{
        this.mantenimientosCorrectivos.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        })
      });
      this.NumeroProgramadosCorrectivos = this.mantenimientosCorrectivos.length;
      
    })
  }

}
