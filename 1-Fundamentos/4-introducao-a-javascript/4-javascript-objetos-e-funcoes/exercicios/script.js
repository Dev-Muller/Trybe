// exercicios for/in
let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

// Aqui temos dois jeitos de acessar a chave personagem

console.log('Bem-vinda, '+ info.personagem);

// ou

console.log('Bem-vinda, '+ info['personagem']);

// Duas formas de acessar a chave recorrente

info.recorrente = 'Sim';

// Ou

info['recorrente'] = 'Sim';

console.log(info);

for(let properties in info) {
  console.log(infp[properties]);
}

let info2 = {
  personagem: 'Tio Patinhas',
  origem: 'Christmas on Bear Mountain, Dell’s Four Color Comics #178',
  nota: 'O último MacPatinhas',
  recorrente: 'Sim',
};

for (let properties in info) {
  if (
    properties === 'recorrente' &&
    info[properties] === 'Sim' &&
    info2[properties] === 'Sim'
  ) {
    console.log('Ambos recorrentes');
  } else {
    console.log(info[properties] + ' e ' + info2[properties]);
  }
}

let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
  ],
};

// Duas formas de acessar as chaves dos objetos
console.log('O livro favorito de ' + leitor.nome + ' ' + leitor.sobrenome + ' se chama "' + leitor.livrosFavoritos[0].titulo + '"');

// ou

console.log('O livro favorito de ' + leitor['nome'] + ' ' + leitor['sobrenome'] + ' se chama "' + leitor['livrosFavoritos'][0]['titulo'] + '"');

leitor.livrosFavoritos.push(
  {
    titulo: 'Harry Potter e o Prisioneiro de Azkaban',
    autor: 'JK Rowling',
    editor: 'Rocco',
  },
);

//exercicios funcoes

// primeiro ex

function verificaPalindrome(string) {
  let reverse = string.split('').reverse().join('');
  if (reverse === string) {
    return true;
  } else {
    return false;
  }
}
console.log(verificaPalindrome('arara')); //true
console.log(verificaPalindrome('desenvolvimento')); //false

// segundo ex

function indiceDoMaior(numeros) {
  let indiceMaior = 0;
  for (let indice in numeros) {
    if (numeros[indiceMaior] < numeros[indice]) {
      indiceMaior = indice;
    }
  }

  return indiceMaior;
}

console.log(indiceDoMaior([2, 3, 6, 7, 10, 1])); //4

// terceiro ex

function indiceDoMenor(numeros) {
  let indiceMenor = 0;
  for (let indice in numeros) {
    if (numeros[indiceMenor] > numeros[indice]) {
      indiceMenor = indice;
    }
  }

  return indiceMenor;
}

console.log(indiceDoMenor([2, 4, 6, 7, 10, 0, -3])); //6

// quarto ex

function maiorPalavra(palavras) {
  let maiorPalavra = palavras[0];
  for (let indice in palavras) {
    if (maiorPalavra.length < palavras[indice].length) {
      maiorPalavra = palavras[indice];
    }
  }

  return maiorPalavra;
}

console.log(maiorPalavra(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'])); //Fernanda

// quinto ex

function maisRepetido(numeros) {
  let num = {};

  for (let index = 0; index < numeros.length; index += 1) {
    let valor = numeros[index];
    if (num[valor] === undefined) {
      num[valor] = 1;
    } else {
      num[valor] = num[valor] + 1;
    }
  }

  let contRepetido = 0;
  let contNumero = 0;

  for (let prop in num) {
    if (contRepetido < num[prop]) {
      contRepetido = num[prop];
      contNumero = prop;
    }
  }

  return contNumero;
}

console.log(maisRepetido([2, 3, 2, 5, 8, 2, 3])); // 2

// sexto ex

function somaTodosNumeros(numero) {
  let total = 0;

  for (let index = 1; index <= numeros; index += 1) {
    total = total + index;
  }
  return total;
}

console.log(somaTodosNumeros(5)); //15

// setimo ex

function verificaFimPalavra(palavra, fimPalavra) {
  let inversoPalavra = palavra.split('').reverse().join('');
  let inversoFimPalavra = fimPalavra.split('').reverse().join('');
  let result;
  for (let index = 0; index < inversoFimPalavra.length; index += 1) {
    if (inversoPalavra[index] !== inversoFimPalavra[index]) {
      result = false;
      break;
      break; // O "break" serve para encerrar o loop.
    } else {
      result = true;
    }
  }
  
  return result;
}

console.log(verificaFimPalavra('trybe', 'be')); //true
console.log(verificaFimPalavra('joaofernando', 'fernan')); //false

// exercicio bonus

// ex 1

const numerosRomanos = {
  i: 1,
  v: 5,
  x: 10,
  l: 50,
  c: 100,
  d: 500,
  m: 1000,
};
function romanoParaDecimal(numero) {
  numero = numero.toLowerCase();
  const len = numero.length;
  let soma = numerosRomanos[numero[len - 1]];
  let atual = numerosRomanos[numero[len - 1]];

  for (let i = 2; i <= len; i += 1) {
    const prox = numerosRomanos[numero[len - i]];

    if (atual <= prox) {
      soma += prox;
    } else {
      soma -= prox;
    }

    atual = prox;
  }

  return soma;
}

console.log(romanoParaDecimal('MMXVIII')); // 2018
console.log(romanoParaDecimal('VI')); // 6
console.log(romanoParaDecimal('IV')); // 4

// ex 2

let vector = [[1, 2], [3,4,5,6], [7,8,9,10]];

// const vector = [[1, 2], [3, 4, 5, 6], [7, 8, 9, 10]]; Nao entendi o pq do const

function arrayOfNumbers(vector) {
  const result = [];

  for (let index = 0; index < vector.length; index += 1) {
    const numbers = vector[index];
    for (let indexSub = 0; indexSub < numbers.length; indexSub += 1) {
      const current = numbers[indexSub];

      if ((current % 2) === 0) {
        result.push(current);
      } 
    }
  }

  return result;
}

console.log(arrayOfNumbers(vector));
console.log(arrayOfNumbers(vector)); // [2, 4, 6, 8, 10]

// ex 3

const basket = [
  'Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva', 'Laranja',
  'Jaca', 'Pera', 'Melancia', 'Uva', 'Laranja', 'Melancia',
  'Banana', 'Uva', 'Pera', 'Abacate', 'Laranja', 'Abacate',
  'Banana', 'Melancia', 'Laranja', 'Laranja', 'Jaca', 'Uva',
  'Banana', 'Uva', 'Laranja', 'Pera', 'Melancia', 'Uva',
  'Jaca', 'Banana', 'Pera', 'Abacate', 'Melancia', 'Melancia',
  'Laranja', 'Pera', 'Banana', 'Jaca', 'Laranja', 'Melancia',
  'Abacate', 'Abacate', 'Pera', 'Melancia', 'Banana', 'Banana',
  'Abacate', 'Uva', 'Laranja', 'Banana', 'Abacate', 'Uva',
  'Uva', 'Abacate', 'Abacate', 'Melancia', 'Uva', 'Jaca',
  'Uva', 'Banana', 'Abacate', 'Banana', 'Uva', 'Banana',
  'Laranja', 'Laranja', 'Jaca', 'Jaca', 'Abacate', 'Jaca',
  'Laranja', 'Melancia', 'Pera', 'Jaca', 'Melancia', 'Uva',
  'Abacate', 'Jaca', 'Jaca', 'Abacate', 'Uva', 'Laranja',
  'Pera', 'Melancia', 'Jaca', 'Pera', 'Laranja', 'Jaca',
  'Pera', 'Melancia', 'Jaca', 'Banana', 'Laranja', 'Jaca',
  'Banana', 'Pera', 'Abacate', 'Uva',
];

const result = {};

for (let index = 0; index < basket.length; index += 1) {
  const fruit = basket[index];
  if (!result[fruit]) result[fruit] = 0;
  result[fruit] += 1;
}

const summaries = [];

for (fruit in result) {
  let message = `${result[fruit]} ${fruit}`;
  if (result[fruit] > 1) message += 's';
  summaries.push(message);
}

console.log(`Sua cesta possui: ${summaries.join(', ')}.`);

// ex 4

let moradores = {
  blocoUm: [
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
  ],
  blocoDois: [
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
  ],
};

let moradoresBlocoDois = moradores.blocoDois;
let ultimoMoradorBlocoDois = moradoresBlocoDois[moradoresBlocoDois.length - 1];

// Duas formas de acessar as propriedades do objeto "ultimoMoradorBlocoDois"
console.log('O morador do bloco 2 de nome ' + ultimoMoradorBlocoDois.nome + ' ' + ultimoMoradorBlocoDois.sobrenome + ' mora no ' + ultimoMoradorBlocoDois.andar + '° andar, apartamento ' + ultimoMoradorBlocoDois.apartamento);

// Ou

console.log('O morador do bloco 2 de nome ' + ultimoMoradorBlocoDois['nome'] + ' ' + ultimoMoradorBlocoDois['sobrenome'] + ' mora no ' + ultimoMoradorBlocoDois['andar'] + '° andar, apartamento ' + ultimoMoradorBlocoDois['apartamento']);

for (let index = 0; index < moradores.blocoUm.length; index += 1) {
  console.log(moradores.blocoUm[index].nome + ' ' + moradores.blocoUm[index].sobrenome);
}

for (let index = 0; index < moradores.blocoDois.length; index++) {
  console.log(moradores.blocoDois[index].nome + ' ' + moradores.blocoDois[index].sobrenome);
}