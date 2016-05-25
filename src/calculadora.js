'use strict';

class Calculadora {
  constructor() {}

  suma(datos) {
    return datos.reduce((valorAnterior, valorActual) => {
      return parseInt(valorAnterior) + parseInt(valorActual);
    }).toString();
  }

  resta(datos) {
    return datos.reduce((valorAnterior, valorActual) => {
      return parseInt(valorAnterior) - parseInt(valorActual);
    }).toString();
  }

  multiplicacion(datos) {
    return datos.reduce((valorAnterior, valorActual) => {
      return parseInt(valorAnterior) * parseInt(valorActual);
    }).toString();
  }

  division(datos) {
    return datos.reduce((valorAnterior, valorActual) => {
      return parseInt(valorAnterior) / parseInt(valorActual);
    }).toString();
  }

  calcular(datos) {
    switch (true) {
      case (/X/).test(datos):
        return this.multiplicacion(datos.split('X'));
        break;
      case (/÷/).test(datos):
        return this.division(datos.split('÷'));
        break;
      case (/\+/).test(datos):
        return this.suma(datos.split('+'));
        break;
      case (/\-/).test(datos):
        return this.resta(datos.split('-'));
        break;
    }
  }
}

export default new Calculadora();
