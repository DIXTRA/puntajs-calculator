'use strict';

import Calculadora from './calculadora';

class Pantalla {
  constructor() {
    this.imprimir = this.imprimir.bind(this);
    this.pantalla = document.getElementById('input');
    this.esResultado = false;
  }

  impreso() {
    return this.valor || '';
  }

  imprimir(valor) {
    if (!this.esResultado || !(/^[0-9]$/).test(valor)) {
      this.valor = this.pantalla.value = (this.valor || '') + valor;
      this.esResultado = false;
    } else {
      this.valor = this.pantalla.value = valor;
      this.esResultado = !this.esResultado;
    }
  }

  borrar() {
    this.valor = this.pantalla.value = '';
  }

  resultado() {
    this.valor = this.pantalla.value = Calculadora.calcular(this.pantalla.value);
    this.esResultado = !this.esResultado;
  }
}

export default new Pantalla();
