function executeModule6Task1NewPage() {
    const list = document.getElementById('list');
    const item1 = list.firstElementChild;
    const item5 = list.lastElementChild;
    const item2 = item1.nextElementSibling;
    const item4 = item5.previousElementSibling;
    const item3 = item2.nextElementSibling;

    console.log(`${item1.innerText}, ${item5.innerText}, ${item2.innerText}, ${item4.innerText}, ${item3.innerText}`);
    alert(item1.innerText);
    alert(item5.innerText);
    alert(item2.innerText);
    alert(item4.innerText);
    alert(item3.innerText);
}