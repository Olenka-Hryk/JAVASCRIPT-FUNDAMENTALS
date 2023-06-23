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
        for: "initial-value",
        classList: "",
        text: "Enter initial value:"
      },
      {
        element: "input",
        id: "initial-value",
        placeholder: "4",
        classList: "",
        type: "number"
      },
      {
        element: "label",
        for: "final-value",
        classList: "",
        text: "Enter final value:"
      },
      {
        element: "input",
        id: "final-value",
        placeholder: "10",
        classList: "",
        type: "number"
      },
      {
        element: "button",
        id: "execute-module3-task1",
        classList: "button--form-ex",
        text: "Execute",
        onclick: () => { onclickModalExecuteModule3Task1() }
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

  function onclickModalExecuteModule3Task1() {
    renderFieldForResult();
    const fieldForResult = document.getElementById("result");
    let initialValue = +document.getElementById("initial-value").value;
    let finalValue = +document.getElementById("final-value").value;

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
        let arr = Array.from({ length: lengthArray }, (value, index) => start - index)
        return arr;
      }
    }

  }
}



// Task 2
function executeModule3Task2() {
  document.getElementById("modal").style.display = "block";
  document.querySelector(".modal__name").innerHTML = "All integers:";
  const container = document.querySelector(".modal__content");
  renderDomModalElements();

  function renderDomModalElements() {
    const listDomModalElement = [
      {
        element: "label",
        for: "input-value-a",
        classList: "",
        text: "Enter value a:"
      },
      {
        element: "input",
        id: "input-value-a",
        placeholder: "12",
        classList: "",
        type: "number"
      },
      {
        element: "label",
        for: "input-value-b",
        classList: "",
        text: "Enter value b:"
      },
      {
        element: "input",
        id: "input-value-b",
        placeholder: "26",
        classList: "",
        type: "number"
      },
      {
        element: "button",
        id: "execute-module3-task2",
        classList: "button--form-ex",
        text: "Execute",
        onclick: () => { onclickModalExecuteModule3Task2() }
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

  function onclickModalExecuteModule3Task2() {
    renderFieldForResult();
    const fieldForResult = document.getElementById("result");
    let valueA = +document.getElementById("input-value-a").value;
    let valueB = +document.getElementById("input-value-b").value;

    if (valueA > valueB) {
      alert("Sorry! \nYou entered values a and b that don't satisfy the condition a < b. \nTry again!");
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
        for: "input-value-k",
        classList: "",
        text: "Enter value k:"
      },
      {
        element: "input",
        id: "input-value-k",
        placeholder: "12",
        classList: "",
        type: "number"
      },
      {
        element: "button",
        id: "execute-module3-task3",
        classList: "button--form-ex",
        text: "Execute",
        onclick: () => { onclickModalExecuteModule3Task3() }
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

  function onclickModalExecuteModule3Task3() {
    renderFieldForResult();
    const fieldForResult = document.getElementById("result");
    let lengthOfArray = +document.getElementById("input-value-k").value;

    const randomArray = randArray(lengthOfArray);
    fieldForResult.innerText = `Result: [ ${randomArray} ]`;

    function getRandomNumberInRange(start, end) {
      return Math.floor(start + Math.random() * (end - start) + 1);
    }

    function randArray(k) {
      return Array(k).fill(null).map(item => item = getRandomNumberInRange(STARTING_RANGE_VALUE, ENDING_RANGE_VALUE));
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
        for: "input-arr",
        classList: "",
        text: "Enter your array:"
      },
      {
        element: "input",
        id: "input-arr",
        placeholder: "[ 5, 3, 4, 6, 6, 7, 3 ]",
        classList: "",
        type: "text"
      },
      {
        element: "button",
        id: "execute-module3-task4",
        classList: "button--form-ex",
        text: "Execute",
        onclick: () => { onclickModalExecuteModule3Task4() }
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

  function onclickModalExecuteModule3Task4() {
    renderFieldForResult();
    const fieldForResult = document.getElementById("result");
    let initialArray = document.getElementById("input-arr").value;

   

  }
}

// Task 5
function executeModule3Task5() {
  alert("The script will be here soooooon");
}

// Task 6
function executeModule3Task6() {
  alert("The script will be here soooooon");
}

// Task 7
function executeModule3Task7() {
  alert("The script will be here soooooon");
}

// Task 8
function executeModule3Task8() {
  alert("The script will be here soooooon");
}