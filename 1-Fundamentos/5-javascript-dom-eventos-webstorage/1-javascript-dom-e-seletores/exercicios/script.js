// exercicio 1

function changeText () {
  let paragraph = document.getElementsByTagName('p')[1];
  paragraph.innerHTML = "Ganhar R$10.000,00 em uma empresa INSANA";
}

changeText();

// exercicio 2

function changeSquareToGreen() {
  let squareYellow = document.getElementsByClassName('main-content')[0];
  squareYellow.style.background = 'rgb(76,164,109)'
}

changeSquareToGreen();

// exercicio 3

function changeSquareToWhite() {
  let squareRed = document.getElementsByClassName('center-content')[0];
  squareRed.style.background = 'white';
}
changeSquareToWhite();

// exercicio 4

function correctTitle() {
  let title = document.getElementsByTagName('h1')[0];
  title.innerHTML = 'Desafio - JavaScript';
}
correctTitle();

// exercicio 5

function paragraphUpperCase() {
  let paragraph = document.getElementsByTagName('p')[0];
  paragraph.innerHTML = paragraph.innerHTML.toUpperCase();
}
paragraphUpperCase();

// exercicio 6

function showParagraphs() {
  let paragraphs = document.getElementsByTagName('p');
  for (let index = 0; index < paragraphs.length; index += 1) {
    console.log(paragraphs[index].innerHTML);
  }
}
showParagraphs();