import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-codigoqr',
  templateUrl: './codigoqr.component.html',
  styleUrls: ['./codigoqr.component.css']
})
export class CodigoqrComponent implements OnInit {
  title = 'app';
  elementType = 'url';
  value :string;
  id: string|null

  constructor(private aRoute: ActivatedRoute) { 
    this.id = this.aRoute.snapshot.paramMap.get('id');
    this.value = this.id;
  }

  ngOnInit(): void {
  
  }

}
