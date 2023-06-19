// Task 1  --> script in HTML

// Task 2
function executeModule1Task2() {
        console.log("Hryk");
}


// Task 3
function executeModule1Task3() {
        let firstValue = 404;
        let secondValue = "Hellooooo";
        outputVariables(firstValue, secondValue);
        firstValue = secondValue;
        outputVariables(firstValue, secondValue);

        function outputVariables(valueFirst, valueSecond) {
            alert(`First value is: ${valueFirst} \nSecond value is: ${valueSecond}`);
        }
}


// Task 4
function executeModule1Task4() {
    let imNotExist;
        const dataTypes = {
            String: "SoftServe",
            Number: 2023,
            Boolean: true,
            Undefined: imNotExist,
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
        const REGEXP_LETTER_NUMBER = /^[a-zA-Z\d]+$/;
        const REGEXP_EMAIL = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;

        let login = prompt("Enter your login:", "User");
        login = findAnonymous(login, "login"); 

        if (login === "anonymous") { 
            alert("Dear anonymous, your email and password are unknown =("); 
            return;
        }
        
        while (!isDataSet(login, REGEXP_LETTER_NUMBER)) {
            login = prompt("You haven't entered your login!\nPlease, enter your login:");
        }

        let email = prompt("Enter your email:", "usermail@gmail.com");
        while (!isDataSet(email, REGEXP_EMAIL)) {
            email = prompt("You haven't entered your email!\nPlease, enter your email:");
        }

        let password = prompt("Enter your password:", "qwerty");
        while (!isDataSet(password, REGEXP_LETTER_NUMBER)) {
            password = prompt("You haven't entered your password!\nPlease, enter your password:");
        }

        alert(`Dear ${login}, your email is ${email}, your password is ${password}`);

        function findAnonymous(data, name) {
            if (data === null) {
                let isAnonymous = confirm("Do you want to remain anonymous?\nWould you like to correct this?\n Enter OK - to continue entering data.");
                if (isAnonymous) {
                    return prompt(`Enter your ${name}:`, `${name}`)
                } else {
                    return "anonymous";
                }
            } else return data;
        }

        function isDataSet(data, regExp) {
            return (data && regExp.test(data));
        }
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
            while (!isNumberSet(hour)) {
                hour = prompt("It's not a number! Be careful!\nEnter number of hours:");
            }

            let day = prompt("Enter number of days:", "2");
            while (!isNumberSet(day)) {
                day = prompt("It's not a number! Be careful!\nEnter number of days:");
            }

            let month = prompt("Enter number of months:", "4");
            while (!isNumberSet(month)) {
                month = prompt("It's not a number! Be careful!\nEnter number of months:");
            }

            alert(`The number of seconds in ${hour} hour is ${secH * hour}, in ${day} day - ${secD * day}, in ${month} month - ${secM * month}.`);
        }

        function isNumberSet(data) {
            return data !== null && !!String(data).trim() && !isNaN(data);
        }
}