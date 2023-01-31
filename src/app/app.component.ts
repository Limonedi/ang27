import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Calculadora test';
  success : boolean = false;
  Selected: string = "Selecciona Operación";
  num1 !: number;
  num2 !: number;
  resultado !: number;

  ngOnInit(): void {
  }

  Calcular(){
    this.resultado = eval(this.num1 + this.Selected + this.num2)
    
  }
}
