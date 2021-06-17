import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-historialmantenimientopreventivo',
  templateUrl: './historialmantenimientopreventivo.component.html',
  styleUrls: ['./historialmantenimientopreventivo.component.css']
})
export class HistorialmantenimientopreventivoComponent implements OnInit {

  id: string|null
  mantenimientos: any[]=[];
  numero : number;
  fallas: number;
  numerohorasPreventivo: number=0;
  numerohorasCorrectivo: number=0;
  horasPreventivo: any[]=[];
  horasCorrectivo: any[]=[];
  imagenes : any[]=[];
  ureles :any[] = [];
  url :string;
  constructor(private firestore: AngularFirestore, private router: Router,private aRoute: ActivatedRoute) { 

    this.id = this.aRoute.snapshot.paramMap.get('id');

  }

  ngOnInit(): void {
    this.getEquipo(),this.getNumeroPreventivo(), this.getNumeroCorrectivo(),this. getPreventivo()
    
   

   
  }

  consultaPreventivo(){
 return this.firestore.collection("preventivo", ref => ref.where("ids" ,"==", this.id )).snapshotChanges();
  
  }
  conteoPersonal(){
    return this.firestore.collection("correctivo", ref => ref.where( "criteriofalla" ,"==", "Falla del Personal" )).snapshotChanges();

    
     }
  getEquipo(){
    this.
    consultaPreventivo().subscribe(data => {
      this.mantenimientos = [];
      data.forEach((element: any)=>{
        this.mantenimientos.push({

          id: element.payload.doc.id,
          ...element.payload.doc.data()
        })
      });

    })
  }

  conteoHoraPreventivo(){
    return this.firestore.collection("preventivo", ref => ref.where("ids" ,"==", this.id ).where( "tiempoejecucion" ,">=", 0 )).snapshotChanges();

  }
  conteoHoraCorrectivo(){
    return this.firestore.collection("correctivo", ref => ref.where("ids" ,"==", this.id ).where( "tiempoejecucion" ,">=", 0 )).snapshotChanges();

  }

  getNumeroPreventivo(){
    this.conteoHoraPreventivo().subscribe(data => {
      this.horasPreventivo = [];
      data.forEach((element: any)=>{
      
        this.horasPreventivo.push({
 
         tiempoejecucion:element.payload.doc.tiempoejecucion,
         ...element.payload.doc.data()
        })    
      }); 
  this.numerohorasPreventivo=  this.horasPreventivo.map((horas)=>horas.tiempoejecucion).reduce((prev,next)=>prev+next)
    })}

    getNumeroCorrectivo(){
      this.conteoHoraCorrectivo().subscribe(data => {
        this.horasCorrectivo = [];
        data.forEach((element: any)=>{
        
          this.horasCorrectivo.push({
   
           tiempoejecucion:element.payload.doc.tiempoejecucion,
           ...element.payload.doc.data()
          })    
        }); 
    this.numerohorasCorrectivo=  this.horasCorrectivo.map((horas)=>horas.tiempoejecucion).reduce((prev,next)=>prev+next)
      })}

  getNumero(){
    this.
    conteoPersonal().subscribe(data => {
      this.mantenimientos = [];
      data.forEach((element: any)=>{
        this.numero = this.numero+1;
        this.mantenimientos.push({
          
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        })
      });

    })
  }

  getCrono(){
    return this.firestore.collection('cronograma').snapshotChanges();
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
