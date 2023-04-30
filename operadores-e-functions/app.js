const readLine = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

const validarNumeroInformado = (numero) => {
  const resultado = Number.parseFloat(numero);

  if(!resultado){
    console.log('O número informado não é válido.');
  } else {
    return resultado;
  }
}

const validarOperador = (operador) => {
  switch(operador){
    case '+':
    case '-':
    case '*':
    case '/':
    case '%':
      return operador;
    default:
      console.log('Operador informado inválido');
      return null;
  }
}

readLine.question('Informe um número: ', (numero1) => {
  const numeroValidado1 = validarNumeroInformado(numero1);

  if(numeroValidado1) {
    readLine.question('Por favor, informe outro número: ', (numero2) => {
      const numeroValidado2 = validarNumeroInformado(numero2);

      if (numeroValidado2) {
        readLine.question('Favor informar o operador: ', (operador) => {
          const operadorValidado = validarOperador(operador);
          if(operadorValidado) {
            switch(operadorValidado){
              case '+': console.log(`O operador selecionado foi Adição (+) = ${numeroValidado1} + ${numeroValidado2} = ${numeroValidado1 + numeroValidado2}`);
                break;
              case '-': console.log(`O operador selecionado foi Subtração (-) = ${numeroValidado1} - ${numeroValidado2} = ${numeroValidado1 - numeroValidado2}`);
                break;
              case '*': console.log(`O operador selecionado foi Multiplicação (*) = ${numeroValidado1} * ${numeroValidado2} = ${numeroValidado1 * numeroValidado2}`);
                break;
              case '/': console.log(`O operador selecionado foi Divisão (/) = ${numeroValidado1} / ${numeroValidado2} = ${numeroValidado1 / numeroValidado2}`);
                break;
              case '%': console.log(`O operador selecionado foi Módulo (%) = ${numeroValidado1} % ${numeroValidado2} = ${numeroValidado1 % numeroValidado2}`);
                break;
              default: break;
            }
          }
        });
      }
    });
  }
});