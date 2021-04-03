import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getAll():Observable<any>{
    return this.http.get<any>('https://console.firebase.google.com/u/3/project/equiposmedicos/firestore/data~2Frepuestos~2F5ZazC7WUVuNkiSIBeUpm');
  }
}
