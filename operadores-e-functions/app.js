const readLine = require('readline').createInterface({
  input : process.stdin,
  output : process.stdout
});

const validarNumeroInformado = (numero) => {
  const resultado = Number.parseFloat(numero);
  if(!resultado){
    console.log('Número não é válido');
  }
  return resultado;
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
      console.log('Operador digitado não é válido');
      return null;
  }
}

readLine.question('Favor informar um número: ', (numero1) => {
  const numeroValidado1 = validarNumeroInformado(numero1);

  if(numeroValidado1){
    readLine.question('Favor informar outro número: ', (numero2) => {
      const numeroValidado2 = validarNumeroInformado(numero2);

      if(numeroValidado2){
        readLine.question('Favor informar um operador: ', (operador) => {
          const operadorValidado = validarOperador(operador);
          if(operadorValidado){
            switch(operadorValidado){
              case '+': console.log(`Operador selecionado foi adição. O resultado de ${numeroValidado1} + ${numeroValidado2} = ${numeroValidado1 + numeroValidado2}`);
                break;
              case '-': console.log(`Operador selecionado foi subtração. O resultado de ${numeroValidado1} - ${numeroValidado2} = ${numeroValidado1 - numeroValidado2}`);
                break;
              case '*': console.log(`Operador selecionado foi multiplicação. O resultado de ${numeroValidado1} * ${numeroValidado2} = ${numeroValidado1 * numeroValidado2}`);
                break;
              case '/': console.log(`Operador selecionado foi divisão. O resultado de ${numeroValidado1} / ${numeroValidado2} = ${numeroValidado1 / numeroValidado2}`);
                break;
              case '%': console.log(`Operador selecionado foi módulo. O resultado de ${numeroValidado1} % ${numeroValidado2} = ${numeroValidado1 % numeroValidado2}`);
                break;
              default: break;
            }
          }
        })
      }
    })
  }
})