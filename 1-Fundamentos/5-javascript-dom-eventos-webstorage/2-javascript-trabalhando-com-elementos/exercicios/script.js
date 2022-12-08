const elementH1 = document.createElement('h1');
elementH1.innerHTML = 'TrybeTrip - Agência de Viagens';
document.body.appendChild(elementH1);

const elementMain = document.createElement('main');
elementH1.className = 'main-content';
document.body.appendChild(elementMain);

const elementSectionCenter = document.createElement('section');
elementSectionCenter.className = 'section-content';
document.main.appendChild(elementSectionCenter);

const paragraph = document.createElement('p');
paragraph.innerHTML = ('Texto Show');
document.section.appendChild(paragraph);

const elementSectionLeft = document.createElement('section');
elementSectionLeft.className = 'left-content';
elementMain.appendChild(elementSectionLeft);

const elementSectionRight = document.createElement('section');
elementSectionRight.className = 'right-content';
elementMain.appendChild(elementSectionRight);

const elementImg = document.createElement('img');
elementImg.className = 'small-image';
elementImg.src = 'https://picsum.photos/200';
elementSectionLeft.appendChild(elementImg);

const elementUl = document.createElement('ul');
elementSectionRight.appendChild(elementUl);
const arrayNumbers = ['Um', 'Dois', 'Três', 'Quatro', 'Cinco', 'Seis',
  'Sete', 'Oito', 'Nove', 'Dez']
for (let num in arrayNumbers) {
  const elementLi = document.createElement('li');
  elementLi.innerHTML = arrayNumbers[num];
  elementUl.appendChild(elementLi);
}

for (let index = 1; index <= 3; index += 1) {
  const elementH3 = document.createElement('h3');
  elementH3.innerHTML = 'Show ' + index;
  elementMain.appendChild(elementH3);
}

const title = document.querySelector('h1');
title.className = 'title';

const elementsH3 = document.getElementsByTagName('h3');
for (let index = 0; index < 3; index += 1) {
  elementsH3[index].className = 'description';
}

const sectionLeftContent = document.getElementsByClassName('left-content')[0];
elementMain.removeChild(sectionLeftContent);

const sectionRightContent = document.getElementsByClassName('right-content')[0];
sectionRightContent.style.marginRight='auto';

const sectionCenterContent = document.getElementsByClassName('center-content')[0];
sectionCenterContent.parentNode.style.backgroundColor = 'green';

const ul = document.getElementsByTagName('ul')[0];
ul.lastChild.remove();
ul.lastChild.remove();