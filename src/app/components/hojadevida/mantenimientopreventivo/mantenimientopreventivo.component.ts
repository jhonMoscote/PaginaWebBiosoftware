import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EquiposService } from 'src/app/services/equipos.service';

@Component({
  selector: 'app-mantenimientopreventivo',
  templateUrl: './mantenimientopreventivo.component.html',
  styleUrls: ['./mantenimientopreventivo.component.css']
})
export class MantenimientopreventivoComponent implements OnInit {
  createPreventivo: FormGroup;
  mostrarDatos: FormGroup;
  submitted = false;
  id: string| null
  equipos: any[]=[];
  codigo: string;
  consultorio: string;
  constructor(private fb: FormBuilder,private _servicesEquipo: EquiposService,private aRoute: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService) { 

      this.id = this.aRoute.snapshot.paramMap.get('id');
     
      console.log("a"+this.id );

      this.createPreventivo = this.fb.group({
        asistencia :[''],
        rutina1 :[''],
        rutina2 :[''],
        rutina3 :[''],
        rutina4:[''],
        rutina5:[''],
        rutina6:[''],
        rutina7:[''],
        rutina8:[''],
        rutina9:[''],
        rutina10:[''],
        fecharealizacion:[''],
        tiempoejecucion:[''],
        tiempofuera:['']

 
       
  
      })

      this.mostrarDatos = this.fb.group({
     
        nombreEquipo:['', Validators.required],
        marca: ['', Validators.required],
        modelo:['', Validators.required],
        serie: ['', Validators.required],
        servicio: ['', Validators.required],
        nactivo : ['', Validators.required],
        ubicacioncon:['', Validators.required]
         
    
        }
        )

    }

    ngOnInit(): void {
      this.esVer()
    }
    esVer(){
      if(this.id !== null){
        this._servicesEquipo.getEquipo(this.id).subscribe(data =>{
        console.log(data.payload.data()['codigoecr1']);
        this.consultorio = data.payload.data()['consultorio'];
        console.log(this.consultorio);
        this.mostrarDatos.patchValue({
          
         
      nombreEquipo: data.payload.data()['nombreEquipo'],
      marca: data.payload.data()['marca'],
      modelo: data.payload.data()['modelo'],
      serie: data.payload.data()['serie'],
      servicio: data.payload.data()['servicio'],
      nactivo : data.payload.data()['nactivo'],
      ubicacioncon: data.payload.data()['ubicacioncon']
      
      
        })
        
        
        })
      }
    }
  
  
    agregarMantenimiento(){
      this.submitted =true;
      if(this.createPreventivo.invalid){
   
        return;
      }
      const mantenimientocorrectivo: any = {


        asistencia :this.createPreventivo.value.asistencia,
        rutina1 :this.createPreventivo.value.rutina1,
        rutina2 :this.createPreventivo.value.rutina2,
        rutina3 :this.createPreventivo.value.rutina3,
        rutina4:this.createPreventivo.value.rutina4,
        rutina5:this.createPreventivo.value.rutina5,
        rutina6:this.createPreventivo.value.rutina6,
        rutina7:this.createPreventivo.value.rutina7,
        rutina8:this.createPreventivo.value.rutina8,
        rutina9:this.createPreventivo.value.rutina9,
        rutina10:this.createPreventivo.value.rutina10,
        fecharealizacion:this.createPreventivo.value.fecharealizacion,
        tiempoejecucion:this.createPreventivo.value.tiempoejecucion,
        tiempofuera:this.createPreventivo.value.tiempofuera,

        id: this.id,
      
        fechaCreacion : new Date().toISOString(),
        fechaActualizacion: new Date()
  
      }
   
      this._servicesEquipo.agregarMantenimientoPreventivo(mantenimientocorrectivo).then(() => {
        this.toastr.success('Mantenimiento Exitoso!!!');
        this.router.navigate(['/menuequipo'])
        
      }).catch(error => {
        console.log(error);
        
      })
      console.log(mantenimientocorrectivo)
    }

}
