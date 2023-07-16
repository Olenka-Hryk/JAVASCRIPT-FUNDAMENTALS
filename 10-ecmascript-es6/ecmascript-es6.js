// Task 1
function executeModule10Task1() {
    let names = {
        first: "Tom",
        second: "Sam",
        third: "Ray",
        fourth: "Bob",
    };

    let { first: f, third: x, fifth = "Name №5" } = names;

    console.log(f); // "Tom"
    console.log(x); // "Ray"
    console.log(fifth); // "Name №5"

    showAlert("info", `Result: \n f \u2192 ${f} \n x \u2192 ${x} \n fifth  \u2192 ${fifth}`);
}



// Task 2
function executeModule10Task2() {
    let data = {
        names: ["Sam", "Tom", "Ray", "Bob"],
        ages: [20, 24, 22, 26],
    };

    let { names: [name1, name2, name3, name4], ages: [age1, age2, age3, age4] } = data;


    console.log(name2); // "Tom"
    console.log(age2); // 24
    console.log(name4); // "Bob"
    console.log(age4); // 26

    showAlert("info", `Result: \n name2 \u2192 ${name2} \n age2 \u2192 ${age2} \n name4  \u2192 ${name4} \n age4  \u2192 ${age4}`);
}



// Task 3
function executeModule10Task3() {
    document.getElementById("modal").style.display = "block";
    document.querySelector(".modal__name").innerHTML = "Return the product of Numbers:";
    const container = document.querySelector(".modal__content");
    renderDomModalElements();

    function renderDomModalElements() {
        const listDomModalElement = [
            {
                element: "label",
                for: "input-string-module10-task3",
                classList: "",
                text: "Enter a string:",
            },
            {
                element: "input",
                id: "input-string-module10-task3",
                placeholder: "1, str, 2, 3, true",
                classList: "",
                type: "text",
            },
            {
                element: "button",
                id: "execute-module10-task3",
                classList: "button--form-ex",
                text: "Execute",
                onclick: () => { onclickModalExecuteModule10Task3(); },
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

    function onclickModalExecuteModule10Task3() {
        renderFieldForResult();
        const fieldForResult = document.getElementById("result");
        const inputString = document.getElementById("input-string-module10-task3").value;

        if (!inputString || inputString.trim().length === 0) {
            showAlert("error", "You have not entered the required data! \n Try again.");
            return;
        }

        const parsedString = inputString.trim().split(/[,.\s]/);
        fieldForResult.innerHTML = `Result: ${mul(...parsedString)}`;

        function mul(...args) {
            const numbers = args.filter((elem) => /\d/.test(elem)).map(Number);
            if (!numbers.length) return 0;
            return numbers.reduce((acc, elem) => acc * elem, 1);
        }

        console.log(mul(1, "str", 2, 3, true)); // 6
        console.log(mul(null, "str", false, true)); // 0
    }

}



// Task 4
function executeModule10Task4() {
    document.getElementById("modal").style.display = "block";
    document.querySelector(".modal__name").innerHTML = "Create Map from the elements of two arrays:";
    const container = document.querySelector(".modal__content");
    renderDomModalElements();

    function renderDomModalElements() {
        const listDomModalElement = [
            {
                element: "label",
                for: "input-first-array-module10-task4",
                classList: "",
                text: "Enter the first array:",
            },
            {
                element: "input",
                id: "input-first-array-module10-task4",
                placeholder: "[1, 2, 3, 4]",
                classList: "",
                type: "text",
            },
            {
                element: "label",
                for: "input-second-array-module10-task4",
                classList: "",
                text: "Enter the second array:",
            },
            {
                element: "input",
                id: "input-second-array-module10-task4",
                placeholder: "['div', 'span', 'b', 'i']",
                classList: "",
                type: "text",
            },
            {
                element: "button",
                id: "execute-module10-task4",
                classList: "button--form-ex",
                text: "Execute",
                onclick: () => { onclickModalExecuteModule10Task4(); },
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

    function onclickModalExecuteModule10Task4() {
        const inputFirstArr = document.getElementById("input-first-array-module10-task4").value;
        const inputSecondArr = document.getElementById("input-second-array-module10-task4").value;

        if (!isCorrectInputs(inputFirstArr, inputSecondArr)) {
            return;
        }

        renderFieldForResult();
        const fieldForResult = document.getElementById("result");

        const parsedFirstArray = inputFirstArr.trim().split(/[\[\].,; ]/).filter((e) => {
            return /\S/.test(e);
        });
        const parsedSecondArr = inputSecondArr.trim().split(/[\[\].,; ]/).filter((e) => {
            return /\S/.test(e);
        });
        let keys = [1, 2, 3, 4];
        let values = ["div", "span", "b", "i"];
        fieldForResult.innerHTML = "Result:";


        try {
            const createdMap = mapBuilder(parsedFirstArray, parsedSecondArr);
            for (const [key, value] of createdMap) {
                fieldForResult.innerText += `\n Pair: ${key} \u2014 ${value}`;
            }
            let map = mapBuilder(keys, values);
            console.log(map.size); // 4
            console.log(map.get(2)); // "span"
        } catch (error) {
            showAlert("error", "Input arrays have different lengths! \n Try entering arrays of the same length again.");
            console.log(error);
        }


        function mapBuilder(keysArray, valuesArray) {
            if (keysArray.length !== valuesArray.length) {
                throw new Error('Invalid args');
            }
            return new Map(keysArray.map((key, i) => [key, valuesArray[i]]));
        }

        function isCorrectInputs(array1, array2) {
            if (!array1 || array1.trim().length === 0 || !array2 || array2.trim().length === 0) {
                showAlert("error", "You have not entered the required data! \n Try again.");
                return false;
            } else return true;
        }
    }
}



// Task 5
function executeModule10Task5() {
    let arr = [];

    for (let i = 0; i <= 2; i++) {
        arr[i] = function () {
            console.log(i);
        };
    }

    arr[0](); // 0
    arr[arr.length - 1](); // 2
}



// Task 6
function executeModule10Task6() {
    let server = {
        data: 0,
        convertToString: function (callback) {
            callback(() => this.data + "");
        }
    };
    let client = {
        server: server,
        result: "",
        calc: function (data) {
            this.server.data = data;
            this.server.convertToString(this.notification());
        },
        notification: function () {
            return (callback) => {
                this.result = callback();
            }
        }
    };
    client.calc(123);
    console.log(client.result); // "123"
    console.log(typeof client.result); // "string"
}