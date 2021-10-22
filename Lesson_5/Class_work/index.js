// function helloWorld() {
//     ('helloWorld')
// }
// helloWorld();

// const isUserAuth = true;
// function checkAccess() {
//   if (isUserAuth) {
//     ("Доступ есть");
//   } else {
//     ("Доступв нет");
//   }
// }

// checkAccess();

// function writeMassage() {
//     if (isUserAuth) {
//         ("Привет пользователь");
//       } else {
//         ("Привет гость");
//       }
//     }

//     writeMassage();
// function sum(a, b= 0) {
//     (b);
//     (a + b);
// }
// sum(1, 4);
// sum(16);

// let name = "Alex";

// function getName(useName) {
//   return useName;
// }

// const nameUserOne = getName(name);
// (nameUserOne);

// name = "Ivan";
// name = "Ivan";

// const nameUserTwo = getName(name);
// (nameUserTwo);

// let name ="Alex"

// (name, "1")

// function sayHi(userName) {
//     userName ="Petr"
//     (userName, "function");

// }

// sayHi(name);

// (name, "2");

// let a = 0;
// let b = 1;

// function sum() {
//   a + 1;
//   b + 1;
//   (a + b);
// }
// sum();
// sum();
// sum();
// sum();

// function sum() {
//   const a = 0;
//   const b = 1;
//   (a + b);
// }
// sum();
// sum();
// sum();
// sum();

// let userName = "Dima";

// function hiUser (name) {
//     if (name) {
//         (`Привет ${name}`);
//       } else {
//         ("Привет гость");
//       }
//     }

// hiUser("Dima");

// function exp(a, b = 1) {
//   (a ** b);
// }

// exp(2, 2);
// exp(2, 8);
// exp(2,18);

// let showText = function (text)  {
// 	alert (text);
// }
// (showText); // код функции

// const sayName = function(name) {
//     return name;

// }

// (sayName ('Alex'));

// const getName = function () {
//   ("Alex");
// };

// const getUserInfo = function (callBack) {
//   ("User Info");
//   callBack();
// };

// getUserInfo(getName);
// test();

// function test () {
//     ('test');
// }

// // test2(); нельзя обратиться до ее инициализации

// const test2= function () {
//     ("test2")
// }

// test2();

// const myfirstArrowFunc = () => ("!!");

// const test2 = (name,age) => (name, age);

// test2 ("alex",19)

// // FD
// function example1(param) {
//     return param;
// }

// example1(1);

// //FE

// const example2 = function (param) {
//     return param;
// }
// example2(2);

// //AF.1

// const example3 = (param) => param;
// example3(3);

// задачи на стрелочные функции

// const getString = (str,count) => {
//     for(let i = 0; i < count; i+= 1) {
//         (str);
//     }
// } ;
// getString("Ivan",3);

// getString("London",13);


 const isPositive = (letter) => {   


switch (letter) {
  case 'y':
  case 'u':
  case 'e':
  case 'o':
   console.log ("true");
   break;
  default:
    console.log("false");
  }
 };
isPositive('y');