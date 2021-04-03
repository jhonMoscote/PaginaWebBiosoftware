import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menuequipo',
  templateUrl: './menuequipo.component.html',
  styleUrls: ['./menuequipo.component.css']
})
export class MenuequipoComponent implements OnInit {

  id: string| null
  constructor(private aRoute: ActivatedRoute) { 
    this.id = this.aRoute.snapshot.paramMap.get('id');
    console.log(this.id);

  }

  ngOnInit(): void {
  }

}
