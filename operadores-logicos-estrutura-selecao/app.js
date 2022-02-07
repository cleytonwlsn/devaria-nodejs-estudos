const { read } = require('fs');

const readLine = require('readline').createInterface({
  input : process.stdin,
  output : process.stdout
});

console.log('Esse programa vai verificar se você é maior de 18 anos e possui habilitação para entrar no kart.');
console.log('Além das verificações, precisamos verificar se você está na lista de presença do horário.');

readLine.question('Qual o ano do seu nascimento?', ano => {
  if(ano > 2004){
    console.log('Você não tem 18 anos.');
  }else{
    readLine.question('Você tem habilitação? (Sim/Não) ', temHabilitacao => {
      if(!(temHabilitacao.toUpperCase() === 'SIM')){
        console.log('Você não tem habilitação para entrar no kart.');
      }else{
        readLine.question('Qual o seu nome? ', nome => {
          switch(nome){
            case 'Douglas' :
              console.log('Bem-vindo ao Kart, Douglas!');
              break;
            case 'Cleyton' :
              console.log('Bem-vindo ao Kart, Cleyton!');
              break;
            default:
              console.log('Seu nome não foi identificado na lista de presença.');
          }
        })
      }
    })
  }
})