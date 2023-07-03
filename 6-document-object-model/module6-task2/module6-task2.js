document.body.style.marginLeft = '5px';
const bodyElements = document.body.children;

const mainHeader = bodyElements[1];
mainHeader.style.backgroundColor = '#90ee91';

const myDivContainer = document.getElementById('myDiv');
myDivContainer.style.margin = '20px 0 10px';

for (let index = 0; index < myDivContainer.children.length; index++) {
    myDivContainer.children[index].style.marginTop = '10px';
}
myDivContainer.children[0].style.fontWeight = 'bold';
myDivContainer.children[1].style.color = 'red';
myDivContainer.children[2].style.textDecoration = 'underline';
myDivContainer.children[3].style.fontStyle = 'italic';

const myList = document.getElementById('myList');
myList.style.marginLeft = '30px';
myList.style.display = 'flex';
myList.style.listStyleType = 'none';

const invisibleElement = myList.nextElementSibling;
invisibleElement.style.visibility='hidden';