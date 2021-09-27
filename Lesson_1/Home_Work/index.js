// Вывести в терминал строку “Hello World!”

console.log("Hello World!");

// Создать переменную для каждого типа данных

/* number */
let circulationNumber = 4212;
console.log(circulationNumber);
console.log(typeof circulationNumber);
console.log(12 / 0);
console.log("Apple" / 12);

/* string */
const identificationCard = "passport";
console.log(identificationCard);
console.log(typeof identificationCard);

/* boolean */
let residentialAddressIsEntered = false;
console.log(residentialAddressIsEntered);
console.log(typeof residentialAddressIsEntered);

/* null */
let parkingSpace = null;
console.log(parkingSpace);
console.log(typeof parkingSpace);

/* undefined */
let ship;
console.log(ship);
console.log(typeof ship);

/* object */
let document = {
  name: "passport",
  serial: 2215,
  number: 1158697,
};
console.log(document);
console.log(typeof document);

/* symbol */
let id = Symbol("id");
console.log(id);
console.log(typeof id);

/* bigint */
const bigInt = 15523255264853521522134567890n;
console.log(bigInt);
console.log(typeof bigInt);

// Попробовать изменить переменную объявленную через const
const nameDog = "Merry";

// Данное присваивание выдаст ошибку - TypeError: Assignment to constant variable.
// nameDog = "Cheldon";
// console.log(nameDog);

// Попробуем переопределить константу выдаст ошибку - SyntaxError: Identifier 'nameDog' has already been declared
// const nameDog = "Cheldon";

// Попробовать изменить переменную с типом object объявленную через const
const user = {
  name: "Dmitiy",
  age: 30,
};

user.name = "Vadim";
user.age = 29;
console.log(user);

// Данное присваивание выдаст ошибку
// const user = {
//   name: "Alex",
//   age: 25,
// };

console.log(user);

// Попробовать изменить переменную с типом object объявленную через let
let modelCar = {
  model: "BMW",
  serialNumber: 129835816,
  bodyType: "Coupe",
};

modelCar["is sportcar"] = true;
delete modelCar.model;

console.log(modelCar);

// Попробовать изменить переменную с типом object объявленную через var

var modelCar = {
  model: "BMW",
  serialNumber: 129835816,
  bodyType: "Coupe",
};

modelCar["is sportcar"] = true;
delete modelCar.bodyType;

console.log(modelCar);
