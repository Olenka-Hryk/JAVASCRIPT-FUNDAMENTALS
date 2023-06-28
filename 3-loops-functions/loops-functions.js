// Task 1
function executeModule3Task1() {
  document.getElementById("modal").style.display = "block";
  document.querySelector(".modal__name").innerHTML = "Create Array:";
  const container = document.querySelector(".modal__content");
  renderDomModalElements();

  function renderDomModalElements() {
    const listDomModalElement = [
      {
        element: "label",
        for: "initial-value-module3-task1",
        classList: "",
        text: "Enter initial value:",
      },
      {
        element: "input",
        id: "initial-value-module3-task1",
        placeholder: "4",
        classList: "",
        type: "number",
      },
      {
        element: "label",
        for: "final-value-module3-task1",
        classList: "",
        text: "Enter final value:",
      },
      {
        element: "input",
        id: "final-value-module3-task1",
        placeholder: "10",
        classList: "",
        type: "number",
      },
      {
        element: "button",
        id: "execute-module3-task1",
        classList: "button--form-ex",
        text: "Execute",
        onclick: () => { onclickModalExecuteModule3Task1(); },
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

  function onclickModalExecuteModule3Task1() {
    renderFieldForResult();
    const fieldForResult = document.getElementById("result");
    const initialValue = +document.getElementById("initial-value-module3-task1").value;
    const finalValue = +document.getElementById("final-value-module3-task1").value;

    if (!initialValue || !finalValue) {
      showAlert("error", "You have not entered the required data! \n Please enter the data.");
      return;
    }

    const arr = createArray(initialValue, finalValue);
    fieldForResult.innerText = `Result: your array in range [${initialValue} - ${finalValue}] \n is [ ${arr} ]`;
    console.log(arr);


    function createArray(start, end) {
      if (end - start > 0) {
        let lengthArray = end - start + 1;
        let arr = Array.from({ length: lengthArray }, (value, index) => start + index);
        return arr;
      } else {
        let lengthArray = start - end + 1;
        let arr = Array.from({ length: lengthArray }, (value, index) => start - index);
        return arr;
      }
    }
  }
}



// Task 2
function executeModule3Task2() {
  document.getElementById("modal").style.display = "block";
  document.querySelector(".modal__name").innerHTML = "Repeated sequence:";
  const container = document.querySelector(".modal__content");
  renderDomModalElements();

  function renderDomModalElements() {
    const listDomModalElement = [
      {
        element: "label",
        for: "input-value-a-module3-task2",
        classList: "",
        text: "Enter value a:",
      },
      {
        element: "input",
        id: "input-value-a-module3-task2",
        placeholder: "12",
        classList: "",
        type: "number",
      },
      {
        element: "label",
        for: "input-value-b-module3-task2",
        classList: "",
        text: "Enter value b:",
      },
      {
        element: "input",
        id: "input-value-b-module3-task2",
        placeholder: "26",
        classList: "",
        type: "number",
      },
      {
        element: "button",
        id: "execute-module3-task2",
        classList: "button--form-ex",
        text: "Execute",
        onclick: () => { onclickModalExecuteModule3Task2(); },
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

  function onclickModalExecuteModule3Task2() {
    renderFieldForResult();
    const fieldForResult = document.getElementById("result");
    const valueA = +document.getElementById("input-value-a-module3-task2").value;
    const valueB = +document.getElementById("input-value-b-module3-task2").value;

    if (!valueA || !valueB) {
      showAlert("error", "You have not entered the required data! \n Please enter the data.");
      return;
    }

    if (valueA > valueB) {
      showAlert("error", "Sorry! \nYou entered values a and b that don't satisfy the condition a < b. \nTry again!");
      return;
    }

    const sequence = createRepeatedSequence(valueA, valueB);
    fieldForResult.innerText = `Result: ${sequence}`;

    function createRepeatedSequence(valueFrom, valueTo) {
      const result = [];
      for (let from = valueFrom, times = 1; from <= valueTo; from++, times++) {
        result.push(...Array(times).fill(null).map(() => from));
      }
      return result;
    }
  }
}



// Task 3
function executeModule3Task3() {
  const STARTING_RANGE_VALUE = 1;
  const ENDING_RANGE_VALUE = 500;

  document.getElementById("modal").style.display = "block";
  document.querySelector(".modal__name").innerHTML = "Filling the array randomly:";
  const container = document.querySelector(".modal__content");
  renderDomModalElements();

  function renderDomModalElements() {
    const listDomModalElement = [
      {
        element: "label",
        for: "input-value-k-module3-task3",
        classList: "",
        text: "Enter value k:",
      },
      {
        element: "input",
        id: "input-value-k-module3-task3",
        placeholder: "12",
        classList: "",
        type: "number",
      },
      {
        element: "button",
        id: "execute-module3-task3",
        classList: "button--form-ex",
        text: "Execute",
        onclick: () => { onclickModalExecuteModule3Task3(); },
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

  function onclickModalExecuteModule3Task3() {
    renderFieldForResult();
    const fieldForResult = document.getElementById("result");
    const lengthOfArray = +document.getElementById("input-value-k-module3-task3").value;

    if (!lengthOfArray) {
      showAlert("error", "You have not entered the required data! \n Please enter the data.");
      return;
    }

    const randomArray = randArray(lengthOfArray);
    fieldForResult.innerText = `Result: [ ${randomArray} ]`;

    function getRandomNumberInRange(start, end) {
      return Math.floor(start + Math.random() * (end - start) + 1);
    }

    function randArray(k) {
      return Array(k).fill(null).map((item) =>
        item = getRandomNumberInRange(STARTING_RANGE_VALUE, ENDING_RANGE_VALUE));
    }
  }
}



// Task 4
function executeModule3Task4() {
  document.getElementById("modal").style.display = "block";
  document.querySelector(".modal__name").innerHTML = "No repeats:";
  const container = document.querySelector(".modal__content");
  renderDomModalElements();

  function renderDomModalElements() {
    const listDomModalElement = [
      {
        element: "label",
        for: "input-array-module3-task4",
        classList: "",
        text: "Enter your array:",
      },
      {
        element: "input",
        id: "input-array-module3-task4",
        placeholder: "[ 5, 3, 4, 6, 6, 7, 3 ]",
        classList: "",
        type: "text",
      },
      {
        element: "button",
        id: "execute-module3-task4",
        classList: "button--form-ex",
        text: "Execute",
        onclick: () => { onclickModalExecuteModule3Task4(); },
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

  function onclickModalExecuteModule3Task4() {
    renderFieldForResult();
    const fieldForResult = document.getElementById("result");
    const initialArray = document.getElementById("input-array-module3-task4").value;

    if (+initialArray === 0) {
      showAlert("error", "You haven't entered the required data! \nTry again.");
      return;
    }

    const parsedInitialArray = parseInputToArray(initialArray);
    //const parsedInitialArray = [5, 3, 4, 5, 6, 7, 3];
    const finalArray = compact(parsedInitialArray);
    fieldForResult.innerText = `Initial array: \n[ ${parsedInitialArray} ] \nNew array without repeats: \n[ ${finalArray} ]`;
    console.log(finalArray);

    function parseInputToArray(inputArray) {
      const REGEXP_ANYTHING_BUT_A_WHITESPACE = /\S/;
      let newArray = inputArray.split(/[.,; ]/);
      newArray = newArray.filter((element) => {
        return REGEXP_ANYTHING_BUT_A_WHITESPACE.test(element);
      });
      return newArray;
    }

    function compact(array) {
      let withoutRepeatArray = array.filter((element, index) => {
        return array.indexOf(element) === index;
      });
      return withoutRepeatArray;
    }
  }
}



// Task 5
function executeModule3Task5() {
  document.getElementById("modal").style.display = "block";
  document.querySelector(".modal__name").innerHTML = "New sorted arrays:";
  const container = document.querySelector(".modal__content");
  renderDomModalElements();

  function renderDomModalElements() {
    const listDomModalElement = [
      {
        element: "label",
        for: "input-array-module3-task5",
        classList: "",
        text: "Enter your JSON array:",
      },
      {
        element: "input",
        id: "input-array-module3-task5",
        placeholder: `[5, "Limit", 12, "a", "3", 99, 2, [2, 4, 3, "33", "a", "text"], "strong"]`,
        classList: "",
        type: "text",
      },
      {
        element: "button",
        id: "execute-module3-task5",
        classList: "button--form-ex",
        text: "Execute",
        onclick: () => { onclickModalExecuteModule3Task5(); },
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

  function onclickModalExecuteModule3Task5() {
    renderFieldForResult();
    const fieldForResult = document.getElementById("result");
    const inputJsonArray = document.getElementById("input-array-module3-task5").value;
    // const inputJsonArray = '[5, "Limit", 12, "a", "3", 99, 2, [2, 4, 3, "33", "a", "text"], "strong", "broun"]';

    try {
      const parsedJsonArray = JSON.parse(inputJsonArray);
      const arraysGroupedByType = displayArraysGroupedByType(parsedJsonArray);
      fieldForResult.innerHTML = `New grouped arrays: <br> [ ${arraysGroupedByType} ]`;
    } catch (error) {
      console.warn(error);
      showAlert("error", "The entered array is not in JSON format. \nTry again!");
    }


    function displayArraysGroupedByType(arrayJson) {
      const objForGroupedArrays = {};

      function collect(arr) {
        for (const elem of arr) {
          if (Array.isArray(elem)) {
            collect(elem);
          } else {
            const elemType = typeof elem;
            objForGroupedArrays[elemType] = objForGroupedArrays[elemType] ?
              [...objForGroupedArrays[elemType], elem] : [elem];
          }
        }
      }
      collect(arrayJson);

      let result = "";
      for (const arr in objForGroupedArrays) {
        result += `<code>${JSON.stringify(objForGroupedArrays[arr])}</code>&comma;`;
      }
      return result;
    }
  }
}



// Task 6
function executeModule3Task6() {
  document.getElementById("modal").style.display = "block";
  document.querySelector(".modal__name").innerHTML = "Calculation:";
  const container = document.querySelector(".modal__content");
  renderDomModalElements();
  renderOptionsForSelect(document.querySelector(".select-module3-task6"));

  function renderDomModalElements() {
    const listDomModalElement = [
      {
        element: "label",
        for: "input-value-a-module3-task6",
        classList: "",
        text: "Enter a value for the number a:",
      },
      {
        element: "input",
        id: "input-value-a-module3-task6",
        placeholder: "268",
        classList: "",
        type: "number",
      },
      {
        element: "label",
        for: "input-value-b-module3-task6",
        classList: "",
        text: "Enter a value for the number b:",
      },
      {
        element: "input",
        id: "input-value-b-module3-task6",
        placeholder: "52",
        classList: "",
        type: "number",
      },
      {
        element: "label",
        for: "choose-op-module3-task6",
        classList: "",
        text: "Choose an arithmetic operation:",
      },
      {
        element: "select",
        id: "choose-op-module3-task6",
        classList: "select-module3-task6",
      },
      {
        element: "button",
        id: "execute-module3-task6",
        classList: "button--form-ex",
        text: "Execute",
        onclick: () => { onclickModalExecuteModule3Task6(); },
      },
    ];
    showFormElements(listDomModalElement, container);
  }

  function renderOptionsForSelect(containerSelect) {
    const listOptionsForSelect = [
      {
        element: "option",
        id: "op-subtraction-module3-task6",
        classList: "",
        value: "subtraction",
        text: "&#8722; subtraction",
      },
      {
        element: "option",
        id: "op-product-module3-task6",
        classList: "",
        value: "product",
        text: "&#215; product",
      },
      {
        element: "option",
        id: "op-division-module3-task6",
        classList: "",
        value: "division",
        text: "&#247; division",
      },
      {
        element: "option",
        id: "op-addition-module3-task6",
        classList: "",
        value: "division",
        text: "&#43; addition",
      },
    ];
    showFormElements(listOptionsForSelect, containerSelect);
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

  function onclickModalExecuteModule3Task6() {
    renderFieldForResult();
    const fieldForResult = document.getElementById("result");
    const selectedOperation = document.getElementById("choose-op-module3-task6").selectedIndex + 1;
    const valueA = +document.getElementById("input-value-a-module3-task6").value;
    const valueB = +document.getElementById("input-value-b-module3-task6").value;

    if (!valueA || !valueB) {
      showAlert("error", "You have not entered the required data! \n Please enter the data.");
      return;
    }

    const result = calc(valueA, valueB, selectedOperation);
    // console.log(calc(10, 3, 1));
    fieldForResult.innerText = showProperResultMessage(valueA, valueB, selectedOperation, result);


    function showProperResultMessage(a, b, operation, result) {
      const message = operation == 1 ? `Result: ${a} - ${b} = ${result}` :
        operation === 2 ? `Result: ${a} * ${b} = ${result}` :
          operation === 3 ? `Result: ${a} / ${b} = ${result}` :
            `Result: ${a} + ${b} = ${result}`;
      return message;
    }

    function calc(a, b, op) {
      switch (op) {
        case 1: return a - b; break;
        case 2: return a * b; break;
        case 3: return a % b ? (a / b).toFixed(5) : a / b; break;
        case 4: return a + b; break;
      }
    }
  }
}



// Task 7
function executeModule3Task7() {
  document.getElementById("modal").style.display = "block";
  document.querySelector(".modal__name").innerHTML = "Find uniqueness:";
  const container = document.querySelector(".modal__content");
  renderDomModalElements();

  function renderDomModalElements() {
    const listDomModalElement = [
      {
        element: "label",
        for: "input-array-module3-task7",
        classList: "",
        text: "Enter your array to check:",
      },
      {
        element: "input",
        id: "input-array-module3-task7",
        placeholder: "[ 1, 2, 3, 5, 3 ]",
        classList: "",
        type: "text",
      },
      {
        element: "button",
        id: "execute-module3-task7",
        classList: "button--form-ex",
        text: "Execute",
        onclick: () => { onclickModalExecuteModule3Task7(); },
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

  function onclickModalExecuteModule3Task7() {
    renderFieldForResult();
    const fieldForResult = document.getElementById("result");
    const inputArray = document.getElementById("input-array-module3-task7").value;

    if (!inputArray || +inputArray === 0) {
      showAlert("error", "The entered array is empty! \nPlease enter the array elements again.");
      return;
    }

    const parsedInputArray = parseInputToArray(inputArray);
    const isUniqueArray = findUnique(parsedInputArray);
    fieldForResult.innerText = `Original array:[ ${parsedInputArray}] \n Result: ${isUniqueArray}`;
    // console.log(findUnique([1, 2, 3, 5, 3]));
    // console.log(findUnique([1, 2, 3, 5, 11]));


    function findUnique(arr) {
      return arr.length === new Set(arr).size;
      // -=-=-=-=-=-=- another way -=-=-=-=-=-=-
      // return !arr.some((elem, index) => arr.indexOf(elem, index + 1) > 0);
    }

    function parseInputToArray(inputArray) {
      const REGEXP_ANYTHING_BUT_A_WHITESPACE = /\S/;
      let newArray = inputArray.split(/[.,; ]/);
      newArray = newArray.filter((element) => {
        return REGEXP_ANYTHING_BUT_A_WHITESPACE.test(element);
      });
      return newArray;
    }
  }
}



// Task 8
function executeModule3Task8() {
  document.getElementById("modal").style.display = "block";
  document.querySelector(".modal__name").innerHTML = "&#10025; &#10025; &#10025; Match or not match?";
  const container = document.querySelector(".modal__content");
  renderDomModalElements();

  function renderDomModalElements() {
    const listDomModalElement = [
      {
        element: "label",
        for: "input-first-string-module3-task8",
        classList: "",
        text: "Enter a first string to check:",
      },
      {
        element: "input",
        id: "input-first-string-module3-task8",
        placeholder: "pass_for_Tom",
        classList: "",
        type: "text",
      },
      {
        element: "label",
        for: "input-second-string-module3-task8",
        classList: "",
        text: "Enter a second string to check:",
      },
      {
        element: "input",
        id: "input-second-string-module3-task8",
        placeholder: "pass_for_tom",
        classList: "",
        type: "text",
      },
      {
        element: "button",
        id: "execute-module3-task8",
        classList: "button--form-ex",
        text: "Execute",
        onclick: () => { onclickModalExecuteModule3Task8(); },
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

  function onclickModalExecuteModule3Task8() {
    renderFieldForResult();
    const fieldForResult = document.getElementById("result");
    const inputFirstString = document.getElementById("input-first-string-module3-task8").value;
    const inputSecondString = document.getElementById("input-second-string-module3-task8").value;

    if (!inputFirstString || !inputSecondString || +inputFirstString === 0 || +inputSecondString === 0) {
      showAlert("error", "You have not entered the required data! \n Please enter the data.");
      return;
    }

    const isMatch = create(inputFirstString);
    isMatch(inputFirstString);
    isMatch(inputSecondString);

    fieldForResult.innerHTML = `Result: <br>"${inputFirstString}" and "${inputFirstString}" &#8594; ${isMatch(inputFirstString)}  
                                        <br>"${inputFirstString}" and "${inputSecondString}" &#8594; ${isMatch(inputSecondString)}`;


    function create(firstString) {
      return function (text) {
        return firstString === text;
      }
    }
  }
}