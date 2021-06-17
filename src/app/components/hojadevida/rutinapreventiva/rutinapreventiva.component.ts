import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FactoryOrValue } from 'rxjs';
import { RutinaService } from 'src/app/services/rutina.service';

interface Persona{
 
  favoritos: Favorito[];
  id: string;

}
interface Favorito{
  
  procedimiento: string;
}
@Component({
  selector: 'app-rutinapreventiva',
  templateUrl: './rutinapreventiva.component.html',
  styleUrls: ['./rutinapreventiva.component.css']
})
export class RutinapreventivaComponent implements OnInit  {
  id: string| null
  createRutina: FormGroup;
  nuevoJuego :string ='';
  submitted = false;
  idRutina: string;
  rutina:string[]=[];
 rutinas: any[]=[];

    persona:  Persona = {
      
      favoritos:[
         
       

      ],
      id: ""
    }
  constructor(private aRoute: ActivatedRoute,private fb: FormBuilder, private _rutinaServices: RutinaService, private router : Router,private toastr: ToastrService) { 
   
    this.id = this.aRoute.snapshot.paramMap.get('id');
 

    this.createRutina = this.fb.group({
   
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


 agregarRutina(){

    this.submitted =true;
    if(this.createRutina.invalid){
 
      return;
    }
    const rutinaPreventiva: any = {


   
      procedimiento1 :this.createRutina.value.procedimiento1,
      procedimiento2 :this.createRutina.value.procedimiento2,
      procedimiento3 :this.createRutina.value.procedimiento3,
      procedimiento4:this.createRutina.value.procedimiento4,
      procedimiento5:this.createRutina.value.procedimiento5,
      procedimiento6:this.createRutina.value.procedimiento6,
      procedimiento7:this.createRutina.value.procedimiento7,
      procedimiento8:this.createRutina.value.procedimiento8,
      procedimiento9:this.createRutina.value.procedimiento9,
      procedimiento10:this.createRutina.value.procedimiento10,
      procedimiento11:this.createRutina.value.procedimiento11,
      procedimiento12:this.createRutina.value.procedimiento12,
      procedimiento13:this.createRutina.value.procedimiento13,
      procedimiento14:this.createRutina.value.procedimiento14,
      procedimiento15:this.createRutina.value.procedimiento15,
      ids: this.id,
    

    
      fechaCreacion : new Date().toDateString(),
      fechaActualizacion: new Date()

    }
 
    this._rutinaServices.agregarRutina(rutinaPreventiva).then(() => {
      this.toastr.success('Registro Exitoso!!!');
      this.router.navigate(['/menuequipo/', this.id])
      
  
      
    }).catch(error => {
      console.log(error);
      
    })
    console.log(rutinaPreventiva)
  }

  guardar(){
    this.persona.id = this.id;
    this._rutinaServices.agregarRutina(this.persona).then(() => {
      this.toastr.success('Registro Exitoso!!!');
      this.router.navigate(['/menuequipo/', this.id])
      
  
      
    }).catch(error => {
      console.log(error);
      
    })
    
  }
  agregarJuego(){

    const nuevoFavorito: Favorito= {
    
      procedimiento: this.nuevoJuego
    }
    this.persona.favoritos.push({ ...nuevoFavorito});
    
    this.nuevoJuego = '';
  }
  eliminar(index:number){
    this.persona.favoritos.splice(index,1)

  }

  EditarRutina(){
    
    const rutina: any = {
      procedimiento1 :this.createRutina.value.procedimiento1,
      procedimiento2 :this.createRutina.value.procedimiento2,
      procedimiento3 :this.createRutina.value.procedimiento3,
      procedimiento4:this.createRutina.value.procedimiento4,
      procedimiento5:this.createRutina.value.procedimiento5,
      procedimiento6:this.createRutina.value.procedimiento6,
      procedimiento7:this.createRutina.value.procedimiento7,
      procedimiento8:this.createRutina.value.procedimiento8,
      procedimiento9:this.createRutina.value.procedimiento9,
      procedimiento10:this.createRutina.value.procedimiento10,
      procedimiento11:this.createRutina.value.procedimiento11,
      procedimiento12:this.createRutina.value.procedimiento12,
      procedimiento13:this.createRutina.value.procedimiento13,
      procedimiento14:this.createRutina.value.procedimiento14,
      procedimiento15:this.createRutina.value.procedimiento15,
    }
    this._rutinaServices.actualizarRutina(this.idRutina,rutina).then(() =>{
      
      this.toastr.info('La rutina ha sido modificado con exito', 'Rutina actualizada',{
        positionClass: 'toast-bottom-right'
      })
      this.router.navigate(['/menuequipo/', this.id]);
    })
  }

  obtenerRutinas(){

    this._rutinaServices.getRutinasTodas().subscribe(data=>{
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
     
   
      this._rutinaServices.getEquipo(id).subscribe(data =>{
      this.createRutina.setValue({
        
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



