// Acesse o elemento elementoOndeVoceEsta.
const elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta');

// Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
const pai = elementoOndeVoceEsta.parentElement;
pai.style.color = 'red';

// Acesse o primeiroFilhoDoFilho e adicione um texto a ele.
// Você se lembra dos vídeos da aula anterior, como fazer isso?
const primeiroFilhoDoFilho = elementoOndeVoceEsta.firstElementChild;
primeiroFilhoDoFilho.innerText = 'primeiroFilhoDoFilho';

// Acesse o primeiroFilho a partir de pai.
const primeiroFilho = pai.firstElementChild;

// Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta.
const primeiroFilho2 = elementoOndeVoceEsta.previousElementSibling;
    
// Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta.
const textElement = elementoOndeVoceEsta.nextSibling;

// Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta.
const terceiroFilho = elementoOndeVoceEsta.nextElementSibling;

// Agora acesse o terceiroFilho a partir de pai.
const terceiroFilho2 = pai.lastElementChild.previousElementSibling;

/* Segunda parte da aula */

// Crie um irmão para `elementoOndeVoceEsta`.
const pai = document.getElementById('pai'); // Recupere o elemento com o id pai
const irmaoElementoOndeVoceEsta = document.createElement('section'); // Crie um novo elemento
irmaoElementoOndeVoceEsta.id = 'irmaoElementoOndeVoceEsta';
pai.appendChild(irmaoElementoOndeVoceEsta); // Adicione o elemento criado como filho do elemento com o id `pai`

// Crie um filho para `elementoOndeVoceEsta`.
const elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta'); // Recupere o elemento com o id elementoOndeVoceEsta
const filhoElementoOndeVoceEsta = document.createElement('section'); // Crie um novo elemento 
filhoElementoOndeVoceEsta.id = 'filhoElementoOndeVoceEsta';
elementoOndeVoceEsta.appendChild(filhoElementoOndeVoceEsta); // Adicione o elemento criado como filho do elemento `elementoOndeVoceEsta`

// Crie um filho para `primeiroFilhoDoFilho`.
const primeiroFilhoDoFilho = document.getElementById('primeiroFilhoDoFilho'); // Recupere o elemento com o id `primeiroFilhoDoFilho`
const filhoPrimeiroFilhoDoFilho = document.createElement('section'); // Crie um novo elemento 
filhoPrimeiroFilhoDoFilho.id = 'filhoPrimeiroFilhoDoFilho';
primeiroFilhoDoFilho.appendChild(filhoPrimeiroFilhoDoFilho); // Adicione o elemento criado como filho do elemento `primeiroFilhoDoFilho`

// A partir desse filho criado, acesse `terceiroFilho`.
const terceiroFilho = filhoPrimeiroFilhoDoFilho
  .parentElement // primeiroFilhoDoFilho
  .parentElement // elementoOndeVoceEsta
  .nextElementSibling; // terceiroFilho
console.log(terceiroFilho);