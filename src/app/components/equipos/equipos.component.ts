import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-equipos',
  templateUrl: './equipos.component.html',
  styleUrls: ['./equipos.component.css']
})
export class EquiposComponent implements OnInit {

  equipos: Observable<any[]>;
  equiposalto: Observable<any[]>;
  equiposDadosBaja: Observable<any[]>;
  equiposMedio: Observable<any[]>;

  constructor(firestore: AngularFirestore) {
    this.equipos = firestore.collection('equipos', ref => ref.where("clasificacionRiesgo","==", "Riesgo Bajo")).valueChanges();
    this.equiposalto = firestore.collection('equipos', ref => ref.where("clasificacionRiesgo","==", "Riesgo Alto")).valueChanges();
    this.equiposDadosBaja= firestore.collection('equipos', ref => ref.where("clasificacionRiesgo","==", "Dado de Baja")).valueChanges();
    this.equiposMedio= firestore.collection('equipos', ref => ref.where("clasificacionRiesgo","==", "Riesgo Medio")).valueChanges();
  } 

  ngOnInit(): void {
  }

}
