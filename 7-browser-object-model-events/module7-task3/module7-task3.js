function changeBackground(color) {
    document.body.style.background = color;
}

document.getElementById("btnMakeBackBlue").onclick = () => changeBackground("blue");
document.getElementById("btnMakeBackPink").ondblclick = () => changeBackground("pink");
document.getElementById("btnMakeBackBrown").onmousedown = () => changeBackground("brown");
document.getElementById("btnMakeBackBrown").onmouseup = () => changeBackground("white");
document.getElementById("linkMakeBackYellow").onmouseover = () => changeBackground("yellow");
document.getElementById("linkMakeBackYellow").onmouseout = () => changeBackground("white");