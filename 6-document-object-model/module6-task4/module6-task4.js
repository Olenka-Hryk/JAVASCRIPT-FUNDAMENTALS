// реалізувати вивід даних із полів при кліку на кнопку "Надіслати" в поле outBlock
const REGEXP_NUMBERS = /\d/;
const REGEXP_SYMBOLS = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

const btnSubmit = document.querySelector('input[type="submit"]');
const outContainer = document.querySelector('.out');
const outBlock = document.createElement('p');
outBlock.classList.add('output-text');
outContainer.appendChild(outBlock);

let arrayUsers = [];

class User {
    get fullName() {
        return this._fullName;
    }
    set fullName(value) {
        if (REGEXP_NUMBERS.test(value) || REGEXP_SYMBOLS.test(value)) throw new Error('Wrong input fullName');
        this._fullName = value;
    }

    get mobileNumber() {
        return this._mobileNumber;
    }
    set mobileNumber(value) {
        if (!value) throw new Error('Wrong input mobileNumber');
        this._mobileNumber = value;
    }

    get birthDay() {
        return this._birthDay;
    }
    set birthDay(value) {
        if (!value) throw new Error('Wrong input birthDay');
        this._birthDay = value;
    }

    get email() {
        return this._email;
    }
    set email(value) {
        if (!value) throw new Error('Wrong input email');
        this._email = value;
    }

    constructor(fullName, mobileNumber, birthDay, email) {
        this.fullName = fullName;
        this.mobileNumber = mobileNumber;
        this.birthDay = birthDay;
        this.email = email;
    }

    toString() {
        return `${this.fullName}; ${this.mobileNumber}; ${this.birthDay}; ${this.email}`;
    }
}

btnSubmit.addEventListener('click', () => {
    outBlock.textContent = "";
    const userFullName = document.querySelector('input[name="fio"]').value;
    const userMobileNumber = document.querySelector('input[name="phone"]').value;
    const userBirthDay = document.querySelector('input[name="birthday"]').value;
    const userEmail = document.querySelector('input[name="email"]').value;

    try {
        const user = new User(userFullName, userMobileNumber, userBirthDay, userEmail);
        arrayUsers.push(user);
    } catch (error) {
        alert('Wrong input data! \nPlease check your input and try again');
        console.error(error.message, error.stack);
    }

    // outBlock.innerText = JSON.stringify(arrayUsers, null, 2);     // another way for output
    for (const user of arrayUsers) {
        outBlock.innerText += `${user}\n`;
    }

    // =-=-=-=-=-=-=-=-=- another way =-=-=-=-=-=-=-=-=-
    // const userArray = Array.from(document.querySelectorAll('.arr'));
    // for (const user of userArray) {
    //     console.log(user.value);
    // }
});