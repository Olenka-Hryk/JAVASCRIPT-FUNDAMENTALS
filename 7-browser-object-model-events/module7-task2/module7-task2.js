const paragraph = document.getElementById("text");
const button = document.getElementById("btnChange");

function changeCSS() {
    paragraph.style.color = "orange";
    paragraph.style.fontSize = "20px";
    paragraph.style.fontFamily = "Comic Sans MS";
}

button.onclick = changeCSS;