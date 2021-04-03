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
  constructor(private firestore: AngularFirestore, private router: Router,private aRoute: ActivatedRoute) { 
   
    
    this.id = this.aRoute.snapshot.paramMap.get('id');
    console.log(this.id);
   
  
  }

  ngOnInit(): void {
    this.getEquipo(),this.getNumeroPreventivo(), this.getNumeroCorrectivo()
    
   

   
  }

  consultaPreventivo(){
 return this.firestore.collection("preventivo", ref => ref.where("id" ,"==", this.id )).snapshotChanges();
  
  }
  conteoPersonal(){
    return this.firestore.collection("correctivo", ref => ref.where( "criteriofalla" ,"==", "Falla del Personal" )).snapshotChanges();

    
     }
  getEquipo(){
    this.
    consultaPreventivo().subscribe(data => {
      this.mantenimientos = [];
      data.forEach((element: any)=>{
        //console.log(element.payload.doc.id);
        //console.log(element.payload.doc.data());
        this.mantenimientos.push({

          id: element.payload.doc.id,
          ...element.payload.doc.data()
        })
      });
      console.log(this.mantenimientos);

    })
  }

  conteoHoraPreventivo(){
    return this.firestore.collection("preventivo", ref => ref.where("id" ,"==", this.id ).where( "tiempoejecucion" ,">=", 0 )).snapshotChanges();

  }
  conteoHoraCorrectivo(){
    return this.firestore.collection("correctivo", ref => ref.where("id" ,"==", this.id ).where( "tiempoejecucion" ,">=", 0 )).snapshotChanges();

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
        //console.log(element.payload.doc.id);
        //console.log(element.payload.doc.data());
        this.mantenimientos.push({
          
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        })
      });
      console.log(this.mantenimientos);

    })
  }




}
