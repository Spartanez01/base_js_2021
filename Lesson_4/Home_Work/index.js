// Работа с if-else

// Если переменная a равна нулю, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3.
// let a = -3;
// if (a == 0) {
//   console.log("Верно!");
// } else {
//   console.log("Неверно!");
// }

// Если переменная a больше нуля, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3.
// let a = -3;
// if (a > 0) {
//   console.log("Верно!");
// } else {
//   console.log("Неверно!");
// }

//  Если переменная a меньше нуля, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3.
// let a = -3;
// if (a < 0) {
//   console.log("Верно!");
// } else {
//   console.log("Неверно!");
// }

//  Если переменная a больше или равна нулю, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3.
// let a = -3;
// if (a >= 0) {
//   console.log("Верно!");
// } else {
//   console.log("Неверно!");
// }

//  Если переменная a меньше или равна нулю, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3.
// let a = -3;
// if (a <= 0) {
//   console.log("Верно!");
// } else {
//   console.log("Неверно!");
// }

//  Если переменная a не равна нулю, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3.
// let a = -3;
// if (a != 0) {
//   console.log("Верно!");
// } else {
//   console.log("Неверно!");
// }

//  Если переменная a равна 'test', то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 'test', 'тест', 3.
// let a = 3;
// if (a === 'test') {
//   console.log("Верно!");
// } else {
//   console.log("Неверно!");
// }

//  Если переменная a равна '1' и по значению и по типу, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном '1', 1, 3.
// let a = 3;
// if (a == 1) {
//   console.log("Верно!");
// } else {
//   console.log("Неверно!");
// }

// Работа с логическими переменными

//  Если переменная test равна true, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при test, равном true, false. Напишите два варианта скрипта - с короткой записью и с длинной.
// let test = 'false';

// test === 'true' ? console.log('Верно') : console.log('Неверно')

// if (test) {
//   console.log("Верно!");
// } else {
//   console.log("Неверно!");
// }

//  Если переменная test не равна true, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при test, равном true, false. Напишите два варианта скрипта - с короткой записью и с длинной.
// let test = 'false';

// test !== 'true' ? console.log('Верно') : console.log('Неверно')

// if (!test) {
//   console.log("Верно!");
// } else {
//   console.log("Неверно!");
// }

// Работа с && (и) и || (или)

//  Если переменная a больше нуля и меньше 5-ти, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 5, 0, -3, 2.
// let a = 2;

// if (a > 0 && a < 5) {
//   console.log("Верно");
// } else {
//   console.log("Неверно");
// }
//  Если переменная a равна нулю или равна двум, то прибавьте к ней 7, иначе поделите ее на 10. Выведите новое значение переменной на экран. Проверьте работу скрипта при a, равном 5, 0, -3, 2.
// let a = 2;

// if (a == 0 || a == 2) {
//   console.log(a + 7);
// } else {
//   console.log(a / 10);
// }
//  Если переменная a равна или меньше 1, а переменная b больше или равна 3, то выведите сумму этих переменных, иначе выведите их разность (результат вычитания). Проверьте работу скрипта при a и b, равном 1 и 3, 0 и 6, 3 и 5.
// let a = 3;
// let b = 5;

// if (a <= 1 && b >= 3) {
//   console.log(a + b);
// } else {
//   console.log(a - b);
// }
//  Если переменная a больше 2-х и меньше 11-ти, или переменная b больше или равна 6-ти и меньше 14-ти, то выведите 'Верно', в противном случае выведите 'Неверно'.
// let a = 3;
// let b = 7;

// if ((a > 2 && a < 11) || (b >= 6 && b < 14)) {
//   console.log("Верно");
// } else {
//   console.log("Неверно");
// }

// На switch-case
//  Переменная num может принимать 4 значения: 1, 2, 3 или 4. Если она имеет значение '1', то в переменную result запишем 'зима', если имеет значение '2' – 'весна' и так далее. Решите задачу через switch-case.
// let num = 3;

// switch (num) {
//   case 1:
//     console.log("зима");
//     break;
//   case 2:
//     console.log("весна");
//     break;
//   case 3:
//     console.log("лето");
//     break;
//   case 4:
//     console.log("осень");
//   default:
//     console.log("Введите число от 1 до 4");
// }

// Общие задачи

//  В переменной day лежит какое-то число из интервала от 1 до 31. Определите в какую декаду месяца попадает это число (в первую, вторую или третью).
// let day = 33;

// if (day >= 1 && day <= 10) {
//   console.log("Первая декада месяца");
// } else if (day >= 11 && day <= 20) {
//   console.log("Вторая декада месяца");
// } else if (day >= 21 && day <= 31) {
//   console.log("Третья декада месяца");
// } else {
//   console.log("Ошибка!");
// }

//  В переменной month лежит какое-то число из интервала от 1 до 12. Определите в какую пору года попадает этот месяц (зима, лето, весна, осень).
// let month = 15;
// switch(month) {
//     case 12 :
//     case 1:
//     case 2:
//       console.log('зима')
//     break;
//     case 6:
//     case 7:
//     case 8:
//       console.log('лето')
//     break
//     case 3:
//     case 4:
//     case 5:
//       console.log('весна')
//     break
//     case 9:
//     case 10:
//     case 11:
//       console.log('осень')
//     break;
//     default :
//         console.log('Ошибка!')
//     break;
// }

//  Дана строка, состоящая из символов, например, 'abcde'. Проверьте, что первым символом этой строки является буква 'a'. Если это так - выведите 'да', в противном случае выведите 'нет'.
// let str = "abcde";

// if (str[0] === "a") {
//   console.log("Да");
// } else {
//   console.log("Нет");
// }

//  Дана строка с цифрами, например, '12345'. Проверьте, что первым символом этой строки является цифра 1, 2 или 3. Если это так - выведите 'да', в противном случае выведите 'нет'.
// let string = "12345";

// if (string[0] === "1" || string[0] === "2" || str[0] === "2") {
//   console.log("Да");
// } else {
//   console.log("Нет");
// }

//  Дана строка из 3-х цифр. Найдите сумму этих цифр. То есть сложите как числа первый символ строки, второй и третий.
// let str = "432";
// let result;
// if ((result = +str[0] + +str[1] + +str[2])) {
//   console.log(result);
// }

//  Дана строка из 6-ти цифр. Проверьте, что сумма первых трех цифр равняется сумме вторых трех цифр. Если это так - выведите 'да', в противном случае выведите 'нет'.
// let str = "589785";
// let result;

// if(result=(+str[0] + +str[1] + +str[2])===(+str[3] + +str[4] + +str[5])) {
//   console.log(result,"Да");
// } else {
//   console.log(result,"Нет");
// }
// Циклы while и for
// Решите эти задачи сначала через цикл while, а затем через цикл for.

//  Выведите столбец чисел от 1 до 100.
/////while
// let i = 1;
// while (i < 101) {
//   console.log(i);
//   i++;
// }

/////for
// for (let i = 1; i < 101; i++) {
//   console.log(i);
// }

//  Выведите столбец чисел от 11 до 33.

// let i = 11;
// while (i >= 11 && i <= 33) {
//   console.log(i);
//   i++;
// }

// for (let i = 11; i < 34; i++) {
//   console.log(i);
// }

//  Выведите столбец четных чисел в промежутке от 0 до 100.

// let i = 0;
// while (i < 100) {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
//   i++;
// }

// for (let i = 0; i < 100; i++) {
//   if (i % 2 == 0)
//     console.log(i);
// }

// Работа с for для массивов
//  Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for выведите все эти элементы на экран.
// let arr = [1, 2, 3, 4, 5];

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

//  Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for найдите сумму элементов этого массива. Запишите ее в переменную result.
// let arr = [1, 2, 3, 4, 5]
// let result = 0

// for (i = 0; i < arr.length; i++) {result += arr [i]}
// console.log(result);
// // Задачи общие.
//  Дан массив с элементами 2, 5, 9, 15, 0, 4. С помощью цикла for и оператора if выведите на экран столбец тех элементов массива, которые больше 3-х, но меньше 10.
let arr = [2, 5, 9, 15, 0, 4];
for (i = 0; i < arr.length; i++)
  if (arr[i] >= 3 && arr[i] <= 10) {
    console.log(arr[i]);
  }

//  Дан массив с числами. Числа могут быть положительными и отрицательными. Найдите сумму положительных элементов массива.


//  Дан массив с элементами 1, 2, 5, 9, 4, 13, 4, 10. С помощью цикла for и оператора if проверьте есть ли в массиве элемент со значением, равным 4. Если есть - выведите на экран 'Есть!' и выйдите из цикла. Если нет - ничего делать не надо.
//  Дан массив числами, например: [10, 20, 30, 50, 235, 3000]. Выведите на экран только те числа из массива, которые начинаются на цифру 1, 2 или 5.
//  Дан массив с элементами 1, 2, 3, 4, 5, 6, 7, 8, 9. С помощью цикла for создайте строку '-1-2-3-4-5-6-7-8-9-'.
//  Составьте массив дней недели. С помощью цикла for выведите все дни недели, а выходные дни выведите жирным.
//  Составьте массив дней недели. С помощью цикла for выведите все дни недели, а текущий день выведите курсивом. Текущий день должен храниться в переменной day.
