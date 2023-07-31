// Task 1
function executeModule13Task1() {
    document.getElementById("modal").style.display = "block";
    document.querySelector(".modal__name").innerHTML = "Update button content:";
    const container = document.querySelector(".modal__content");
    renderNavigationElement();

    function renderNavigationElement() {
        const navigationElement = [
            {
                element: "a",
                href: "13-ajax/module13-task1/module13-task1.html",
                target: "_blank",
                id: "execute-module13-task1",
                classList: "",
                textContent: "Open new page",
            },
        ];
        showFormElements(navigationElement, container);
    }
}



// Task 2
function executeModule13Task2() {
    document.getElementById("modal").style.display = "block";
    document.querySelector(".modal__name").innerHTML = "Display a list of book authors:";
    const container = document.querySelector(".modal__content");
    renderNavigationElement();

    function renderNavigationElement() {
        const navigationElement = [
            {
                element: "a",
                href: "13-ajax/module13-task2/module13-task2.html",
                target: "_blank",
                id: "execute-module13-task2",
                classList: "",
                textContent: "Open new page",
            },
        ];
        showFormElements(navigationElement, container);
    }
}



// Task 3
function executeModule13Task3() {
    document.getElementById("modal").style.display = "block";
    document.querySelector(".modal__name").innerHTML = "Display information about the user:";
    const container = document.querySelector(".modal__content");
    renderNavigationElement();

    function renderNavigationElement() {
        const navigationElement = [
            {
                element: "a",
                href: "13-ajax/module13-task3/module13-task3.html",
                target: "_blank",
                id: "execute-module13-task3",
                classList: "",
                textContent: "Open new page",
            },
        ];
        showFormElements(navigationElement, container);
    }
}