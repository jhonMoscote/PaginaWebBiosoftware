import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-menuequipo',
  templateUrl: './menuequipo.component.html',
  styleUrls: ['./menuequipo.component.css']
})
export class MenuequipoComponent implements OnInit {

  id: string| null
  constructor(private aRoute: ActivatedRoute,private router:Router
    ) { 
    this.id = this.aRoute.snapshot.paramMap.get('id');

   
  
  }

  ngOnInit(): void {
  
  }



//Función para actualizar cada 5 segundos(5000 milisegundos)



 



 


}
