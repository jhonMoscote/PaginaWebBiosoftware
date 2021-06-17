import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReportesService {

  constructor(private firestore: AngularFirestore) { }

 

  getReporte(id: string): Observable<any>{
    return this.firestore.collection('bajas').doc(id).snapshotChanges();
    
  }
  getReportes(): Observable<any>{
    return this.firestore.collection('bajas').snapshotChanges();
    
  }
 

}
