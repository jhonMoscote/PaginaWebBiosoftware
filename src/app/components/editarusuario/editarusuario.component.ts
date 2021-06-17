import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-editarusuario',
  templateUrl: './editarusuario.component.html',
  styleUrls: ['./editarusuario.component.css']
})
export class EditarusuarioComponent implements OnInit {
  id: string | null;
  editarUsuario: FormGroup;
  submitted: boolean;
  correo: string;

  constructor( public  AuthService: AuthService, private fb: FormBuilder, private router:Router,private aRoute: ActivatedRoute, private toastr:ToastrService) {
    this.id = this.aRoute.snapshot.paramMap.get('id');
    this.editarUsuario = this.fb.group({
 
      nombre:['',Validators.required],
      correo:['',Validators.required],
      identificacion:['',Validators.required],
      celular:['',Validators.required],
      contrasena:['', Validators.required],
      cargo:['',Validators.required]
      

    }) 

   }

  ngOnInit(): void {
    this.verEditado()
  }
  
   
  verEditado() {
  
    if (this.id !== null) {
      this.AuthService.getUsuario(this.id).subscribe(data => {
        this.editarUsuario.setValue({
          nombre: data.payload.data()['nombre'],
          correo: data.payload.data()['correo'],
          identificacion: data.payload.data()['identificacion'],
          celular: data.payload.data()['celular'],
          contrasena: data.payload.data()['contrasena'],
          cargo: data.payload.data()['cargo']
        })
      })
    }
  }

  editar(){
    this.editarUsuarios(this.id);
  }

  editarUsuarios(id: string) {
    id= this.id;
    const usuario: any = {
      nombre: this.editarUsuario.value.nombre,
      correo: this.editarUsuario.value.correo,
      identificacion: this.editarUsuario.value.identificacion,
      celular: this.editarUsuario.value.celular,
      contrasena: this.editarUsuario.value.contrasena,
      cargo:this.editarUsuario.value.cargo
   
    }



    this.AuthService.editarUsuario(id,usuario).then(() => {
    
      this.toastr.info('El usuario fue modificado con exito', 'usuario modificado', {
        positionClass: 'toast-bottom-right'
      })
      this.router.navigate(['/listausuarios']);
    })
  }
}
