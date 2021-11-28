// if (1) {
//     console.log('FALSE');
// }

// console.log('START');

// const value = -5;

// if (value > 0) {

//     console.log('TRUE');

// } else {

//     console.log('FALSE');
// }

//     console.log('FINISH');

// console.log('start');

// let value = undefined;

// if (value === 0) {
//   console.log(value, ' = value');
// } else if (value > 1) {
//   console.log(value, ' > 1');
// } else if (value < -1) {
//   console.log(value, '< -1');
// } else {
//   console.log(value);
// }

// console.log('Finish');

// const age = 20;
// const result = age >= 16 ? 'Доступ разрешен' : 'Доступ запрещен';

// console.log(result);

// console.log("START");

// switch ("DEN") {
//   case "Ivan":
//     console.log("Ivan");
//     break;
//   case "Alex":
//     console.log("Alex");
//     break;
//   case "Max":
//     console.log("Max");
//     break;
//   default:
//     console.log(" нет имени в списке");
// }
// console.log("FINISH");

// console.log("START");

// let a = 2000;
// let b = 13;
// let c = 14;

// if (a > b) {
//   a > c ? console.log(a) : console.log(c);
// } else {
//   b > c ? console.log(b) : console.log(c);
// }

// console.log("Finish");

// const user ='manager';

// switch (user){
//     case 'admin':
//         console.log('admin info')
//         break;
//     case 'admin':
//         console.log('user info')
//         break;
//     case 'admin':
//         console.log('manager info')
//         break;
//     default:
//             console.log('no info');

// }

// const a = 0;
// const b = 1;

// const result1 = a || b;
// console.log(result1);

// const a = 10;
// const b = ' ';

// const result = a && b;

// console.log(result);

// const a = 1;
// const b = 2;
// const c = 3;

// if (a > b && a > c) {
//     console.log(a);
// } else if {
//     (b > a  && b > c );
//     console.log(b);
// }else{
//     console.log(c);
//  }

// Практика

// console.log(null  ||  0  ||  "" ||  undefined);
// console.log( 'яблоко'  &&  true  &&  null  &&  1 );
// console.log(0  ||  true  &&  'false' ||  null);
// console.log(0  &&  true  ||  'false' &&  null);
// console.log(!0 && !!1);
// console.log(!(null || !'апельсин'&& true));

//######################################################################################################################################################################

// ЦИКЛЫ И МАССИВЫ практика
// Вывести в консоль заданную строку N раз.
// через while

// let i = 0;

// while (i < 10) {
//   console.log("string");
//   i += 1;
// }

// // через for

// for (let i = 0; i <= 10; i ++) {
//   console.log("string");
// }

// for(let cycle = 1;cycle<=8;cycle++){
//   console.log('Меня зовут Дмитрий');
// }

//Ежедневно количество доступных автомобилей в салоне уменьшается в два раза. Выяснить, на какой день продаж, количество доступных к покупке авто станет меньше M, если известно, что в первый день продаж всего было N автомобилей.

// let M = 27;
// let N = 26;

// let days = 0;

// while (M >= N) {
//   M /= 2;
//   days += 1;
// }

// console.log(days);

// Проанализировав временной промежуток начиная  с 1800 и до 2020 года найти и вывести в консоль:
// Год первого полета человека в космос и количество итераций которое потребовалось для поиска.
// Количество високосных годов принадлежащих данному отрезку и количество итераций которое потребовалось для поиска.

// let i = 1880;

// for (; i <= 2020; i += 4) {
//   //   if(i===1961)
//   //   break;
//   //   console.log(i);
//   if (i > 1880 && i <= 2020);
//   console.log(i);
// }
// // console.log(i);

// let temperature = +36;

// if (temperature <= -30) {
//   console.log('Оставайтесь дома!');
// } else if (temperature > -30 && temperature < -10) {
//   console.log('Сегодня холодно');
// } else if (temperature > -10 && temperature < +5) {
//   console.log('Не холодно');
// } else if (temperature > +5 && temperature < +15) {
//   console.log('Тепло');
// } else if (temperature > +15 && temperature < +25) {
//   console.log('Очень тепло');
// } else if (temperature > +25 && temperature < +35) {
//   console.log('Жарко');
// } else if (temperature >= +35) {
//   console.log('Пекло!');
// }

// let weather = -31;

// switch (weather) {
//   case (weather <= -30):
//     console.log('Оставайтесь дома!');
//     break;
//   case (weather >= -30 && weather <= -10):
//     console.log('Сегодня холодно');
//     break;
//   case (weather >= -10 && weather <= 5):
//     console.log('Не холодно');
//     break;
//   case (weather >= 5 && weather<= 15):
//     console.log('Тепло');
//     break;
//   case (weather >= 15 && weather <= 25):
//     console.log('Очень тепло');
//     break;
//   case (weather >= 25 && weather <= 35):
//     console.log('Жарко');
//     break;
//   case (weather >= 35):
//     console.log('Пекло');
//     break;
//   default:
//     console.log('Нет информации по температуре');

// }

// let a = 2 + 1;

// switch (a) {
//   case 3:
//     console.log( 'Маловато' );
//     break;
//   case 4:
//     console.log( 'В точку!' );
//     break;
//   case 5:
//     console.log( 'Перебор' );
//     break;
//   default:
//     console.log( "Нет таких значений" );
// }

// let a = '2';;
// let b = '456';
// let c = '665';
// let result;

// result = (a <= c && c >= b) ? 'Да': 'Нет'

//  console.log(result);

// let a = "2";
// let b = "456";
// let c = "66";

// if (a <= c && c >= b) {
//   console.log("Да");
// } else {
//   console.log("Нет");
// }

// let result = !(null || !'апельсин' && true) ;

// console.log(result);
