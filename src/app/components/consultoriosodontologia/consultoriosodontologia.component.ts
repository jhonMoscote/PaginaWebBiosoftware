import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { EquiposService } from 'src/app/services/equipos.service';

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
  equipos: any[]=[];
  numeroodontologia1: number;
  numeroodontologia2: number;
  numeroodontologia3: number;

  constructor(private _servicesEquipos: EquiposService,private firestore: AngularFirestore) { }

  ngOnInit(): void {
    this.getCostosOdontologia1(),this.getCostosOdontologia2(),this.getCostosOdontologia3(),this.numerodeOdontologia(),this.numerodeOdontologia2(),this.numerodeOdontologia3()
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

   numerodeOdontologia(){

    this._servicesEquipos.getEquiposConsultorioOdontologia1().subscribe(data =>{
      this.equipos = [];
      data.forEach((element: any)=>{
      
        this.equipos.push({
    
          consultorio:element.payload.doc.consultorio,
         ...element.payload.doc.data()
        })    
      }); 
      this.numeroodontologia1 = this.equipos.length;
    })
    }

    numerodeOdontologia2(){

      this._servicesEquipos.getEquiposConsultorioOdontologia2().subscribe(data =>{
        this.equipos = [];
        data.forEach((element: any)=>{
        
          this.equipos.push({
      
            consultorio:element.payload.doc.consultorio,
           ...element.payload.doc.data()
          })    
        }); 
      
        this.numeroodontologia2 = this.equipos.length;
      })
      }

      numerodeOdontologia3(){

        this._servicesEquipos.getEquiposConsultorioOdontologia3().subscribe(data =>{
          this.equipos = [];
          data.forEach((element: any)=>{
          
            this.equipos.push({
        
              consultorio:element.payload.doc.consultorio,
             ...element.payload.doc.data()
            })    
          }); 
          this.numeroodontologia3 = this.equipos.length;
        })
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
  this.costoOdontologia =  this.equiposOdontologia.map((costos)=>costos.costo).reduce((prev,next)=>prev+next,0)

  this.costoOdontologia = this.costoOdontologia*1;
 
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
        })}


       

}
