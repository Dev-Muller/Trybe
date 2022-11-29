// Algoritmos

let fruits = [3, 4, 10, 1, 12];

let soma = 0;

for (let i = 0; i < fruits.length; i++) {
    soma += fruits[i];
}

if (soma > 15) {
    console.log("A soma resultou em: " + soma);
} else {
    console.log("Valor menor que 16");
}