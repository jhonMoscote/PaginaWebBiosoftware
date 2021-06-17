import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { element } from 'protractor';
import { EquiposService } from 'src/app/services/equipos.service';
import { PresupuestoService } from 'src/app/services/presupuesto.service';

@Component({
  selector: 'app-porcentaje-presupuesto',
  templateUrl: './porcentaje-presupuesto.component.html',
  styleUrls: ['./porcentaje-presupuesto.component.css']
})
export class PorcentajePresupuestoComponent implements OnInit {
  mantenimientos : any[]=[];
  mantenimientosPreventivos: any[]=[];
  constructor(private _presupuesto: PresupuestoService) { }
  costosCorrectivos: number;
  costosCorrectivosExterno: number;
  costosPreventivos:number;
  costosPreventivosExterno:number;
  costoTotal: number;
  costoTotalExterno: number;
  gastosMantenimientos:number=0;
  porcentajeGastos:number;
  sumaMantenimientos:number;
  gastoTotal: number;
  ngOnInit(): void {
    this.getMantenimientosCorrectivos(), this.getMantenimientosPreventivos(),this.getMantenimientoCorrectivoExterno(),this.getMantenimientoPreventivoExterno()
    
  }
  
 
  getMantenimientosCorrectivos(){
    this._presupuesto.getCostosCorrectivos()
  .subscribe(data => {
      this.mantenimientos = [];
      data.forEach((element: any)=>{
        this.mantenimientos.push({

          costo: element.payload.doc.costo,
          ...element.payload.doc.data()
        })
      });

     
      this.costosCorrectivos =  this.mantenimientos.map((costos)=>costos.costo).reduce((prev,next)=>prev+next,0);

    })
  }
  getMantenimientosPreventivos(){
    this._presupuesto.getCostosPreventivos().subscribe(data=>{
        this.mantenimientosPreventivos=[];
        data.forEach((element:any)=>{
          this.mantenimientosPreventivos.push({
            costo:element.payload.doc.costo,
            ...element.payload.doc.data()
          })
        });
        this.costosPreventivos = this.mantenimientosPreventivos.map((costos)=>costos.costo).reduce((prev,next)=>prev+next,0);
       
        this.costoTotal = this.costosCorrectivos + this.costosPreventivos*1;
        return this.costoTotal
     
    })
  }

  getMantenimientoCorrectivoExterno(){
    this._presupuesto.getCostosCorrectivosExternos().subscribe(data=>{
      this.mantenimientos=[];
      data.forEach((element:any)=>{
        this.mantenimientos.push({
          costoExterno: element.payload.doc.costoExterno,
          ...element.payload.doc.data()
        })
      });
      this.costosCorrectivosExterno = this.mantenimientos.map((costo)=>costo.costoExterno).reduce((prev,next)=>prev+next*1,0);

    })
  }

  getMantenimientoPreventivoExterno(){
    this._presupuesto.getCostosPreventivosExternos().subscribe(data=>{
      this.mantenimientosPreventivos=[];
      data.forEach((element:any)=>{
        this.mantenimientosPreventivos.push({
        costoExterno: element.payload.doc.costoExterno,
        ...element.payload.doc.data()
      })
      });
      this.costosPreventivosExterno = this.mantenimientosPreventivos.map((costo)=>costo.costoExterno).reduce((prev,next)=> prev+next*1,0);
     this.costoTotalExterno = this.costosCorrectivosExterno+ this.costosPreventivosExterno*1 , console.log(this.costoTotal),
      this.gastoTotal =  this.costoTotalExterno +  this.costoTotal*1;

    })
  }

  getPorcentajeGastos(){
    this.sumaMantenimientos = this.costoTotal + this.costoTotalExterno*1;
   return  this.porcentajeGastos= this.sumaMantenimientos /this.gastosMantenimientos*100;


  }


 
  
  

}
