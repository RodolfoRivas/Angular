import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-cuadro',
  template: `<style>
  button {
    background-color: red;
    margin: 20 auto;
    border: none;
    color: white;
    padding: 60px 60px;
    text-align: center;
    text-decoration: none;
    font-size: 42px;
    object-scale: 1;
  }
</style>
  <button >{{value}}</button>

  `,
  styles: ['button { width: 100%; height: 100%; font-size: 5em !important; }'
    
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
  /*<style>
  button {
    background-color: #4CAF50;  Green 
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
  }
</style>*/
}
