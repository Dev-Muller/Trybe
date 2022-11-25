// Exercicios do modulo 4.2 Javascript

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Percorrer o array
for (let index = 0; index < numbers.length; index += 1) {
    console.log(numbers[index]);
}

let result = 0;

// Somar os numeros do array
for (let index = 0; index < numbers.length; index += 1) {
  result += numbers[index];
}

console.log(result);

// Calcular a media aritimetica do array
let sum = 0;

for (let index = 0; index < numbers.length; index += 1) {
  sum += numbers[index];
}

let average = sum / numbers.length;

console.log(average);

//numero maior q 20
if (result > 20) {
    console.log('Valor maior que 20');
} else {
    console.log('Valor menor que 20');
}

//
let higherNumber = numbers[0];

for (let index = 1; index < numbers.length; index += 1) {
    if (numbers[index] > higherNumber) {
      higherNumber = numbers[index];
    }
  }
  
console.log(higherNumber);

//
for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] % 2 !== 0) {
    result += 1;
  }
}

if (result === 0) {
  console.log('nenhum valor ímpar encontrado');
} else {
  console.log(result);
}

//
let smallestNumber = numbers[0];

for (let index = 1; index < numbers.length; index += 1) {
  if (numbers[index] < smallestNumber) {
    smallestNumber = numbers[index];
  }
}

console.log(smallestNumber);

//
numbers = [25];

for (let index = 1; index <= 25; index += 1) {
  numbers.push(index);
}

console.log(numbers);

//
for (let index = 0; index < numbers.length; index += 1) {
  console.log(numbers[index] / 2);
};