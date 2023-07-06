const URL = "../../7-browser-object-model-events/module7-task1/module7-task1.html";
const WINDOW_NAME = "Task 1";
const DELAY = 2000;

const sizeFeatures = "width=300,height=300";
const newSizeX = 500;
const newSizeY = 500;
const coordinateX = 200;
const coordinateY = 200;

const taskWindow = window.open(URL, WINDOW_NAME, sizeFeatures);

const awaitedTimeout = (delay) => {
    return new Promise((resolve) => setTimeout(resolve, delay));
}

(async function () {
    await awaitedTimeout(DELAY);
    taskWindow.resizeTo(newSizeX, newSizeY);
    await awaitedTimeout(DELAY);
    taskWindow.moveTo(coordinateX, coordinateY);
    await awaitedTimeout(DELAY);
    taskWindow.close();
})();