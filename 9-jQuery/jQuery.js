// Task 1
function executeModule9Task1() {
    document.getElementById("modal").style.display = "block";
    document.querySelector(".modal__name").innerHTML = "Find and stylize the elements:";
    const container = document.querySelector(".modal__content");
    renderNavigationElement();

    function renderNavigationElement() {
        const navigationElement = [
            {
                element: "a",
                href: "9-jQuery/module9-task1/module9-task1.html",
                target: "_blank",
                id: "execute-module9-task1",
                classList: "",
                textContent: "Open new page",
            },
        ];
        showFormElements(navigationElement, container);
    }
}



// Task 2
function executeModule9Task2() {
    document.getElementById("modal").style.display = "block";
    document.querySelector(".modal__name").innerHTML = "Open in a new tab:";
    const container = document.querySelector(".modal__content");
    renderNavigationElement();

    function renderNavigationElement() {
        const navigationElement = [
            {
                element: "a",
                href: "9-jQuery/module9-task2/module9-task2.html",
                target: "_blank",
                id: "execute-module9-task2",
                classList: "",
                textContent: "Open new page",
            },
        ];
        showFormElements(navigationElement, container);
    }
}



// Task 3
function executeModule9Task3() {
    document.getElementById("modal").style.display = "block";
    document.querySelector(".modal__name").innerHTML = "Move tags:";
    const container = document.querySelector(".modal__content");
    renderNavigationElement();

    function renderNavigationElement() {
        const navigationElement = [
            {
                element: "a",
                href: "9-jQuery/module9-task3/module9-task3.html",
                target: "_blank",
                id: "execute-module9-task3",
                classList: "",
                textContent: "Open new page",
            },
        ];
        showFormElements(navigationElement, container);
    }
}



// Task 4
function executeModule9Task4() {
    document.getElementById("modal").style.display = "block";
    document.querySelector(".modal__name").innerHTML = "Deactivate the checkboxes:";
    const container = document.querySelector(".modal__content");
    renderNavigationElement();

    function renderNavigationElement() {
        const navigationElement = [
            {
                element: "a",
                href: "9-jQuery/module9-task4/module9-task4.html",
                target: "_blank",
                id: "execute-module9-task4",
                classList: "",
                textContent: "Open new page",
            },
        ];
        showFormElements(navigationElement, container);
    }
}