// ARRAYS
console.log("Aqui comeca a aula de ARRAYS");
let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

console.log(tasksList.length);
// 3

let searchForFirstTask = tasksList[0];
console.log(searchForFirstTask);
// Tomar café

let searchForLastTask = tasksList[tasksList.length - 1];
console.log(searchForLastTask);
// Brincar com o cachorro

tasksList.push('Fazer exercícios da Trybe');  // adiciona mais uma tarefa
console.log(tasksList);

// ['Tomar café', 'Reunião', 'Brincar com o cachorro', 'Fazer exercícios da Trybe']

tasksList.pop();  // remove a última tarefa
console.log(tasksList);

// [ 'Tomar café', 'Reunião' ] Seria isso mas como na ultima foi adicionado Fazer exercicios da Trybe fica o normal.

tasksList.unshift('Dormir');
console.log(tasksList);

tasksList.shift();
console.log(tasksList);

// Para Fixar da secao de ARRAYS!!
console.log("Aqui comeca os exercicios de fixar de ARRAYS");
let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu[1];

console.log(menuServices);

let indexOfPortfolio = menu.indexOf('Portfólio');

console.log(indexOfPortfolio);

menu.push('Contatos');

console.log(menu);

// FOR
console.log("Aqui comeca a aula de FOR");
let cars = ['Saab', 'Volvo', 'BMW'];

console.log(cars[0]); // Saab
console.log(cars[1]); // Volvo
console.log(cars[2]); // BMW

for (let index = 0; index < cars.length; index += 1) {
  console.log(cars[index]);
}

// Para Fixar da secao FOR
console.log("Aqui comeca os exercicios de fixar de FOR");
let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

for (let i = 0; i < groceryList.length; i+=1) {
    console.log(groceryList[i]);
}