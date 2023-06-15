const MODULES = [
  {
    id: "intro-to-javascript",
    name: "1. INTRODUCTION TO JAVASCRIPT",
    numberOfTasks: "8",
    tasks: [
      {
        nameTask: "Display your name: ",
        descriptionTask:
          "Напишіть скріпт всередині HTML-документу, який виводить на екран ваше імя за допомогою функції alert().",
      },
      {
        nameTask: "Display your surname: ",
        descriptionTask:
          "Напишіть скріпт в зовнішньому файлі, який виводить в консоль ваше прізвище. Підключіть створений файл до HTML-документу.",
      },
      {
        nameTask: "Variables: ",
        descriptionTask:
          "a) оголосіть дві змінні; <br>b) запишіть у змінні будь-які значення; <br>c) виведіть на екран значення змінних; <br>d) скопіюйте значення однієї змінної в іншу; <br>e) виведіть на екран значення змінних.",
      },
      {
        nameTask: "Object: ",
        descriptionTask:
          "Створіть об’єкт з 5-ма наступними властивостями: “String”, “Number”, “Boolean”, “Undefined”, “Null”. <br>Значення кожної властивості повинно відповідати відповідному примітивному типу даних.",
      },
      {
        nameTask: "Legal age:",
        descriptionTask:
          "Використовуючи функцію confirm() задайте користувачу питання про досягнення ним повнолітнього віку. Результат запишіть в змінну isAdult і виведіть в консоль.",
      },
      {
        nameTask: "Personal data: ",
        descriptionTask:
          "В зовнішньому файлі напишіть скріпт, в якому оголосіть змінні, для збереження таких даних: <br>&#9900; ваше ім’я <br>&#9900; ваше прізвище <br>&#9900; навчальна група <br>&#9900; ваш рік народження. <br>Присвойте змінним відповідні значення. <br>Створіть та проініціалізуйте логічну змінну для збереження вашого сімейного стану. <br>Визначте тип кожної змінної. <br>Виведіть значення змінних в консоль, відповідно до їх типу, в такому порядку: Number, Boolean, String. <br>Створіть 2 довільних змінних типу Null і Undefined відповідно. Виведіть їх тип в консоль.",
      },
      {
        nameTask: "Authorization data: ",
        descriptionTask:
          "За допомогою функції prompt() напишіть скріпт, який послідовно запитує в користувача логін, емейл та пароль, і виводить на екран повідомлення із введеними даними. Наприклад “Dear User, your email is usermale@gmail.com, your password is qwerty”.",
      },
      {
        nameTask: "Count the seconds: ",
        descriptionTask:
          "Напишіть скріпт, який вираховує кількість секунд в годині, в добі, в місяці, записує результати в відповідні змінні, і виводить їх значення на екран.",
      },
    ],
  },
  {
    id: "2",
    name: "2. OPERATORS. TYPE CONVERSIONS. ARRAYS. CONDITIONAL STATEMENT",
    numberOfTasks: "1",
    tasks: [
      {
        nameTask: "Display your name: ",
        descriptionTask:
          "Напишіть скріпт всередині HTML-документу, який виводить на екран ваше імя за допомогою функції alert().",
      },
    ],
  },
];

function renderModules(modules) {
  let html = "";
  modules.forEach((module, index) => {
    html += `<section class="module modules__item">
                 <p class="accent-text module__name">${module.name}</p>`;
    html += `<div class="module__tasks-list">`;

    for (let task = 0; task < module.numberOfTasks; task++) {
      html += `<button class="button module__task-btn" id="${module.id}_task${
        task + 1
      }" 
                       data-chapter="${index}" data-task="${task}">Task ${
        task + 1
      }</button>`;
    }

    html += `</div><div class="module__task"> 
               <p class="accent-text module__task-name module__task-name-${module.id}"></p>
               <p class="main-text module__task-description module__task-description-${module.id}"></p>
            <div/></section>`;
  });

  const module = document.querySelector(".modules__list");
  module.innerHTML = html;

  document.addEventListener("click", (event) => {
    closeAllTasks();
    if (event.target.tagName !== "BUTTON") return;

    const chapterIndex = +event.target.dataset.chapter;
    const taskIndex = +event.target.dataset.task;
    const module = modules[chapterIndex];
    const task = module.tasks[taskIndex];

    let currentTaskName = document.querySelector(
      `.module__task-name-${module.id}`
    );
    let currentTaskDescription = document.querySelector(
      `.module__task-description-${module.id}`
    );
    currentTaskName.innerHTML = task.nameTask;
    currentTaskDescription.innerHTML = task.descriptionTask;
  });
}

renderModules(MODULES);

function closeAllTasks() {
  let taskName = document.querySelectorAll(".module__task-name");
  let taskDescription = document.querySelectorAll(".module__task-description");
  taskName.forEach((name) => {
    name.innerHTML = "";
  });
  taskDescription.forEach((description) => {
    description.innerHTML = "";
  });
}
