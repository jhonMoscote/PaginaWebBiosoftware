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
  mantenimientoNoRealizados:number;
  porcentajeEficacia: number;
  porcentajeFallo:number;
  valor:number;
  periocidad: any[]=[];
  pericidadNumeros: any[]=[];
  constructor(private firestore: AngularFirestore) { }

  ngOnInit(): void {
    this. getEquipo(), this.getNumeroCorrectivo(), this.getPreventivos(),this.getFallasPersonal()
  }

  getEquipos(){
    return this.firestore.collection('equipos', ref=> ref.where("periodicidadTiempo", "!=", null)).snapshotChanges();
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
     this.mantenimientoNoRealizados =   this.numeropreventivos - this.numeronorealizados;
      this.porcentajeEficacia = this.numeronorealizados / this.numeropreventivos *100;
      this.porcentajeFallo = 100-(this.numeronorealizados / this.numeropreventivos *100);
  return this.mantenimientoNoRealizados, this.porcentajeEficacia,  this.porcentajeFallo
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
      console.log(this.programadospreventivos);
     this.periocidad =  this.programadospreventivos.map((horas)=>horas.periodicidadTiempo)
      console.log(this.periocidad)
      for(let i=0; i < this.periocidad.length;i++){
        if(this.periocidad[i]=="Trismetral"){
          this.valor= 4;
          
        }else
        if(this.periocidad[i]=="Bimestral"){
          this.valor= 6;
        }
        else
        if(this.periocidad[i]=="Semestral"){
          this.valor= 2;
        }
        else
        if(this.periocidad[i]=="Anual"){
          this.valor= 1;
        }
        this.pericidadNumeros[i] = this.valor;
        
       
      }

      this.numeropreventivos =     this.pericidadNumeros.reduce((prev,next)=>prev+next,0)
    
     
      console.log("valor",this.valor)
      //this.numeropreventivos=  this.programadospreventivos.map((horas)=>horas.periodicidadTiempo).reduce((prev,next)=>prev+next,0)
      console.log(this.pericidadNumeros)
    //   return   this.numeropreventivos
  
    })}

    getFallasPersonal(){
      this.
      consultaPreventivo().subscribe(data => {
        this.mantenimientoss = [];
        data.forEach((element: any)=>{
          this.mantenimientoss.push({
            
            id: element.payload.doc.id,
            ...element.payload.doc.data()
          })
        });
  this.numeronorealizados = this.mantenimientoss.length;
  this.mantenimientoNoRealizados =   this.numeropreventivos - this.numeronorealizados,
  this.porcentajeEficacia = ((this.numeronorealizados / this.numeropreventivos) *100),
  this.porcentajeFallo = 100-(this.numeronorealizados / this.numeropreventivos *100)
      return this.numeronorealizados,this.mantenimientoNoRealizados,this.porcentajeEficacia,this.porcentajeFallo

      })
    }

   





}
