// Task 1
function executeModule5Task1() {
    document.getElementById("modal").style.display = "block";
    document.querySelector(".modal__name").innerHTML = "Class Circle:";
    const container = document.querySelector(".modal__content");
    renderDomModalElements();

    function renderDomModalElements() {
        const listDomModalElement = [
            {
                element: "label",
                for: "input-x0-module5-task1",
                classList: "",
                text: "Enter the x0 coordinate for the center of the circle:",
            },
            {
                element: "input",
                id: "input-x0-module5-task1",
                placeholder: "6",
                classList: "",
                type: "number",
            },
            {
                element: "label",
                for: "input-y0-module5-task1",
                classList: "",
                text: "Enter the y0 coordinate for the center of the circle:",
            },
            {
                element: "input",
                id: "input-y0-module5-task1",
                placeholder: "11",
                classList: "",
                type: "number",
            },
            {
                element: "label",
                for: "input-r-module5-task1",
                classList: "",
                text: "Enter the radius of this circle:",
            },
            {
                element: "input",
                id: "input-r-module5-task1",
                placeholder: "15",
                classList: "",
                type: "number",
            },
            {
                element: "p",
                id: "first-part-of-result-for-module5-task1",
                classList: "form__result--task-part",
                text: "",
            },
            {
                element: "label",
                for: "input-static-r-module5-task1",
                classList: "",
                text: "Enter the radius to find the length of the circle:",
            },
            {
                element: "input",
                id: "input-static-r-module5-task1",
                placeholder: "10",
                classList: "",
                type: "number",
            },
            {
                element: "p",
                id: "second-part-of-result-for-module5-task1",
                classList: "form__result--task-part",
                text: "",
            },
            {
                element: "label",
                id: "info-label-module5-task1",
                for: "input-x-module5-task1",
                classList: "",
                text: "Check for hitting a point (x,y) in a circle:",
            },
            {
                element: "label",
                for: "input-x-module5-task1",
                classList: "",
                text: "Enter the x coordinate:",
            },
            {
                element: "input",
                id: "input-x-module5-task1",
                placeholder: "24",
                classList: "",
                type: "number",
            },
            {
                element: "label",
                for: "input-y-module5-task1",
                classList: "",
                text: "Enter the y coordinate:",
            },
            {
                element: "input",
                id: "input-y-module5-task1",
                placeholder: "6",
                classList: "",
                type: "number",
            },
            {
                element: "p",
                id: "third-part-of-result-for-module5-task1",
                classList: "form__result--task-part",
                text: "",
            },
            {
                element: "button",
                id: "execute-module5-task1",
                classList: "button--form-ex",
                text: "Execute",
                onclick: () => {
                    onclickModalExecuteModule5Task1();
                },
            },
        ];
        showFormElements(listDomModalElement, container);
    }

    function clearAllResultFields() {
        const fieldOfResults = document.querySelectorAll(".form__result--task-part");
        fieldOfResults.forEach((elem) => {
            elem.innerText = "";
        });
    }

    const infoLabel = document.getElementById("info-label-module5-task1");
    const coordX0 = document.getElementById("input-x0-module5-task1");
    const coordY0 = document.getElementById("input-y0-module5-task1");
    const radius = document.getElementById("input-r-module5-task1");
    coordX0.addEventListener('input', () => {
        changeInfoLabel(coordX0.value, coordY0.value, radius.value);
    });
    coordY0.addEventListener('input', () => {
        changeInfoLabel(coordX0.value, coordY0.value, radius.value);
    });
    radius.addEventListener('input', () => {
        changeInfoLabel(coordX0.value, coordY0.value, radius.value);
    });

    function changeInfoLabel(x0, y0, radius) {
        infoLabel.innerText = "Check for hitting a point (x,y) in a circle:";
        if (x0) {
            infoLabel.innerText += ` x0=${x0}`;
        }
        if (y0) {
            infoLabel.innerText += ` y0=${y0}`;
        }
        if (radius) {
            infoLabel.innerText += ` r = ${radius}`;
        }
    }

    function onclickModalExecuteModule5Task1() {
        clearAllResultFields();
        const firstPartOfResult = document.getElementById('first-part-of-result-for-module5-task1');
        const secondPartOfResult = document.getElementById('second-part-of-result-for-module5-task1');
        const thirdPartOfResult = document.getElementById('third-part-of-result-for-module5-task1');

        const coordValueX0 = document.getElementById("input-x0-module5-task1").value;
        const coordValueY0 = document.getElementById("input-y0-module5-task1").value;
        const radiusValue = document.getElementById("input-r-module5-task1").value;
        const radiusValueStMethod = document.getElementById("input-static-r-module5-task1").value;
        const coordValueX = document.getElementById("input-x-module5-task1").value;
        const coordValueY = document.getElementById("input-y-module5-task1").value;

        if (!coordValueX0 || !coordValueY0 || !radiusValue || !radiusValueStMethod || !coordValueX || !coordValueY) {
            showAlert("error", "You have not entered the required data! \n Please enter the data.");
            return;
        }


        class Circle {
            constructor(x0, y0, radius) {
                this.x0 = x0;
                this.y0 = y0;
                this.radius = radius;
            }

            // get length() {
            //     return 2 * Math.PI * this.radius;
            // }

            getLength() {
                // return 2 * Math.PI * this.radius;
                return Circle.getLength(this.radius); // if DRY
            }

            static getLength(radius) {
                return 2 * Math.PI * radius;
            }

            copy() {
                // return new Circle(this.x0, this.y0, this.radius); 
                return Circle.getNewCircle(this.x0, this.y0, this.radius); // if DRY
            }

            static getNewCircle(x0, y0, radius) {
                return new Circle(x0, y0, radius);
            }

            isPointIn(x, y) {
                return (x - this.x0) ** 2 + (y - this.y0) ** 2 <= this.radius ** 2;
            }

            toString() {
                return `Circle (x0: ${this.x0}, y0: ${this.y0}, radius: ${this.radius})`;
            }
        }

        console.log("First part: ");
        const circle = new Circle(coordValueX0, coordValueY0, radiusValue);
        firstPartOfResult.innerText += `Object: ${circle}`;
        console.log(circle);

        const lengthCircle = (circle.getLength()).toFixed(3);
        firstPartOfResult.innerText += `\n Length of the circle: ${lengthCircle}`;
        // console.log(circle.length); //getter
        console.log(lengthCircle);


        const copyCircle = circle.copy();
        firstPartOfResult.innerText += `\n Copy ${JSON.stringify(copyCircle)}`;
        console.log(copyCircle);

        const newCirc = Circle.getNewCircle(coordValueX0, coordValueY0, radiusValue);
        firstPartOfResult.innerText += `\n Object: ${JSON.stringify(newCirc)}`;
        console.log(newCirc);


        console.log("Second part: ");
        const lengthCircleStMethod = (Circle.getLength(radiusValueStMethod)).toFixed(3);
        secondPartOfResult.textContent += `Length of the circle: ${lengthCircleStMethod} \n`;
        console.log(lengthCircleStMethod);


        console.log("Third part: ");
        const isPointInCircle = circle.isPointIn(coordValueX, coordValueY);
        thirdPartOfResult.innerText += isPointInCircle ? `[${isPointInCircle}] The dot (${coordValueX}, ${coordValueY}) fall into ${circle}` :
            `[${isPointInCircle}] The dot (${coordValueX}, ${coordValueY}) does not fall into ${circle}`;
        console.log(isPointInCircle);

        thirdPartOfResult.innerText += `\n Object in string: ${circle.toString()}`;
        console.log(circle.toString());
    }
}



// Task 2
function executeModule5Task2() {
    document.getElementById("modal").style.display = "block";
    document.querySelector(".modal__name").innerHTML = "Find the number of properties of the object:";
    const container = document.querySelector(".modal__content");
    renderDomModalElements();

    function renderDomModalElements() {
        const listDomModalElement = [
            {
                element: "label",
                for: "input-object-module5-task2",
                classList: "",
                text: "Enter the object in JSON format:",
            },
            {
                element: "textarea",
                id: "input-object-module5-task2",
                rows: "10",
                cols: "50",
                placeholder: `{\n"course":"JS fundamental", \n"duration":3, \n"direction":"web-development" \n}`,
                classList: "",
            },
            {
                element: "button",
                id: "execute-module5-task2",
                classList: "button--form-ex",
                text: "Execute",
                onclick: () => {
                    onclickModalExecuteModule5Task2();
                },
            }
        ];
        showFormElements(listDomModalElement, container);
    }

    function renderFieldForResult() {
        document.querySelectorAll("#result").forEach((e) => e.remove());
        const resultDomElement = [
            {
                element: "p",
                id: "result",
                classList: "",
                text: "",
            },
        ];
        showFormElements(resultDomElement, container);
    }

    function onclickModalExecuteModule5Task2() {
        renderFieldForResult();
        const fieldForResult = document.getElementById("result");
        const inputJsonObject = document.getElementById("input-object-module5-task2").value;

        if (!inputJsonObject || inputJsonObject.trim().length === 0) {
            showAlert("error", "You haven't entered the required data! \nTry again.");
            return;
        }

        try {
            const parsedJsonObject = JSON.parse(inputJsonObject);
            const countPropsInObj = propsCount(parsedJsonObject);
            fieldForResult.textContent = `Result:\n This object contains ${countPropsInObj} properties`;
        } catch (error) {
            console.warn(error);
            showAlert("error", "The entered object is not in JSON format. \nTry again!");
        }

        let mentor = {
            course: "JS fundamental",
            duration: 3,
            direction: "web-development"
        };
        console.log(propsCount(mentor));

        function propsCount(currentObject) {
            return Object.keys(currentObject).length;
        }
    }
}



// Task 3
function executeModule5Task3() {
    document.getElementById("modal").style.display = "block";
    document.querySelector(".modal__name").innerHTML = "Class Person:";
    const container = document.querySelector(".modal__content");
    renderDomModalElements();

    function renderDomModalElements() {
        const listDomModalElement = [
            {
                element: "label",
                for: "input-name-module5-task3",
                classList: "",
                text: "Enter name:",
            },
            {
                element: "input",
                id: "input-name-module5-task3",
                placeholder: "Petro",
                classList: "",
                type: "text",
            },
            {
                element: "label",
                for: "input-surname-module5-task3",
                classList: "",
                text: "Enter surname:",
            },
            {
                element: "input",
                id: "input-surname-module5-task3",
                placeholder: "Petrenko",
                classList: "",
                type: "text",
            },
            {
                element: "label",
                for: "input-middle-name-module5-task3",
                classList: "",
                text: "Enter middle name:",
            },
            {
                element: "input",
                id: "input-middle-name-module5-task3",
                placeholder: "Petrovych",
                classList: "",
                type: "text",
            },
            {
                element: "label",
                for: "input-year-university-module5-task3",
                classList: "",
                text: "Enter the year of entering the university:",
            },
            {
                element: "input",
                id: "input-year-university-module5-task3",
                placeholder: "2019",
                classList: "",
                type: "number",
            },
            {
                element: "button",
                id: "execute-module5-task3",
                classList: "button--form-ex",
                text: "Execute",
                onclick: () => { onclickModalExecuteModule5Task3(); },
            },
        ];
        showFormElements(listDomModalElement, container);
    }

    function renderFieldForResult() {
        document.querySelectorAll("#result").forEach((e) => e.remove());
        const resultDomElement = [
            {
                element: "p",
                id: "result",
                classList: "",
                text: "",
            },
        ];
        showFormElements(resultDomElement, container);
    }

    function onclickModalExecuteModule5Task3() {
        renderFieldForResult();
        const fieldForResult = document.getElementById("result");
        const inputName = document.getElementById("input-name-module5-task3").value;
        const inputSurname = document.getElementById("input-surname-module5-task3").value;
        const inputMiddleName = document.getElementById("input-middle-name-module5-task3").value;
        const inputYear = document.getElementById("input-year-university-module5-task3").value;

        if (!inputName || inputName.trim().length === 0 || !inputSurname || inputSurname.trim().length === 0
            || !inputMiddleName || inputMiddleName.trim().length === 0 || !inputYear) {
            showAlert("error", "You haven't entered the required data! \nTry again.");
            return;
        }


        class Person {
            constructor(name, surname) {
                this.name = name;
                this.surname = surname;
            }

            showFullName() {
                // console.log(`${this.name} ${this.surname}`);
                return `${this.name} ${this.surname}`;
            }
        }

        class Student extends Person {
            constructor(name, surname, year) {
                super(name, surname);
                this.year = year;
            }

            showFullName(midleName) {
                // console.log(`${super.showFullName()} ${midleName}`);
                return `${super.showFullName()} ${midleName}`;
            }

            showCourse() {
                const currentYear = new Date().getFullYear();
                const currentCourse = currentYear - this.year;
                return currentCourse <= 6 && currentCourse > 0 ? `${currentCourse}` : `This person is not a university student`;
            }
        }

        const student1 = new Student(inputName, inputSurname, inputYear);
        fieldForResult.innerText = `Result: \n${student1.showFullName(inputMiddleName)}`;
        console.log(student1.showFullName(inputMiddleName));

        fieldForResult.innerText += `\n Current course: ${student1.showCourse()}`;
        console.log(`Current course: ${student1.showCourse()}`);
    }
}



// Task 4
function executeModule5Task4() {
    document.getElementById("modal").style.display = "block";
    document.querySelector(".modal__name").innerHTML = "Class Marker:";
    const container = document.querySelector(".modal__content");
    renderDomModalElements();

    const containerForRefill = document.createElement("div");
    containerForRefill.id = "marker-container-for-refill";
    containerForRefill.classList.add("form__marker-container");
    container.appendChild(containerForRefill);

    const containerForRefillCheckbox = document.createElement("div");
    containerForRefillCheckbox.id = "marker-container-for-refill-checkbox";
    containerForRefillCheckbox.classList.add("form__marker-container-checkbox");
    containerForRefill.appendChild(containerForRefillCheckbox);
    renderRefillMarkerCheckbox();

    const containerForRefillRange = document.createElement("div");
    containerForRefillRange.id = "marker-container-for-refill-range";
    containerForRefillRange.classList.add("form__marker-container-range");
    containerForRefill.appendChild(containerForRefillRange);
    renderRefillMarkerRange();
    renderRefillButton();
    renderFieldForInkResidue();
    renderPrintButton();
    renderFieldForResult();
    renderFieldForPrinting();

    const fieldForInkResidue = document.getElementById("amount-of-ink-residue-module5-task4");
    fieldForInkResidue.style.display = "none";

    const checkboxFullRefill = document.getElementById("refill-marker-full-module5-task4");
    const rangeInput = document.getElementById("refill-marker-range-module5-task4");
    const numberInputRange = document.getElementById("rangevalue-m5-t4");

    function onchangeForCheckboxModule5Task4() {
        if (checkboxFullRefill.checked) {
            numberInputRange.value = "100 %";
            rangeInput.value = 100;
        }
    }

    function oninputForRangeModule5Task4() {
        numberInputRange.value = `${rangeInput.value} %`;
    }

    function renderDomModalElements() {
        const listDomModalElement = [
            {
                element: "label",
                for: "input-color-module5-task4",
                classList: "",
                text: "Select a marker color:",
            },
            {
                element: "input",
                id: "input-color-module5-task4",
                classList: "form__input-color",
                value: "#e66465",
                type: "color",
            },
            {
                element: "label",
                for: "input-amount-ink-module5-task4",
                classList: "",
                text: "Enter the amount of ink in the marker:",
            },
            {
                element: "input",
                id: "input-amount-ink-module5-task4",
                placeholder: "50 %",
                classList: "",
                type: "number",
            },
            {
                element: "label",
                for: "input-string-module5-task4",
                classList: "",
                text: "Enter the required string to print:",
            },
            {
                element: "textarea",
                id: "input-string-module5-task4",
                rows: "8",
                cols: "50",
                placeholder: "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle. As with all matters of the heart, you'll know when you find it.",
                classList: "",
            },
        ];
        showFormElements(listDomModalElement, container);
    }

    function renderRefillMarkerCheckbox() {
        const listRefillMarkerElement = [
            {
                element: "input",
                id: "refill-marker-full-module5-task4",
                classList: "form__input-checkbox",
                type: "checkbox",
                onchange: () => { onchangeForCheckboxModule5Task4(); },
            },
            {
                element: "label",
                for: "refill-marker-full-module5-task4",
                classList: "form__label-checkbox",
                text: "Full refueling (100%)",
            },
        ];
        showFormElements(listRefillMarkerElement, containerForRefillCheckbox);
    }

    function renderRefillMarkerRange() {
        const listRefillMarkerElement = [
            {
                element: "input",
                id: "refill-marker-range-module5-task4",
                classList: "form__input-range",
                value: "0",
                min: "0",
                max: "100",
                type: "range",
                oninput: () => { oninputForRangeModule5Task4(); },
            },
            {
                element: "output",
                id: "rangevalue-m5-t4",
                for: "refill-marker-range-module5-task4",
                classList: "form__output-for-range",
                value: "0 %",
            },
        ];
        showFormElements(listRefillMarkerElement, containerForRefillRange);
    }

    function renderRefillButton() {
        const refillButtonElement = [
            {
                element: "button",
                id: "refill-module5-task4",
                classList: "button--form-option",
                text: "Refill",
                onclick: () => { onclickForRefillModule5Task4(); },
            },
        ];
        showFormElements(refillButtonElement, containerForRefill);
    }

    function renderPrintButton() {
        const printButtonElement = [
            {
                element: "button",
                id: "print-module5-task4",
                classList: "button--form-ex",
                text: "Print",
                onclick: () => { onclickModalExecuteModule5Task4(); },
            },
        ];
        showFormElements(printButtonElement, container);
    }

    function renderFieldForResult() {
        document.querySelectorAll("#result").forEach((e) => e.remove());
        const resultDomElement = [
            {
                element: "p",
                id: "result",
                classList: "",
                text: "",
            },
        ];
        showFormElements(resultDomElement, container);
    }

    function renderFieldForPrinting() {
        document.querySelectorAll("#printed-string-module5-task4").forEach((e) => e.remove());
        const fieldForPrint = [
            {
                element: "p",
                id: "printed-string-module5-task4",
                classList: "form__printing-text",
                text: "",
            },
        ];
        showFormElements(fieldForPrint, container);
    }

    function renderFieldForInkResidue() {
        document.querySelectorAll("#amount-of-ink-residue-module5-task4").forEach((e) => e.remove());
        const fieldForPrint = [
            {
                element: "label",
                id: "amount-of-ink-residue-module5-task4",
                for: "input-amount-ink-module5-task4",
                classList: "",
                text: "",
            },
        ];
        showFormElements(fieldForPrint, container);
    }


    class Marker {
        get totalInk() {
            return this._totalInk;
        }

        set totalInk(value) {
            if (value < 0 || value > 100) throw new Error('Wrong totalInk argument');
            this._totalInk = value;
        }

        constructor(color, totalInk) {
            this.color = color;
            this.totalInk = totalInk;
        }

        print(text) {
            const result = [];
            let index = 0;
            while (this.totalInk >= Marker.INK_PER_CHAR && index < text.length) {
                const char = text.charAt(index);
                result.push(char);
                index++;
                if (char !== ' ') {
                    this.totalInk -= Marker.INK_PER_CHAR;
                }
            }
            this.render(result.join(''));
        }

        render(text) {
            const fieldForPrinting = document.getElementById("printed-string-module5-task4");
            const fieldForResult = document.getElementById("result");
            fieldForResult.innerText = "Printing...";
            let i = 0;
            fieldForPrinting.style.color = this.color;
            fieldForPrinting.innerHTML = "";
            const typeWriter = () => {
                if (i < text.length) {
                    fieldForPrinting.innerHTML += text.charAt(i);
                    i++;
                    setTimeout(typeWriter, Marker.PRINT_SPEED);
                }
                if (i === text.length)
                    fieldForResult.innerText = "Printed!";
            }
            typeWriter();
        }

        static get PRINT_SPEED() {
            return 50;
        }

        static get INK_PER_CHAR() {
            return 0.5;
        }
    }

    class RefillableMarker extends Marker {
        constructor(color, totalInk) {
            super(color, totalInk);
        }

        refill() {
            this.totalInk = 100;
        }

        refillBy(delta) {
            try {
                this.totalInk = this.totalInk + delta;
            } catch (err) {
                showAlert("error", "Marker is full. Too much ink!");
                throw new Error('Marker is full. Too much ink!');
            }
        }
    }


    function onclickModalExecuteModule5Task4() {
        fieldForInkResidue.style.display = "block";
        let inputAmountOfInk = document.getElementById("input-amount-ink-module5-task4");
        const selectedColor = document.getElementById("input-color-module5-task4").value;
        const valueInputAmountOfInk = +document.getElementById("input-amount-ink-module5-task4").value;
        const inputString = document.getElementById("input-string-module5-task4").value;

        if (!valueInputAmountOfInk || !inputString || inputString.trim().length === 0) {
            showAlert("error", "You haven't entered the required data! \nTry again.");
            return;
        }

        const marker = new Marker(selectedColor, valueInputAmountOfInk);
        marker.print(inputString);
        inputAmountOfInk.value = marker.totalInk;
        fieldForInkResidue.innerHTML = `Ink residue: ${marker.totalInk}%`;
    }

    function onclickForRefillModule5Task4() {
        fieldForInkResidue.style.display = "block";
        let inputAmountOfInk = document.getElementById("input-amount-ink-module5-task4");
        const valueInputAmountOfInk = +document.getElementById("input-amount-ink-module5-task4").value;
        const selectedColor = document.getElementById("input-color-module5-task4").value;
        const inputString = document.getElementById("input-string-module5-task4").value;
        const valueForRefillInk = document.getElementById("rangevalue-m5-t4").value;
        const valueOfInk = +valueForRefillInk.replace(" %", "");

        if (valueInputAmountOfInk < 0 || !inputString || inputString.trim().length === 0) {
            showAlert("error", "You haven't entered the required data! \nTry again.");
            return;
        }

        if (valueOfInk < 1) {
            showAlert("warning", "You did not specify the amount of ink! \n Set the amount of ink again.");
            return;
        }

        const markerForRefill = new RefillableMarker(selectedColor, valueInputAmountOfInk);


        if (checkboxFullRefill.checked) {
            markerForRefill.refill();
            inputAmountOfInk.value = markerForRefill.totalInk;
            console.log(`Marker is full: ${markerForRefill.totalInk}%`);
            showAlert("success", `Marker is full: ${markerForRefill.totalInk}%`);
            checkboxFullRefill.checked = false;
            fieldForInkResidue.style.display = "none";
        } else {
            if (markerForRefill.totalInk > 0) {
                const inkResidue = markerForRefill.totalInk;
                console.log(`There is ink residue in the marker: ${inkResidue}%`);
                markerForRefill.refillBy(valueOfInk);
                console.log(`After filling, the marker has ${markerForRefill.totalInk}% ink`);
                showAlert("info", `Before filling the ink, there were ${inkResidue}% inks in the marker. 
                \n Now the marker has ${markerForRefill.totalInk}% ink`);
                inputAmountOfInk.value = markerForRefill.totalInk;
                fieldForInkResidue.innerHTML = `Ink residue: ${markerForRefill.totalInk}%`;
            } else if (markerForRefill.totalInk === 0) {
                markerForRefill.refillBy(valueOfInk);
                console.log(`The marker is filled on: ${markerForRefill.totalInk}%`);
                showAlert("success", `The marker is filled on: ${markerForRefill.totalInk}%`);
                inputAmountOfInk.value = markerForRefill.totalInk;
                fieldForInkResidue.innerHTML = `Ink residue: ${markerForRefill.totalInk}%`;
            }
        }
    }
}



// Task 5
function executeModule5Task5() {
    showAlert("info", "The script will be here soooooon");
}
