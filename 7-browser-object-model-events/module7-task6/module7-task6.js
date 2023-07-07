const windowScaling = document.getElementById("windowScaling");

function updateWindowSize() {
    windowScaling.innerText = `Height: ${window.innerHeight} \n\n Width: ${window.innerWidth}`;
}

updateWindowSize();
window.addEventListener("resize", updateWindowSize);