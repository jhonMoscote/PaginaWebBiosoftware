import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RutinaService } from 'src/app/services/rutina.service';

@Component({
  selector: 'app-protocololimpieza',
  templateUrl: './protocololimpieza.component.html',
  styleUrls: ['./protocololimpieza.component.css']
})
export class ProtocololimpiezaComponent implements OnInit {

  id: string| null
  createProtocolo: FormGroup;
  nuevoJuego :string ='';
  submitted = false;
  idRutina: string;
  rutina:string[]=[];
 rutinas: any[]=[];

    
  constructor(private aRoute: ActivatedRoute,private fb: FormBuilder, private _rutinaServices: RutinaService, private router : Router,private toastr: ToastrService) { 
   
    this.id = this.aRoute.snapshot.paramMap.get('id');
 

    this.createProtocolo = this.fb.group({
   
      procedimiento1 :[''],
      procedimiento2 :[''],
      procedimiento3 :[''],
      procedimiento4:[''],
      procedimiento5:[''],
      procedimiento6:[''],
      procedimiento7:[''],
      procedimiento8:[''],
      procedimiento9:[''],
      procedimiento10:[''],
      procedimiento11:[''],
      procedimiento12:[''],
      procedimiento13:[''],
      procedimiento14:[''],
      procedimiento15:[''],
    })

    
  }
 

  ngOnInit(): void {
 this.obtenerRutinas()
  }


  
 agregarProtocolo(){

  this.submitted =true;
  if(this.createProtocolo.invalid){

    return;
  }
  const rutinaPreventiva: any = {


 
    procedimiento1 :this.createProtocolo.value.procedimiento1,
    procedimiento2 :this.createProtocolo.value.procedimiento2,
    procedimiento3 :this.createProtocolo.value.procedimiento3,
    procedimiento4:this.createProtocolo.value.procedimiento4,
    procedimiento5:this.createProtocolo.value.procedimiento5,
    procedimiento6:this.createProtocolo.value.procedimiento6,
    procedimiento7:this.createProtocolo.value.procedimiento7,
    procedimiento8:this.createProtocolo.value.procedimiento8,
    procedimiento9:this.createProtocolo.value.procedimiento9,
    procedimiento10:this.createProtocolo.value.procedimiento10,
    procedimiento11:this.createProtocolo.value.procedimiento11,
    procedimiento12:this.createProtocolo.value.procedimiento12,
    procedimiento13:this.createProtocolo.value.procedimiento13,
    procedimiento14:this.createProtocolo.value.procedimiento14,
    procedimiento15:this.createProtocolo.value.procedimiento15,
    ids: this.id,
  

  
    fechaCreacion : new Date().toDateString(),
    fechaActualizacion: new Date()

  }

  this._rutinaServices.agregarProtocolo(rutinaPreventiva).then(() => {
    this.toastr.success('Registro Exitoso!!!');
    this.router.navigate(['/menuequipo/', this.id])
    

    
  }).catch(error => {
    console.log(error);
    
  })
  console.log(rutinaPreventiva)
}

EditarRutina(){
    
  const rutina: any = {
    procedimiento1 :this.createProtocolo.value.procedimiento1,
    procedimiento2 :this.createProtocolo.value.procedimiento2,
    procedimiento3 :this.createProtocolo.value.procedimiento3,
    procedimiento4:this.createProtocolo.value.procedimiento4,
    procedimiento5:this.createProtocolo.value.procedimiento5,
    procedimiento6:this.createProtocolo.value.procedimiento6,
    procedimiento7:this.createProtocolo.value.procedimiento7,
    procedimiento8:this.createProtocolo.value.procedimiento8,
    procedimiento9:this.createProtocolo.value.procedimiento9,
    procedimiento10:this.createProtocolo.value.procedimiento10,
    procedimiento11:this.createProtocolo.value.procedimiento11,
    procedimiento12:this.createProtocolo.value.procedimiento12,
    procedimiento13:this.createProtocolo.value.procedimiento13,
    procedimiento14:this.createProtocolo.value.procedimiento14,
    procedimiento15:this.createProtocolo.value.procedimiento15,
  }
  this._rutinaServices.actualizarProtocolo(this.idRutina,rutina).then(() =>{
    
    this.toastr.info('LEl protocolo ha sido modificado con exito', 'Protocolo actualizado',{
      positionClass: 'toast-bottom-right'
    })
    this.router.navigate(['/menuequipo/', this.id]);
  })
}

obtenerRutinas(){

  this._rutinaServices.getProtocolostodos().subscribe(data=>{
    this.rutinas =[];
    data.forEach((element:any)=>{
      this.rutinas.push({

        id : element.payload.doc.id,
        ...element.payload.doc.data()
      })

    })
    this.rutina = this.rutinas.map((id)=>id.id);
  for(let i =0; i < this.rutina.length; i++){
        this.idRutina = this.rutina[i];
      }

      this.esVer(this.idRutina)
     return this.idRutina;
   
  })
}


esVer(id:string){
  if(id !== null){
   
 
    this._rutinaServices.getProtocolo(id).subscribe(data =>{
    this.createProtocolo.setValue({
      
      procedimiento1 : data.payload.data()['procedimiento1'],
      procedimiento2 :data.payload.data()['procedimiento2'],
      procedimiento3 :data.payload.data()['procedimiento3'],
      procedimiento4:data.payload.data()['procedimiento4'],
      procedimiento5:data.payload.data()['procedimiento5'],
      procedimiento6:data.payload.data()['procedimiento6'],
      procedimiento7:data.payload.data()['procedimiento7'],
      procedimiento8:data.payload.data()['procedimiento8'],
      procedimiento9:data.payload.data()['procedimiento9'],
      procedimiento10:data.payload.data()['procedimiento10'],
      procedimiento11:data.payload.data()['procedimiento11'],
      procedimiento12:data.payload.data()['procedimiento12'],
      procedimiento13:data.payload.data()['procedimiento13'],
      procedimiento14:data.payload.data()['procedimiento14'],
      procedimiento15:data.payload.data()['procedimiento15'],
      
      
    })
    })
  }
}


}
