// OBJETOS

let car = {
    type: 'Fiat',
    model: '500',
    color: 'white',
}; 

let diasDaSemana = {
    1: 'domingo',
    2: 'segunda',
    3: 'terça',
    4: 'quarta',
    5: 'quinta',
    6: 'sexta',
    7: 'sábado',
};
  
// diasDaSemana.1; // SyntaxError: Unexpected number
console.log(diasDaSemana['1']); // domingo

let conta = {
    agencia: '0000',
    banco: {
      cod: '012',
      id: 4,
      nome: 'TrybeBank',
    },
};
  
let infoDoBanco = 'banco';
console.log(conta[infoDoBanco]); // { cod: '012', id: 4, nome: 'TrybeBank' }
console.log(conta[infoDoBanco]['nome']); // TrybeBank
  
console.log(conta.agencia); // 0000
console.log(conta['agencia']); // 0000
  
console.log(conta.banco.cod); // 012
console.log(conta['banco']['id']); // 4

let usuario = {
    id: 99,
    email: 'jakeperalta@gmail.com',
    infoPessoal: {
      nome: 'Jake',
      sobrenome: 'Peralta',
      endereco: {
        rua: 'Smith Street',
        bairro: 'Brooklyn',
        cidade: 'Nova Iorque',
        estado: 'Nova Iorque',
      },
    },
};
  
console.log(usuario['id']); // 99
console.log(usuario.email); // jakeperalta@gmail.com
  
console.log(usuario.infoPessoal.endereco.rua); // Smith Street
console.log(usuario['infoPessoal']['endereco']['cidade']); // Nova Iorque

  let moradores = [
    {
      nome: 'Luiza',
      sobrenome: 'Guimarães',
      andar: 10,
      apartamento: 1005,
    },
    {
      nome: 'William',
      sobrenome: 'Albuquerque',
      andar: 5,
      apartamento: 502,
    },
    {
      nome: 'Murilo',
      sobrenome: 'Ferraz',
      andar: 8,
      apartamento: 804,
    },
    {
      nome: 'Zoey',
      sobrenome: 'Brooks',
      andar: 1,
      apartamento: 101,
    },
];
  
let primeiroMorador = moradores[0];
console.log(primeiroMorador); // { nome: 'Luiza', sobrenome: 'Guimarães', andar: 10, apartamento: 1005 }
console.log(primeiroMorador['andar']); // 10
  
let ultimoMorador = moradores[moradores.length - 1];
console.log(ultimoMorador); // { nome: 'Zoey', sobrenome: 'Brooks', andar: 1, apartamento: 101 }
console.log(ultimoMorador.nome); // Zoey

// Para fixar Objetos

let player = {
    name: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals: { golden: 2, silver: 3 },
};

player.bestInTheWorld = [2006, 2007, 2008, 2009, 2010, 2018]; // Ao tentar acessar uma chave inexistente o JavaScript automaticamente irá criar essa chave.

console.log('A jogadora ' + player['name'] + ' ' + player['lastName'] + ' foi eleita a melhor do mundo por ' + player['bestInTheWorld'].length + ' vezes.');
console.log('A jogadora possui ' + player.medals.golden + ' medalhas de ouro e ' + player.medals.silver + ' medalhas de prata.');

// for/in e for/of

let cars = ['Saab', 'Volvo', 'BMW'];

for (let index in cars) {
  console.log(cars[index]);
}

let carros = {
    type: 'Fiat',
    model: '500',
    color: 'white',
};
  
  for (let index in carros) {
    console.log(index, carros[index]);
  };

let food = ['hamburguer', 'bife', 'acarajé'];

for (let position in food) {
    console.log(position);
};
//resultado: 0, 1, 2;

// Para fixar for/in e for/of

let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge',
};

for(let name in names) {
  console.log("Ola " + names[name]);
}

let carro = {
  model: 'A3 Sedan',
  manufacturer: 'Audi',
  year: 2020
};

for (let key in carro) {
  console.log(key + ': ' + carro[key]);
};

// Funcoes

// Sem função
let nome = 'João';

console.log('Bom dia, ' + nome);


// Com função
function bomDiaTryber(nome) {
  console.log('Bom dia, ' + nome);
}

bomDiaTryber('João'); // Bom dia, João
bomDiaTryber('Julia'); // Bom dia, Julia
bomDiaTryber('Marcelo'); // Bom dia, Marcelo

function bomDia() {
  return 'Bom dia!';
}

console.log(bomDia()); // Bom dia!

let status = 'deslogado';

function logarDeslogar() {
  if (status === 'deslogado') {
    status = 'logado';
  } else {
    status = 'deslogado';
  }
}

console.log(status); // deslogado

logarDeslogar();
console.log(status); // logado

logarDeslogar();
console.log(status); // deslogado

console.log('O usuário está ' + status); // O usuário está deslogado

// Com função
function soma(a, b) {
  return a + b;
}

console.log(soma(5, 2)); // 7

function maiorNum(primeiroNum, segundoNum) {
  if (primeiroNum > segundoNum) {
    return primeiroNum + ' é maior que ' + segundoNum;
  } else if (segundoNum > primeiroNum) {
    return segundoNum + ' é maior que ' + primeiroNum;
  } else {
    return 'Os números são iguais';
  }
}

console.log(maiorNum(10, 20)); // 20 é maior que 10
console.log(maiorNum(2, -5)); // 2 é maior que -5
console.log(maiorNum(1, 1)); // Os números são iguais

// Para fixar 

function soma(a, b) {}
function sub(a, b) {}
function mult(a, b) {}
function div(a, b) {}
function mod(a, b) {}

function soma(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

function mult(a, b) {
  return a * b;
}

function div(a, b) {
  return a / b;
}

function mod(a, b) {
  return a % b;
}

function maiorNum(primeiroNum, segundoNum) {
  if (primeiroNum > segundoNum) {
    return primeiroNum + ' é maior que ' + segundoNum;
  } else {
    return segundoNum + ' é maior que ' + primeiroNum;
  }
}

function maiorDeTres(primeiroNum, segundoNum, terceiroNum) {
  if (primeiroNum > segundoNum && primeiroNum > terceiroNum) {
    return 'O maior número é: ' + primeiroNum;
  } else if (segundoNum > primeiroNum && segundoNum > terceiroNum) {
    return 'O maior número é: ' + segundoNum;
  } else {
    return 'O maior número é: ' + terceiroNum;
  }
}

function positiveNegative(number) {
  if (number > 0) { // Testa se o número é positivo (maior que 0)
    return 'positive';
  } else if (number < 0) { // Testa se o número é negativo (menor que 0)
    return 'negative';
  } else { // Se nenhum teste passar, o número é igual a 0
    return 'zero';
  }
}

function triangleAnglesValidate(angleA, angleB, angleC) {
  let sumOfAngles = angleA + angleB + angleC;
  let allAnglesArePositives = angleA > 0 && angleB > 0 && angleC > 0;

  if (allAnglesArePositives) {
    if (sumOfAngles === 180) {
      return true;
    } else {
      return false;
    }
  } else {
    return 'Erro: ângulo inválido';
  }
}