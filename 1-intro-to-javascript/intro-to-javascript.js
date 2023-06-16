// Task 1  --> script in HTML

// Task 2
function executeModule1Task2() {
        console.log("Hryk");
}


// Task 3
function executeModule1Task3() {
        let firstValue = "Hello";
        let secondValue = 404;
        outputVariables(firstValue, secondValue);
        firstValue = secondValue;
        outputVariables(firstValue, secondValue);

        function outputVariables(valueFirst, valueSecond) {
            setTimeout(function(){alert(`First value is: ${valueFirst} \nSecond value is: ${valueSecond}`)},100);
        }
}


// Task 4
function executeModule1Task4() {
        const dataTypes = {
            String: "SoftServe",
            Number: 2023,
            Boolean: true,
            Undefined: undefined,
            Null: null,
        };
        // console.log(typeof dataTypes.Undefined === 'undefined');
        console.log(dataTypes);
}


// Task 5
function executeModule1Task5() {
        legalAge();

        function legalAge() {
            let isAdult = confirm("Are you of legal age?");
            console.log(`${isAdult}: ${isAdult ? `The user is of legal age` : `The user is underage`}`);
        }
}


// Task 6
function executeModule1Task6() {
        const NAME = "Olenka";
        const SURNAME = "Hryk";
        const STUDY_GROUP = "PI-2014";
        const BIRTHDAY = 1997;
        const IS_MARRIED = true;
        let numberOfChildren = null;
        let address;

        const personalData = [
            NAME,
            SURNAME,
            STUDY_GROUP,
            BIRTHDAY,
            IS_MARRIED,
            numberOfChildren,
            address,
        ];

        typeOfVariables(personalData);
        console.warn(sortByType(personalData));

        function typeOfVariables(arr) {
            arr.forEach((element) => {
                console.warn(`Type of ${element} is ${typeof element}`);
            });
        }

        function sortByType(arr) {
            const typeWeight = {
                number: 1,
                boolean: 2,
                string: 3,
                undefined: 4,
                null: 5,
            };
            return arr.sort((a, b) => typeWeight[typeof a] - typeWeight[typeof b]);
        }
}


// Task 7
function executeModule1Task7() {
        let login = prompt("Enter your login:", "User");
        let email = prompt("Enter your email:", "usermail@gmail.com");
        let password = prompt("Enter your password:", "qwerty");

        alert(`Dear ${login}, your email is ${email}, your password is ${password}`);
}


// Task 8
function executeModule1Task8() {
        let secH = 3600;
        let secD = 24 * secH;
        let secM = 30 * secD;
        let isWantToCalculate = confirm(`The number of seconds in an hour is ${secH}, in a day - ${secD}, in a month - ${secM}.\nDo you want to calculate your own data?`);
        isWantToCalculate ? calculateSecInData(secH, secD, secM) : null;

        function calculateSecInData(secH, secD, secM) {
            let hour = prompt("Enter number of hours:", "3");
            let day = prompt("Enter number of days:", "2");
            let month = prompt("Enter number of month:", "4");

            alert(`The number of seconds in ${hour} hour is ${secH * hour}, in ${day} day - ${secD * day}, in ${month} month - ${secM * month}.`);
        }
}
