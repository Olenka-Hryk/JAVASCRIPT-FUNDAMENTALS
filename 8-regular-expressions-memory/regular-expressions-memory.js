// Task 1
function executeModule8Task1() {
    document.getElementById("modal").style.display = "block";
    document.querySelector(".modal__name").innerHTML = "Uppercase:";
    const container = document.querySelector(".modal__content");
    renderDomModalElements();

    function renderDomModalElements() {
        const listDomModalElement = [
            {
                element: "label",
                for: "input-string-module8-task1",
                classList: "",
                text: "Enter a string:",
            },
            {
                element: "input",
                id: "input-string-module8-task1",
                placeholder: "RegExp",
                classList: "",
                type: "text",
            },
            {
                element: "button",
                id: "execute-module8-task1",
                classList: "button--form-ex",
                text: "Execute",
                onclick: () => { onclickModalExecuteModule8Task1(); },
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

    function onclickModalExecuteModule8Task1() {
        renderFieldForResult();
        const fieldForResult = document.getElementById("result");
        const inputString = document.getElementById("input-string-module8-task1").value;

        if (!inputString || inputString.trim().length === 0) {
            showAlert("error", "You have not entered the required data! \n Try again.");
            return;
        }

        upperCase(inputString);

        function upperCase(string) {
            const REGEXP_START_WITH_UPPERCASE = /^[A-Z]/;
            if (REGEXP_START_WITH_UPPERCASE.test(string)) {
                showAlert("success", "String's starts with uppercase character");
                fieldForResult.innerText = `Result: String's starts with uppercase character`;
            } else {
                showAlert("warning", "String's not starts with uppercase character");
                fieldForResult.innerText = `Result: String's not starts with uppercase character`;
            }
        }
    }
}



// Task 2
function executeModule8Task2() {
    document.getElementById("modal").style.display = "block";
    document.querySelector(".modal__name").innerHTML = "Check email:";
    const container = document.querySelector(".modal__content");
    renderDomModalElements();

    function renderDomModalElements() {
        const listDomModalElement = [
            {
                element: "label",
                for: "input-string-module8-task2",
                classList: "",
                text: "Enter email:",
            },
            {
                element: "textarea",
                id: "input-string-module8-task2",
                rows: "10",
                cols: "20",
                placeholder: "Gmail2@gmail.com",
                classList: "textarea--form",
            },
            {
                element: "button",
                id: "execute-module8-task2",
                classList: "button--form-ex",
                text: "Execute",
                onclick: () => { onclickModalExecuteModule8Task2(); },
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

    function onclickModalExecuteModule8Task2() {
        renderFieldForResult();
        const fieldForResult = document.getElementById("result");
        const inputString = document.getElementById("input-string-module8-task2").value;

        if (!inputString || inputString.trim().length === 0) {
            showAlert("error", "You have not entered the required data! \n Try again.");
            return;
        }

        const isValidEmail = checkEmail(inputString);
        showValidationResult(isValidEmail);

        function checkEmail(string) {
            const REGEXP_EMAIL = /^[^\s@]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
            return REGEXP_EMAIL.test(string);
        }

        function showValidationResult(result) {
            if (result) {
                showAlert("success", "Your email has been validated!");
                fieldForResult.innerText = `Result: ${result}`;
            } else {
                showAlert("warning", "Your email has not been validated!");
                fieldForResult.innerText = `Result: ${result}`;
            }
        }
    }
}



// Task 3
function executeModule8Task3() {
    document.getElementById("modal").style.display = "block";
    document.querySelector(".modal__name").innerHTML = "Switch places:";
    const container = document.querySelector(".modal__content");
    renderDomModalElements();

    const extraDivInputFields = document.createElement("div");
    extraDivInputFields.setAttribute("id", "extraDivInputFields");
    document.getElementById("execute-module8-task3").before(extraDivInputFields);

    function renderDomModalElements() {
        const listDomModalElement = [
            {
                element: "label",
                for: "input-string-module8-task3",
                classList: "",
                text: "Enter string text:",
            },
            {
                element: "textarea",
                id: "input-string-module8-task3",
                rows: "10",
                cols: "20",
                placeholder: "Java Script",
                classList: "textarea--form",
            },
            {
                element: "button",
                id: "execute-module8-task3",
                classList: "button--form-ex",
                text: "Execute",
                onclick: () => { onclickModalExecuteModule8Task3(); },
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

    document.getElementById("input-string-module8-task3").addEventListener("input", () => {
        const fieldOfResult = document.getElementById("result");
        if (fieldOfResult) fieldOfResult.innerHTML = "";
        const textareaInputString = document.getElementById("input-string-module8-task3").value;
        if (extraDivInputFields.contains(document.getElementById("input-first-string-module8-task3")))
            hideOrShowExtraFields("none");
        if (textareaInputString.trim().split(/\s/).length > 2)
            renderExtraFields();
    });

    function renderExtraFields() {
        if (extraDivInputFields.contains(document.getElementById("input-first-string-module8-task3"))) {
            hideOrShowExtraFields("block");
        } else {
            const listExtraFields = [
                {
                    element: "label",
                    id: "label-first-string-module8-task3",
                    for: "input-first-string-module8-task3",
                    classList: "",
                    text: "Enter the first string of text:",
                },
                {
                    element: "input",
                    id: "input-first-string-module8-task3",
                    placeholder: "Java",
                    classList: "",
                    type: "text",
                },
                {
                    element: "label",
                    id: "label-second-string-module8-task3",
                    for: "input-second-string-module8-task3",
                    classList: "",
                    text: "Enter the second string of text:",
                },
                {
                    element: "input",
                    id: "input-second-string-module8-task3",
                    placeholder: "Script",
                    classList: "",
                    type: "text",
                },
            ];
            showFormElements(listExtraFields, extraDivInputFields);
            hideOrShowExtraFields("block");
        }
    }

    function hideOrShowExtraFields(value) {
        document.getElementById("label-first-string-module8-task3").style.display = value;
        document.getElementById("input-first-string-module8-task3").style.display = value;
        document.getElementById("input-second-string-module8-task3").style.display = value;
        document.getElementById("label-second-string-module8-task3").style.display = value;
    }


    function onclickModalExecuteModule8Task3() {
        renderFieldForResult();
        const fieldForResult = document.getElementById("result");
        const inputString = document.getElementById("input-string-module8-task3").value;

        chooseSolutionMethod(inputString);

        function chooseSolutionMethod(inputText) {
            if (inputText.trim().split(/\s/).length === 2) {
                fieldForResult.innerHTML = `Result: ${simpleSwapPlaces(inputString)}`;
            } else if (inputText.trim().split(/\s/).length > 2) {
                const firstString = document.getElementById("input-first-string-module8-task3").value;
                const secondString = document.getElementById("input-second-string-module8-task3").value;
                fieldForResult.innerHTML = `Result: ${complexSwapPlaces(inputString, firstString, secondString)}`;
            } else {
                showAlert("info", "The input text contains only one string. \n Enter more text data to find the desired result.")
            }
        }

        function simpleSwapPlaces(text) {
            const REGEX_PATTERN = /([^\s]+)\s+([^\s]+)/;
            return text.replace(REGEX_PATTERN, "$2 $1");
        }

        function complexSwapPlaces(text, stringFirst, stringSecond) {
            const REGEX_PATTERN = new RegExp(`(\\b${stringFirst}\\b)|(\\b${stringSecond}\\b)`, `g`);
            const valueFirst = new RegExp(`\\b${stringFirst}\\b`, 'g');
            const valueSecond = new RegExp(`\\b${stringSecond}\\b`, 'g');

            if (text.match(valueFirst) === null || text.match(valueSecond) === null) {
                showAlert("error", "The string values for swap was not found in the main input text! \n Input correct first and second strings!");
                return;
            }

            if (text.match(valueFirst).length > 1 || text.match(valueSecond).length > 1) {
                const caseOfSwapping = confirm("More than one pair of input substrings were found! \n Swap only the first pair? - press OK. \n Otherwise, all matches in the input text will be swapped.");
                if (caseOfSwapping) {
                    let countOfSwapping = 0;
                    return text.replace(REGEX_PATTERN, match => {
                        if (countOfSwapping++ < 2) {
                            return match === stringFirst ? stringSecond : stringFirst;
                        }
                        return match;
                    });
                } else {
                    return text.replace(REGEX_PATTERN, match => (match === stringFirst ? stringSecond : stringFirst));
                }
            }
        }
    }
}



// Task 4
function executeModule8Task4() {
    document.getElementById("modal").style.display = "block";
    document.querySelector(".modal__name").innerHTML = "Credit card:";
    const container = document.querySelector(".modal__content");
    renderDomModalElements();

    function renderDomModalElements() {
        const listDomModalElement = [
            {
                element: "label",
                for: "input-string-module8-task4",
                classList: "",
                text: "Enter the bank card number:",
            },
            {
                element: "input",
                id: "input-string-module8-task4",
                placeholder: "9999-9999-9999-9999",
                classList: "",
                type: "text",
            },
            {
                element: "button",
                id: "execute-module8-task4",
                classList: "button--form-ex",
                text: "Execute",
                onclick: () => { onclickModalExecuteModule8Task4(); },
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

    function onclickModalExecuteModule8Task4() {
        renderFieldForResult();
        const fieldForResult = document.getElementById("result");
        const inputString = document.getElementById("input-string-module8-task4").value;

        showValidationResult(isValidBankCard(inputString));


        function isValidBankCard(string) {
            const REGEXP_BANK_CARD = /^\s*\d{4}-\d{4}-\d{4}-\d{4}\s*$/;
            return REGEXP_BANK_CARD.test(string);
        }

        function showValidationResult(result) {
            if (result) {
                showAlert("success", "You have entered the correct bank card number!");
                fieldForResult.innerText = `Result: Success! \n You have entered the correct bank card number`;
            } else {
                showAlert("warning", "You entered the wrong bank card number!");
                fieldForResult.innerText = `Result: Mistake! \n You entered the wrong bank card number`;
            }
        }
    }
}



// Task 5
function executeModule8Task5() {
    document.getElementById("modal").style.display = "block";
    document.querySelector(".modal__name").innerHTML = "Email validation:";
    const container = document.querySelector(".modal__content");
    renderDomModalElements();

    function renderDomModalElements() {
        const listDomModalElement = [
            {
                element: "label",
                for: "input-string-module8-task5",
                classList: "",
                text: "Enter email:",
            },
            {
                element: "input",
                id: "input-string-module8-task5",
                placeholder: "name_surname@gmail.com",
                classList: "",
                type: "text",
            },
            {
                element: "button",
                id: "execute-module8-task5",
                classList: "button--form-ex",
                text: "Execute",
                onclick: () => { onclickModalExecuteModule8Task5(); },
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

    function onclickModalExecuteModule8Task5() {
        renderFieldForResult();
        const fieldForResult = document.getElementById("result");
        const inputString = document.getElementById("input-string-module8-task5").value;

        checkEmail(inputString);

        function checkEmail(string) {
            const REGEXP_EMAIL = /^[A-Za-z0-9]+([_-][A-Za-z0-9]+)*@[A-Za-z0-9]+([_-][A-Za-z0-9]+)*\.[A-Za-z]{2,}$/;
            if (REGEXP_EMAIL.test(string)) {
                showAlert("success", "Entered email is correct!");
                fieldForResult.innerText = `Result: Entered email is correct!`;
            } else {
                showAlert("warning", "Entered email is not correct!");
                fieldForResult.innerText = `Result: Entered email is not correct!`;
            }
        }
    }
}



// Task 6
function executeModule8Task6() {
    document.getElementById("modal").style.display = "block";
    document.querySelector(".modal__name").innerHTML = "Login validation:";
    const container = document.querySelector(".modal__content");
    renderDomModalElements();

    function renderDomModalElements() {
        const listDomModalElement = [
            {
                element: "label",
                for: "input-string-module8-task6",
                classList: "",
                text: "Enter login:",
            },
            {
                element: "input",
                id: "input-string-module8-task6",
                placeholder: "ee1.1ret3",
                classList: "",
                type: "text",
            },
            {
                element: "button",
                id: "execute-module8-task6",
                classList: "button--form-ex",
                text: "Execute",
                onclick: () => { onclickModalExecuteModule8Task6(); },
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

    function onclickModalExecuteModule8Task6() {
        renderFieldForResult();
        const fieldForResult = document.getElementById("result");
        const inputString = document.getElementById("input-string-module8-task6").value;

        showValidationResult(checkLogin(inputString));

        function checkLogin(string) {
            const REGEXP_LOGIN = /^[A-Za-z][A-Za-z\d\.]{1,9}$/;
            const REGEXP_NUMBERS = /\d+(\.\d+)?/g;
            const numbers = string.match(REGEXP_NUMBERS);

            return REGEXP_LOGIN.test(string) && numbers !== null
                ? `${REGEXP_LOGIN.test(string)}; numbers: ${numbers.join(", ")}`
                : `${REGEXP_LOGIN.test(string)}; numbers: ${numbers.join(", ")}`;
        }

        function showValidationResult(result) {
            if (result) {
                showAlert("success", "Your login has been validated!");
                fieldForResult.innerText = `Result: ${result}`;
            } else {
                showAlert("warning", "Your login has not been validated!");
                fieldForResult.innerText = `Result: ${result}`;
            }
        }
    }
}



// Task 7
function executeModule8Task7() {
    document.getElementById("modal").style.display = "block";
    document.querySelector(".modal__name").innerHTML = "&#10025; &#10025; &#10025; Form validation:";
    const container = document.querySelector(".modal__content");
    renderNavigationElement();

    function renderNavigationElement() {
        const navigationElement = [
            {
                element: "a",
                href: "8-regular-expressions-memory/module8-task7/module8-task7.html",
                target: "_blank",
                id: "execute-module8-task7",
                classList: "",
                textContent: "Open new page",
            },
        ];
        showFormElements(navigationElement, container);
    }

    // CODE in:  /JAVASCRIPT-FUNDAMENTALS/8-regular-expressions-memory/module8-task7/module8-task7.js
}