import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-consultoriosodontologia',
  templateUrl: './consultoriosodontologia.component.html',
  styleUrls: ['./consultoriosodontologia.component.css']
})
export class ConsultoriosodontologiaComponent implements OnInit {
  equiposOdontologia: any[]=[];
  costoOdontologia: number;
  costoOdontologia2: number;
  costoOdontologia3: number;

  constructor(private firestore: AngularFirestore) { }

  ngOnInit(): void {
    this.getCostosOdontologia1(),this.getCostosOdontologia2(),this.getCostosOdontologia3()
  }





  getOdontologia(){
   return this.firestore.collection('correctivo', ref=> ref.where("consultorio", "==", "Consultorio Odontologico 1")).snapshotChanges();
  
  }
  getOdontologia2(){
    return this.firestore.collection('correctivo', ref=> ref.where("consultorio", "==", "Consultorio Odontologico 2")).snapshotChanges();
   
   }
   getOdontologia3(){
    return this.firestore.collection('correctivo', ref=> ref.where("consultorio", "==", "Consultorio Odontologico 3")).snapshotChanges();
   
   }
  



  getCostosOdontologia1(){
    this.getOdontologia().subscribe(data => {
      this.equiposOdontologia = [];
      data.forEach((element: any)=>{
      
        this.equiposOdontologia.push({
 
          consultorio:element.payload.doc.consultorio,
         ...element.payload.doc.data()
        })    
      }); 
  this.costoOdontologia=  this.equiposOdontologia.map((costos)=>costos.costo).reduce((prev,next)=>prev+next,0)
  // this.equipos.map((costos)=>costos.consultorio);
  console.log("medina 1"+this.costoOdontologia);
    })}

    getCostosOdontologia2(){
      this.getOdontologia2().subscribe(data => {
        this.equiposOdontologia = [];
        data.forEach((element: any)=>{
        
          this.equiposOdontologia.push({
   
            consultorio:element.payload.doc.consultorio,
           ...element.payload.doc.data()
          })    
        }); 
    this.costoOdontologia2=  this.equiposOdontologia.map((costos)=>costos.costo).reduce((prev,next)=>prev+next,0)
    // this.equipos.map((costos)=>costos.consultorio);
    console.log("costoOdontologia 2"+this.costoOdontologia2);
      })}

      getCostosOdontologia3(){
        this.getOdontologia3().subscribe(data => {
          this.equiposOdontologia = [];
          data.forEach((element: any)=>{
          
            this.equiposOdontologia.push({
     
              consultorio:element.payload.doc.consultorio,
             ...element.payload.doc.data()
            })    
          }); 
      this.costoOdontologia3=  this.equiposOdontologia.map((costos)=>costos.costo).reduce((prev,next)=>prev+next,0)
      // this.equipos.map((costos)=>costos.consultorio);
      console.log("medina 3"+this.costoOdontologia3);
        })}


       

}
