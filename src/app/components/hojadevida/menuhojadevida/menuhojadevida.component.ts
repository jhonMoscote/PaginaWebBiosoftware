import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menuhojadevida',
  templateUrl: './menuhojadevida.component.html',
  styleUrls: ['./menuhojadevida.component.css']
})
export class MenuhojadevidaComponent implements OnInit {

  id: string| null
  constructor(private aRoute: ActivatedRoute) { 
    this.id = this.aRoute.snapshot.paramMap.get('id');
    console.log(this.id);

  }
  ngOnInit(): void {
  }

}
