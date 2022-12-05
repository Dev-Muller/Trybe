/* O fatorial é representado pelo sinal !
4! = 4 x 3 x 2 x 1 = 24 */

for (let index = 10; index > 0; index -= 1) {
  fatorial *= index;
}
console.log(fatorial);

let word = 'tryber';

// solucoes possiveis

let reverseWord = '';

for (let index = 0; index < word.length; index += 1) {
  reverseWord += word[word.length - 1 - index];
}

console.log(reverseWord);

// segunda solucao

let palavraContraria = '';

palavraContraria = word.split('').reverse().join('');

console.log(palavraContraria);

// Segundo exercicio

let array = ['java', 'javascript', 'python', 'html', 'css'];

let biggestWord = array[0];
let smallestWord = array[0];

for (let index = 0; index < array.length; index += 1) {
  if (array[index].length > biggestWord.length) {
    biggestWord = array[index];
  }
}

for (let index = 0; index < array.length; index += 1) {
  if (array[index].length < smallestWord.length) {
    smallestWord = array[index];
  }
}

console.log(biggestWord);
console.log(smallestWord);

// terceiro exercicio
let biggestPrimeNumber = 0;

for (let currentNumber = 2; currentNumber <= 50; currentNumber += 1) {
  let isPrime = true;
  for (let currentDivisor = 2; currentDivisor < currentNumber; currentDivisor += 1) {
    if (currentNumber % currentDivisor === 0) {
      isPrime = false;
    }
  }
  if (isPrime) {
    biggestPrimeNumber = currentNumber;
  }
}

console.log(biggestPrimeNumber);

// ex bonus
let n = 5;
let symbol = '*';
let inputLine = '';

for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
  inputLine = inputLine + symbol;
};
for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
  console.log(inputLine);
};

let size = 5;
let simbolo = '*';
let linhaInput = '';

for (let indexLine = 0; indexLine <= size; indexLine += 1) {
  console.log(linhaInput);
  linhaInput = linhaInput + simbolo;
};
 
let inputPosition = n - 1;

for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
  for (let columnIndex = 0; columnIndex < n; columnIndex += 1) {
    if (columnIndex < inputPosition) {
      inputLine = inputLine + ' ';
    } else {
      inputLine = inputLine + symbol;
    }
  }
  console.log(inputLine);
  inputLine = '';
  inputPosition -= 1;
};

let midOfMatrix = (n + 1) / 2;
let controlLeft = midOfMatrix;
let controlRight = midOfMatrix;

for (let lineIndex = 0; lineIndex <= midOfMatrix; lineIndex += 1) {
  for (let columnIndex = 0; columnIndex <= n; columnIndex += 1) {
    if (columnIndex > controlLeft && columnIndex < controlRight) {
      inputLine = inputLine + symbol;
    } else {
      inputLine = inputLine + ' ';
    }
  }
  console.log(inputLine);
  inputLine = '';
  controlRight += 1;
  controlLeft -= 1
};

let numero = 7;
let middle = (n + 1) / 2;

for (let line = 1; line <= middle; line += 1) {
  let outputLine = '';
  for (let col = 1; col <= numero; col += 1) {
    if (col == controlLeft || col == controlRight || line == middle) {
      outputLine += symbol;
    } else {
      outputLine += ' ';
    }
  }
  controlLeft -= 1;
  controlRight += 1;
  console.log(outputLine);
}

let divisors = 1;
let numberToCheck = 31;

for (let number = 2; number <= numberToCheck; number += 1) {
  if (numberToCheck % number === 0) divisors += 1;
}

if (divisors === 2) console.log(numberToCheck + ' é primo');
else console.log(numberToCheck + ' não é primo');