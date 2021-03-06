// Операции с массивами

// Давайте произведём 5 операций с массивом.

// Создайте массив styles с элементами «Джаз» и «Блюз».
// Добавьте «Рок-н-ролл» в конец.
// Замените значение в середине на «Классика». Ваш код для поиска значения в середине должен работать для массивов с любой длиной.
// Удалите первый элемент массива и покажите его.
// Вставьте «Рэп» и «Регги» в начало массива.

// let styles = ["джаз","блюз"];
// styles[2] = 'рок-н-ролл';
// styles[1] = 'классика';
// console.log( styles.shift());
// styles.unshift('Рэп', 'Регги');
// console.log(styles);

//Дан массив с элементами 'a', 'b', 'c', 'd', 'e'. С помощью цикла for выведите все эти элементы на экран.

// let arr = ["a", "b", "c", "d", "e"];

// for (let i = 0; i <= 4; i++) {
//   console.log(arr[i]);
// }

//Дан массив с элементами 1, 2, 3, 4, 5. С помощью цикла for и оператора if выведите в консоль нечетные элементы массива.

// let arr = [1, 2, 3, 4, 5];

// for (let i = 0; i <= arr.length; i++) {
//   if (arr[i] % 2 == 1) {
//     console.log(arr[i]);
//   }
// }

// Найти суммму элементов массива

// let result = 0;
// let arr = [1, 2, 3, 4, 5];

// for (let i = 0; i < arr.length; i++) {
//   result += arr[i];
// }
// console.log(result);

// Найти произведение элементов массива.

// let result = 1;
// let arr = [1, 2, 3, 4, 5];

// for (let i = 0; i < arr.length; i++) {
//   result *= arr[i];
// }
// console.log(result);

//Дан массив с элементами 1, 2, 3, 4, 5. С помощью цикла for найдите сумму квадратов элементов этого массива.

// let sum = 0;
// let arr = [1, 2, 3, 4, 5];
// for (let i = 0; i < arr.length; i++) {
//   let result = arr[i] * arr[i];
//   sum += result;

// }
// console.log(sum);

//Дан массив с элементами 2, 5, 9, 15, 1, 4. С помощью цикла for и оператора if выведите в консоль те элементы массива, которые больше 3-х, но меньше 10.

// let arr = [2, 5, 9, 15, 1, 4];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > 3 && arr[i] < 10) {
//     console.log(arr[i]);
//   }
// }

//Дан массив arr. Найдите среднее арифметическое его элементов (сумма делить на количество).
//Проверьте задачу на массиве с элементами 1, 2, 3, 4, 5.

// const arr = [1, 2, 3, 4, 5];
// let sum = 0;
// let result = 0;
// for (let i = 0; i < arr.length; i++) {
//   sum += arr[i];
//   result = sum / arr.length;
// }

// console.log(result);


//Дан массив с числами. Выведите элементы этого массива в обратном порядке.

// let arr = [1, 2, 3, 5, 9];

// for (let i = 5 - 1; i >= 0; i--) {
//   console.log(arr[i]);
// }

//