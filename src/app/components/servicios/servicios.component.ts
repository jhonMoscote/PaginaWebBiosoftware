import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { EquiposService } from 'src/app/services/equipos.service';
import { ServiciosService } from 'src/app/services/servicios.service';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit {
  equipos: any[]=[];
  costoMedicinaGenaralExterno: number;
  costoMedicinaGenaral6: number;
  costoMedicinaGenaralPreventivo: number;
  costoMedicinaGenaralPreventivoExterno: number;
  costoTotalMedicinaGeneral:number;
  equiposEnfermeria: any[]=[];
  costoEnfermeria: number;
  costoEnfermeriaExterno: number;
  costoEnfermeriaPreventivo: number;
  costoEnfermeriaPreventivoExterno: number;
  costoTotalEnfermeria: number;
  equiposOdontologia: any[]=[];
  costoOdontologia: number;
  costoOdontologia2: number;
  costoOdontologia3: number;
  costoOdontologia4: number;
  costoTotalOdontologia: number;
  equiposPsicologia: any[]=[];
  costoPsicologia: number;
  costoPsicologiaExterno: number;
  costoPsicologiaPreventivo:number;
  costoPsicologiaPreventivoExterno:number;
  costoPsicologiaTotal:number;
  numeroMedicina: number;
  numeroPsicologia:number;
  numeroConsulta:number;
  numeroEnfermeria:number;
  numeroOdontologia:number;
  numeroLaboratorio:number;
  numeroFarmaceutico:number;
  numeroTOma:number;
  numeroDetencion:number;


  equiposConsultaPrioritaria: any[]=[];
  costoConsultaPrioritaria:number;
  costoConsultaPrioritariaExterna:number;
  costoConsultaPrioritariaPreventiva:number;
  costoConsultaPrioritariaPreventivaExterna:number;
  costoConsultaPrioritariaTotal:number;




  equiposLaboratorio: any[]=[];
  costoLaboratorio:number;
  costoLaboratorioExterno:number;
  costoLaboratorioPreventivo:number;
  costoLaboratorioPreventivoExterno:number;
  costoLaboratorioTotal:number;





  equiposServicioFarmaceutico: any[]=[];
  costosFarmaceuticos:number;
  costosFarmaceuticosExterno:number;
  costosFarmaceuticosPreventivo:number;
  costosFarmaceuticosPreventivoExterno:number;
  costosFarmaceuticosTotal:number;







  equiposToma: any[]=[];
  costoToma: number;
  costoTomaExterno: number;
  costoTomaPreventivo: number;
  costoTomaPreventivoExterno: number;
  costoTomaTotal: number;
  costoDetencion:number;
  costoDetencionExterno:number;
  costoDetencionPreventivo:number;
  costoDetencionPreventivoExterno:number;
  costoDetencionTotal:number;
  equiposDetencionTemprana: any[]=[];

  constructor(private _services: ServiciosService,private firestore: AngularFirestore) { }

  ngOnInit(): void {
    this. getCostosMedicinaPreventivo(),this.getCostosMedicinaPreventivoExterno(), this.getCostosMedicinaCorrectivo(), this.getCostosMedicinaCorrectivoExterno(),
    this.getCostosEnfermeriaCorrectivo(),this.getCostosEnfermeriaCorrectivoExterno(), this.getCostosEnfermeriaPreventivo(),this.getCostosEnfermeriaPreventivoExterno(),
    this.getCostosPsicologia(), this.getCostosPsicologiaPreventivo(),this.getCostosPsicologiaExterno(),this.getCostosPsicologiaPreventivoExterno(),
    this.getCostosConsultaPrioritaria(), this.getCostosConsultaPrioritariaExterna(), this.getCostosConsultaPrioritariaPreventiva(), this.getCostosConsultaPrioritariaPreventivaExterna(),
    this.getCostosLaboratorio(),this.getCostosLaboratorioExterno(), this.getCostosLaboratorioPreventivo(), this. getCostosLaboratorioPreventivoExterno(),
    this.getCostosFarmaceutico(),this.getCostosFarmaceuticoExterno(), this.getCostosFarmaceuticoPreventivo(), this.getCostosFarmaceuticoPreventivoExterno()
    this.getCostosDetencionTemprana(),this.getCostosDetencionTempranaExterna(), this.getCostosDetencionTempranaPreventiva(), this. getCostosDetencionTempranaPreventivaExterno(),

    this.getCostosOdontologiaCorrectivo(), this.getCostosOdontologia2(), this.getCostosOdontologiaCorrectivoExterno(),this. getCostosOdontologiaPreventivoExterno(),
    this.getCostosToma(), this. getCostosTomaExterno(), this.getCostosTomaPreventivo(), this.getCostosTomaPreventivoExterno(),this.numeroEquiposMedicina(),this.numeroEquiposEnfermeria(), this.numeroEquiposOdontologia(),
    this.numeroEquiposPsicologia(),this.numeroEquiposConsultaPrioritaria(),this.numeroEquiposLaboratorio(),this.numeroEquiposFarmaceutico(), this.numeroEquiposToma(),this.numeroEquiposDetencion()
    
  }

  numeroEquiposOdontologia(){

    this._services.getNumeroEquiposOdontologia().subscribe(data =>{
      this.equipos = [];
      data.forEach((element: any)=>{
      
        this.equipos.push({
    
          servicio:element.payload.doc.servicio,
         ...element.payload.doc.data()
        })    
      }); 
      this.numeroOdontologia = this.equipos.length;
    })
    }

    numeroEquiposPsicologia(){

      this._services.getNumeroEquiposPsicologia().subscribe(data =>{
        this.equipos = [];
        data.forEach((element: any)=>{
        
          this.equipos.push({
      
            servicio:element.payload.doc.servicio,
           ...element.payload.doc.data()
          })    
        }); 
        this.numeroPsicologia = this.equipos.length;
      })
      }
      numeroEquiposConsultaPrioritaria(){

        this._services.getNumeroEquiposConsultaPrioritaria().subscribe(data =>{
          this.equipos = [];
          data.forEach((element: any)=>{
          
            this.equipos.push({
        
              servicio:element.payload.doc.servicio,
             ...element.payload.doc.data()
            })    
          }); 
          this.numeroConsulta = this.equipos.length;
        })
        }

        numeroEquiposLaboratorio(){

          this._services.getNumeroEquiposLaboratorioClinico().subscribe(data =>{
            this.equipos = [];
            data.forEach((element: any)=>{
            
              this.equipos.push({
          
                servicio:element.payload.doc.servicio,
               ...element.payload.doc.data()
              })    
            }); 
            this.numeroLaboratorio = this.equipos.length;
          })
          }


          numeroEquiposFarmaceutico(){

            this._services.getNumeroEquiposFarmaceutico().subscribe(data =>{
              this.equipos = [];
              data.forEach((element: any)=>{
              
                this.equipos.push({
            
                  servicio:element.payload.doc.servicio,
                 ...element.payload.doc.data()
                })    
              }); 
              this.numeroFarmaceutico = this.equipos.length;
            })
            }


            numeroEquiposToma(){

              this._services.getNumeroEquiposTomas().subscribe(data =>{
                this.equipos = [];
                data.forEach((element: any)=>{
                
                  this.equipos.push({
              
                    servicio:element.payload.doc.servicio,
                   ...element.payload.doc.data()
                  })    
                }); 
                this.numeroTOma = this.equipos.length;
              })
              }

              numeroEquiposDetencion(){

                this._services.getNumeroEquiposDetencion().subscribe(data =>{
                  this.equipos = [];
                  data.forEach((element: any)=>{
                  
                    this.equipos.push({
                
                      servicio:element.payload.doc.servicio,
                     ...element.payload.doc.data()
                    })    
                  }); 
                  this.numeroDetencion = this.equipos.length;
                })
                }



   

  getCostosPsicologia(){
    this._services.getPsicologia().subscribe(data => {
      this.equiposPsicologia = [];
      data.forEach((element: any)=>{
      
        this.equiposPsicologia.push({
 
          consultorio:element.payload.doc.consultorio,
         ...element.payload.doc.data()
        })    
      }); 
  this.costoPsicologia=  this.equiposPsicologia.map((costos)=>costos.costo).reduce((prev,next)=>prev+next,0)
  // this.equipos.map((costos)=>costos.consultorio);
  this.costoPsicologia = this.costoPsicologia*1;
  return this.costoPsicologia
    })}

    //costo mantenimento preventivo psicologia //

    getCostosPsicologiaPreventivo(){
      this._services.getPsicologiaPreventivo().subscribe(data => {
        this.equiposPsicologia = [];
        data.forEach((element: any)=>{
        
          this.equiposPsicologia.push({
   
            consultorio:element.payload.doc.consultorio,
           ...element.payload.doc.data()
          })    
        }); 
    this.costoPsicologiaPreventivo=  this.equiposPsicologia.map((costos)=>costos.costo).reduce((prev,next)=>prev+next,0)
  
    this.costoPsicologiaPreventivo = this.costoPsicologiaPreventivo*1;
    return this.costoPsicologiaPreventivo
      })}

/////////////// costo mantenimiento externo correctivo////////////////////////////

    getCostosPsicologiaExterno(){
      this._services.getPsicologia().subscribe(data => {
        this.equiposPsicologia = [];
        data.forEach((element: any)=>{
        
          this.equiposPsicologia.push({
   
            consultorio:element.payload.doc.consultorio,
           ...element.payload.doc.data()
          })    
        }); 
    this.costoPsicologiaExterno=  this.equiposPsicologia.map((costos)=>costos.costoExterno).reduce((prev,next)=>prev+next,0)
    // this.equipos.map((costos)=>costos.consultorio);
    this.costoPsicologiaExterno = this.costoPsicologiaExterno*1;
    return this.costoPsicologiaExterno
      })}


      ///////////////// <-----------costo mantenimiento preventivo externo ----------> //////////////////////////////

      getCostosPsicologiaPreventivoExterno(){
        this._services.getPsicologiaPreventivo().subscribe(data => {
          this.equiposPsicologia = [];
          data.forEach((element: any)=>{
          
            this.equiposPsicologia.push({
     
              consultorio:element.payload.doc.consultorio,
             ...element.payload.doc.data()
            })    
          }); 
      this.costoPsicologiaPreventivoExterno=  this.equiposPsicologia.map((costos)=>costos.costoExterno).reduce((prev,next)=>prev+next,0)
      // this.equipos.map((costos)=>costos.consultorio);
      this.costoPsicologiaPreventivoExterno = this.costoPsicologiaPreventivoExterno*1;
      this.costoPsicologiaTotal = this.costoPsicologia + this.costoPsicologiaExterno + this.costoPsicologiaPreventivo + this.costoPsicologiaPreventivoExterno
      return  this.costoPsicologiaPreventivoExterno, this.costoPsicologiaTotal
        })}




 
   
  getCostosConsultaPrioritaria(){
    this._services.getConsultaPrioritaria().subscribe(data => {
      this.equiposConsultaPrioritaria = [];
      data.forEach((element: any)=>{
      
        this.equiposConsultaPrioritaria.push({
 
          consultorio:element.payload.doc.consultorio,
         ...element.payload.doc.data()
        })    
      }); 
  this.costoConsultaPrioritaria=  this.equiposConsultaPrioritaria.map((costos)=>costos.costo).reduce((prev,next)=>prev+next,0)
  // this.equipos.map((costos)=>costos.consultorio);
  this.costoConsultaPrioritaria= this.costoConsultaPrioritaria*1;

    })}

    getCostosConsultaPrioritariaExterna(){
      this._services.getConsultaPrioritaria().subscribe(data => {
        this.equiposConsultaPrioritaria = [];
        data.forEach((element: any)=>{
        
          this.equiposConsultaPrioritaria.push({
   
            consultorio:element.payload.doc.consultorio,
           ...element.payload.doc.data()
          })    
        }); 
    this.costoConsultaPrioritariaExterna=  this.equiposConsultaPrioritaria.map((costos)=>costos.costoExterno).reduce((prev,next)=>prev+next,0)
    // this.equipos.map((costos)=>costos.consultorio);
    this.costoConsultaPrioritariaExterna= this.costoConsultaPrioritariaExterna*1;
        return this.costoConsultaPrioritariaExterna
      })}

      getCostosConsultaPrioritariaPreventiva(){
        this._services.getConsultaPrioritariaPreventiva().subscribe(data => {
          this.equiposConsultaPrioritaria = [];
          data.forEach((element: any)=>{
          
            this.equiposConsultaPrioritaria.push({
     
              consultorio:element.payload.doc.consultorio,
             ...element.payload.doc.data()
            })    
          }); 
      this.costoConsultaPrioritariaPreventiva=  this.equiposConsultaPrioritaria.map((costos)=>costos.costo).reduce((prev,next)=>prev+next,0)
      // this.equipos.map((costos)=>costos.consultorio);
      this.costoConsultaPrioritariaPreventiva= this.costoConsultaPrioritariaPreventiva*1;
      return this.costoConsultaPrioritariaPreventiva
    
        })}

        getCostosConsultaPrioritariaPreventivaExterna(){
          this._services.getConsultaPrioritariaPreventiva().subscribe(data => {
            this.equiposConsultaPrioritaria = [];
            data.forEach((element: any)=>{
            
              this.equiposConsultaPrioritaria.push({
       
                consultorio:element.payload.doc.consultorio,
               ...element.payload.doc.data()
              })    
            }); 
        this.costoConsultaPrioritariaPreventivaExterna=  this.equiposConsultaPrioritaria.map((costos)=>costos.costoExterno).reduce((prev,next)=>prev+next,0)
        // this.equipos.map((costos)=>costos.consultorio);
        this.costoConsultaPrioritariaPreventivaExterna= this.costoConsultaPrioritariaPreventivaExterna*1;
        this.costoConsultaPrioritariaTotal = this.costoConsultaPrioritaria + this.costoConsultaPrioritariaExterna + this.costoConsultaPrioritariaPreventiva+ this.costoConsultaPrioritariaPreventivaExterna
        return this.costoConsultaPrioritariaPreventivaExterna, this.costoConsultaPrioritariaTotal
      
          })}


/////////////////////////////////////<................Laboratorio......................................>////////////////////////////////


   getCostosLaboratorio(){
    this._services.getLaboratorio().subscribe(data => {
      this.equiposLaboratorio = [];
      data.forEach((element: any)=>{
      
        this.equiposLaboratorio.push({
 
          consultorio:element.payload.doc.consultorio,
         ...element.payload.doc.data()
        })    
      }); 
      this.costoLaboratorio=  this.equiposLaboratorio.map((costos)=>costos.costo).reduce((prev,next)=>prev+next,0)
    this.costoLaboratorio =this.costoLaboratorio*1
    return this.costoLaboratorio
    })}

    getCostosLaboratorioExterno(){
      this._services.getLaboratorio().subscribe(data => {
        this.equiposLaboratorio = [];
        data.forEach((element: any)=>{
        
          this.equiposLaboratorio.push({
   
            consultorio:element.payload.doc.consultorio,
           ...element.payload.doc.data()
          })    
        }); 
    this.costoLaboratorioExterno =  this.equiposLaboratorio.map((costos)=>costos.costoExterno).reduce((prev,next)=>prev+next,0)
    // this.equipos.map((costos)=>costos.consultorio);
    this.costoLaboratorioExterno = this.costoLaboratorioExterno*1

    return  this.costoLaboratorioExterno
      })}

      getCostosLaboratorioPreventivo(){
        this._services.getLaboratorioPreventivo().subscribe(data => {
          this.equiposLaboratorio = [];
          data.forEach((element: any)=>{
          
            this.equiposLaboratorio.push({
     
              consultorio:element.payload.doc.consultorio,
             ...element.payload.doc.data()
            })    
          }); 
          this.costoLaboratorioPreventivo=  this.equiposLaboratorio.map((costos)=>costos.costo).reduce((prev,next)=>prev+next,0)
 
      this.costoLaboratorioPreventivo =this.costoLaboratorioPreventivo*1
      return this.costoLaboratorioPreventivo
        })}


      getCostosLaboratorioPreventivoExterno(){
        this._services.getLaboratorioPreventivo().subscribe(data => {
          this.equiposLaboratorio = [];
          data.forEach((element: any)=>{
          
            this.equiposLaboratorio.push({
     
              consultorio:element.payload.doc.consultorio,
             ...element.payload.doc.data()
            })    
          }); 
      this.costoLaboratorioPreventivoExterno=  this.equiposLaboratorio.map((costos)=>costos.costoExterno).reduce((prev,next)=>prev+next,0)
      // this.equipos.map((costos)=>costos.consultorio);
      this.costoLaboratorioPreventivoExterno =this.costoLaboratorioPreventivoExterno*1
      this.costoLaboratorioTotal = this.costoLaboratorio + this.costoLaboratorioExterno + this.costoLaboratorioPreventivo + this.costoLaboratorioPreventivoExterno
     return this.costoLaboratorioPreventivoExterno, this.costoLaboratorioTotal
        })}






    /////////////////////////////////<..........servicio Farmaceutico ............................>/////////////////////////////////////////////////////////////////////7




   



   getCostosFarmaceutico(){
    this._services.getServicioFarmaceutico().subscribe(data => {
      this.equiposServicioFarmaceutico = [];
      data.forEach((element: any)=>{
      
        this.equiposServicioFarmaceutico.push({
 
          consultorio:element.payload.doc.consultorio,
         ...element.payload.doc.data()
        })    
      }); 
  this.costosFarmaceuticos=  this.equiposServicioFarmaceutico.map((costos)=>costos.costo).reduce((prev,next)=>prev+next,0)
  // this.equipos.map((costos)=>costos.consultorio);
  this.costosFarmaceuticos= this.costosFarmaceuticos*1
  return this.costosFarmaceuticos
    })}


    getCostosFarmaceuticoExterno(){
      this._services.getServicioFarmaceutico().subscribe(data => {
        this.equiposServicioFarmaceutico = [];
        data.forEach((element: any)=>{
        
          this.equiposServicioFarmaceutico.push({
   
            consultorio:element.payload.doc.consultorio,
           ...element.payload.doc.data()
          })    
        }); 
    this.costosFarmaceuticosExterno=  this.equiposServicioFarmaceutico.map((costos)=>costos.costoExterno).reduce((prev,next)=>prev+next,0)
    // this.equipos.map((costos)=>costos.consultorio);
    this.costosFarmaceuticosExterno= this.costosFarmaceuticosExterno*1
    return this.costosFarmaceuticosExterno
      })}


      getCostosFarmaceuticoPreventivo(){
        this._services.getServicioFarmaceuticoPreventivo().subscribe(data => {
          this.equiposServicioFarmaceutico = [];
          data.forEach((element: any)=>{
          
            this.equiposServicioFarmaceutico.push({
     
              consultorio:element.payload.doc.consultorio,
             ...element.payload.doc.data()
            })    
          }); 
      this.costosFarmaceuticosPreventivo=  this.equiposServicioFarmaceutico.map((costos)=>costos.costo).reduce((prev,next)=>prev+next,0)
      // this.equipos.map((costos)=>costos.consultorio);
      this.costosFarmaceuticosPreventivo= this.costosFarmaceuticosPreventivo*1
      return this.costosFarmaceuticosPreventivo
        })}



        getCostosFarmaceuticoPreventivoExterno(){
          this._services.getServicioFarmaceuticoPreventivo().subscribe(data => {
            this.equiposServicioFarmaceutico = [];
            data.forEach((element: any)=>{
            
              this.equiposServicioFarmaceutico.push({
       
                consultorio:element.payload.doc.consultorio,
               ...element.payload.doc.data()
              })    
            }); 
        this.costosFarmaceuticosPreventivoExterno=  this.equiposServicioFarmaceutico.map((costos)=>costos.costoExterno).reduce((prev,next)=>prev+next,0)
    
        this.costosFarmaceuticosPreventivoExterno= this.costosFarmaceuticosPreventivoExterno*1
        this.costosFarmaceuticosTotal = this.costosFarmaceuticos+this.costosFarmaceuticosExterno + this.costosFarmaceuticosPreventivo +this.costosFarmaceuticosPreventivoExterno
      return this.costosFarmaceuticosPreventivoExterno ,   this.costosFarmaceuticosTotal
          })}






///////////////////////////////<.......................TOma E interpretacion..........................>///////////////////

  

   getCostosToma(){
    this._services.getToma().subscribe(data => {
      this.equiposToma = [];
      data.forEach((element: any)=>{
      
        this.equiposToma.push({
 
          consultorio:element.payload.doc.consultorio,
         ...element.payload.doc.data()
        })    
      }); 
  this.costoToma=  this.equiposToma.map((costos)=>costos.costo).reduce((prev,next)=>prev+next,0)
  this.costoToma = this.costoToma*1
  return this.costoToma
    })}

    getCostosTomaExterno(){
      this._services.getToma().subscribe(data => {
        this.equiposToma = [];
        data.forEach((element: any)=>{
        
          this.equiposToma.push({
   
            consultorio:element.payload.doc.consultorio,
           ...element.payload.doc.data()
          })    
        }); 
    this.costoTomaExterno=  this.equiposToma.map((costos)=>costos.costoExterno).reduce((prev,next)=>prev+next,0)
    // this.equipos.map((costos)=>costos.consultorio);
    this.costoTomaExterno = this.costoTomaExterno*1
    return  this.costoTomaExterno
      })}

      getCostosTomaPreventivo(){
        this._services.getTomaPreventivo().subscribe(data => {
          this.equiposToma = [];
          data.forEach((element: any)=>{
          
            this.equiposToma.push({
     
              consultorio:element.payload.doc.consultorio,
             ...element.payload.doc.data()
            })    
          }); 
      this.costoTomaPreventivo=  this.equiposToma.map((costos)=>costos.costo).reduce((prev,next)=>prev+next,0)
      // this.equipos.map((costos)=>costos.consultorio);
      this.costoTomaPreventivo = this.costoTomaPreventivo*1
      return  this.costoTomaPreventivo
        })}

        getCostosTomaPreventivoExterno(){
          this._services.getTomaPreventivo().subscribe(data => {
            this.equiposToma = [];
            data.forEach((element: any)=>{
            
              this.equiposToma.push({
       
                consultorio:element.payload.doc.consultorio,
               ...element.payload.doc.data()
              })    
            }); 
        this.costoTomaPreventivoExterno=  this.equiposToma.map((costos)=>costos.costoExterno).reduce((prev,next)=>prev+next,0)
        this.costoTomaPreventivoExterno = this.costoTomaPreventivoExterno*1
        this.costoTomaTotal = this.costoToma + this.costoTomaExterno + this.costoTomaPreventivo+ this.costoTomaPreventivoExterno
        return  this.costoTomaPreventivoExterno , this.costoTomaTotal
          })}

//////////////////////////////////////////<.................DETENCION TEMPRANA ............................>>///////////////////////////////
   
 
 



   getCostosDetencionTemprana(){
    this._services.getDetencionTemprana().subscribe(data => {
      this.equiposDetencionTemprana = [];
      data.forEach((element: any)=>{
      
        this.equiposDetencionTemprana.push({
 
          consultorio:element.payload.doc.consultorio,
         ...element.payload.doc.data()
        })    
      }); 
  this.costoDetencion=  this.equiposDetencionTemprana.map((costos)=>costos.costo).reduce((prev,next)=>prev+next,0)
  this.costoDetencion = this.costoDetencion*1
      return this.costoDetencion
    })}


    getCostosDetencionTempranaExterna(){
      this._services.getDetencionTemprana().subscribe(data => {
        this.equiposDetencionTemprana = [];
        data.forEach((element: any)=>{
        
          this.equiposDetencionTemprana.push({
   
            consultorio:element.payload.doc.consultorio,
           ...element.payload.doc.data()
          })    
        }); 
    this.costoDetencionExterno=  this.equiposDetencionTemprana.map((costos)=>costos.costoExterno).reduce((prev,next)=>prev+next,0)
    this.costoDetencionExterno = this.costoDetencionExterno*1
        return this.costoDetencionExterno
      })}


      getCostosDetencionTempranaPreventiva(){
        this._services.getDetencionTempranaPreventivo().subscribe(data => {
          this.equiposDetencionTemprana = [];
          data.forEach((element: any)=>{
          
            this.equiposDetencionTemprana.push({
     
              consultorio:element.payload.doc.consultorio,
             ...element.payload.doc.data()
            })    
          }); 
      this.costoDetencionPreventivo=  this.equiposDetencionTemprana.map((costos)=>costos.costo).reduce((prev,next)=>prev+next,0)
      this.costoDetencionPreventivo = this.costoDetencionPreventivo*1
          return this.costoDetencionPreventivo
        })}


        getCostosDetencionTempranaPreventivaExterno(){
          this._services.getDetencionTempranaPreventivo().subscribe(data => {
            this.equiposDetencionTemprana = [];
            data.forEach((element: any)=>{
            
              this.equiposDetencionTemprana.push({
       
                consultorio:element.payload.doc.consultorio,
               ...element.payload.doc.data()
              })    
            }); 
        this.costoDetencionPreventivoExterno=  this.equiposDetencionTemprana.map((costos)=>costos.costoExterno).reduce((prev,next)=>prev+next,0)
        this.costoDetencionPreventivoExterno = this.costoDetencionPreventivoExterno*1
        this. costoDetencionTotal =  this.costoDetencion+this.costoDetencionExterno+this.costoDetencionPreventivo+ this.costoDetencionPreventivoExterno
            return this.costoDetencionPreventivoExterno +this.costoDetencionTotal
          })}

//////////////////////7<........,,,,,,,,,,,,,,,,,,,.....Medicina........................>///////////////////////////////////


 

numeroEquiposMedicina(){

this._services.getNumeroEquiposMedicina().subscribe(data =>{
  this.equipos = [];
  data.forEach((element: any)=>{
  
    this.equipos.push({

      servicio:element.payload.doc.servicio,
     ...element.payload.doc.data()
    })    
  }); 
  this.numeroMedicina = this.equipos.length;
})
}

 

    getCostosMedicinaPreventivo(){
      this._services.getMedicina6Preventivo().subscribe(data => {
        this.equipos = [];
        data.forEach((element: any)=>{
        
          this.equipos.push({
   
            servicio:element.payload.doc.servicio,
           ...element.payload.doc.data()
          })    
        }); 
    this.costoMedicinaGenaralPreventivo=  this.equipos.map((costos)=>costos.costo).reduce((prev,next)=>prev+next,0)
    
    this.costoMedicinaGenaralPreventivo = this.costoMedicinaGenaralPreventivo *1;
  
        

    return this.costoMedicinaGenaralPreventivo;
      })}
   
   

 

    getCostosMedicinaPreventivoExterno(){
      this._services.getMedicina6Preventivo().subscribe(data => {
        this.equipos = [];
        data.forEach((element: any)=>{
        
          this.equipos.push({
   
            consultorio:element.payload.doc.consultorio,
           ...element.payload.doc.data()
          })    
        }); 
    this.costoMedicinaGenaralPreventivoExterno=  this.equipos.map((costos)=>costos.costoExterno).reduce((prev,next)=>prev+next,0)
    // this.equipos.map((costos)=>costos.consultorio);
    this.costoMedicinaGenaralPreventivoExterno = this.costoMedicinaGenaralPreventivoExterno *1;
     
        

    return this.costoMedicinaGenaralPreventivoExterno;
      })}
   

      getCostosMedicinaCorrectivo(){
        this._services.getMedicina6().subscribe(data => {
          this.equipos = [];
          data.forEach((element: any)=>{
          
            this.equipos.push({
     
              consultorio:element.payload.doc.consultorio,
             ...element.payload.doc.data()
            })    
          }); 
          this.costoMedicinaGenaral6=  this.equipos.map((costos)=>costos.costo).reduce((prev,next)=>prev+next,0)
      
      this.costoMedicinaGenaral6 =  this.costoMedicinaGenaral6*1;
    return  this.costoMedicinaGenaral6
        })}
  

      getCostosMedicinaCorrectivoExterno(){
        this._services.getMedicina6().subscribe(data => {
          this.equipos = [];
          data.forEach((element: any)=>{
          
            this.equipos.push({
     
              consultorio:element.payload.doc.consultorio,
             ...element.payload.doc.data()
            })    
          }); 
          console.log(this.equipos)
           
      this.costoMedicinaGenaralExterno=  this.equipos.map((costos)=>costos.costoExterno).reduce((prev,next)=>prev+next,0)
      this.costoMedicinaGenaralExterno = this.costoMedicinaGenaralExterno*1;
          
      this.costoTotalMedicinaGeneral =   this.costoMedicinaGenaral6 + this.costoMedicinaGenaralPreventivoExterno + this.costoMedicinaGenaralPreventivo + this.costoMedicinaGenaralExterno*1;
      return  this.costoMedicinaGenaralExterno, this.costoTotalMedicinaGeneral
  
})}


              
 
numeroEquiposEnfermeria(){

  this._services.getNumeroEquiposEnfermeria().subscribe(data =>{
    this.equipos = [];
    data.forEach((element: any)=>{
    
      this.equipos.push({
  
        servicio:element.payload.doc.servicio,
       ...element.payload.doc.data()
      })    
    }); 
    this.numeroEnfermeria = this.equipos.length;
  })
  }
 
 
 
 
   getCostosEnfermeriaCorrectivo(){
     this._services.getEnfermeria1().subscribe(data => {
       this.equiposEnfermeria = [];
       data.forEach((element: any)=>{
       
         this.equiposEnfermeria.push({
  
           consultorio:element.payload.doc.consultorio,
          ...element.payload.doc.data()
         })    
       }); 
   this.costoEnfermeria=  this.equiposEnfermeria.map((costos)=>costos.costo).reduce((prev,next)=>prev+next,0)
   this.costoEnfermeria = this.costoEnfermeria*1;
 return this.costoEnfermeria;
     })}

     getCostosEnfermeriaCorrectivoExterno(){
      this._services.getEnfermeria1().subscribe(data => {
        this.equiposEnfermeria = [];
        data.forEach((element: any)=>{
        
          this.equiposEnfermeria.push({
   
            consultorio:element.payload.doc.consultorio,
           ...element.payload.doc.data()
          })    
        }); 
    this.costoEnfermeriaExterno=  this.equiposEnfermeria.map((costos)=>costos.costoExterno).reduce((prev,next)=>prev+next,0)
    this.costoEnfermeriaExterno = this.costoEnfermeriaExterno*1;
  return this.costoEnfermeriaExterno;
      })}
 
     getCostosEnfermeriaPreventivo(){
       this._services.getEnfermeriaPreventivo().subscribe(data => {
         this.equiposEnfermeria = [];
         data.forEach((element: any)=>{
         
           this.equiposEnfermeria.push({
    
             consultorio:element.payload.doc.consultorio,
            ...element.payload.doc.data()
           })    
         }); 
     this.costoEnfermeriaPreventivo=  this.equiposEnfermeria.map((costos)=>costos.costo).reduce((prev,next)=>prev+next,0)
     // this.equipos.map((costos)=>costos.consultorio);
     this.costoEnfermeriaPreventivo = this.costoEnfermeriaPreventivo*1;
       return this.costoEnfermeriaPreventivo
       })}

       getCostosEnfermeriaPreventivoExterno(){
        this._services.getEnfermeriaPreventivo().subscribe(data => {
          this.equiposEnfermeria = [];
          data.forEach((element: any)=>{
          
            this.equiposEnfermeria.push({
     
              consultorio:element.payload.doc.consultorio,
             ...element.payload.doc.data()
            })    
          }); 
      this.costoEnfermeriaPreventivoExterno=  this.equiposEnfermeria.map((costos)=>costos.costoExterno).reduce((prev,next)=>prev+next,0);
      this.costoEnfermeriaPreventivoExterno = this.costoEnfermeriaPreventivoExterno*1;
      this.costoTotalEnfermeria = this.costoEnfermeria+ this.costoEnfermeriaExterno+ this.costoEnfermeriaPreventivo + this.costoEnfermeriaPreventivoExterno
        return this.costoEnfermeriaPreventivoExterno, this.costoTotalEnfermeria
        })}


      
    
      
       
     
     
     
       getCostosOdontologiaCorrectivo(){
         this._services.getOdontologiaCorrectivo().subscribe(data => {
           this. equiposOdontologia = [];
           data.forEach((element: any)=>{
           
             this. equiposOdontologia.push({
      
               consultorio:element.payload.doc.consultorio,
              ...element.payload.doc.data()
             })    
           }); 
       this.costoOdontologia=  this. equiposOdontologia.map((costos)=>costos.costo).reduce((prev,next)=>prev+next,0)
       this.costoOdontologia= this.costoOdontologia *1
           return this.costoOdontologia
         })}
     
         getCostosOdontologia2(){
           this._services.getOdontologiaPreventivo().subscribe(data => {
             this. equiposOdontologia = [];
             data.forEach((element: any)=>{
             
               this. equiposOdontologia.push({
        
                 consultorio:element.payload.doc.consultorio,
                ...element.payload.doc.data()
               })    
             }); 
         this.costoOdontologia2=  this. equiposOdontologia.map((costos)=>costos.costo).reduce((prev,next)=>prev+next,0)
      
       this.costoOdontologia2= this.costoOdontologia2 *1
       return this.costoOdontologia2
           })}
     
           getCostosOdontologiaCorrectivoExterno(){
             this._services.getOdontologiaCorrectivo().subscribe(data => {
               this. equiposOdontologia = [];
               data.forEach((element: any)=>{
               
                 this. equiposOdontologia.push({
          
                   consultorio:element.payload.doc.consultorio,
                  ...element.payload.doc.data()
                 })    
               }); 
           this.costoOdontologia3=  this. equiposOdontologia.map((costos)=>costos.costoExterno).reduce((prev,next)=>prev+next,0)
           
           this.costoOdontologia3= this.costoOdontologia3 *1

        return this.costoOdontologia3
             })}




             getCostosOdontologiaPreventivoExterno(){
              this._services.getOdontologiaPreventivo().subscribe(data => {
                this. equiposOdontologia = [];
                data.forEach((element: any)=>{
                
                  this. equiposOdontologia.push({
           
                    consultorio:element.payload.doc.consultorio,
                   ...element.payload.doc.data()
                  })    
                }); 
            this.costoOdontologia4=  this. equiposOdontologia.map((costos)=>costos.costoExterno).reduce((prev,next)=>prev+next,0)
            this.costoOdontologia4= this.costoOdontologia4 *1,
            this.costoTotalOdontologia =this.costoOdontologia+this.costoOdontologia2+this.costoOdontologia3+this.costoOdontologia4
              return this.costoOdontologia4, this.costoTotalOdontologia 
              })}


             
     
               
  
    
    
    
        






       
    
             

}
