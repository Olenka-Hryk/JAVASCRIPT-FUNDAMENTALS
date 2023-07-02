function showFormElements(arrayOfElements, block) {
    arrayOfElements.forEach((elem) => {
        if (elem.element === "label") {
            addLabel(elem, block);
        } else if (elem.element === "input") {
            addInput(elem, block);
        } else if (elem.element === "p") {
            addP(elem, block);
        } else if (elem.element === "button") {
            addButton(elem, block);
        } else if (elem.element === "select") {
            addSelect(elem, block);
        } else if (elem.element === "option") {
            addOption(elem, block);
        } else if (elem.element === "textarea") {
            addTextarea(elem, block);
        } else if (elem.element === "output") {
            addOutput(elem, block);
        }
    });
}

function addLabel(elem, container) {
    if (elem.classList.includes("form__label-checkbox")) {
        const label = document.createElement("label");
        label.setAttribute("for", elem.for);
        label.classList.add("form__label-checkbox");
        label.innerHTML = elem.text;
        container.appendChild(label);
    } else {
        const label = document.createElement("label");
        if (elem.id) label.id = elem.id;
        label.setAttribute("for", elem.for);
        label.classList.add("main-text", "form__label");
        if (elem.classList) label.classList.add(elem.classList);
        label.innerHTML = elem.text;
        container.appendChild(label);
    }
}

function addInput(elem, container) {
    if (elem.classList.includes("form__input-color")) {
        const input = document.createElement("input");
        input.id = elem.id;
        input.classList.add("form__input-color");
        input.value = elem.value;
        input.type = elem.type;
        container.appendChild(input);
    } else if (elem.classList.includes("form__input-checkbox")) {
        const input = document.createElement("input");
        input.id = elem.id;
        input.classList.add("form__input-checkbox");
        input.type = elem.type;
        input.onchange = elem.onchange;
        container.appendChild(input);
    } else if (elem.classList.includes("form__input-range")) {
        const input = document.createElement("input");
        input.id = elem.id;
        input.classList.add("form__input-range");
        input.value = elem.value;
        input.min = elem.min;
        input.max = elem.max;
        input.type = elem.type;
        input.oninput = elem.oninput;
        container.appendChild(input);
    } else if (elem.classList.includes("form__input-radio")) {
        const input = document.createElement("input");
        input.id = elem.id;
        input.name = elem.name;
        input.classList.add("form__input-radio");
        input.value = elem.value;
        input.type = elem.type;
        input.addEventListener('click', () => {
            elem.onchange();
        });
        container.appendChild(input);
    } else {
        const input = document.createElement("input");
        input.id = elem.id;
        input.setAttribute("placeholder", elem.placeholder);
        input.classList.add("accent-text", "form__input");
        if (elem.classList) input.classList.add(elem.classList);
        input.type = elem.type;
        container.appendChild(input);
    }
}

function addOutput(elem, container) {
    const output = document.createElement("output");
    output.id = elem.id;
    output.setAttribute("for", elem.for);
    if (elem.classList) output.classList.add(elem.classList);
    output.value = elem.value;
    container.appendChild(output);
}

function addP(elem, container) {
    if (elem.classList.includes("form__result--task")) {
        const p = document.createElement("p");
        p.id = elem.id;
        p.classList.add("accent-text", "form__result");
        if (elem.classList) p.classList.add(elem.classList);
        p.innerHTML = elem.text;
        container.appendChild(p);
    } else if (elem.classList.includes("form__result--task-part")) {
        const p = document.createElement("p");
        p.id = elem.id;
        p.classList.add("accent-text", "form__result");
        if (elem.classList) p.classList.add(elem.classList);
        p.innerHTML = elem.text;
        container.appendChild(p);
    } else {
        const p = document.createElement("p");
        p.id = elem.id;
        p.classList.add("accent-text", "form__result", "form__result--total");
        if (elem.classList) p.classList.add(elem.classList);
        p.innerHTML = elem.text;
        container.appendChild(p);
    }
}

function addButton(elem, container) {
    const button = document.createElement("button");
    button.id = elem.id;
    button.type = "button";
    button.classList.add("button");
    if (elem.classList) button.classList.add(elem.classList);
    button.innerHTML = elem.text;
    button.addEventListener("click", elem.onclick);
    container.appendChild(button);
}

function addSelect(elem, container) {
    const select = document.createElement("select");
    select.id = elem.id;
    select.classList.add("form__select");
    if (elem.classList) select.classList.add(elem.classList);
    container.appendChild(select);
}

function addOption(elem, container) {
    const option = document.createElement("option");
    option.id = elem.id;
    if (elem.classList) option.classList.add(elem.classList);
    option.value = elem.value;
    option.innerHTML = elem.text;
    container.appendChild(option);
}

function addTextarea(elem, container) {
    const textarea = document.createElement("textarea");
    textarea.id = elem.id;
    textarea.rows = elem.rows;
    textarea.cols = textarea.cols;
    textarea.setAttribute("placeholder", elem.placeholder);
    textarea.classList.add("form__textarea");
    if (elem.classList) textarea.classList.add(elem.classList);
    container.appendChild(textarea);
}