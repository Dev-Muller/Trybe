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