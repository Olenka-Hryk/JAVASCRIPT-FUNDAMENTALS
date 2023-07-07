const MODULES = [
  {
    id: "intro-to-javascript",
    chapter: "1",
    name: "1. INTRODUCTION TO JAVASCRIPT",
    numberOfTasks: "8",
    tasks: [
      {
        id: "1",
        nameTask: "Display your name: ",
        descriptionTask:
          "Напишіть скріпт всередині HTML-документу, який виводить на екран ваше імя за допомогою функції <code>alert()</code>.",
      },
      {
        id: "2",
        nameTask: "Display your surname: ",
        descriptionTask:
          "Напишіть скріпт в зовнішньому файлі, який виводить в консоль ваше прізвище. Підключіть створений файл до HTML-документу.",
      },
      {
        id: "3",
        nameTask: "Variables: ",
        descriptionTask:
          "a) оголосіть дві змінні; <br>b) запишіть у змінні будь-які значення; <br>c) виведіть на екран значення змінних; <br>d) скопіюйте значення однієї змінної в іншу; <br>e) виведіть на екран значення змінних.",
      },
      {
        id: "4",
        nameTask: "Object: ",
        descriptionTask:
          "Створіть об’єкт з 5-ма наступними властивостями: <var>“String”, “Number”, “Boolean”, “Undefined”, “Null”.</var> <br>Значення кожної властивості повинно відповідати відповідному примітивному типу даних.",
      },
      {
        id: "5",
        nameTask: "Legal age:",
        descriptionTask:
          "Використовуючи функцію <code>confirm()</code> задайте користувачу питання про досягнення ним повнолітнього віку. Результат запишіть в змінну <code>isAdult</code> і виведіть в консоль.",
      },
      {
        id: "6",
        nameTask: "Personal data: ",
        descriptionTask:
          "В зовнішньому файлі напишіть скріпт, в якому оголосіть змінні, для збереження таких даних: <br>&#9900; ваше ім’я <br>&#9900; ваше прізвище <br>&#9900; навчальна група <br>&#9900; ваш рік народження. <br>Присвойте змінним відповідні значення. <br>Створіть та проініціалізуйте логічну змінну для збереження вашого сімейного стану. <br>Визначте тип кожної змінної. <br>Виведіть значення змінних в консоль, відповідно до їх типу, в такому порядку: <var>Number, Boolean, String. </var><br>Створіть 2 довільних змінних типу <var>Null і Undefined </var>відповідно. Виведіть їх тип в консоль.",
      },
      {
        id: "7",
        nameTask: "Authorization data: ",
        descriptionTask:
          "За допомогою функції <code>prompt()</code> напишіть скріпт, який послідовно запитує в користувача логін, емейл та пароль, і виводить на екран повідомлення із введеними даними. Наприклад <var>“Dear User, your email is usermale@gmail.com, your password is qwerty”</var>.",
      },
      {
        id: "8",
        nameTask: "Counting seconds: ",
        descriptionTask:
          "Напишіть скріпт, який вираховує кількість секунд в годині, в добі, в місяці, записує результати в відповідні змінні, і виводить їх значення на екран.",
      },
    ],
  },
  {
    id: "operators-arrays",
    chapter: "2",
    name: "2. OPERATORS. TYPE CONVERSIONS. ARRAYS. CONDITIONAL STATEMENT",
    numberOfTasks: "7",
    tasks: [
      {
        id: "1",
        nameTask: "True or false: ",
        descriptionTask:
          "Дано три цілих числа: <var>a, b, c</var>. Перевірте істинність висловлювання: <var>a < b < c</var>.",
      },
      {
        id: "2",
        nameTask: "Continue the code: ",
        descriptionTask:
          "Є такий код:<br> <samp>let x = 1;<br>let y = 2;<br><br>let res1 = // Допишіть код, необхідно використовувати змінні x і y<br>console.log(res1); // '12'<br>console.log(typeof res1); // 'string'<br><br>let res2 = // Допишіть код, необхідно використовувати змінні x і y<br>console.log(res2); // 'true2'<br>console.log(typeof res2); // 'string'<br><br>let res3 = // Допишіть код, необхідно використовувати змінні x і y<br>console.log(res3); // true<br>console.log(typeof res3); // 'boolean'<br><br>let res4 = // Допишіть код, необхідно використовувати змінні x і y<br>console.log(res4); // NaN<br>console.log(typeof res4); // 'number'<br><br></samp> Допишіть код, щоб в консолі браузера з'явилися рядки, які написані в коментарях, оперуючи при цьому змінними <var>х і у</var>.",
      },
      {
        id: "3",
        nameTask: "Are you underage? ",
        descriptionTask:
          "Використовуючи функцію <code>prompt()</code> задайте користувачу питання про досягнення ним повнолітнього віку. Результат запишіть в змінну <code>isAdult</code>. В залежності від отриманого значення виведіть відповідне повідомлення про статус особи. Наприклад: при виконанні умови вік більше 18 вивести <var>“Ви досягли повнолітнього віку”</var>. Якщо вік менше 18 років вивести <var>“Ви ще надто молоді”</var>.",
      },
      {
        id: "4",
        nameTask: "Area of the triangle: ",
        descriptionTask:
          "Користувач вводить три довжини сторін трикутника (використовуйте <code>prompt()</code> три рази для введення кожної сторони). <br>Необхідно:  <br>a) визначити і вивести в консоль площу трикутника <br>b) перевірити чи цей трикутник є прямокутним і вивести в консоль результат перевірки. <br>Здійснювати перевірку чи введені користувачем значення коректні, в іншому випадку вивести <var>'Incorrect data‘</var>. Результат обчислення площі трикутника виводити в консоль з точністю 3 знаки після коми ( наприклад:  <var>8.42355465 =>  8.424</var> ).",
      },
      {
        id: "5",
        nameTask: "Greeting: ",
        descriptionTask:
          "Написати умовну конструкцію, яка в залежності від часу доби виводитиме відповідне привітання. Потрібно отримати реальний час доби із системи. Зробити 2 способами через 2 різних умовних оператора.<br>&#9900; В діапазоні годин 23-5 – має виводитися привітання <var>'Доброї ночі'</var> <br>&#9900; В діапазоні годин 5-11 – має виводитися привітання <var>'Доброго ранку'</var> <br>&#9900; В діапазоні годин 11-17 – має виводитися привітання <var>'Доброго дня'</var> <br>&#9900; В діапазоні годин 17-23 – має виводитися привітання <var>'Доброго вечора'</var> .",
      },
      {
        id: "6",
        nameTask: "The most frequent number in the array: ",
        descriptionTask:
          "Задано масив чисел, знайти число яке найбільш часто входить в масив, занести це число в новий масив і видалити всі входження цього числа із поточного масиву.<br><samp>let arr = [4, 5, 2, 1, 6, 5, 3, 5, 2, 5]<br>let data = ... // 5<br>...<br>console.log(arr) // [4, 2, 1, 6, 3, 2]",
      },
      {
        id: "7",
        nameTask: "&#10025; &#10025; &#10025; Vasya Vasylyok",
        descriptionTask:
          "Вася працює програмістом і отримує 50$ за кожні 100 рядків коду (99 рядків - 0$, 199 рядків - 50$). За кожне третє запізнення Васю штрафують на 20$. Реалізувати меню: <br>&#9900; користувач вводить бажаний дохід Васі і кількість запізнень, порахувати, скільки рядків коду йому треба написати; <br>&#9900; користувач вводить кількість рядків коду, написану Васею, і бажаний обсяг коштів. Порахувати, скільки разів Вася може запізнитися; <br>&#9900; користувач вводить кількість рядків коду і кількість запізнень, визначити, скільки грошей заплатять Васі і чи заплатять взагалі.",
      }
    ],
  },
  {
    id: "loops-functions",
    chapter: "3",
    name: "3. LOOPS. FUNCTIONS",
    numberOfTasks: "8",
    tasks: [
      {
        id: "1",
        nameTask: "Create Array: ",
        descriptionTask:
          "Написати функцію <code>createArray(start, end)</code>, яка приймає на вхід 2 параметри: <br>&#9900; початкове значення <br>&#9900; кінцеве значення <br>а на виході отримує масив із діапазоном цих значень (реалізувати достатньо лише із числовими значеннями) <br><samp>let arr = createArray(2, 9); <br>console.log(arr); // [2,3,4,5,6,7,8,9]</samp>",
      },
      {
        id: "2",
        nameTask: "Repeated sequence: ",
        descriptionTask:
          "Задані цілі числа <var>a і b (a < b)</var>. Виведіть усі цілі числа від <var>a</var> до <var>b</var> включно, при цьому <var>a</var> виводится 1 раз, число <var>а+1</var> - два рази і т.д. <br><samp>// 1,2,2,3,3,3...</samp>",
      },
      {
        id: "3",
        nameTask: "Filling the array randomly: ",
        descriptionTask:
          "Напишіть функцію <code>randArray(k)</code>, яка заповнюватиме масив <var>k</var> випадковими цілими числами. Випадкові числа генеруються із діапазону <var>1-500</var> .<br><samp>randArray(5);  // [399,310,232,379,40]</samp>",
      },
      {
        id: "4",
        nameTask: "No repeats: ",
        descriptionTask:
          "Написати функцію <code>compact()</code> яка має приймати на вхід масив, а на вихід має повертати значення нового масиву без повторень. Haприклад:<br><samp>const arr = [5, 3, 4, 5, 6, 7, 3]; <br>const arr2 = compact(arr); <br>console.log(arr2) ; // [5,3,4,6,7]</samp>",
      },
      {
        id: "5",
        nameTask: "New sorted arrays: ",
        descriptionTask:
          "Є масив <code>[5, “Limit”, 12, “a”, “3”, 99, 2, [2, 4, 3, “33”, “a”, “text”], “strong”, “broun”]</code> <br>Написати функцію яка виведе нові масиви які складаються із даних початкового масиву, але одного типу даних (не приводити тип стрінг в число навіть якщо там лише число)<br> <samp>let  arr = [5, “Limit”, 12, “a”, “3”, 99, 2, [2, 4, 3, “33”, “a”, “text”], “strong”, “broun”];<br> let arrNew = funcName(arr); <br>/* <br>[<br>[5, 12, 99, 2, 2, 4, 3],<br>[”Limit”, “a”, “3”, “33”, “a”, “text”, “strong”, “broun”<br>] <br>*/</samp>",
      },
      {
        id: "6",
        nameTask: "Calculation: ",
        descriptionTask:
          "Напишіть функцію <code>calc(a, b, op)</code>, яка виконує над числами <var>a</var> і <var>b</var> одну із арифметичних операцій та повертає її результат. Вид операції визначається цілим числом <var>op</var>: 1 – віднімання, 2 – добуток, 3 – ділення, інші значення – додавання.<br><samp>calc(10, 3, 1); // => 7</samp>",
      },
      {
        id: "7",
        nameTask: "Find uniqueness: ",
        descriptionTask:
          "Напишіть функцію <code>findUnique(arr)</code>, яка приймає масив <var>arr</var> і перевіряє на унікальність його елементи. Якщо всі елементи масиву унікальні (не мають дублів), то функція поверне <code>true</code>, інакше - <code>false</code>.<br> <samp>findUnique([1, 2, 3, 5, 3]);  // => false <br> findUnique([1, 2, 3, 5, 11]); // => true </samp>",
      },
      {
        id: "8",
        nameTask: "&#10025; &#10025; &#10025; Match or not match?",
        descriptionTask:
          "Створити функцію <code>create()</code>, яка приймає один аргумент <var>у</var> вигляді рядка. Ця функція повертає анонімну функцію, яка перевіряє чи переданий в неї аргумент збігається з аргументом зовнішньої функції ( потребує використання <var>closure</var> ). <br> <samp>const tom = create('pass_for_Tom'); <br>tom('pass_for_Tom'); //повертає true <br> tom('pass_for_tom'); //повертає false</samp>",
      }
    ],
  },
  {
    id: "debugging-exceptions",
    chapter: "4",
    name: "4. DEBUGGING. HANDLING EXCEPTIONS",
    numberOfTasks: "5",
    tasks: [
      {
        id: "1",
        nameTask: "The sum of two array elements: ",
        descriptionTask:
          "Напишіть функцію <code>sumSliceArray(arr, first, second)</code>, яка приймає масив <code>arr</code> і два числа (<code>first</code> i <code>second</code>) – порядкові номери елементів масиву, які необхідно скласти. Наприклад, якщо ввели 3 та 5 – сумуються 3-й та 5-й елементи. Функція повинна генерувати винятки, якщо були введені не числа, і коли одне з чисел або обидва більшого розміру за довжину масиву. Напишіть код, який використовує цю функцію, передбачте обробку можливих винятків.",
      },
      {
        id: "2",
        nameTask: "Do you have access to watch the movie? ",
        descriptionTask:
          "Створіть функцію <code>checkAge()</code>, яка запитує у користувача його <var>ім'я, вік</var> та <var>статус</var> ( <var>адмін, модератор, користувач</var> ) та генерує модальне вікно з помилкою, якщо: <br>&#9900; вік користувача менше 18 або більше 70 років (генерується помилка типу <code>RangeError</code>). <br>&#9900; користувач не ввів жодних даних в будь-якому полі (виводиться повідомлення <var>The field is empty! Please enter your age</var> з типом помилки <code>Error</code>). <br>&#9900; у полі статус введено неправильне слово (тип помилки <code>EvalError</code>). <br>&#9900; в полі вік введено нечислове значення. <br> У всіх інших випадках користувач отримає доступ до перегляду фільму. <br>У блоці <code>catch</code> передбачена можливість виведення <var>назви</var> та <var>опису помилки</var>.",
      },
      {
        id: "3",
        nameTask: "Find the area of the rectangle: ",
        descriptionTask:
          "Реалізуйте функцію <code>calcRectangleArea(width, height)</code>, яка приймає 2 параметри <var>ширина</var> прямокутника <code>width</code> і <var>висота</var> прямокутника <code>height</code> і обраховує його площу. Передбачити припинення виконання програми і генерацію винятку у випадку, якщо функції передано не числові параметри. Напишіть код, який використовує цю функцію та обробляє можливі виняткові ситуації.",
      },
      {
        id: "4",
        nameTask: "Find month name: ",
        descriptionTask:
          "Створіть клас <code>MonthException</code>, конструктор якого приймає параметр <code>message</code> і ініціалізує поле <code>name</code> значенням <code>MonthException</code>. Реалізуйте функцію <code>showMonthName(month)</code>, в якій параметр <code>month</code> – це порядковий номер місяця в році. Функція повертає назву місяця відповідно до введеного номера місяця. У випадку некоректного вводу кидається ексепшн у вигляді об’єкта класу <code>MonthException</code> з повідомленням <var>Incorrect month number</var>.  Напишіть код, який використовує цю функцію, передбачте обробку можливих винятків. <br>Приклад роботи програми: <br><samp>console.log<wbr>(showMonthName(5));  // May <br>console.log<wbr>(showMonthName(14)); // MonthException Incorrect month number</samp>",
      },
      {
        id: "5",
        nameTask: "Show users ids: ",
        descriptionTask:
          "Реалізуйте функцію <code>showUser(id)</code>, яка приймає параметром користувацьке <code>id</code> і повертає об’єкт, який містить значення переданої <code>id</code>. Також функція викидає помилку у разі якщо введено від’ємне <code>id</code>. <br>Реалізуйте функцію <code>showUsers(ids)</code>, яка приймає параметром масив користувацьких айді <code>ids</code>, перевіряє з використанням функції <code>showUser()</code> кожен елемент масиву <code>ids</code> на коректність, в разі виключної ситуації виводить повідомлення про помилку. Функція <code>showUsers(ids)</code> повертає масив об’єктів, де значеннями ключів є коректні елементи <code>ids</code>. <br>Приклад роботи програми: <br><samp>showUsers([7, -12, 44, 22]);<br>// Error: ID must not be negative: -12 <br>// [ {id: 7}, {id: 44}, {id: 22} ]</samp>",
      }
    ],
  },
  {
    id: "oop-objects-classes",
    chapter: "5",
    name: "5. OBJECT ORIENTED PROGRAMMING (OOP) INTRO. OBJECTS. CLASSES",
    numberOfTasks: "5",
    tasks: [
      {
        id: "1",
        nameTask: "Class Circle: ",
        descriptionTask:
          "Напишіть клас <var>Круг</var> та реалізуйте функціонал: <br>&#9900; Визначте конструктор, який запитує координати центру кола, його радіус та ініціалізує об'єкт; <br>&#9900; Визначте метод отримання довжини кола для поточного об'єкта ( <var>&#76; &#61; 2 &#215; &#8508; &#215; &#8475; </var>); <br>&#9900; Визначте статичний метод, який приймає радіус та повертає довжину кола для заданого радіусу; <br>&#9900; Визначте метод отримання об'єкта-кола, який повертає копію поточного об'єкта; <br>&#9900; Визначте статичний метод, який приймає координати центра кола, його радіус та повертає об'єкт кола із заданими параметрами; <br>&#9900; Визначте метод перевірки попадання крапки до кола; <br>&#9900; Визначте метод перетворення поточного стану об'єкта на символьний рядок ( <code>toString()</code> ).",
      },
      {
        id: "2",
        nameTask: "Find the number of properties of the object: ",
        descriptionTask:
          "Напишіть функцію <code>propsCount<wbr>(currentObject)</code>, яка приймає об’єкт і визначає кількість властивостей цього об’єкта. <br>Наприклад:<br> <pre style='overflow:auto'><code>let mentor = { <br>        course: 'JS fundamental',<br>        duration: 3,<br>        direction: 'web-development'<br>     };<br> propsCount(mentor);  // 3</code></pre>",
      },
      {
        id: "3",
        nameTask: "Class Person: ",
        descriptionTask:
          "Створіть клас <code>Person</code>, у якого конструктор приймає параметри <code>name</code> і <code>surname</code>, а також міститься метод <code>showFullName()</code>, який виводить у консоль <var>ім’я</var> і <var>прізвище</var> особи. <br>&#9900; Від класу <code>Person</code> наслідується клас <code>Student</code>, конструктор якого крім <code>name</code> і <code>surname</code>, приймає параметр <code>year</code> (рік вступу до університету). <br>&#9900; В класі <code>Student</code> необхідно перевизначити метод <code>showFullName(midleName)</code>, щоб виводилося не лише <var>ім’я</var>, <var>прізвище</var>, але і <var>по-батькові</var> (<code>midleName</code>) студента. <br>&#9900; Також в класі <code>Student</code> необхідно реалізувати метод <code>showCourse()</code>, який виводитиме <var>поточний курс</var> студента <br>(від 1 до 6). Значення курсу визначатиметься як різниця поточного року (визначити самостійно) і року вступу до ВНЗ.<br> Приклад результату: <br> <code>const stud1 = new Student('Petro', 'Petrenko', 2019); <br> console.log(<wbr>stud1.showFullName<wbr>('Petrovych')); // Petrenko Petro Petrovych <br> console.log('Current course: ' + stud1.showCourse()); //Current course: 4 </code>",
      },
      {
        id: "4",
        nameTask: "Class Marker: ",
        descriptionTask:
          "<code>А.</code> Реалізувати клас, який описує простий <var>маркер</var>. У класі мають бути такі компоненти: <br>&#9900; поле, яке зберігає колір маркера; <br>&#9900; поле, яке зберігає кількість чорнила в маркері (у відсотках); <br>&#9900; метод друку (метод приймає рядок і виводить текст відповідним кольором; <br> текст виводиться до тих пір, поки в маркері є чорнило; один не пробіловий символ – це <var>0,5% чорнила</var> в маркері).<br><br> <code>В.</code> Реалізувати клас, що описує маркер, що заправляється, успадкувавши його від простого маркера і додавши метод для заправки маркера. Продемонструвати роботу написаних методів.",
      },
      {
        id: "5",
        nameTask: "Class Worker: ",
        descriptionTask:
          "Створіть клас <code>Worker</code> який буде мати конструктор, який приймає наступні властивості: <code>fullName</code> (ім’я і прізвище), <code>dayRate</code> (ставка за день роботи), <code>workingDays</code> (кількість відпрацьованих днів). <br>  <code>1)</code> клас повинен мати метод <code>showSalary()</code>, який буде виводити <var>зарплату</var> працівника. Зарплата - це добуток ставки <code>dayRate</code> на кількість відпрацьованих днів <code>workingDays</code>. <br>  <code>2)</code> додати приватне поле <code>experience</code> і присвоїти йому значення <var>1.2</var> і використовувати його як додатковий множник при визначенні зарплати – створити метод <code>showSalaryWithExperience<wbr>()</code>. Вивести значення зарплати з цим коефіцієнтом. <br> <code>3)</code> додати гетери і сетери для поля <code>experience</code>. Встановити значення <code>experience = 1.5</code> і вивести його на екран. <br> <code>4)</code> вивести значення зарплати з новим <code>experience</code>. <br> <code>5)</code> створити кілька екземплярів класу (працівників) з різними зарплатами, як показано в прикладі нижче. Посортувати зарплату працівників із найбільшим <code>experience</code> по зростанню і вивести результат в форматі:  <code> worker_fullName: salary_value </code> <br> <code>6)</code> реалізувати динамічне сортування для будь-якої кількості працівників-екземплярів класу <code>Worker</code>.<br><br><pre><mark style='background: #33aadd69!important'><b>  Example usage:  </b></mark></pre><code>let worker1 = new Worker('John Johnson', 20, 23);<br>console.log(<wbr>worker1.fullName);<br>worker1.showSalary();<br>console.log('New experience: ' + worker1.showExp);<br>worker1.<wbr>showSalaryWithExperience<wbr>();<br>worker1.setExp = 1.5;<br>console.log('New experience: ' + worker1.showExp);<br>worker1.<wbr>showSalaryWithExperience<wbr>();<br><br>let worker2 = new Worker('Tom Tomson', 48, 22);<br>. . . . . .<br>let worker3 = new Worker('Andy Ander', 29, 23);<br>. . . . . .<br><br><pre><mark style='background: #33aadd69!important'><b>  Output example:  </b></mark></pre><br>John Johnson<br><br>John Johnson salary: 460<br>New experience: 1.2<br>John Johnson salary: 552<br>New experience: 1.5<br>John Johnson salary: 690<br><br>Tom Tomson<br>Tom Tomson salary: 1056<br>. . . . . .<br>New experience: 1.5<br>Tom Tomson  salary: 1584<br><br>Andy Ander<br>Andy Ander salary: 667<br>. . . . . .<br>New experience: 1.5<br>Andy Ander  salary: 1000.5<br><br>Sorted salary:<br>John Johnson: 690<br>Andy Ander: 1000.5<br>Tom Tomson: 1584</code>",
      }
    ],
  },
  {
    id: "document-object-model",
    chapter: "6",
    name: "6. DOCUMENT OBJECT MODEL (DOM)",
    numberOfTasks: "7",
    tasks: [
      {
        id: "1",
        nameTask: "HTML list: ",
        descriptionTask:
          "На HTML-сторінці є ненумерований список з <code>id='list'</code>, який складається із 5 елементів. У модальному вікні необхідно послідовно вивести вміст: <br><code>1)</code> першого елемента списку <br><code>2)</code> останнього елемента списку <br><code>3)</code> другого елемента списку <br><code>4)</code> четвертого елемента списку <br><code>5)</code> третього елемента списку <br>Приклад:<br><pre>     •   1<br>     •   2<br>     •   3<br>     •   4<br>     •   5</pre>Результат виводу: <code>1, 5, 2, 4, 3</code>",
      },
      {
        id: "2",
        nameTask: "Stylization of the page using DOM: ",
        descriptionTask:
          "Для сторінки <br><code><pre style='overflow:auto'>     &lt;body&gt;<br>          &lt;h1&gt;I'am a big header!!!&lt;/h1&gt;<br>          &lt;div id='myDiv'&gt;<br>            &lt;p&gt;First paragraph&lt;/p&gt;<br>            &lt;p&gt;Second paragraph&lt;/p&gt;<br>            &lt;p&gt;Third paragraph&lt;/p&gt;<br>            &lt;p&gt;Fourth paragraph&lt;/p&gt;<br>          &lt;/div&gt;<br>          &lt;ul id='myList'&gt;<br>            &lt;li&gt;Make&lt;/li&gt;<br>            &lt;li&gt;me&lt;/li&gt;<br>            &lt;li&gt;horizontal!&lt;/li&gt;<br>          &lt;/ul&gt;<br>          &lt;span&gt;Make me invisible, please!&lt;/span&gt;<br>    &lt;/body&gt;</pre></code> <br>Напишіть скріпт, який за допомогою засобів DOM простилізує сторінку так як показано на картинці. <br><u>http://surl.li/ipjhh</u>",
      },
      {
        id: "3",
        nameTask: "Write a simple HTML page: ",
        descriptionTask:
          "Напишіть скріпт, який за допомогою засобів DOM створить для порожньої HTML-сторінки таку структуру з тегів і їх атрибутів.<br><code><pre style='overflow:auto'>   &lt;body&gt;<br>        &lt;main class='mainClass check item'&gt;<br>           &lt;div id='myDiv'&gt;<br>              &lt;p&gt;First paragraph&lt;/p&gt;<br>          &lt;/div&gt;<br>       &lt;/main&gt;<br>   &lt;/body&gt;</pre></code>",
      },
      {
        id: "4",
        nameTask: "Data output from fields: ",
        descriptionTask:
          "https://codepen.io/<wbr>misha_klymenko/<wbr>pen/Jjabvez <br>Реалізувати вивід даних із полів при кліку на кнопку <code>'Надіслати'</code> в поле <code>outBlock</code>",
      },
      {
        id: "5",
        nameTask: "Circle: ",
        descriptionTask:
          "https://codepen.io/<wbr>misha_klymenko/<wbr>pen/abzLvqo <br> <code>1)</code> вибрати всі теги із класом circle <br><code>2)</code> перебрати кожен елемент, і вибрати його data-anim значення <br><code>3)</code> вибране значення додати як клас за допомогою classList до цього елемента <br><code>4)</code> перевірити чи застосувались анімації <br><br>  - вибірка елемента із DOM дерева <br> - вибрати клас елемента (https://developer.mozilla.org/en-US/docs/Web/API/Element/classList) <br> - вибрати із data атрибута значення і занести те значення в клас елемента для якого ми вибрали поточний атрибут",
      },
      {
        id: "6",
        nameTask: "Calculate the price of the product: ",
        descriptionTask:
          "https://codepen.io/<wbr>misha_klymenko/<wbr>pen/dyjyeGO <br>Реалізувати логіку підрахунку ціни товару по його варіаціях (шаблон наведений тут, при кліку на колір змінювати ціну товару). Придумати ще 2 варіації, від яких буде залежати ціна товару.",
      },
      {
        id: "7",
        nameTask: "&#10025; &#10025; &#10025; Electronic clock",
        descriptionTask:
          "Зробити електронний годинник у такому стилі. <br>http://surl.li/ipjll",
      }
    ],
  },
  {
    id: "browser-object-model-events",
    chapter: "7",
    name: "7. BROWSER OBJECT MODEL (BOM). EVENTS",
    numberOfTasks: "8",
    tasks: [
      {
        id: "1",
        nameTask: "Object Window: ",
        descriptionTask:
          "За допомогою методів об’єкта <code>window</code> створити: <br><code>1)</code> нове вікно розміром <var>300х300</var> пікселів. <br><code>2)</code> із затримкою 2 сек змініть розміри вікна на <var>500х500</var> пікселів <br><code>3)</code> із затримкою 2 сек перемістіть вікно в точку з координатами <var>(200, 200)</var> <br><code>4)</code> із затримкою 2 сек закрийте вікно.",
      },
      {
        id: "2",
        nameTask: "Change CSS: ",
        descriptionTask:
          "Для заданої HTML-сторінки:<br> <code><pre style='overflow:auto'>&lt;p id ='text'&gt;I learning JavaScript events!&lt;/p&gt;<br>       &lt;div&gt;<br>         &lt;button . . . . . &gt;Change style!&lt;/button&gt;<br>      &lt;/div&gt;</pre></code><br> Hапишіть функцію <code>changeCSS()</code>, яка спрацьовуватиме по кліку на кнопку і змінюватиме стиль вмісту тега <code>&lt;p&gt;</code>: колір шрифту – <var>оранжевий</var>, розмір шрифту <var>20px</var>, шрифт сімейства <var>'Comic Sans MS'</var>.",
      },
      {
        id: "3",
        nameTask: "Events: ",
        descriptionTask:
          "Задано сторінку з 3 кнопками і 1 лінкою. Напишіть Javascript код і реалізуйте HTML-сторінку з відповідними подіями на кожному елементові: <br><code>1)</code> 1-ша кнопка – при кліку на неї колір фону сторінки міняється на <var>синій</var> <br><code>2)</code> 2-га кнопка – при подвійному кліку на неї колір фону сторінки міняється на <var>рожевий</var> <br><code>3)</code> 3-я кнопка – при натисненні і утримуванні кнопки колір фону сторінки стає <var>коричневий</var>. При відпусканні – <var>білий</var>. <br><code>4)</code> При наведенні на лінку – колір фону стає <var>жовтим</var>, при відведенні – <var>білим</var>. <br>Приклад – курсор наведений на лінку: <br>https://user-images.<wbr>githubusercontent.<wbr>com/9075641<wbr>/228461056-455d4dbf<wbr>-527b-43de-a3dd-<wbr>7c079dfbffed<wbr>.png",
      },
      {
        id: "4",
        nameTask: "Delete a list item: ",
        descriptionTask:
          "Реалізуйте програму, яка по натисканню на кнопку видалятиме обраний елемент випадаючого списку. Можуть видалятися всі елементи в будь-якому порядку.<br>https://user-images.githubuser<wbr>content.com/9075641<wbr>/228462160-e0584c12<wbr>-eb4a-4973-b598-<wbr>46e1cde9b941.png",
      },
      {
        id: "5",
        nameTask: "Show me message where I am! ",
        descriptionTask:
          "Реалізуйте програму, яка по натисканню на кнопку виводитиме повідомлення <var>'I was pressed!'</var>, при наведенні на кнопку виводитиме повідомлення <var>'Mouse on me!'</var>, а при відведенні курсора миші виводитиме повідомлення <var>'Mouse is not on me!'</var>. <br>Приклад роботи: <br>https://user-images.<wbr>githubusercontent.com<wbr>/9075641/228462490<wbr>-a2ec423a-44e3-<wbr>40f5-9c0a-7e9d207f2822<vbr>.png",
      },
      {
        id: "6",
        nameTask: "Width and height of the browser window: ",
        descriptionTask:
          "Реалізуйте програму, яка відслідковуватиме зміну розміру (<var>ширини</var> і <var>висоти</var>) вікна браузера і виводитиме на поточну сторінку при її розтязі/стисканні відповідні значення. <br> https://user-images.githubuser<wbr>content.com/9075641<wbr>/228463011-5302f615-86e6<wbr>-41dc-b09a-62bed3564596.png",
      },
      {
        id: "7",
        nameTask: "Drop down lists: ",
        descriptionTask:
          "На сторінці потрібно реалізувати 2 випадаючих списки. У першому містяться <var>назви країн</var>, у другому – <var>назви міст</var>. Реалізувати роботу таким чином, щоб коли вибирається з лівого випадаючого списку певна країна - в правому випадаючому  списку з'являлися міста цієї країни. Список міст формується динамічно, через JavaScript. Також потрібно нижче вивести назву обраної країни і місто. Код HTML-сторінки:<br> <code><pre style='overflow:auto'>  &lt;select name='country' id='country'&gt;<br>       &lt;option value='ger'&gt;Germany&lt;/option&gt;<br>       &lt;option value='usa'&gt;USA&lt;/option&gt;<br>       &lt;option value='ukr'&gt;Ukraine&lt;/option&gt;<br>  &lt;/select&gt;<br>  &lt;select name='cities' id='cities'&gt;&lt;/select&gt;<br>  &lt;p&gt;&lt;/p&gt;</pre></code><br> https://user-images.githubuser<wbr>content.com/9075641<wbr>/228463508-6225f4ee-7ad2<wbr>-4130-b7fc-d97a2d236693.png",
      },
      {
        id: "8",
        nameTask: "&#10025; &#10025; &#10025; Dinogame",
        descriptionTask:
          "Придумайте просту гру з використанням цих спрайтів. На 2-3 дії користувача. (кліки миші, натискання клавіш). Наприклад: вибір персонажа, стрибок. <br>https://user-images.githubuser<wbr>content.com/9075641<wbr>/184331849-6cc33681-dcdf<wbr>-4eef-830b-83fc43056e19.png",
      }
    ],
  },
  {
    id: "regular-expressions-memory",
    chapter: "8",
    name: "8. REGULAR EXPRESSIONS. MEMORY MANAGEMENT",
    numberOfTasks: "7",
    tasks: [
      {
        id: "1",
        nameTask: "Uppercase: ",
        descriptionTask:
          "Напишіть функцію, яка перевірятиме чи перший символ в рядку написаний в верхньому регістрі, чи ні. <br>Приклад роботи:<br><code>upperCase('regexp'); // 'String's not starts with uppercase character' <br>upperCase('RegExp'); // 'String's starts with uppercase character'</code>",
      },
      {
        id: "2",
        nameTask: "Check email: ",
        descriptionTask:
          "Напишіть функцію, яка приймає рядкові дані і виконує перевірку на їх відповідність емейлу. Валідними вважаються всі символи на різних позиціях. <br>Приклад роботи: <br> <code>checkEmail('Qmail2@gmail.com'); true </code>",
      },
      {
        id: "3",
        nameTask: "Switch places: ",
        descriptionTask:
          "Напишіть регулярний вираз, який в рядковому тексті 2 підстрічки буде міняти місцями. <br>Приклад роботи: <br> Вхідний рядок: <code>'Java Script'</code> <br>Вихід: <code>'Script, Java</code>",
      },
      {
        id: "4",
        nameTask: "Credit card: ",
        descriptionTask:
          "Напишіть функцію, яка виконуватиме валідацію номера банківської карти (9999-9999-9999-9999).",
      },
      {
        id: "5",
        nameTask: "Email validation: ",
        descriptionTask:
          "Напишіть функцію, яка приймає рядкові дані і виконує перевірку на їх відповідність емейлу. <br>Вимоги:<br>&#9900; Цифри <var>(0-9)</var>. <br>&#9900; Тільки латинські літери в великому <var>(A-Z)</var> і малому <var>(a-z)</var> регістрах. <br>&#9900; В тілі емейла допустимі лише символи “_” і “-”. Але вони не можуть бути 1-им символом емейлу. <br>&#9900; Символ “-” не може повторюватися. <br> <code>checkEmail('my_mail@gmail.com'); 'Email is correct!' <br> checkEmail('#my_mail@gmail.com'); 'Email is not correct!' <br> checkEmail('my_ma--il@gmail.com'); 'Email is not correct!'",
      },
      {
        id: "6",
        nameTask: "Login validation: ",
        descriptionTask:
          "Напишіть функцію, яка перевіряє правильність логіна. Правильний логін - рядок від <var>2</var> до <var>10</var> символів, що містить лише <var>букви</var> та <var>числа</var>, номер не може бути першим. Функція має приймати рядок і знаходити усі числа в цьому рядку, включаючи числа з плаваючою комою (наприклад, 3.4). <br> Приклад роботи:<br> <code>checkLogin('ee1.1ret3'); true //1.1, 3  <br> checkLogin('ee1*1ret3'); false //1, 1, 3 </code>",
      },
      {
        id: "7",
        nameTask: "&#10025; &#10025; &#10025; Form validation: ",
        descriptionTask:
          "Додайте перевірку на кожне поле даних в формі https://codepen.io/misha_klymenko/pen/rNZKodW?editors=1000",
      }
    ],
  }
];