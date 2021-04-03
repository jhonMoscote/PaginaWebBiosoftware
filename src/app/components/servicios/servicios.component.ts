import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { EquiposService } from 'src/app/services/equipos.service';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit {
  equipos: any[]=[];
  costoMedicinaGenaral: number;
  costoMedicinaGenaral2: number;
  costoMedicinaGenaral3: number;
  costoMedicinaGenaral4: number;
  costoMedicinaGenaral5: number;
  costoMedicinaGenaral6: number;
  equiposEnfermeria: any[]=[];
  costoEnfermeria: number;
  costoEnfermeria2: number;
  equiposOdontologia: any[]=[];
  costoOdontologia: number;
  costoOdontologia2: number;
  costoOdontologia3: number;
  equiposPsicologia: any[]=[];
  costoPsicologia: number;
  equiposConsultaPrioritaria: any[]=[];
  costoConsultaPrioritaria:number;
  equiposLaboratorio: any[]=[];
  costoLaboratorio:number;
  equiposServicioFarmaceutico: any[]=[];
  costosFarmaceuticos:number;
  equiposToma: any[]=[];
  costoToma: number;
  costoDetencion:number;
  equiposDetencionTemprana: any[]=[];
 
  

  constructor(private _servicesEquipo: EquiposService,private firestore: AngularFirestore) { }

  ngOnInit(): void {
    this.getCostosMedicina1(),this.getCostosMedicina2(),this.getCostosMedicina3(),this.getCostosMedicina4(),this.getCostosMedicina5(),this.getCostosMedicina6(),this.getCostosEnfermeria1(),this.getCostosEnfermeria2(),this.getCostosOdontologia1(),this.getCostosOdontologia2(),this.getCostosOdontologia3()
    ,this.getCostosPsicologia(),this.getCostosConsultaPrioritaria(), this.getCostosLaboratorio(), this.getCostosFarmaceutico(),this.getCostosToma(),this.getCostosDetencionTemprana()
  }

  getPsicologia(){
    return this.firestore.collection('correctivo', ref=> ref.where("servicio", "==", "Psicologia")).snapshotChanges();
   
   }


   

  getCostosPsicologia(){
    this.getPsicologia().subscribe(data => {
      this.equiposPsicologia = [];
      data.forEach((element: any)=>{
      
        this.equiposPsicologia.push({
 
          consultorio:element.payload.doc.consultorio,
         ...element.payload.doc.data()
        })    
      }); 
  this.costoPsicologia=  this.equiposPsicologia.map((costos)=>costos.costo).reduce((prev,next)=>prev+next,0)
  // this.equipos.map((costos)=>costos.consultorio);
  console.log("psicolo 1"+this.costoPsicologia);
    })}




   getConsultaPrioritaria(){
    return this.firestore.collection('correctivo', ref=> ref.where("servicio", "==", "Consulta Prioritaria")).snapshotChanges();
   
   }

   
  getCostosConsultaPrioritaria(){
    this.getConsultaPrioritaria().subscribe(data => {
      this.equiposConsultaPrioritaria = [];
      data.forEach((element: any)=>{
      
        this.equiposConsultaPrioritaria.push({
 
          consultorio:element.payload.doc.consultorio,
         ...element.payload.doc.data()
        })    
      }); 
  this.costoConsultaPrioritaria=  this.equiposConsultaPrioritaria.map((costos)=>costos.costo).reduce((prev,next)=>prev+next,0)
  // this.equipos.map((costos)=>costos.consultorio);
  console.log("consulta prioritaria"+this.costoConsultaPrioritaria);
    })}




   getLaboratorio(){
    return this.firestore.collection('correctivo', ref=> ref.where("servicio", "==", "Laboratorio Clinico")).snapshotChanges();
   
   }




   getCostosLaboratorio(){
    this. getLaboratorio().subscribe(data => {
      this.equiposLaboratorio = [];
      data.forEach((element: any)=>{
      
        this.equiposLaboratorio.push({
 
          consultorio:element.payload.doc.consultorio,
         ...element.payload.doc.data()
        })    
      }); 
  this.costoLaboratorio=  this.equiposLaboratorio.map((costos)=>costos.costo).reduce((prev,next)=>prev+next,0)
  // this.equipos.map((costos)=>costos.consultorio);
  console.log("consulta prioritaria"+this.costoLaboratorio);
    })}


   getServicioFarmaceutico(){
    return this.firestore.collection('correctivo', ref=> ref.where("servicio", "==", "Servicio Farmaceutico")).snapshotChanges();
   
   }




   getCostosFarmaceutico(){
    this.getServicioFarmaceutico().subscribe(data => {
      this.equiposServicioFarmaceutico = [];
      data.forEach((element: any)=>{
      
        this.equiposServicioFarmaceutico.push({
 
          consultorio:element.payload.doc.consultorio,
         ...element.payload.doc.data()
        })    
      }); 
  this.costosFarmaceuticos=  this.equiposServicioFarmaceutico.map((costos)=>costos.costo).reduce((prev,next)=>prev+next,0)
  // this.equipos.map((costos)=>costos.consultorio);
  console.log("consulta prioritaria"+this.costosFarmaceuticos);
    })}





   getToma(){
    return this.firestore.collection('correctivo', ref=> ref.where("servicio", "==", "Toma e interpretacion de Radiografias Odontologicas")).snapshotChanges();
   
   }

   getCostosToma(){
    this.getToma().subscribe(data => {
      this.equiposToma = [];
      data.forEach((element: any)=>{
      
        this.equiposToma.push({
 
          consultorio:element.payload.doc.consultorio,
         ...element.payload.doc.data()
        })    
      }); 
  this.equiposToma=  this.equiposToma.map((costos)=>costos.costo).reduce((prev,next)=>prev+next,0)
  // this.equipos.map((costos)=>costos.consultorio);
  console.log("consulta prioritaria"+this.equiposToma);
    })}


   
   getDetencionTemprana(){
    return this.firestore.collection('correctivo', ref=> ref.where("servicio", "==", "Detencion Temprana")).snapshotChanges();
   
   }




   getCostosDetencionTemprana(){
    this.getDetencionTemprana().subscribe(data => {
      this.equiposDetencionTemprana = [];
      data.forEach((element: any)=>{
      
        this.equiposDetencionTemprana.push({
 
          consultorio:element.payload.doc.consultorio,
         ...element.payload.doc.data()
        })    
      }); 
  this.costoDetencion=  this.equiposDetencionTemprana.map((costos)=>costos.costo).reduce((prev,next)=>prev+next,0)
  // this.equipos.map((costos)=>costos.consultorio);
  console.log("consulta prioritaria"+this.costoDetencion);
    })}


  getMedicina1(){
   return this.firestore.collection('correctivo', ref=> ref.where("consultorio", "==", "Consultorio Medicina General 1")).snapshotChanges();
  
  }
  getMedicina2(){
    return this.firestore.collection('correctivo', ref=> ref.where("consultorio", "==", "Consultorio Medicina General 2")).snapshotChanges();
   
   }
   getMedicina3(){
    return this.firestore.collection('correctivo', ref=> ref.where("consultorio", "==", "Consultorio Medicina General 3")).snapshotChanges();
   
   }
   getMedicina4(){
    return this.firestore.collection('correctivo', ref=> ref.where("consultorio", "==", "Consultorio Medicina General 4")).snapshotChanges();
   
   }
   getMedicina5(){
    return this.firestore.collection('correctivo', ref=> ref.where("consultorio", "==", "Consultorio Medicina General 5")).snapshotChanges();
   
   }
   getMedicina6(){
    return this.firestore.collection('correctivo', ref=> ref.where("consultorio", "==", "Consultorio Medicina General 6")).snapshotChanges();
   
   }



  getCostosMedicina1(){
    this.getMedicina1().subscribe(data => {
      this.equipos = [];
      data.forEach((element: any)=>{
      
        this.equipos.push({
 
          consultorio:element.payload.doc.consultorio,
         ...element.payload.doc.data()
        })    
      }); 
  this.costoMedicinaGenaral=  this.equipos.map((costos)=>costos.costo).reduce((prev,next)=>prev+next,0)
  // this.equipos.map((costos)=>costos.consultorio);
  console.log("medina 1"+this.costoMedicinaGenaral);
    })}

    getCostosMedicina2(){
      this.getMedicina2().subscribe(data => {
        this.equipos = [];
        data.forEach((element: any)=>{
        
          this.equipos.push({
   
            consultorio:element.payload.doc.consultorio,
           ...element.payload.doc.data()
          })    
        }); 
    this.costoMedicinaGenaral2=  this.equipos.map((costos)=>costos.costo).reduce((prev,next)=>prev+next,0)
    // this.equipos.map((costos)=>costos.consultorio);
    console.log("medina 2"+this.costoMedicinaGenaral2);
    return this.costoMedicinaGenaral2;
      })}

      getCostosMedicina3(){
        this.getMedicina3().subscribe(data => {
          this.equipos = [];
          data.forEach((element: any)=>{
          
            this.equipos.push({
     
              consultorio:element.payload.doc.consultorio,
             ...element.payload.doc.data()
            })    
          }); 
      this.costoMedicinaGenaral3=  this.equipos.map((costos)=>costos.costo).reduce((prev,next)=>prev+next,0)
      // this.equipos.map((costos)=>costos.consultorio);
      console.log("medina 3"+this.costoMedicinaGenaral3);
        })}


        getCostosMedicina4(){
          this.getMedicina4().subscribe(data => {
            this.equipos = [];
            data.forEach((element: any)=>{
            
              this.equipos.push({
       
                consultorio:element.payload.doc.consultorio,
               ...element.payload.doc.data()
              })    
            }); 
        this.costoMedicinaGenaral4=  this.equipos.map((costos)=>costos.costo).reduce((prev,next)=>prev+next,0)
        // this.equipos.map((costos)=>costos.consultorio);
        console.log("medina 4"+this.costoMedicinaGenaral4);
          })}

          getCostosMedicina5(){
            this.getMedicina5().subscribe(data => {
              this.equipos = [];
              data.forEach((element: any)=>{
              
                this.equipos.push({
         
                  consultorio:element.payload.doc.consultorio,
                 ...element.payload.doc.data()
                })    
              }); 
          this.costoMedicinaGenaral5=  this.equipos.map((costos)=>costos.costo).reduce((prev,next)=>prev+next,0)
          // this.equipos.map((costos)=>costos.consultorio);
          console.log("medina 5"+this.costoMedicinaGenaral5);
            })}


      
            getCostosMedicina6(){
              this.getMedicina6().subscribe(data => {
                this.equipos = [];
                data.forEach((element: any)=>{
                
                  this.equipos.push({
           
                    consultorio:element.payload.doc.consultorio,
                   ...element.payload.doc.data()
                  })    
                }); 
            this.costoMedicinaGenaral6=  this.equipos.map((costos)=>costos.costo).reduce((prev,next)=>prev+next,0)
            // this.equipos.map((costos)=>costos.consultorio);
            console.log("medina 6"+this.costoMedicinaGenaral6);
            return this.costoMedicinaGenaral6
              })}


              
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
           this. equiposOdontologia = [];
           data.forEach((element: any)=>{
           
             this. equiposOdontologia.push({
      
               consultorio:element.payload.doc.consultorio,
              ...element.payload.doc.data()
             })    
           }); 
       this.costoOdontologia=  this. equiposOdontologia.map((costos)=>costos.costo).reduce((prev,next)=>prev+next,0)
       // this.equipos.map((costos)=>costos.consultorio);
       console.log("medina 1"+this.costoOdontologia);
         })}
     
         getCostosOdontologia2(){
           this.getOdontologia2().subscribe(data => {
             this. equiposOdontologia = [];
             data.forEach((element: any)=>{
             
               this. equiposOdontologia.push({
        
                 consultorio:element.payload.doc.consultorio,
                ...element.payload.doc.data()
               })    
             }); 
         this.costoOdontologia2=  this. equiposOdontologia.map((costos)=>costos.costo).reduce((prev,next)=>prev+next,0)
         // this.equipos.map((costos)=>costos.consultorio);
         console.log("costoOdontologia 2"+this.costoOdontologia2);
           })}
     
           getCostosOdontologia3(){
             this.getOdontologia3().subscribe(data => {
               this. equiposOdontologia = [];
               data.forEach((element: any)=>{
               
                 this. equiposOdontologia.push({
          
                   consultorio:element.payload.doc.consultorio,
                  ...element.payload.doc.data()
                 })    
               }); 
           this.costoOdontologia3=  this. equiposOdontologia.map((costos)=>costos.costo).reduce((prev,next)=>prev+next,0)
           // this.equipos.map((costos)=>costos.consultorio);
           console.log("medina 3"+this.costoOdontologia3);
             })}
     

             

}
