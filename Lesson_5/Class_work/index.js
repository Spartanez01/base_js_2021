// function helloWorld() {
//   console.log("Hello World");
// }

// helloWorld();

// const isUserAuth = true;
// function checkAccess() {
//   if (isUserAuth) {
//     console.log("Доступ есть");
//   } else {
//     console.log("Доступа нет");
//   }
// }

// checkAccess();

// function writeMessage() {
//   if (isUserAuth) {
//     console.log("Привет Пользователь");
//   } else {
//     console.log("Привет Гость");
//   }
// }
// writeMessage();

// function sum(a, b = 0) {
//   console.log(b);
//   console.log(a + b);
// }
// sum(1, 4);
// sum(15);

// function getName(name) {
//   console.log("до return");
//   return name;
//   console.log("после return");
// }
// // getName("Ivan");
// const userName = getName("Max");
// console.log(userName);

// function getName(name) {
//   return [1, 2, 3, 45, 6];
// }

// const userName = getName("Max");
// console.log(userName);

// function getName(userName) {
//   return userName;
// }

// let name = "ALex";

// const nameUserOne = getName(name);

// name = "Ivan";

// console.log(nameUserOne);

// let name = "ALex";

// console.log(name, "1");

// function sayHi(userName) {
//   userName = "Petr";
//   name = "Max";
//   console.log(userName, "function");
// }

// sayHi(name);

// console.log(name, "2");

// let a = 0;
// let b = 0;

// function sum() {
//   a += 1;
//   b += 1;
//   console.log(a + b);
// }
// sum();
// sum();
// sum();
// sum();

// function sum() {
//   const a = 0;
//   const b = 1;
//   console.log(a + b);
// }
// sum();
// sum();
// sum();
// sum();

//################### Практика ########################

// Написать функцию, которая будет принимать имя пользователя, и выводить строку с приветствием данного пользователя, если имени пользователя нет, выводить приветствие гостя.

// function userName(name) {
//   name = "Dima";
//   if (name) {
//     console.log("Привет пользователь", `${name}`);
//   } else {
//     console.log("Привет гость");
//   }
// }
// userName();

//Написать функцию, которая в качестве первого параметра будет принимать численное значение, а в качестве второго параметра будет принимать степень, в которую надо возвести первый аргумент. По умолчанию, второй аргумент единица.

// function exp(a, b = 1) {
//   console.log(a ** b);
// }

// exp(2, 2);
// exp(2, 8);
// exp(20);

//Написать функцию, которая будет принимать в качестве входного параметра массив любых, целых чисел, и будет возвращать среднее арифметическое значение данного массива*

// function getValue(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i += 1) {
//     sum += arr[i];
//   }
//   return sum / arr.length;
// }

// console.log(getValue([1, 23, 6]));

//####################################################################################

// const sayName = function (name) {
//   return name;
// };

// const copy = sayName;
// console.log(sayName("Alex"));

// console.log(copy("Ivan"));

// const getName = function () {
//   console.log("Alex");
// };

// const getUserInfo = function (callBack) {
//   console.log("USER INFO");
//   callBack();
// };

// getUserInfo(getName);

// test();

// function test() {
//   console.log("test");
// }

// const test2 = function () {
//   console.log("test2");
// };

// test2();

// const myFirstArrowFunc = () => console.log("!!");
// const test1 = (name) => {
//   //func body
//   return name;
// };

// console.log(test1("ALex"));

// const getLog = () => console.log("lOG");
// getLog();

// // FD
// function example1(param) {
//   return param;
// }
// example1(1);
// //FE
// const example2 = function (param) {
//   return param;
// };
// example2(2);
// //AF.1
// const example3 = (param) => param;
// example3(3);
// //AF.2
// const example3 = (param) => {
//   //big body
//   return param;
// };
// example3(3);

// const getString = (str, count) => {
//   for (let i = 0; i < count; i += 1) {
//     console.log(str);
//   }
// };

// const isPositive = (letter) => {
//   //   if (letter === "a" || letter === "y") {
//   //     return true;
//   //   } else {
//   //     return false;
//   //   }
//   switch (letter) {
//     case "a":
//     case "y":
//     case "i":
//       console.log("true");
//       break;
//     default:
//       console.log("false");
//   }
// };

// isPositive("i");

// Дано число. Сложите его цифры. Если сумма получилась более 9-ти, опять сложите его цифры.
//И так, пока сумма не станет однозначным числом (9 и менее).

// const evenNine = (num) => {
//   num = `${num}`;
//   let sum = 0;
//   for (let i = 0; i < num.length; i += 1) {
//     sum += +num[i];
//   }

//   if (sum > 9) {
//     return evenNine(sum);
//   } else {
//     return sum;
//   }
// };

// console.log(evenNine(2478));

// Дан массив с числами. Выведите последовательно его элементы.

// const arr = [2, 4, 3, 1];

// const arrSort = (arr) => {
//   const result = []; // создаем массив в который положим результат
//   for (let j = 0; j < arr.length; j += 1) {
//     // запусткаем внешний цикл, который будет запускать логику сортировки поэтапно для каждого элемента
//     for (let i = 0; i < arr.length; i += 1) {
//       // запускаем цикл который будет выполнять поэлементную проверку значений в массиве
//       if (!i) {
//         // присваиваем первый элемент в масиив результатов, этот элемент будет отправной точкой
//         result[i] = arr[i];
//         continue;
//       }
//       // для последующих элементов выполняем проверку на значение
//       if (arr[i] > result[i - 1]) {
//         // если текущий элемент больше предыдущего то добавляем его в массив результатов
//         result[i] = arr[i];
//       } else {
//         // если текущий элемен меньше чем предыдущий, то помещаем его на место i-1, а предыдущий элемент на место i
//         const a = result[i - 1];
//         result[i - 1] = arr[i];
//         result[i] = a;
//       }
//     }
//     // после каждой итерации первго цикла, производим перезапись входного массива, и запускаем сортировку повторно
//     arr = result;
//   }
//   // после выполнения циклов выозвращаем результат
//   return result;
// };

// console.log(arrSort(arr));

// const isPalindrom = (str) => {
//   let newStr = "";
//   for (let i = 0; i < str.length; i += 1) {
//     newStr += str[str.length - i - 1];
//   }
//   if (newStr === str) {
//     return true;
//   } else {
//     return false;
//   }
// };

// console.log(isPalindrom("abgba"));


