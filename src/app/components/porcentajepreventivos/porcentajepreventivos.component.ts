import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-porcentajepreventivos',
  templateUrl: './porcentajepreventivos.component.html',
  styleUrls: ['./porcentajepreventivos.component.css']
})
export class PorcentajepreventivosComponent implements OnInit {
  equipos: any[]=[];
  programadospreventivos: any[]=[];
  mantenimientos :any[]=[];
  numeropreventivos:number ;
  numero:number;
  mantenimientoss: any[]=[];
  numeronorealizados: number;
  constructor(private firestore: AngularFirestore) { }

  ngOnInit(): void {
    this. getEquipo(), this.getNumeroCorrectivo(), this.getPreventivos(),this.getFallasPersonal()
  }

  getEquipos(){
    return this.firestore.collection('equipos', ref=> ref.where("periodicidadTiempo", ">=", 0)).snapshotChanges();
  }
  consultaPreventivo(){
    return this.firestore.collection("preventivo", ref => ref.where("asistencia" ,"==", "Preventivo" )).snapshotChanges();
   
     
     }

  getEquipo(){
    this.getEquipos().subscribe(data => {
      this.equipos = [];
      data.forEach((element: any)=>{
        this.equipos.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        })
      });
      console.log(this.equipos);

    })
  }
  getPreventivos(){
    this.consultaPreventivo().subscribe(data => {
      this.mantenimientos = [];
      data.forEach((element: any)=>{
        this.equipos.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        })
      });
     console.log("dd"+this.mantenimientos)

    })
  }


  getNumeroCorrectivo(){
    this.getEquipos().subscribe(data => {
      this.programadospreventivos = [];
      data.forEach((element: any)=>{
      
        this.programadospreventivos.push({
 
          periodicidadTiempo:element.payload.doc.periodicidadTiempo,
         ...element.payload.doc.data()
        })    
      }); 
  this.numeropreventivos=  this.programadospreventivos.map((horas)=>horas.periodicidadTiempo).reduce((prev,next)=>prev+next,0)

  console.log("dd"+this.numeropreventivos.toString());
    })}

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
