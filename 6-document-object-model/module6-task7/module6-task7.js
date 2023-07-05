const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

function updateClock() {
    const currentDate = new Date();
    const month = currentDate.getMonth();
    let day = currentDate.getDate();
    let hours = currentDate.getHours();
    let minutes = currentDate.getMinutes();
    let seconds = currentDate.getSeconds();

    day = changeTime(day);
    hours = changeTime(hours);
    minutes = changeTime(minutes);
    seconds = changeTime(seconds);

    const clock = document.getElementById("clock");
    const date = document.getElementById("date");

    const span = document.createElement("span");
    span.setAttribute("id", "colon");
    span.textContent = ":";
    clock.innerHTML = "";
    clock.innerHTML += `${hours}`;
    clock.appendChild(span);
    clock.innerHTML += `${minutes}`;
    clock.appendChild(span);
    clock.innerHTML += `${seconds}`;
    date.innerHTML = `${MONTHS[month]} ${day}`;
}

function changeTime(time) {
    if (time < 10) {
        time = "0" + time;
    }
    return time;
}

updateClock();
setInterval(updateClock, 1000);