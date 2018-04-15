import { Component} from '@angular/core';

@Component({
  selector: "my-calculadora",
  templateUrl: "./calculadora.component.html"
})
export class CalculadoraComponent {
  numeroIngresado = "";
  numero1 = 0;
  numero2 = 0;
  simbolo = "";
  resultado = 0;
  contador = 0;

  limpiar(numero: string) {
    this.numeroIngresado = numero;
    numero = "";
    this.numeroIngresado = "";
  }

  agregarNumero(numero: string) {
    this.numeroIngresado += numero;
  }

  obtenerOperacion(operacion: string) {
    if (operacion === "/") {
      if (this.contador % 2 === 0) {
        this.numero1 = parseInt(this.numeroIngresado);
        this.simbolo = "/";
        this.limpiar("0");
        this.contador++;
      }
    } else if (operacion === "x") {
      if (this.contador % 2 === 0) {
        this.numero1 = parseInt(this.numeroIngresado);
        this.simbolo = "x";
        this.limpiar("0");
        this.contador++;        
      }
    } else if (operacion === "-") {
      if (this.contador % 2 === 0) {
        this.numero1 = parseInt(this.numeroIngresado);
        this.simbolo = "-";
        this.limpiar("0");
        this.contador++;
      }
    } else if (operacion === "+") {
      if (this.contador % 2 === 0) {
        this.numero1 = parseInt(this.numeroIngresado);
        this.simbolo = "+";
        this.limpiar("0");
        this.contador++;
      }
    } else if (operacion === "=") {
      if (this.simbolo === "/") {
        if (this.contador % 2 !== 0) {
          this.numero2 = parseInt(this.numeroIngresado);
          this.resultado = this.numero1 / this.numero2;
          this.numeroIngresado = "" + this.resultado;
          this.contador++;
        }
      } else if (this.simbolo === "x") {
        if (this.contador % 2 !== 0) {
          this.numero2 = parseInt(this.numeroIngresado);
          this.resultado = this.numero1 * this.numero2;
          this.numeroIngresado = "" + this.resultado;
          this.contador++;
        }
      } else if (this.simbolo === "-") {
        if (this.contador % 2 !== 0) {
          this.numero2 = parseInt(this.numeroIngresado);
          console.log(this.numero2);
          this.resultado = this.numero1 - this.numero2;
          this.numeroIngresado = "" + this.resultado;
          this.contador++;
        }
      } else if (this.simbolo === "+") {
        if (this.contador % 2 !== 0) {
          this.numero2 = parseInt(this.numeroIngresado);
          this.resultado = this.numero1 + this.numero2;
          this.numeroIngresado = "" + this.resultado;
          this.contador++;
          console.log('' + this.numero1 + ' + ' + this.numero2);
        }
      }
    }
  }

}
