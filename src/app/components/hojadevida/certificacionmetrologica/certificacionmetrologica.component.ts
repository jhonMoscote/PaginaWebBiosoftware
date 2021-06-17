import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-certificacionmetrologica',
  templateUrl: './certificacionmetrologica.component.html',
  styleUrls: ['./certificacionmetrologica.component.css']
})
export class CertificacionmetrologicaComponent implements OnInit {
  id: string| null
  createCro: FormGroup;
  file: File;
  completed = false;
  filePath:string;
  uploadPercent: Observable<number>;
  imagenes : any[]=[];
  imgUrl: Observable<string|any>
  ureles :any[] = [];
 
  url :string;
  path: string;
  task: any;
 

  constructor(private fb: FormBuilder,private firestore: AngularFirestore,  private storage: AngularFireStorage,private aRoute: ActivatedRoute) {
    this.id = this.aRoute.snapshot.paramMap.get('id');
    this.uploadPercent= new Observable;
    this.imgUrl = new Observable;
    this.createCro = this.fb.group({
      ids:[''],
      url:['']
    });
 
  }


  ngOnInit(): void {
    this.getPreventivo()
    
  }

  uploadFile() {
    this.completed = false;
    
    const filePath = this.file.name;
    const task = this.storage.upload(filePath, this.file);
    const fileRef = this.storage.ref(filePath)
    //var fileinput  = document.getElementById('file-input');
    var ref  = this.storage.ref('archivos');
    console.log(ref)
    console.log(task)
  

    this.uploadPercent = task.percentageChanges();
    
    task.snapshotChanges().pipe(
      finalize(() => {
        this.imgUrl = fileRef.getDownloadURL()
        this.imgUrl.subscribe(url=>{
          this.url = url;
          console.log(this.url)
          this.creaCro(this.url)
          this.getPreventivo()
          
        })
        this.completed = true;

    
      })
    )
    .subscribe();
  }

  onFileSelect(event) {
    if (event.target.files.length > 0) {
      this.file = event.target.files[0];
    }
  }



  nuevoCronograma(nuevoCrono: any):Promise<any>{
    return this.firestore.collection('metrologia').add(nuevoCrono);
  }
  getCrono(){
    return this.firestore.collection('metrologia', ref => ref.where("ids" ,"==", this.id )).snapshotChanges();
  }
  getCronoid(id: string): Observable<any>{
    return this.firestore.collection('metrologia').doc(id).snapshotChanges();
    
  }
  conteoHoraPreventivo(){
    return this.firestore.collection("preventivo", ref => ref.where("ids" ,"==", this.id ).where( "tiempoejecucion" ,">=", 0 )).snapshotChanges();

  }

  creaCro(urls:string){

    const nuevo = {
      ids: this.id,
      url: urls
    }
    this.nuevoCronograma(nuevo).then(()=>{
      
    })

  }

  getPreventivo(){
    this.
    getCrono().subscribe(data => {
      this.imagenes = [];
      data.forEach((element: any)=>{
        this.imagenes.push({

          id: element.payload.doc.id,
          ...element.payload.doc.data()
        })
      });
      this.ureles = this.imagenes.map((urñ)=>urñ.url);
      this.ureles.sort((a, b) => a-b);
  
      for(let i =0; i < this.ureles.length;i++){
  
       this.url = this.ureles[i];
        
      }


    })
  }


 





}
