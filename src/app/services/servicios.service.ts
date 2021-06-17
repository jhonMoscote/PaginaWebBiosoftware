import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  constructor(private firestore: AngularFirestore) { }
  getPsicologia(){
    return this.firestore.collection('correctivo', ref=> ref.where("servicio", "==", "Psicologia")).snapshotChanges();
   
   }
   getPsicologiaPreventivo(){
    return this.firestore.collection('preventivo', ref=> ref.where("servicio", "==", "Psicologia")).snapshotChanges();
   
   }

   getConsultaPrioritaria(){
    return this.firestore.collection('correctivo', ref=> ref.where("servicio", "==", "Consulta Prioritaria")).snapshotChanges();
   
   }
   getConsultaPrioritariaPreventiva(){
    return this.firestore.collection('preventivo', ref=> ref.where("servicio", "==", "Consulta Prioritaria")).snapshotChanges();
   
   }
   getMedicina6(){
    return this.firestore.collection('correctivo', ref=> ref.where("servicio", "==", "Medicina General")).snapshotChanges();
   
   }
   getMedicina6Preventivo(){
    return this.firestore.collection('preventivo', ref=> ref.where("servicio", "==", "Medicina General")).snapshotChanges();
   
   }

   getDetencionTemprana(){
    return this.firestore.collection('correctivo', ref=> ref.where("servicio", "==", "Detencion Temprana")).snapshotChanges();
   
   }

   getDetencionTempranaPreventivo(){
    return this.firestore.collection('preventivo', ref=> ref.where("servicio", "==", "Detencion Temprana")).snapshotChanges();
   
   }
   getToma(){
    return this.firestore.collection('correctivo', ref=> ref.where("servicio", "==", "Toma e interpretacion de Radiografias Odontologicas")).snapshotChanges();
   
   }
   getTomaPreventivo(){
    return this.firestore.collection('preventivo', ref=> ref.where("servicio", "==", "Toma e interpretacion de Radiografias Odontologicas")).snapshotChanges();
   
   }

   getServicioFarmaceutico(){
    return this.firestore.collection('correctivo', ref=> ref.where("servicio", "==", "Servicio Farmaceutico")).snapshotChanges();
   
   }

   getServicioFarmaceuticoPreventivo(){
    return this.firestore.collection('preventivo', ref=> ref.where("servicio", "==", "Servicio Farmaceutico")).snapshotChanges();
   
   }

   getLaboratorio(){
    return this.firestore.collection('correctivo', ref=> ref.where("servicio", "==", "Laboratorio Clinico")).snapshotChanges();
   
   }

   
   getLaboratorioPreventivo(){
    return this.firestore.collection('preventivo', ref=> ref.where("servicio", "==", "Laboratorio Clinico")).snapshotChanges();
   
   }

   getEnfermeria1(){
    return this.firestore.collection('correctivo', ref=> ref.where("servicio", "==", "Enfermeria")).snapshotChanges();
   
   }
   getEnfermeriaPreventivo(){
     return this.firestore.collection('preventivo', ref=> ref.where("servicio", "==", "Enfermeria")).snapshotChanges();
    
    }

    getOdontologiaCorrectivo(){
      return this.firestore.collection('correctivo', ref=> ref.where("servicio", "==", "Odontologia General")).snapshotChanges();
     
     }

     getOdontologiaPreventivo(){
       return this.firestore.collection('preventivo', ref=> ref.where("servicio", "==", "Odontologia General")).snapshotChanges();
      
      }
   getNumeroEquiposMedicina(){

    return this.firestore.collection('equipos', ref => ref.where("servicio", "==", "Medicina General")).snapshotChanges();
   }

   getNumeroEquiposEnfermeria(){

    return this.firestore.collection('equipos', ref => ref.where("servicio", "==", "Enfermeria")).snapshotChanges();
   }

   getNumeroEquiposOdontologia(){

    return this.firestore.collection('equipos', ref => ref.where("servicio", "==", "Odontologia General")).snapshotChanges();
   }
   getNumeroEquiposPsicologia(){

    return this.firestore.collection('equipos', ref => ref.where("servicio", "==", "Psicologia")).snapshotChanges();
   }

   getNumeroEquiposConsultaPrioritaria(){

    return this.firestore.collection('equipos', ref => ref.where("servicio", "==", "Consulta Prioritaria")).snapshotChanges();
   }

   getNumeroEquiposLaboratorioClinico(){

    return this.firestore.collection('equipos', ref => ref.where("servicio", "==", "Laboratorio Clinico")).snapshotChanges();
   }

   getNumeroEquiposFarmaceutico(){

    return this.firestore.collection('equipos', ref => ref.where("servicio", "==", "Servicio Farmaceutico")).snapshotChanges();
   }

   getNumeroEquiposTomas(){

    return this.firestore.collection('equipos', ref => ref.where("servicio", "==", "Toma e interpretacion de Radiografias Odontologicas")).snapshotChanges();
   }

   getNumeroEquiposDetencion(){

    return this.firestore.collection('equipos', ref => ref.where("servicio", "==", "Detencion Temprana")).snapshotChanges();
   }



}
