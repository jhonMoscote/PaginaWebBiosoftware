import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-consultoriosenfermeria',
  templateUrl: './consultoriosenfermeria.component.html',
  styleUrls: ['./consultoriosenfermeria.component.css']
})
export class ConsultoriosenfermeriaComponent implements OnInit {

 
  equiposEnfermeria: any[]=[];
  costoEnfermeria: number;
  costoEnfermeria2: number;

  constructor(private firestore: AngularFirestore) { }

  ngOnInit(): void {
    this.getCostosEnfermeria1(),this.getCostosEnfermeria2()
  }





  getEnfermeria1(){
   return this.firestore.collection('correctivo', ref=> ref.where("consultorio", "==", "Consultorio Enfermeria 1")).snapshotChanges();
  
  }
  getEnfermeria2(){
    return this.firestore.collection('correctivo', ref=> ref.where("consultorio", "==", "Consultorio Enfermeria 2")).snapshotChanges();
   
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
  // this.equipos.map((costos)=>costos.consultorio);
  console.log("medina 1"+this.costoEnfermeria);
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
    // this.equipos.map((costos)=>costos.consultorio);
    console.log("medina 2"+this.costoEnfermeria2);
      })}

    

}
