import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class PresupuestoService {

  constructor(private firestore: AngularFirestore) { }


  getCostosCorrectivos(){
    return this.firestore.collection('correctivo', ref=> ref.where("costo", ">=", 0)).snapshotChanges();
   
   }
   getCostosPreventivos(){
     return this.firestore.collection('preventivo', ref=> ref.where('costo', '>=', 0)).snapshotChanges();
   }
   getCostosCorrectivosExternos(){
     return this.firestore.collection('correctivo', ref=> ref.where('costoExterno', '>=', 0)).snapshotChanges();
   }
   getCostosPreventivosExternos(){
    return this.firestore.collection('preventivo', ref=> ref.where('costoExterno', '>=', 0)).snapshotChanges();
  }
}
