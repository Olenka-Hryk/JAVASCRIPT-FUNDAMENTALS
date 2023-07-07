const listEvents = document.getElementById("textarea-module7-task5");
const btnShowEvent = document.getElementById("btnShowEvent");

function showEventMessage(message) {
    listEvents.innerHTML += `\n ${message}`;
}

btnShowEvent.onclick = () => showEventMessage("I was pressed!");
btnShowEvent.onmouseover = () => showEventMessage("Mouse on me!");
btnShowEvent.onmouseout = () => showEventMessage("Mouse is not on me!");

// btnShowEvent.onmouseenter = () => showEventMessage("Mouse on me!");
// btnShowEvent.onmouseleave = () => showEventMessage("Mouse is not on me!");