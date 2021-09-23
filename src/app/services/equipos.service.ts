import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { promise } from 'selenium-webdriver';

@Injectable({
  providedIn: 'root'
})
export class EquiposService {

  /*constructor(private firestore: AngularFirestore) { }
  agregarEquipo(equipo: any): Promise<any>{
    return this.firestore.collection('equipos').add(equipo);
  }
  getDoc(path:string, id: string){
    const  collection = this.firestore.collection(path);
    return collection.doc(id).valueChanges();

  }
  getId(){
    return this.firestore.createId();
  }*/
  
  constructor(private firestore: AngularFirestore) { }

  nuevoEquipo(nuevoEquipo: any):Promise<any>{
    return this.firestore.collection('equipos').add(nuevoEquipo);
  }

  agregarMantenimientoCorrectivo(mantenimientocorrectivo: any): Promise<any>{
    return this.firestore.collection('correctivo').add(mantenimientocorrectivo);
   
  }
  editarEquipo(id: string, data:any): Promise<any> {
    return this.firestore.collection('equipo').doc(id).update(data);
  }
  
  agregarEquipoBaja(equipoBaja: any): Promise<any>{
    return this.firestore.collection('bajas').add(equipoBaja);
   
  }
  getMantenimientoCorrectivo(){
    return this.firestore.collection('correctivo').snapshotChanges();
  }

  agregarMantenimientoPreventivo(mantenimientocorrectivo: any): Promise<any>{
    return this.firestore.collection('preventivo').add(mantenimientocorrectivo);
   
  }
  getMantenimientoPreventivo(){
    return this.firestore.collection('preventivo').snapshotChanges();
  }
  agregarEquipo(equipo: any): Promise<any>{
    return this.firestore.collection('equipos').add(equipo);
  }
  getEquipos(): Observable<any>{
    return this.firestore.collection('equipos').snapshotChanges();
    
  }
  getEquiposUciNeonatal(){
   return this.firestore.collection('equipos', ref => ref.where("servicio","==", "UCI NEONATAL")).snapshotChanges();

  }

  getEquiposConsulta(){
    return this.firestore.collection('equipos', ref => ref.where("servicio","==", "Consulta Prioritaria")).snapshotChanges();
 
   }

   getEquiposInterpretacion(){
    return this.firestore.collection('equipos', ref => ref.where("servicio","==", "Toma e interpretacion de Radiografias Odontologicas")).snapshotChanges();
 
   }

   getEquiposServicio(){
    return this.firestore.collection('equipos', ref => ref.where("servicio","==", "Servicio Farmaceutico")).snapshotChanges();
 
   }
   getEquiposLaboratorio(){
    return this.firestore.collection('equipos', ref => ref.where("servicio","==", "Laboratorio Clinico")).snapshotChanges();
 
   }
   getEquiposTemprana(){
    return this.firestore.collection('equipos', ref => ref.where("servicio","==", "Detencion Temprana")).snapshotChanges();
 
   }

   getEquiposEnfermeria(){
    return this.firestore.collection('equipos', ref => ref.where("servicio","==", "Enfermeria")).snapshotChanges();
 
   }
   getEquiposMedicina(){
    return this.firestore.collection('equipos', ref => ref.where("servicio","==", "Medicina General")).snapshotChanges();
 
   }
   getEquiposOdontologia(){
    return this.firestore.collection('equipos', ref => ref.where("servicio","==", "Odontologia General")).snapshotChanges();
 
   }

   getEquiposPsicologia(){
    return this.firestore.collection('equipos', ref => ref.where("servicio","==", "Psicologia")).snapshotChanges();
 
   }
  getEquiposAlmacenClase3(){
    return  this.firestore.collection('equipos', ref => ref.where("clasificacionRiesgo","==", "CLASE III").where("baja","==","no")).snapshotChanges();
 
   }
   getEquiposAlmacenRiesgoBajo(){
    return this.firestore.collection('equipos', ref => ref.where("clasificacionRiesgo", "==", "CLASE I").where("baja","==","no")).snapshotChanges();
 
   }
   getEquiposConsultorioMedicina1(){
    return this.firestore.collection('equipos', ref => ref.where("consultorio", "==", "Consultorio Medicina General 1")).snapshotChanges();
 
   }
   getEquiposConsultorioMedicina2(){
    return this.firestore.collection('equipos', ref => ref.where("consultorio", "==", "Consultorio Medicina General 2")).snapshotChanges();
 
   }
   getEquiposConsultorioMedicina3(){
    return this.firestore.collection('equipos', ref => ref.where("consultorio", "==", "Consultorio Medicina General 3")).snapshotChanges();
 
   }
   getEquiposConsultorioMedicina4(){
    return this.firestore.collection('equipos', ref => ref.where("consultorio", "==", "Consultorio Medicina General 4")).snapshotChanges();
 
   }
   getEquiposConsultorioMedicina5(){
    return this.firestore.collection('equipos', ref => ref.where("consultorio", "==", "Consultorio Medicina General 5")).snapshotChanges();
 
   }
   getEquiposConsultorioMedicina6(){
    return this.firestore.collection('equipos', ref => ref.where("consultorio", "==", "Consultorio Medicina General 6")).snapshotChanges();
 
   }

   getEquiposConsultorioOdontologia1(){
    return this.firestore.collection('equipos', ref => ref.where("consultorio", "==", "Consultorio Odontologico 1")).snapshotChanges();
 
   }
   getEquiposConsultorioOdontologia2(){
    return this.firestore.collection('equipos', ref => ref.where("consultorio", "==", "Consultorio Odontologico 2")).snapshotChanges();
 
   }
   getEquiposConsultorioOdontologia3(){
    return this.firestore.collection('equipos', ref => ref.where("consultorio", "==", "Consultorio Odontologico 3")).snapshotChanges();
 
   }

   getEquiposConsultorioEnfermeria1(){
    return this.firestore.collection('equipos', ref => ref.where("consultorio", "==", "Consultorio Enfermeria 1")).snapshotChanges();
 
   }
   getEquiposConsultorioEnfermeria2(){
    return this.firestore.collection('equipos', ref => ref.where("consultorio", "==", "Consultorio Enfermeria 2")).snapshotChanges();
 
   }
   getEquiposAlmacenRiesgoMedio(){
 
    return this.firestore.collection('equipos', ref => ref.where("clasificacionRiesgo","==", "CLASE II B").where("baja","==","no")).snapshotChanges();
 
   }
   getEquiposAlmacenClase2A(){
 
    return this.firestore.collection('equipos', ref => ref.where("clasificacionRiesgo", "==", "CLASE II A").where("baja","==","no") ).snapshotChanges();
 
   }
   getEquiposAlmacenDadosBaja(){
    return this.firestore.collection('equipos', ref => ref.where("baja", "==", "si")).snapshotChanges();
 
   }
  getEquipo(id: string): Observable<any>{
    return this.firestore.collection('equipos').doc(id).snapshotChanges();
    
  }
  getEquipot(id: string): Observable<any>{
    return this.firestore.collection('equipos').doc(id).snapshotChanges();
    
  }
  actualizarEquipo(id: string, data:any):Promise<any>{
    return this.firestore.collection('equipos').doc(id).update(data);
  }


 

  
 

}
