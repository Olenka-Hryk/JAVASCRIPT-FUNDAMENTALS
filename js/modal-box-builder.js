function showFormElements(arrayOfElements, block) {
    arrayOfElements.forEach((elem) => {
        if (elem.element === "label") {
            var label = document.createElement("Label");
            label.setAttribute("for", elem.for);
            label.classList = "main-text form__label " + elem.classList;
            label.innerHTML = elem.text;
            block.appendChild(label);

        }

        if (elem.element === "input") {
            let input = document.createElement("INPUT");
            input.id = elem.id;
            input.setAttribute("placeholder", elem.placeholder);
            input.classList = "accent-text form__input " + elem.classList;
            input.type = elem.type;
            block.appendChild(input);
        }

        if (elem.element === "p") {
            let p = document.createElement("p");
            p.id = elem.id;
            p.classList = "accent-text form__result form__result--total " + elem.classList;
            p.innerHTML = elem.text;
            block.appendChild(p);
        }

        if (elem.element === "button") {
            let button = document.createElement("button");
            button.id = elem.id;
            button.type = "button";
            button.classList = "button " + elem.classList;
            button.innerHTML = elem.text;
            button.addEventListener('click', elem.onclick);
            block.appendChild(button);
        }
    });
}



// const listDomTaskElement = [{
//     element: "label",
//     for: "income-desired",
//     classList: "",
//     text: "Desired income:"
// },
// {
//     element: "input",
//     id: "income-desired",
//     placeholder: "2000$",
//     classList: "",
//     type: "number"
// },
// {
//     element: "p",
//     id: "result-num-line-code",
//     classList: "",
//     text: "Result: "
// },
// {
//     element: "button",
//     id: "execute-task-income",
//     classList: "button--form-ex",
//     text: "Execute",
//     onclick: () => { fffffffffffffffff() }
// }]