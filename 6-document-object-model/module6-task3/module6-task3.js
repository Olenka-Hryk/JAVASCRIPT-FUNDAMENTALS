const hero = document.createElement('header');
hero.classList.add('container');
document.body.appendChild(hero);

const heroHeader = document.createElement('h1');
heroHeader.classList.add('accent-text', 'header__module-task-new-page');
heroHeader.innerHTML = 'Module &#10107; Task &#10104;';
hero.appendChild(heroHeader);

const mainContainer = document.createElement('main');
mainContainer.classList.add('mainClass', 'check', 'item');
document.body.appendChild(mainContainer);

const myDivContainer = document.createElement('div');
myDivContainer.setAttribute('id', 'myDiv');
mainContainer.appendChild(myDivContainer);

const myDivParagraph = document.createElement('p');
myDivParagraph.textContent = 'First paragraph';
myDivContainer.appendChild(myDivParagraph);