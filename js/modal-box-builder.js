function showFormElements(arrayOfElements, block) {
    arrayOfElements.forEach((elem) => {
        if (elem.element === "label") {
            addTagLabel(elem, block);
        } else if (elem.element === "input") {
            addTagInput(elem, block);
        } else if (elem.element === "p") {
            addTagP(elem, block);
        } else if (elem.element === "button") {
            addTagButton(elem, block);
        } else if (elem.element === "select") {
            addTagSelect(elem, block);
        } else if (elem.element === "option") {
            addTagOption(elem, block);
        } else if (elem.element === "textarea") {
            addTagTextarea(elem, block);
        } else if (elem.element === "output") {
            addTagOutput(elem, block);
        } else if (elem.element === "a") {
            addTagA(elem, block);
        }
    });
}

function addTagLabel(elem, container) {
    if (elem.classList.includes("form__label-checkbox")) {
        const label = document.createElement("label");
        label.setAttribute("for", elem.for);
        label.classList.add("form__label-checkbox");
        label.innerHTML = elem.text;
        container.appendChild(label);
    } else {
        const label = document.createElement("label");
        if (elem.id) label.setAttribute("id", elem.id);
        label.setAttribute("for", elem.for);
        label.classList.add("main-text", "form__label");
        if (elem.classList) label.classList.add(elem.classList);
        label.innerHTML = elem.text;
        container.appendChild(label);
    }
}

function addTagInput(elem, container) {
    if (elem.classList.includes("form__input-color")) {
        const input = document.createElement("input");
        input.setAttribute("id", elem.id);
        input.classList.add("form__input-color");
        input.value = elem.value;
        input.type = elem.type;
        container.appendChild(input);
    } else if (elem.classList.includes("form__input-checkbox")) {
        const input = document.createElement("input");
        input.setAttribute("id", elem.id);
        input.classList.add("form__input-checkbox");
        input.type = elem.type;
        input.onchange = elem.onchange;
        container.appendChild(input);
    } else if (elem.classList.includes("form__input-range")) {
        const input = document.createElement("input");
        input.setAttribute("id", elem.id);
        input.classList.add("form__input-range");
        input.value = elem.value;
        input.min = elem.min;
        input.max = elem.max;
        input.type = elem.type;
        input.oninput = elem.oninput;
        container.appendChild(input);
    } else if (elem.classList.includes("form__input-radio")) {
        const input = document.createElement("input");
        input.setAttribute("id", elem.id);
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
        input.setAttribute("id", elem.id);
        input.setAttribute("placeholder", elem.placeholder);
        input.classList.add("accent-text", "form__input");
        if (elem.classList) input.classList.add(elem.classList);
        input.type = elem.type;
        container.appendChild(input);
    }
}

function addTagOutput(elem, container) {
    const output = document.createElement("output");
    output.setAttribute("id", elem.id);
    output.setAttribute("for", elem.for);
    if (elem.classList) output.classList.add(elem.classList);
    output.value = elem.value;
    container.appendChild(output);
}

function addTagP(elem, container) {
    if (elem.classList.includes("form__result--task")) {
        const p = document.createElement("p");
        p.setAttribute("id", elem.id);
        p.classList.add("accent-text", "form__result");
        if (elem.classList) p.classList.add(elem.classList);
        p.innerHTML = elem.text;
        container.appendChild(p);
    } else if (elem.classList.includes("form__result--task-part")) {
        const p = document.createElement("p");
        p.setAttribute("id", elem.id);
        p.classList.add("accent-text", "form__result");
        if (elem.classList) p.classList.add(elem.classList);
        p.innerHTML = elem.text;
        container.appendChild(p);
    } else {
        const p = document.createElement("p");
        p.setAttribute("id", elem.id);
        p.classList.add("accent-text", "form__result", "form__result--total");
        if (elem.classList) p.classList.add(elem.classList);
        p.innerHTML = elem.text;
        container.appendChild(p);
    }
}

function addTagButton(elem, container) {
    const button = document.createElement("button");
    button.setAttribute("id", elem.id);
    button.type = "button";
    button.classList.add("button");
    if (elem.classList) button.classList.add(elem.classList);
    button.innerHTML = elem.text;
    button.addEventListener("click", elem.onclick);
    container.appendChild(button);
}

function addTagSelect(elem, container) {
    const select = document.createElement("select");
    select.setAttribute("id", elem.id);
    select.classList.add("form__select");
    if (elem.classList) select.classList.add(elem.classList);
    container.appendChild(select);
}

function addTagOption(elem, container) {
    const option = document.createElement("option");
    if (elem.id) option.setAttribute("id", elem.id);
    if (elem.classList) option.classList.add(elem.classList);
    option.value = elem.value;
    option.innerHTML = elem.text;
    container.appendChild(option);
}

function addTagTextarea(elem, container) {
    const textarea = document.createElement("textarea");
    textarea.setAttribute("id", elem.id);
    textarea.rows = elem.rows;
    textarea.cols = elem.cols;
    textarea.setAttribute("placeholder", elem.placeholder);
    textarea.classList.add("textarea");
    if (elem.classList) textarea.classList.add(elem.classList);
    if (elem.readOnly) textarea.readOnly;
    container.appendChild(textarea);
}

function addTagA(elem, container) {
    const a = document.createElement("a");
    a.setAttribute("href", elem.href);
    a.target = elem.target;
    a.setAttribute("id", elem.id);
    a.classList.add("form__a-link-new-tab");
    if (elem.classList) a.classList.add(elem.classList);
    a.textContent = elem.textContent;
    container.appendChild(a);
}