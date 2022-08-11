import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-cuadro',
  template: `
  <button>{{value}}</button>

  `,
  styles: [
  ]
})
export class CuadroComponent {

  @Input() value: 'X' | 'O' = "X";
  
 /* rnd = Math.random();
  constructor(){
setInterval(()=> this.rnd = Math.random(), 500)
esto va arriba lo de abajo
    <p>
      cuadro works!
      {{rnd}}
    </p>
  }*/
}
