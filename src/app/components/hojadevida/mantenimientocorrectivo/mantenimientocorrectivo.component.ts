import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { EquiposService } from 'src/app/services/equipos.service';
import { RepuestosService } from 'src/app/services/repuestos.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-mantenimientocorrectivo',
  templateUrl: './mantenimientocorrectivo.component.html',
  styleUrls: ['./mantenimientocorrectivo.component.css'],
  providers:[HttpService ]
})
export class MantenimientocorrectivoComponent implements OnInit {
  createCorrectivo: FormGroup;
  mostrarDatos: FormGroup;
  submitted = false;
  id: string| null
  equipos: any[]=[];
  codigo: string;
  repuesto: string;
  repuestos: any[]=[];
  nombre: string;
  cantidadN: number;
  descripcion: string;
  cantidadD: number;
  costo: number;
  consultorio: string;
  servicio: string;
  clasificacionRiesgo:string;
  
  constructor(private fb: FormBuilder,private _servicesEquipo: EquiposService, private _repuestoService: RepuestosService, private aRoute: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService, private http: HttpClient,private datas: HttpService) {

      this.id = this.aRoute.snapshot.paramMap.get('id');
      console.log(this.id);
 
    this.repuesto = document.getElementsByName("repuesto")[''];

      this.createCorrectivo = this.fb.group({
        id:[''],
        asistencia :[''],
        fallareportada :[''],
        diagnosticoproblema :[''],
        trabajorealizado :[''],
        nombre:[''],
        descripcion:[''],
        cantidad:[''],
        cantidadDisponible:[''],
        costo:[''],
        observaciones:[''],
        criteriofalla:[''],
        tiempoejecucion:[''],
        tiempofuera:['']


 
       
  
      }
      )
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
    this.esVer(),this.getRepuestos(), this.esVerRepuestos("5ZazC7WUVuNkiSIBeUpm")
  
  }
  esVer(){
    if(this.id !== null){
      this._servicesEquipo.getEquipo(this.id).subscribe(data =>{
     console.log(data.payload.data()['codigoecr1']);
      this.consultorio = data.payload.data()['consultorio'];
      this.servicio =data.payload.data()['servicio'];
      this.clasificacionRiesgo = data.payload.data()['clasificacionRiesgo'];
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
    if(this.createCorrectivo.invalid){
 
      return;
    }
    const mantenimientocorrectivo: any = {

      asistencia : this.createCorrectivo.value.asistencia,
      fallareportada :this.createCorrectivo.value.fallareportada,
      diagnosticoproblema : this.createCorrectivo.value.diagnosticoproblema,
      trabajorealizado : this.createCorrectivo.value.trabajorealizado,
      nombre:this.createCorrectivo.value.nombre,
      cantidad:this.createCorrectivo.value.cantidad,
      cantidadDisponible:this.createCorrectivo.value.cantidadDisponible,
      costo:this.createCorrectivo.value.costo,
      descripcion:this.createCorrectivo.value.descripcion,
      observaciones:this.createCorrectivo.value.observaciones,
      criteriofalla: this.createCorrectivo.value.criteriofalla,
      tiempoejecucion:this.createCorrectivo.value.tiempoejecucion,
      tiempofuera:this.createCorrectivo.value.tiempofuera,
      id: this.id,
      consultorio : this.consultorio,
      servicio : this.servicio,
      clasificacionRiesgo :  this.clasificacionRiesgo,
      fechaCreacion : new Date().toDateString(),
      fechaActualizacion : new Date()

    }
 
    this._servicesEquipo.agregarMantenimientoCorrectivo(mantenimientocorrectivo).then(() => {
      this.toastr.success('Mantenimiento Exitoso!!!');
      this.router.navigate(['/menuequipo'])
      
    }).catch(error => {
      console.log(error);
      
    })
    console.log(mantenimientocorrectivo)
  }

  esVerRepuestos(nombre:string){
    if(nombre !== null){
      this._repuestoService.getRepuesto(nombre).subscribe(data =>{
        console.log(data.payload.data()['cantidadInicial']);
        console.log(data.payload.data()['nombre']);
        console.log(data.payload.data()['cantidadRestante']);
        console.log(data.payload.data()['costo']);
        console.log(data.payload.data()['descripcion']);
        
      this.mostrarDatos.patchValue({
        
  
     cantidadInicial: data.payload.data()['cantidadInicial'],
    referencia: data.payload.data()['nombre']

    
      })
   
      
      
      })
    }
  }





  getRepuestos(){
    
    this._repuestoService.getRepuestos().subscribe(data => {
      this.repuestos = [];
      data.forEach((element: any)=>{
        //console.log(element.payload.doc.id);
        //console.log(element.payload.doc.data());
        this.repuestos.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        })
      });
      console.log(this.repuestos);

    })
  }


  httpRepuesto(){
    this.http. get('https://console.firebase.google.com/u/3/project/equiposmedicos/firestore/data~2Frepuestos~2F5ZazC7WUVuNkiSIBeUpm').subscribe((resp:any) =>{
      console.log(resp)
    })


  }



}
