import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { EquiposService } from 'src/app/services/equipos.service';

@Component({
  selector: 'app-consultoriosenfermeria',
  templateUrl: './consultoriosenfermeria.component.html',
  styleUrls: ['./consultoriosenfermeria.component.css']
})
export class ConsultoriosenfermeriaComponent implements OnInit {

 
  equiposEnfermeria: any[]=[];
  costoEnfermeria: number;
  costoEnfermeria2: number;
  equipos: any[]=[];
  numeroEnfermeria1: number;
  numeroEnfermeria2: number;
  constructor(private firestore: AngularFirestore, private _servicesEquipos:EquiposService) { }

  ngOnInit(): void {
    this.getCostosEnfermeria1(),this.getCostosEnfermeria2(),this. numerodeEnfermeria1(),this. numerodeEnfermeria2()
  }





  getEnfermeria1(){
   return this.firestore.collection('correctivo', ref=> ref.where("consultorio", "==", "Consultorio Enfermeria 1")).snapshotChanges();
  
  }
  getEnfermeria2(){
    return this.firestore.collection('correctivo', ref=> ref.where("consultorio", "==", "Consultorio Enfermeria 2")).snapshotChanges();
   
   }

   
   numerodeEnfermeria1(){

    this._servicesEquipos.getEquiposConsultorioEnfermeria1().subscribe(data =>{
      this.equipos = [];
      data.forEach((element: any)=>{
      
        this.equipos.push({
    
          servicio:element.payload.doc.servicio,
         ...element.payload.doc.data()
        })    
      }); 
      this.numeroEnfermeria1 = this.equipos.length;
    })
    }
    numerodeEnfermeria2(){

      this._servicesEquipos.getEquiposConsultorioEnfermeria2().subscribe(data =>{
        this.equipos = [];
        data.forEach((element: any)=>{
        
          this.equipos.push({
      
            servicio:element.payload.doc.servicio,
           ...element.payload.doc.data()
          })    
        }); 
        this.numeroEnfermeria2 = this.equipos.length;
      })
      }



  getCostosEnfermeria1(){
    this.getEnfermeria1().subscribe(data => {
      this.equiposEnfermeria = [];
      data.forEach((element: any)=>{
      
        this.equiposEnfermeria.push({
 
          consultorio:element.payload.doc.consultorio,
         ...element.payload.doc.data()
        })    
      }); 
  this.costoEnfermeria=  this.equiposEnfermeria.map((costos)=>costos.costo).reduce((prev,next)=>prev+next,0)
    })}

    getCostosEnfermeria2(){
      this.getEnfermeria2().subscribe(data => {
        this.equiposEnfermeria = [];
        data.forEach((element: any)=>{
        
          this.equiposEnfermeria.push({
   
            consultorio:element.payload.doc.consultorio,
           ...element.payload.doc.data()
          })    
        }); 
    this.costoEnfermeria2=  this.equiposEnfermeria.map((costos)=>costos.costo).reduce((prev,next)=>prev+next,0)
      })}

    

}
