import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-listausuarios',
  templateUrl: './listausuarios.component.html',
  styleUrls: ['./listausuarios.component.css']
})
export class ListausuariosComponent implements OnInit {
  usuarios :any[]= [];
  constructor(public  AuthService: AuthService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.mostrarUsuarios()
  }
  mostrarUsuarios(){

    this.AuthService.getUsuarios().subscribe(data=>{
      this.usuarios = [];
      data.forEach((element:any)=>{
        this.usuarios.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        })
      });
     
     

    })
  }

  eliminarUsuario(id: string) {
    this.AuthService.eliminarUsuario(id).then(() => {
      console.log('Usuario eliminado con exito');
      this.toastr.error('El Usuario fue eliminado con exito', 'Registro eliminado!', {
        positionClass: 'toast-bottom-right'
      });
    }).catch(error => {
      console.log(error);
    })
  }


}
