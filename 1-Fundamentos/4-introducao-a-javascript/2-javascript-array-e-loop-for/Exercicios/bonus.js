// Exercicio bonus

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// ordem crescente

for (let index = 1; index < numbers.length; index += 1){
    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
        if (numbers[index] < numbers[secondIndex]) {
            let position = numbers[index];
            numbers[index] = numbers[secondIndex];
            numbers[secondIndex] = position;
        } 
    }
}

console.log(numbers);

// ordem decrescente

for (let index = 1; index < numbers.length; index += 1) {
  for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
    if (numbers[index] > numbers[secondIndex]) {
      let position = numbers[index];
      numbers[index] = numbers[secondIndex];
      numbers[secondIndex] = position;
    }
  }
}

console.log(numbers);

// Criar um novo array

let newArray = [45, 27, 57, 1330, 560, 800, 200, 70, 945, 54];

for (let index = 0; index < numbers.length; index += 1) {
    if (index + 1 < numbers.length) {
      newArray.push(numbers[index] * numbers[index + 1]);
    } else {
      newArray.push(numbers[index] * 2);
    }
  }
  
  console.log(newArray);