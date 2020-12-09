import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  mostrar=true;

  frase: any={
    mensaje: 'Un gran poder requiere  una gran responsabilidad',
    autor: 'ben Parker'
  };

  personajes:string []=['Spiderman', 'Venon','Octopus'];

  constructor() { }

  ngOnInit(): void {
  }

}
