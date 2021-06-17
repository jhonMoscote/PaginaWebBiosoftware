import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { promise } from 'selenium-webdriver';
import { EquiposService } from 'src/app/services/equipos.service';

@Component({
  selector: 'app-consultoriosmedicina',
  templateUrl: './consultoriosmedicina.component.html',
  styleUrls: ['./consultoriosmedicina.component.css']
})
export class ConsultoriosmedicinaComponent implements OnInit {


  equipos: any[]=[];
  costoMedicinaGenaral: number;
  costoMedicinaGenaral2: number;
  costoMedicinaGenaral3: number;
  costoMedicinaGenaral4: number;
  costoMedicinaGenaral5: number;
  costoMedicinaGenaral6: number;
  numeroMedicina1:number;
  numeroMedicina2:number;
  numeroMedicina3:number;
  numeroMedicina4:number;
  numeroMedicina5:number;
  numeroMedicina6:number;
 
  constructor(private _servicesEquipo: EquiposService,private firestore: AngularFirestore) { }

  ngOnInit(): void {
    this.getCostosMedicina1(),this.getCostosMedicina2(),this.getCostosMedicina3(),this.getCostosMedicina4(),this.getCostosMedicina5(),this.getCostosMedicina6(),this. getnumeroMedicina2(),this. getnumeroMedicina1(),this. getnumeroMedicina3(),this. getnumeroMedicina4(),this. getnumeroMedicina5(),this. getnumeroMedicina6()
  }





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

   getnumeroMedicina1(){

    this._servicesEquipo.getEquiposConsultorioMedicina1().subscribe(data =>{
      this.equipos = [];
      data.forEach((element: any)=>{
      
        this.equipos.push({
    
          consultorio:element.payload.doc.consultorio,
         ...element.payload.doc.data()
        })    
      }); 
      console.log("2",this.equipos)
      this.numeroMedicina1 = this.equipos.length;
    })
    }

    getnumeroMedicina2(){

      this._servicesEquipo.getEquiposConsultorioMedicina2().subscribe(data =>{
        this.equipos = [];
        data.forEach((element: any)=>{
        
          this.equipos.push({
      
            consultorio:element.payload.doc.consultorio,
           ...element.payload.doc.data()
          })    
        }); 
    
        this.numeroMedicina2 = this.equipos.length;
      })
      }


      getnumeroMedicina3(){

        this._servicesEquipo.getEquiposConsultorioMedicina3().subscribe(data =>{
          this.equipos = [];
          data.forEach((element: any)=>{
          
            this.equipos.push({
        
              consultorio:element.payload.doc.consultorio,
             ...element.payload.doc.data()
            })    
          }); 
      
          this.numeroMedicina3= this.equipos.length;
        })
        }


        getnumeroMedicina4(){

          this._servicesEquipo.getEquiposConsultorioMedicina4().subscribe(data =>{
            this.equipos = [];
            data.forEach((element: any)=>{
            
              this.equipos.push({
          
                consultorio:element.payload.doc.consultorio,
               ...element.payload.doc.data()
              })    
            }); 
        
            this.numeroMedicina4= this.equipos.length;
          })
          }
          
        getnumeroMedicina5(){

          this._servicesEquipo.getEquiposConsultorioMedicina5().subscribe(data =>{
            this.equipos = [];
            data.forEach((element: any)=>{
            
              this.equipos.push({
          
                consultorio:element.payload.doc.consultorio,
               ...element.payload.doc.data()
              })    
            }); 
        
            this.numeroMedicina5= this.equipos.length;
          })
          }

              
        getnumeroMedicina6(){

          this._servicesEquipo.getEquiposConsultorioMedicina6().subscribe(data =>{
            this.equipos = [];
            data.forEach((element: any)=>{
            
              this.equipos.push({
          
                consultorio:element.payload.doc.consultorio,
               ...element.payload.doc.data()
              })    
            }); 
        
            this.numeroMedicina6= this.equipos.length;
          })
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
         
              })}

}
