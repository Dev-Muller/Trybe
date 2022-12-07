function changeText () {
  let paragraph = document.getElementsByTagName('p')[1];
  paragraph.innerHTML = "Ganhar R$10.000,00 em uma empresa INSANA";
}

changeText();

function changeSquareToGreen() {
  let squareYellow = document.getElementsByClassName('main-content')[0];
  squareYellow.style.background = 'rgb(76,164,109)'
}

changeSquareToGreen();