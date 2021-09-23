import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-formato-solicitud-correctivo',
  templateUrl: './formato-solicitud-correctivo.component.html',
  styleUrls: ['./formato-solicitud-correctivo.component.css']
})
export class FormatoSolicitudCorrectivoComponent implements OnInit {
  id: string|null
  constructor(private ARoute:ActivatedRoute,private fb: FormBuilder,private firestore:AngularFirestore) {
    this.id = this.ARoute.snapshot.paramMap.get('id');
    
   }

  ngOnInit(): void {
  }
  getSolicitud(id: string): Observable<any>{
    return this.firestore.collection('Reporte').doc(id).snapshotChanges();
    
  }
 /* getObternerSolicitud(){
    this.getCorrectivo(this.id).subscribe((data) => {
     this.idAux= data.payload.data()['ids'],
     this.cantidad = data.payload.data()['cantidad'],

     this.MostrarCorrectivo.patchValue({
      asistencia: data.payload.data()['asistencia'],
      fallareportada: data.payload.data()['fallareportada'],
      diagnosticoproblema: data.payload.data()['diagnosticoproblema'],
      trabajorealizado: data.payload.data()['trabajorealizado'],
      nombre: data.payload.data()['nombre'],
      descripcion: data.payload.data()['descripcion'],
      cantidad: data.payload.data()['cantidad'],
      cantidadDisponible:data.payload.data()['cantidadDisponible'],
      costo: data.payload.data()['costo'],
      observaciones: data.payload.data()['observaciones'],
      criteriofalla: data.payload.data()['criteriofalla'],
      tiempoejecucion: data.payload.data()['tiempoejecucion'],
      tiempofuera:data.payload.data()['tiempofuera'],
      descripcionExterno:data.payload.data()['descripcionExterno'],
      costoExterno:data.payload.data()['costoExterno'],
      contraBiomedico:data.payload.data()['contraBiomedico'],
      contraArea:data.payload.data()['contraArea']
    });
     this.esVer(this.idAux)
    
    })

    
  }*/

}
