import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';


@Component({
  selector: 'app-documentosequipos',
  templateUrl: './documentosequipos.component.html',
  styleUrls: ['./documentosequipos.component.css']
})
export class DocumentosequiposComponent implements OnInit {
  file: File;
  completed = false;
  uploadPercent: Observable<number>;
  constructor(  private storage: AngularFireStorage) {

  }


  ngOnInit(): void {
  }

  uploadFile() {
    this.completed = false;
    const filePath = this.file.name;
    const task = this.storage.upload(filePath, this.file);

    this.uploadPercent = task.percentageChanges();

    task.snapshotChanges().pipe(
      finalize(() => {
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

}

  
  

 


