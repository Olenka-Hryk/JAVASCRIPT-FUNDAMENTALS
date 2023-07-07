//! Other solutions tha were considered during the RETRO

//!!! TASK 1
let items = document.querySelectorAll('#list li');
items = Array.from(items);
const length = items.length;
for (let i = 0; i < length; i++) {
    let currentItem;
    if (i % 2 === 0) {
        currentItem = items.shift();
    } else {
        currentItem = items.pop();
    }
    alert(currentItem.textContent);
}



//!!! TASK 2
let header = document.querySelector("h1");
header.style.backgroundColor = "#99ee00";
// ---------------------------------------------------------------------
let myDiv = document.querySelectorAll("#myDiv p");
let styleParams = ['font-weight: bold;', 'color:red;', 'text-decoration: underline;', "font-style: italic;"];
myDiv.forEach((item, index) => {
    item.style = styleParams[index];
})
// ---------------------------------------------------------------------
let myList = document.getElementById('myList');
myList.style = 'display:flex; list-style: none;'



//!!! TASK 4
const inputForm = document.querySelectorAll(".arr");
const btn = document.querySelector(".btn");
const outBlock = document.querySelector(".out");

btn.onclick = function () {
    outBlock.innerHTML = " ";

    inputForm.forEach((element) => {

        outBlock.innerHTML += ` ${element.getAttribute('data-form')} : ${element.value} </br>`;

    })
}



//!!! TASK 6
const colorBtnList = document.querySelectorAll('.color');
const shoesList = document.querySelectorAll('.shoe');
const bgList = document.querySelectorAll('.gradient');
const outPrice = document.querySelector('#outprice');
const sizeOptionList = document.querySelectorAll('.size-shoe');
const selectList = document.querySelector('.size-list');
const quantity = document.querySelector('.quantity');

quantity.value = 1;

let price = 170;
let quantityValue = 1;
let sizeValue = 1;

colorBtnList.forEach((btn) => {
    btn.addEventListener('click', changeCard);
});
selectList.addEventListener('input', changePriceGivenSize);
quantity.addEventListener('input', changePriceGivenQuantity);

function changeCard(event) {
    colorBtnList.forEach((btn) => {
        btn.classList.remove('active');
    })
    event.target.classList.add('active');
    shoesList.forEach((shoe) => {
        shoe.classList.remove('show');
        if (shoe.attributes.color.value === event.target.attributes.color.value) {
            shoe.classList.add('show');
        }
    })
    bgList.forEach((bg) => {
        bg.classList.remove('second');
        if (bg.attributes.color.value === event.target.attributes.color.value) {
            bg.classList.add('second');
        }
    })
    selectList.value = 1;
    sizeValue = 1;
    quantity.value = 1;
    quantityValue = 1;
    price = event.target.dataset.price;
    outPrice.innerHTML = Math.floor(price * quantityValue * sizeValue);

}

function changePriceGivenSize() {
    sizeValue = selectList.value;
    outPrice.innerHTML = Math.floor(price * quantityValue * sizeValue);
}

function changePriceGivenQuantity() {
    quantityValue = quantity.value;
    outPrice.innerHTML = Math.floor(price * quantityValue * sizeValue);
}