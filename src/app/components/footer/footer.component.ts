import { Component } from '@angular/core';

@Component({

  selector:'app-footer',

  templateUrl:'./footer.component.html'

})

export class FooterComponent {

  // anio=new Date().getFullYear();
  anio:number;
  constructor(){
    this.anio= new Date().getFullYear();
  }

}

