// Task 1
function executeModule11Task1() {
  document.getElementById("modal").style.display = "block";
  document.querySelector(".modal__name").innerHTML = "Get promise:";
  const container = document.querySelector(".modal__content");
  renderDomModalElements();

  function renderDomModalElements() {
    const listDomModalElement = [
      {
        element: "label",
        for: "input-message-module11-task1",
        classList: "",
        text: "Enter a message:",
      },
      {
        element: "textarea",
        id: "input-message-module11-task1",
        rows: "10",
        cols: "50",
        placeholder: "Hello! Hello!",
        classList: "textarea--form",
      },
      {
        element: "label",
        for: "input-delay-module11-task1",
        classList: "",
        text: "Enter a delay (ms):",
      },
      {
        element: "input",
        id: "input-delay-module11-task1",
        placeholder: "2000",
        classList: "",
        type: "number",
      },
      {
        element: "button",
        id: "execute-module11-task1",
        classList: "button--form-ex",
        text: "Execute",
        onclick: () => {
          onclickModalExecuteModule11Task1();
        },
      }
    ];
    showFormElements(listDomModalElement, container);
  }

  function onclickModalExecuteModule11Task1() {
    const enteredMessage = document.getElementById("input-message-module11-task1").value;
    const enteredDelay = document.getElementById("input-delay-module11-task1").value;

    if (!enteredMessage || enteredMessage.trim().length === 0 || !enteredDelay || enteredDelay.trim().length === 0) {
      showAlert("error", "You haven't entered the required data! \nTry again.");
      return;
    }

    function getPromise(message, delay) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(message);
        }, delay);
      })
    }

    getPromise('test promise', 2000)
      .then(function (data) {
        console.log(data);
      });

    getPromise(enteredMessage, enteredDelay)
      .then(data => console.log(data));
  }
}



// Task 2
function executeModule11Task2() {
  document.getElementById("modal").style.display = "block";
  document.querySelector(".modal__name").innerHTML = "Return the product of the array elements:";
  const container = document.querySelector(".modal__content");
  renderDomModalElements();

  function renderDomModalElements() {
    const listDomModalElement = [
      {
        element: "label",
        for: "input-array-module11-task2",
        classList: "",
        text: "Enter an array of numbers:",
      },
      {
        element: "textarea",
        id: "input-array-module11-task2",
        rows: "10",
        cols: "50",
        placeholder: "[3, 4, 5]",
        classList: "textarea--form",
      },
      {
        element: "button",
        id: "execute-module11-task2",
        classList: "button--form-ex",
        text: "Execute",
        onclick: () => {
          onclickModalExecuteModule11Task2();
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

  function onclickModalExecuteModule11Task2() {
    const enteredArray = document.getElementById("input-array-module11-task2").value;
    if (!enteredArray || enteredArray.trim().length === 0) {
      showAlert("error", "You haven't entered the required data! \nTry again.");
      return;
    }
    renderFieldForResult();
    const fieldForResult = document.getElementById("result");

    const parsedArray = parseEnteredArray(enteredArray);
    calcArrProduct(parsedArray)
      .then(result => fieldForResult.innerHTML = `Result: ${result}`)
      .catch(error => showAlert("error", error));

    calcArrProduct([3, 4, 5])
      .then(result => console.log(result)); // 60
    calcArrProduct([5, 'user2', 7, 12])
      .then(result => console.log(result)); // 'Error! Incorrect array!'

    function calcArrProduct(arr) {
      return new Promise((resolve, reject) => {
        const numbers = arr.filter((elem) => /^\d+$/.test(elem));
        if (numbers.length !== arr.length) {
          reject("Error! Incorrect array!");
        }
        else {
          resolve(numbers.map(Number).reduce((acc, elem) => acc * elem, 1));
        }
      });
    }

    function parseEnteredArray(array) {
      return array.trim().split(/[[\[\].,;\s]/).filter((element) => {
        return /\S/.test(element);
      });
    }
  }
}



// Task 3
function executeModule11Task3() {
  const enteredNumber = new Promise(function (resolve, reject) {
    const number = prompt("Please enter the number:");
    if (!isNumeric(number)) {
      reject();
    } else {
      resolve(number);
    }
  })
    .catch(function (error) {
      return new Promise(function (resolve) {
        let number;
        do {
          number = prompt("Please enter the number:")
        } while (!isNumeric(number));
        resolve(number);
      });
    }).then(function (result) {
      console.log(result);
    });

  function isNumeric(number) {
    return !isNaN(parseFloat(number)) && isFinite(number);
  }
}