import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-equipos',
  templateUrl: './equipos.component.html',
  styleUrls: ['./equipos.component.css']
})
export class EquiposComponent implements OnInit {

  equiposClase1: Observable<any[]>;
  equiposClase2A: Observable<any[]>;
  equiposClase2B: Observable<any[]>;
  equiposClase3: Observable<any[]>;
  equiposBaja: Observable<any[]>;

  constructor(firestore: AngularFirestore) {
    this.equiposClase1 = firestore.collection('equipos', ref => ref.where("clasificacionRiesgo","==", "CLASE I").where("baja","==","no")).valueChanges();
    this.equiposClase2A = firestore.collection('equipos', ref => ref.where("clasificacionRiesgo","==", "CLASE II A").where("baja","==","no")).valueChanges();
    this.equiposClase2B= firestore.collection('equipos', ref => ref.where("clasificacionRiesgo","==", "CLASE II B").where("baja","==","no")).valueChanges();
    this.equiposClase3= firestore.collection('equipos', ref => ref.where("clasificacionRiesgo","==", "CLASE III").where("baja","==","no")).valueChanges();
    this.equiposBaja= firestore.collection('equipos', ref => ref.where('baja', '==', 'si')).valueChanges();
  } 

  ngOnInit(): void {
  }

}
