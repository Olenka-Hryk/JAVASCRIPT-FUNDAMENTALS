const REGEXP_WHITESPACE = /\s/;
const REGEXP_ANYTHING_BUT_A_WHITESPACE = /\S/;
const REGEXP_NUMBERS = /^[0-9]+$/;
const REGEXP_LETTERS = /[A-Za-z]/;


// Task 1
function executeModule4Task1() {
  document.getElementById("modal").style.display = "block";
  document.querySelector(".modal__name").innerHTML = "The sum of two array elements:";
  const container = document.querySelector(".modal__content");
  renderDomModalElements();

  function renderDomModalElements() {
    const listDomModalElement = [
      {
        element: "label",
        for: "input-array-module4-task1",
        classList: "",
        text: "Enter array:",
      },
      {
        element: "input",
        id: "input-array-module4-task1",
        placeholder: "[ 4, 7, 3, 2, 8, 9, 1 ]",
        classList: "",
        type: "text",
      },
      {
        element: "label",
        for: "first-index-module4-task1",
        classList: "",
        text: "Enter the first sequence number of the array element:",
      },
      {
        element: "input",
        id: "first-index-module4-task1",
        placeholder: "3",
        classList: "",
        type: "text",
      },
      {
        element: "label",
        for: "second-index-module4-task1",
        classList: "",
        text: "Enter the second sequence number of the array element:",
      },
      {
        element: "input",
        id: "second-index-module4-task1",
        placeholder: "5",
        classList: "",
        type: "text",
      },
      {
        element: "button",
        id: "execute-module4-task1",
        classList: "button--form-ex",
        text: "Execute",
        onclick: () => { onclickModalExecuteModule4Task1(); },
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

  class InvalidArgsError extends Error {
    constructor(message, code) {
      super(message);
      this.name = 'InvalidArgsError';
      this.code = code;
    }
  }

  InvalidArgsError.INPUTS_UNDEFINED = 1;
  InvalidArgsError.WRONG_ARRAY = 2;
  InvalidArgsError.WRONG_INDEX = 3;
  InvalidArgsError.WRONG_RANGE = 4;


  function onclickModalExecuteModule4Task1() {
    renderFieldForResult();
    const fieldForResult = document.getElementById("result");
    const inputArray = document.getElementById("input-array-module4-task1").value;
    const indexFirst = document.getElementById("first-index-module4-task1").value;
    const indexSecond = document.getElementById("second-index-module4-task1").value;

    try {
      const sum = sumSliceArray(inputArray, indexFirst, indexSecond);
      fieldForResult.innerText = `Result: ${sum}`;
    } catch (error) {
      if (error instanceof InvalidArgsError) {
        switch (error.code) {
          case InvalidArgsError.INPUTS_UNDEFINED:
            showAlert("error", "You haven't entered the required data! \nPlease try entering the array data and values of the indices.");
            console.error(`ERROR code: ${error.code} -`, error);
            break;
          case InvalidArgsError.WRONG_ARRAY:
            showAlert("error", "You entered incorrect array data! \nPlease try entering the array data with only numeric elements.");
            console.error(`ERROR code: ${error.code} -`, error);
            break;
          case InvalidArgsError.WRONG_INDEX:
            showAlert("error", "Entered array indices are not numbers! \nPlease try entering indices in numerical format.");
            console.error(`ERROR code: ${error.code} -`, error);
            break;
          case InvalidArgsError.WRONG_RANGE:
            showAlert("error", "One of the indices or both are outside the range of the array! \nPlease try entering the correct indices in the range of the input array.");
            console.error(`ERROR code: ${error.code} -`, error);
            break;
        }
      }
    }


    function sumSliceArray(arr, first, second) {
      let parsedArr = parseInputToArray(arr);

      if (arr === "" && first === "" && second === "") {
        throw new InvalidArgsError('Input values are undefined', InvalidArgsError.INPUTS_UNDEFINED);
      }
      if (parsedArr.length === 0 || parsedArr.some(e => !REGEXP_NUMBERS.test(e))) {
        throw new InvalidArgsError('Wrong input array', InvalidArgsError.WRONG_ARRAY);
      }
      if (!REGEXP_NUMBERS.test(first) || !REGEXP_NUMBERS.test(second)) {
        throw new InvalidArgsError('Input indices are not numbers', InvalidArgsError.WRONG_INDEX);
      }
      if (first > parsedArr.length - 1 || second > parsedArr.length - 1) {
        throw new InvalidArgsError('Input indices are out of range', InvalidArgsError.WRONG_RANGE);
      }

      parsedArr = parsedArr.map(Number);
      const result = parsedArr[first] + parsedArr[second];
      return result;
    }

    function parseInputToArray(inputArray) {
      let newArray = inputArray.split(/[.,; ]/);
      newArray = newArray.filter((element) => {
        return REGEXP_ANYTHING_BUT_A_WHITESPACE.test(element);
      });
      return newArray;
    }
  }
}



// Task 2
function executeModule4Task2() {
  document.getElementById("modal").style.display = "block";
  document.querySelector(".modal__name").innerHTML = "Do you have access to watch the movie?";
  const container = document.querySelector(".modal__content");
  renderDomModalElements();

  function renderDomModalElements() {
    const listDomModalElement = [
      {
        element: "label",
        for: "user-name-module4-task2",
        classList: "",
        text: "Enter your name:",
      },
      {
        element: "input",
        id: "user-name-module4-task2",
        placeholder: "user",
        classList: "",
        type: "text",
      },
      {
        element: "label",
        for: "user-age-module4-task2",
        classList: "",
        text: "Enter your age:",
      },
      {
        element: "input",
        id: "user-age-module4-task2",
        placeholder: "26",
        classList: "",
        type: "text",
      },
      {
        element: "label",
        for: "user-status-module4-task2",
        classList: "",
        text: "Enter your status:",
      },
      {
        element: "input",
        id: "user-status-module4-task2",
        placeholder: "admin",
        classList: "",
        type: "text",
      },
      {
        element: "button",
        id: "execute-module4-task2",
        classList: "button--form-ex",
        text: "Execute",
        onclick: () => { onclickModalExecuteModule4Task2(); },
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

  class InvalidInputError extends Error {
    constructor(message) {
      super(message);
      this.name = 'InvalidInputError';
    }
  }

  function onclickModalExecuteModule4Task2() {
    renderFieldForResult();
    const fieldForResult = document.getElementById("result");

    try {
      const isAccessToMovie = checkAge();
      if (isAccessToMovie) {
        showAlert("success", "Success! \nYou have been granted viewing access! \nEnjoy viewing.")
        fieldForResult.innerText = "Summer Music Mix 2023 \n🌱 Best Of Vocals Deep House";
        const movieContainer = document.createElement("container-iframe");
        container.appendChild(movieContainer);
        const movie = document.createElement("iframe");
        movieContainer.appendChild(movie);
        movie.src = "https://www.youtube.com/embed/wSYkYX62r4g";
        movieContainer.className = "container-iframe";
        movie.className = "iframe-movie";
      }
    } catch (error) {
      if (error instanceof InvalidInputError) {
        showAlert("warning", "The age entered in a non-numeric format! \nTry again.");
        console.error(`${error.name}: ${error.message} \n\n ${error.stack}`);
      } else
        if (error instanceof RangeError) {
          showAlert("error", "The age of the user doesn't provide appropriate access!");
          console.error(`${error.name}: ${error.message} \n\n ${error.stack}`);
        } else
          if (error instanceof EvalError) {
            showAlert("error", "User status not found! \nPlease try to enter the user status again.");
            console.error(`${error.name}: ${error.message} \n\n ${error.stack}`);
          } else {
            showAlert("warning", "The field is empty! \nPlease enter your age.");
            console.error(`${error.name}: ${error.message} \n\n ${error.stack}`);
          }
    }

    function checkAge() {
      const userName = document.getElementById("user-name-module4-task2").value;
      const userAge = document.getElementById("user-age-module4-task2").value;
      const userStatus = document.getElementById("user-status-module4-task2").value;
      const ACCESS_STATUS_ADMIN = "admin";
      const ACCESS_STATUS_MODERATOR = "moderator";
      const ACCESS_STATUS_USER = "user";

      if (userName === "" || userAge === "" || userStatus === "") {
        throw new Error("Input values are undefined");
      }
      if (REGEXP_WHITESPACE.test(userAge) || !REGEXP_NUMBERS.test(userAge)) {
        throw new InvalidInputError("User age is not a number");
      }
      if (+userAge < 18 || +userAge > 70) {
        throw new RangeError("User age is not included in access range");
      }
      if (userStatus !== ACCESS_STATUS_ADMIN && userStatus !== ACCESS_STATUS_MODERATOR && userStatus !== ACCESS_STATUS_USER) {
        throw new EvalError("Unknown user status");
      }
      return true;
    }
  }
}



// Task 3
function executeModule4Task3() {
  document.getElementById("modal").style.display = "block";
  document.querySelector(".modal__name").innerHTML = "Find the area of the rectangle:";
  const container = document.querySelector(".modal__content");
  renderDomModalElements();

  function renderDomModalElements() {
    const listDomModalElement = [
      {
        element: "label",
        for: "width-of-rectangle-module4-task3",
        classList: "",
        text: "Enter the width of the rectangle:",
      },
      {
        element: "input",
        id: "width-of-rectangle-module4-task3",
        placeholder: "34 cm",
        classList: "",
        type: "text",
      },
      {
        element: "label",
        for: "height-of-rectangle-module4-task3",
        classList: "",
        text: "Enter the height of the rectangle:",
      },
      {
        element: "input",
        id: "height-of-rectangle-module4-task3",
        placeholder: "28 cm",
        classList: "",
        type: "text",
      },
      {
        element: "button",
        id: "execute-module4-task3",
        classList: "button--form-ex",
        text: "Execute",
        onclick: () => { onclickModalExecuteModule4Task3(); },
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

  class InvalidArgsError extends Error {
    constructor(message, code) {
      super(message);
      this.name = 'InvalidArgsError';
      this.code = code;
    }
  }

  InvalidArgsError.ARGS_UNDEFINED = 1;
  InvalidArgsError.ARGS_NAN = 2;
  InvalidArgsError.ARGS_WRONG = 3;

  function onclickModalExecuteModule4Task3() {
    renderFieldForResult();
    const fieldForResult = document.getElementById("result");
    const widthOfRectangle = document.getElementById("width-of-rectangle-module4-task3").value;
    const heightOfRectangle = document.getElementById("height-of-rectangle-module4-task3").value;

    try {
      const areaOfRectangle = calcRectangleArea(widthOfRectangle, heightOfRectangle);
      fieldForResult.innerText = `The area of the rectangle: ${areaOfRectangle}`;
    } catch (error) {
      if (error instanceof InvalidArgsError) {
        switch (error.code) {
          case InvalidArgsError.ARGS_UNDEFINED:
            showAlert("error", "You haven't entered the required data! \nPlease try entering values for the width and height of the rectangle.");
            console.error(`ERROR code: ${error.code} \n`, error);
            break;
          case InvalidArgsError.ARGS_NAN:
            showAlert("error", "You entered values are not numbers! \nPlease try entering the values in numerical format.");
            console.error(`ERROR code: ${error.code} \n`, error);
            break;
          case InvalidArgsError.ARGS_WRONG:
            showAlert("error", "You entered a zero value for the width or height of the rectangle! \nIn this case, it's not possible to find the correct area. \nPlease check the width and height values.");
            console.error(`ERROR code: ${error.code} \n`, error);
            break;
        }
      }
    }

    function calcRectangleArea(width, height) {
      if (width === "" || height === "") {
        throw new InvalidArgsError("Input values are undefined", InvalidArgsError.ARGS_UNDEFINED);
      }
      if (REGEXP_WHITESPACE.test(width) || !REGEXP_NUMBERS.test(width) || REGEXP_WHITESPACE.test(height) || !REGEXP_NUMBERS.test(height)) {
        throw new InvalidArgsError("Input values are not numbers", InvalidArgsError.ARGS_NAN);
      }
      if (+width === 0 || +height === 0) {
        throw new InvalidArgsError("Input values don't satisfy the condition", InvalidArgsError.ARGS_WRONG);
      }

      const area = width * height;
      return area;
    }
  }
}



// Task 4
function executeModule4Task4() {
  document.getElementById("modal").style.display = "block";
  document.querySelector(".modal__name").innerHTML = "Find month name:";
  const container = document.querySelector(".modal__content");
  renderDomModalElements();

  function renderDomModalElements() {
    const listDomModalElement = [
      {
        element: "label",
        for: "month-index-module4-task4",
        classList: "",
        text: "Enter the required sequence number of the month:",
      },
      {
        element: "input",
        id: "month-index-module4-task4",
        placeholder: "4",
        classList: "",
        type: "text",
      },
      {
        element: "button",
        id: "execute-module4-task4",
        classList: "button--form-ex",
        text: "Execute",
        onclick: () => { onclickModalExecuteModule4Task4(); },
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

  class MonthException extends Error {
    constructor(message) {
      super(message);
      this.name = 'MonthException';
    }
  }

  function onclickModalExecuteModule4Task4() {
    renderFieldForResult();
    const fieldForResult = document.getElementById("result");
    const indexMonth = document.getElementById("month-index-module4-task4").value;

    try {
      // console.log(showMonthName(5));
      // console.log(showMonthName(14));
      const month = showMonthName(indexMonth);
      fieldForResult.innerText = `The sequence number of month ${indexMonth} \nit's the same as  ${month}`;
      showAlert("success", `It's ${month}!`);
    } catch (error) {
      if (error instanceof MonthException) {
        showAlert("error", `${error.name}: \n ${error.message}`);
        console.error(`${error.name}: \n ${error.message}`);
      }
    }

    function showMonthName(month) {
      const listMonth = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

      if (month === "") {
        throw new MonthException("Month number is undefined");
      }
      if (REGEXP_WHITESPACE.test(month) || !REGEXP_NUMBERS.test(month)) {
        throw new MonthException("Month number is not a number");
      }
      if (month === 0 || month > 12) {
        throw new MonthException("Incorrect month number");
      }

      return listMonth[Number(month) - 1];
    }
  }
}



// Task 5
function executeModule4Task5() {
  document.getElementById("modal").style.display = "block";
  document.querySelector(".modal__name").innerHTML = "Show users ids:";
  const container = document.querySelector(".modal__content");
  renderDomModalElements();

  function renderDomModalElements() {
    const listDomModalElement = [
      {
        element: "label",
        for: "ids-array-module4-task5",
        classList: "",
        text: "Enter an array of user ids:",
      },
      {
        element: "input",
        id: "ids-array-module4-task5",
        placeholder: "[ 7, -12, 44, 22 ]",
        classList: "",
        type: "text",
      },
      {
        element: "button",
        id: "execute-module4-task5",
        classList: "button--form-ex",
        text: "Execute",
        onclick: () => { onclickModalExecuteModule4Task5(); },
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

  class FormValidationError extends Error {
    constructor(message) {
      super(message);
      this.name = 'FormValidationError';
    }
  }

  function onclickModalExecuteModule4Task5() {
    renderFieldForResult();
    const fieldForResult = document.getElementById("result");
    const usersIds = document.getElementById("ids-array-module4-task5").value;

    try {
      const parsedUsersIds = parseInputToArray(usersIds);
      const correctIds = JSON.stringify(showUsers(parsedUsersIds));
      // console.log(showUsers([7, -12, 44, 22]));
      fieldForResult.innerText = `${correctIds}`;
    } catch (error) {
      if (error instanceof FormValidationError) {
        showAlert("error", `${error.name}: \n ${error.message}`);
        console.error(`${error.name}: \n ${error.message}`);
      }
    }


    function showUser(id) {
      if (id < 0) throw new Error(`ID must not be negative: ${id}`);
      return { id };
    }

    function showUsers(ids) {
      return ids.map((id) => {
        try {
          return showUser(id);
        } catch (error) {
          showAlert("warning", `${error.name}:  ${error.message}`);
          console.error(`${error.name}:  ${error.message}`);
          return null;
        }
      }).filter((user) => user);
    }

    function parseInputToArray(inputArray) {
      if (inputArray === "")
        throw new FormValidationError("Array of the user ids is undefined");
      let newArray = inputArray.split(/[.,; ]/);
      newArray = newArray.filter((element) => {
        return REGEXP_ANYTHING_BUT_A_WHITESPACE.test(element);
      });
      if (newArray.length === 0 || newArray.some(e => REGEXP_LETTERS.test(e)))
        throw new FormValidationError("Array values are not numbers");
      newArray = newArray.map(Number);

      return newArray;
    }
  }
}