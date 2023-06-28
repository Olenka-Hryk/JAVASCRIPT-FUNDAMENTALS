// Task 1
function executeModule2Task1() {
  const a = +enterValue("a");
  const b = +enterValue("b");
  const c = +enterValue("c");

  (a < b && b < c) ? outputResult(true, a, b, c) : outputResult(false, a, b, c);

  function enterValue(name) {
    let value = prompt(`Enter a value for variable ${name}:`, `${name}`);
    while (!isNumberSet(value)) {
      value = prompt(`It's not a number! Be careful!\nEnter an integer value for variable ${name}:`);
    }
    return value;
  }

  function outputResult(isTruth, valueA, valueB, valueC) {
    alert(`The expression (a < b < c) is ${isTruth} for such inputs:
    a = ${valueA}; b = ${valueB}; c = ${valueC}.  ${valueA} < ${valueB} < ${valueC} is ${isTruth}!`)
  }

  function isNumberSet(data) {
    return data !== null && !!String(data).trim() && !isNaN(data);
  }
}



// Task 2
function executeModule2Task2() {
  let x = 1;
  let y = 2;

  let res1 = "" + x + y;             //OR ------   String(x) + y; 
  console.log(res1);                 // ""12""
  console.log(typeof res1);          // ""string""

  let res2 = !!x + String(y);        //OR ------   !!x + "" + y;
  console.log(res2);                 // ""true2""
  console.log(typeof res2);          // ""string""

  let res3 = !!(x + y);              //OR ------   Boolean(x + y);
  console.log(res3);                 // true
  console.log(typeof res3);          // ""boolean""

  let res4 = Number("x + y");        //OR ------   "x + y" / 0; 
  console.log(res4);                 // NaN
  console.log(typeof res4);          // ""number""

}



// Task 3
function executeModule2Task3() {
  const REGEXP_NUMBER = /^[0-9-]+$/;

  let ageUser = prompt("Hello! Enter your age:");
  while (!isAgeSet(ageUser)) {
    ageUser = prompt(`It's not a number! Be careful!\nEnter an integer value your age:`);
  }
  ageUser = +ageUser;

  let isAdult = ageUser < 0 ? "Were you born in the time of the dinosaurs? :) \nYour specified age mustn't be a negative number!" :
    ageUser < 18 ? "You are still toooo young!" :
      ageUser >= 18 && ageUser < 100 ? "You have reached the age of majority!" :
        "Oh! This is such a respectable age! Tell me the secret!";

  alert(isAdult);

  function isAgeSet(age) {
    return !isNaN(age) && age && REGEXP_NUMBER.test(age);
  }
}



// Task 4
function executeModule2Task4() {
  const REGEXP_ONLY_NUMBER = /^[0-9]+$/;
  const aSideTri = +enterSideTriangle("A");
  const bSideTri = +enterSideTriangle("B");
  const cSideTri = +enterSideTriangle("C");

  const isCorrectSide = isExistTriangle(aSideTri, bSideTri, cSideTri);
  if (isCorrectSide) {
    console.log(findAreaTriangle(aSideTri, bSideTri, cSideTri));
    console.log(isRightTriangle(aSideTri, bSideTri, cSideTri));
  } else
    alert(`Incorrect data! \nSuch a triangle with sides: A = ${aSideTri}, B = ${bSideTri}, C = ${cSideTri}  doesn't exist!
  Enter other data to satisfy the following conditions: \n a+b>c, a+c>b, b+c>a`)


  function enterSideTriangle(side) {
    let value = prompt(`Enter a value for the ${side} side of the triangle:`, `${side}`);
    while (!REGEXP_ONLY_NUMBER.test(value)) {
      value = prompt(`Incorrect data! \nEnter an integer value for the side ${side} of the triangle:`);
    }
    return value;
  }

  function isExistTriangle(sideA, sideB, sideC) {
    if (sideA + sideB > sideC && sideA + sideC > sideB && sideB + sideC > sideA) {
      return true;
    } else return false;
  }

  function isRightTriangle(sideA, sideB, sideC) {
    let condition1 = sideA ** 2 === sideB ** 2 + sideC ** 2;
    let condition2 = sideB ** 2 === sideA ** 2 + sideC ** 2;
    let condition3 = sideC ** 2 === sideA ** 2 + sideB ** 2;

    if (condition1 || condition2 || condition3) {
      return "This triangle is a right triangle";
    } else
      return "This triangle isn't a right triangle";
  }

  function findAreaTriangle(sideA, sideB, sideC) {
    let halfPerimeter = (sideA + sideB + sideC) / 2;
    let areaOfTriangle = (halfPerimeter * (halfPerimeter - sideA) * (halfPerimeter - sideB) * (halfPerimeter - sideC)) ** (0.5);
    let accuracyOfAreaTri = areaOfTriangle.toFixed(3);
    return `Area of a triangle with such sides: A = ${sideA}, B = ${sideB}, C = ${sideC} is equal -- ${accuracyOfAreaTri}`;
  }
}



// Task 5
function executeModule2Task5() {
  const currentHour = new Date().getHours();

  showGreetingsFirstWay(currentHour);
  showGreetingsSecondWay(currentHour);

  function showGreetingsFirstWay(hour) {
    if (hour >= 0 && hour < 5) { alert("Good night!"); }
    else if (hour >= 5 && hour < 11) { alert("Good morning!"); }
    else if (hour >= 11 && hour < 17) { alert("Good day!"); }
    else if (hour >= 17 && hour <= 23) { alert("Good evening!"); }
  }

  function showGreetingsSecondWay(hour) {
    let greeting = hour >= 0 && hour < 5 ? "Good night!" :
      hour >= 5 && hour < 11 ? "Good morning!" :
        hour >= 11 && hour < 17 ? "Good day!" :
          "Good evening!";
    alert(greeting);
  }
}



// Task 6
function executeModule2Task6() {
  const REGEXP_ANYTHING_BUT_A_WHITESPACE = /\S/;
  const REGEXP_LETTERS = /[A-Za-z]/;
  const REGEXP_NUMBERS = /\d/g;

  document.getElementById("modal").style.display = "block";
  document.querySelector(".modal__name").innerHTML = "The most frequent number in the array:";
  const container = document.querySelector(".modal__content");
  renderDomModalElements();

  function renderDomModalElements() {
    const listDomModalElement = [
      {
        element: "label",
        for: "input-array-module2-task6",
        classList: "",
        text: "Enter an array of numbers:"
      },
      {
        element: "input",
        id: "input-array-module2-task6",
        placeholder: "[4, 5, 2, 1, 6, 5, 3, 5, 2, 5]",
        classList: "",
        type: "text"
      },
      {
        element: "p",
        id: "input-array-parsed-module2-task6",
        classList: "form__result--task",
        text: "",
      },
      {
        element: "button",
        id: "execute-module2-task6",
        classList: "button--form-ex",
        text: "Execute",
        onclick: () => { onclickModalExecuteModule2Task6() }
      }
    ];
    showFormElements(listDomModalElement, container);
  }

  function renderFieldForResult() {
    document.querySelectorAll("#result").forEach(e => e.remove());
    const resultDomElement = [
      {
        element: "p",
        id: "result",
        classList: "",
        text: ""
      },
    ];
    showFormElements(resultDomElement, container);
  }

  function onclickModalExecuteModule2Task6() {
    renderFieldForResult();
    const fieldForResult = document.getElementById("result");
    const fieldForParsedInputArray = document.getElementById("input-array-parsed-module2-task6");

    const inputArray = document.getElementById("input-array-module2-task6").value;
    if (!isCorrectInput(inputArray)) {
      return;
    }

    // let arr = [4, 5, 2, 1, 6, 5, 3, 5, 2, 5];
    let arr = parseInputToArrayOfNumbers(inputArray, fieldForParsedInputArray);
    const frequentElm = findFrequencyElementOfArray(arr);

    const entries = Object.entries(frequentElm);
    let maxEntry = entries[0];
    for (const entry of entries) {
      if (entry[1] > maxEntry[1]) maxEntry = entry;
    }

    if (maxEntry[1] === 1) {
      fieldForResult.innerText += "Result: all elements of your input array are unique!";
    } else {
      let data = [maxEntry[0]];
      arr = arr.filter((elem) => elem !== +maxEntry[0]);

      fieldForResult.innerText += `Result: most frequent element is ${data};\n New array: [ ${arr} ]`;
    }


    function isCorrectInput(array) {
      if (!array || +array === 0) {
        showAlert("error", "Your array is empty! You did not enter an array of elements! \n Please enter the data.");
        return false;
      } else
        if (!array.match(REGEXP_NUMBERS)) {
          showAlert("error", "Your input array consists only of letters! \n Please try entering the array elements in numeric format.");
          return false;
        } else
          return true;
    }

    function parseInputToArrayOfNumbers(inputArray, placeForOutputParsedArray) {
      let newArr = inputArray.split(/[.,; ]/);
      if (newArr.some(e => REGEXP_LETTERS.test(e))) {
        showAlert("warning", "WARNING:\nYour input array has some letters! I will remove them!");
        newArr = newArr.filter((element) => {
          return !REGEXP_LETTERS.test(element) && REGEXP_ANYTHING_BUT_A_WHITESPACE.test(element);
        });
        placeForOutputParsedArray.innerText = `Original array: [${newArr}]\n`;
      } else {
        newArr = newArr.filter((element) => {
          return REGEXP_ANYTHING_BUT_A_WHITESPACE.test(element);
        });
      }
      const finalArr = newArr.map(Number);
      return finalArr;
    }

    function findFrequencyElementOfArray(array) {
      const frequencyElement = array.reduce((acc, elem) => {
        acc[elem] = !acc[elem] ? 1 : acc[elem] + 1;
        return acc;
      }, {});
      return frequencyElement;
    }
  }
}



// Task 7
function executeModule2Task7() {
  document.getElementById("modal").style.display = "block";
  document.querySelector(".modal__name").innerHTML = "&#10025; &#10025; &#10025; Vasya Vasylyok";
  const container = document.querySelector(".modal__content");
  renderListTask();

  function renderListTask() {
    const listDomTaskElement = [
      {
        element: "button",
        id: "task-num-line-code-module2-task7",
        classList: "button--form-tsk",
        text: "Required number of lines of code",
        onclick: () => { renderTaskLineCode() }
      },
      {
        element: "button",
        id: "task-num-delays-module2-task7",
        classList: "button--form-tsk",
        text: "Permissible number of delays",
        onclick: () => { renderTaskDelays() }
      },
      {
        element: "button",
        id: "task-income-module2-task7",
        classList: "button--form-tsk",
        text: "Estimated income",
        onclick: () => { renderTaskIncome() }
      }
    ];
    showFormElements(listDomTaskElement, container);
  }

  function renderTaskLineCode() {
    clearDomForModal();
    document.getElementById("task-num-line-code-module2-task7").classList = "button button--form-tsk button--form-tsk-select";
    const listDomElement = [
      {
        element: "label",
        for: "income-desired-module2-task7",
        classList: "",
        text: "Desired income:"
      },
      {
        element: "input",
        id: "income-desired-module2-task7",
        placeholder: "2000$",
        classList: "",
        type: "number"
      },
      {
        element: "label",
        for: "delays-module2-task7",
        classList: "",
        text: "The number of delays:"
      },
      {
        element: "input",
        id: "delays-module2-task7",
        placeholder: "3",
        classList: "",
        type: "number"
      },
      {
        element: "button",
        id: "execute-task-income-module2-task7",
        classList: "button--form-ex",
        text: "Execute",
        onclick: () => { calculateReqNumLineCode() }
      }
    ];
    showFormElements(listDomElement, container);
  }

  function renderTaskDelays() {
    clearDomForModal();
    document.getElementById("task-num-delays-module2-task7").classList = "button button--form-tsk button--form-tsk-select";
    const listDomElement = [
      {
        element: "label",
        for: "lines-code-module2-task7",
        classList: "",
        text: "The number of lines of code:"
      },
      {
        element: "input",
        id: "lines-code-module2-task7",
        placeholder: "658",
        classList: "",
        type: "number"
      },
      {
        element: "label",
        for: "income-desired-module2-task7",
        classList: "",
        text: "Desired income:"
      },
      {
        element: "input",
        id: "income-desired-module2-task7",
        placeholder: "2000$",
        classList: "",
        type: "number"
      },
      {
        element: "button",
        id: "execute-task-delays-module2-task7",
        classList: "button--form-ex",
        text: "Execute",
        onclick: () => { calculateAllowDelays() }
      }
    ];
    showFormElements(listDomElement, container);
  }

  function renderTaskIncome() {
    clearDomForModal();
    document.getElementById("task-income-module2-task7").classList = "button button--form-tsk button--form-tsk-select";
    const listDomElement = [
      {
        element: "label",
        for: "lines-code-module2-task7",
        classList: "",
        text: "The number of lines of code:"
      },
      {
        element: "input",
        id: "lines-code-module2-task7",
        placeholder: "658",
        classList: "",
        type: "number"
      },
      {
        element: "label",
        for: "delays-module2-task7",
        classList: "",
        text: "The number of delays:"
      },
      {
        element: "input",
        id: "delays-module2-task7",
        placeholder: "4",
        classList: "",
        type: "number"
      },
      {
        element: "button",
        id: "execute-task-income-module2-task7",
        classList: "button--form-ex",
        text: "Execute",
        onclick: () => { calculateEstimatedIncome() }
      }
    ];
    showFormElements(listDomElement, container);
  }

  function renderFieldForResult() {
    document.querySelectorAll("#result").forEach(e => e.remove());
    const resultDomElement = [
      {
        element: "p",
        id: "result",
        classList: "",
        text: ""
      },
    ];
    showFormElements(resultDomElement, container);
  }

  function clearDomForModal() {
    container.innerHTML = "";
    renderListTask();
  }



  const OFFER_LINES_CODE = 100;
  const PRICE_PER_OFFER_LINES_CODE = 50;
  const OFFER_QUANTITY_DELAY = 3;
  const ALLOWED_DELAY_WITHOUT_FORFEIT = OFFER_QUANTITY_DELAY - 1;
  const FORFEIT_PER_OFFER_DELAY = 20;

  function calculateReqNumLineCode() {
    renderFieldForResult();
    const fieldForResult = document.getElementById("result");
    const desiredIncome = +document.getElementById("income-desired-module2-task7").value;
    const numberOfDelays = +document.getElementById("delays-module2-task7").value;

    if (!desiredIncome || !numberOfDelays) {
      showAlert("error", "You have not entered the required data! \n Please enter the data.");
      return;
    }

    const sumOfWithdraw = Math.trunc(numberOfDelays / OFFER_QUANTITY_DELAY) * FORFEIT_PER_OFFER_DELAY;
    const numOfReqLineCode = Math.ceil((desiredIncome + sumOfWithdraw) / PRICE_PER_OFFER_LINES_CODE) * OFFER_LINES_CODE;
    fieldForResult.innerText = "Result: " + numOfReqLineCode + "  lines code";
  }

  function calculateAllowDelays() {
    renderFieldForResult();
    const fieldForResult = document.getElementById("result");
    const numberOfLinesCode = +document.getElementById("lines-code-module2-task7").value;
    const desiredIncome = +document.getElementById("income-desired-module2-task7").value;

    if (!numberOfLinesCode || !desiredIncome) {
      showAlert("error", "You have not entered the required data! \n Please enter the data.");
      return;
    }

    const sumReceivedFromLineCode = Math.trunc(numberOfLinesCode / OFFER_LINES_CODE) * PRICE_PER_OFFER_LINES_CODE;
    const numOfAllowedDelay = Math.trunc((sumReceivedFromLineCode - desiredIncome) / FORFEIT_PER_OFFER_DELAY) + ALLOWED_DELAY_WITHOUT_FORFEIT;
    numOfAllowedDelay > 0 ? fieldForResult.innerText = "Result: " + numOfAllowedDelay + "  delays" :
      fieldForResult.innerText = "Result: not allowed delays!";
  }

  function calculateEstimatedIncome() {
    renderFieldForResult();
    const fieldForResult = document.getElementById("result");
    const numberOfLinesCode = +document.getElementById("lines-code-module2-task7").value;
    const numberOfDelays = +document.getElementById("delays-module2-task7").value;

    if (!numberOfLinesCode || !numberOfDelays) {
      showAlert("error", "You have not entered the required data! \n Please enter the data.");
      return;
    }

    const sumReceivedFromLineCode = Math.trunc(numberOfLinesCode / OFFER_LINES_CODE) * PRICE_PER_OFFER_LINES_CODE;
    const sumOfWithdraw = Math.trunc(numberOfDelays / OFFER_QUANTITY_DELAY) * FORFEIT_PER_OFFER_DELAY;
    const desiredIncome = sumReceivedFromLineCode - sumOfWithdraw;
    desiredIncome > 0 ? fieldForResult.innerText = "Result: " + desiredIncome + "  $" :
      fieldForResult.innerText = "Result: no work - no money!";
  }
}