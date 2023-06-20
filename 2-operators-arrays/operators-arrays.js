// Task 1
function executeModule2Task1() {
  let a = +enterValue("a");
  let b = +enterValue("b");
  let c = +enterValue("c");

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
  let aSideTri = +enterSideTriangle("A");
  let bSideTri = +enterSideTriangle("B");
  let cSideTri = +enterSideTriangle("C");

  let isCorrectSide = isExistTriangle(aSideTri, bSideTri, cSideTri);
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
  let currentHour = new Date().getHours();

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
  alert("The script will be here soooooon");
}



// Task 7
function executeModule2Task7() {
  alert("The script will be here soooooon");
}
