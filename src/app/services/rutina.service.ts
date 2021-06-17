import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RutinaService {

  constructor(private firebase: AngularFirestore) { }




  agregarRutina(rutina: any): Promise<any>{
    return this.firebase.collection('rutina').add(rutina);
   
  }
  agregarProtocolo(rutina: any): Promise<any>{
    return this.firebase.collection('protocolo').add(rutina);
   
  }

  getRutina(id:string, data: any): Observable<any>{
    return this.firebase.collection('rutina').doc().snapshotChanges();
  }

  getRutinas(id: string): Observable<any>{
    return this.firebase.collection('rutina').doc(id).snapshotChanges();
    
  }
  getRutinasTodas(): Observable<any>{
    return this.firebase.collection('rutina').snapshotChanges();
    
  }
  getProtocolostodos(): Observable<any>{
    return this.firebase.collection('protocolo').snapshotChanges();
    
  }
  getEquipo(id: string): Observable<any>{
    return this.firebase.collection('rutina').doc(id).snapshotChanges();
    
  }
  getProtocolo(id: string): Observable<any>{
    return this.firebase.collection('protocolo').doc(id).snapshotChanges();
    
  }
  actualizarRutina(id: string, data:any):Promise<any>{
    return this.firebase.collection('rutina').doc(id).update(data);
  }
  actualizarProtocolo(id: string, data:any):Promise<any>{
    return this.firebase.collection('protocolo').doc(id).update(data);
  }

}
