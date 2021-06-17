import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';
import { element } from 'protractor';
import { Observable } from 'rxjs';
import { RepuestosService } from 'src/app/services/repuestos.service';

@Component({
  selector: 'app-almacen',
  templateUrl: './almacen.component.html',
  styleUrls: ['./almacen.component.css']
})
export class AlmacenComponent implements OnInit {

  repuestos: any[]=[];
  constructor(private _repuestoService: RepuestosService,private toastr: ToastrService) {
   } 
  ngOnInit(): void {
    this.getRepuestos()
  }
  getRepuestos(){
    this._repuestoService.getRepuestos().subscribe(data => {
      this.repuestos = [];
      data.forEach((element: any)=>{
        this.repuestos.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        })
      });

    })
  }

  eliminarRepuesto(id: string) {
    this._repuestoService.eliminarRepuesto(id).then(() => {
      console.log('Repuesto eliminado con exito');
      this.toastr.error('El Repuesto fue eliminado con exito', 'Registro eliminado!', {
        positionClass: 'toast-bottom-right'
      });
    }).catch(error => {
      console.log(error);
    })
  }

}
