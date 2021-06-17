import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-registrarusuario',
  templateUrl: './registrarusuario.component.html',
  styleUrls: ['./registrarusuario.component.css']
})
export class RegistrarusuarioComponent implements OnInit {

  crearUsuario: FormGroup;
  submitted: boolean;
  correo: string;
  contrasena:string;

   
  constructor(public  AuthService: AuthService, private fb: FormBuilder, private router:Router,private toastr:ToastrService) { 

    this.crearUsuario = this.fb.group({

      nombre:['',Validators.required],
      correo:['',Validators.required],
      identificacion:['',Validators.required],
      celular:['',Validators.required],
      contrasena:['', Validators.required],
      cargo:['',Validators.required]
      

    }) 


    
  }
  ngOnInit(): void {
   
  }

  registrarUsuario(){

    this.submitted =true;
    if(this.crearUsuario.invalid){
 
      return;
    }
    this.correo = this.crearUsuario.value.correo;
    this.contrasena = this.crearUsuario.value.contrasena;
    const registroUsuario: any={

      nombre: this.crearUsuario.value.nombre,
      correo: this.crearUsuario.value.correo,
      identificacion: this.crearUsuario.value.identificacion,
      celular: this.crearUsuario.value.celular,
      contrasena: this.crearUsuario.value.contrasena,
      cargo:this.crearUsuario.value.cargo
    }
   
    this.AuthService.agregarUsuario(registroUsuario).then(()=>{
      console.log("registro exitosos")
      this.toastr.info('El usuario ha sido registrado con exito', 'usuario Registrado', {
        positionClass: 'toast-bottom-right'
      })
    }).catch(error=>{
      console.log(error)
    })
    
 
      this.router.navigate(['/listausuarios']);

    }

    



}
