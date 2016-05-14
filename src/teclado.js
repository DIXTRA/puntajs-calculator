'use strict';

import Pantalla from './pantalla';
import Calculadora from './calculadora';

class Teclado {
  constructor() {
    this.buttons = Array.from(document.getElementsByTagName('button'));

    this.signos = (/^[X\+÷\-]$/);
    this.operacion = (/^[\-]?[0-9(\.)?]+([X\+÷\-][\-]?[0-9(\.)?]+)$/);
    this.punto = (/[0-9](\.)([0-9])*$/);

    this.analizar = this.analizar.bind(this);
  }

  init() {
    this.buttons.forEach((button) => {
      button.addEventListener('click', (e) => {
        this.oprimir(e.target.value);
      });
    });
  }

  /*oprimir(valor) {
    this.analizar(valor);
  }*/

  /*analizar(valor) {
    const impreso = Pantalla.impreso()
      , ultimo = impreso.slice(-1);

    if (impreso === 'Infinity' || impreso === 'NaN' && !this.signos.test(valor)) {
      Pantalla.borrar();
      Pantalla.imprimir(valor);
    } else if (this.signos.test(valor)) {
      if (ultimo === '') {
        return;
      } else if (this.signos.test(ultimo)) {
        return;
      } else if (this.operacion.test(impreso)) {
        Pantalla.resultado();
        Pantalla.imprimir(valor);
      } else {
        Pantalla.imprimir(valor);
      }
    } else if (valor === '=' && this.operacion.test(impreso)) {
      Pantalla.resultado();
    } else if (valor === '=') {
      return;
    } else if (valor === 'AC') {
      Pantalla.borrar();
    } else {
      Pantalla.imprimir(valor);
    }
  }*/
}

export default new Teclado();
