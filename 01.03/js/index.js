'use strict'
// const numbers = [1,2,5,4,85]

// const double = value => value*2;

// const map = function(arr, callback) {
//     const resultArray = [];
//     for (let i = 0, max = arr.length; i < max; i+=1) {
//         const element = arr[i];
//         const item = callback(element)
//         resultArray.push(item);
//     }return resultArray
// }
// const result = map(numbers, double);
// console.log(result)
// const doubledNumbers = numbers.map(num => num *2) //запись заменяет две функции в одной строке
// console.log(doubledNumbers)
//------------------
// const users = [
//     { name: "Mango", daysInactive: 10, isActive: true },
//     { name: "Poly", daysInactive: 5, isActive: false },
//     { name: "Ajax", daysInactive: 12, isActive: true }
//   ];
//   const updatedUsers = users.map(user => ({
//     ...user,
//     isActive: user.daysInactive < 7
//   }));

//   console.log(updatedUsers);

//   const numbersFilter = numbers.filter(num => num > 4)
//   console.log(numbersFilter)
//------------------------
//   const users = [
//     { name: "Mango", daysActive: 15 },
//     { name: "Poly", daysActive: 4 },
//     { name: "Ajax", daysActive: 27 },
//     { name: "Chelsey", daysActive: 2 }
//   ];

//   const sortByActiveDays = (a, b) => a.daysActive - b.daysActive;

//   console.log(
//     users.sort(sortByActiveDays)
//   );

//-----------------
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

// const even = numbers.filter(x => x % 2 === 0);
// console.log(even)

// const doubled = even.map(x => x * 2);

// const reversed = doubled.reverse();

// console.log(reversed);


//---------------------------------


// const users = [{
//         id: '121asdasda',
//         name: 'Gleb',
//         sex: 'male',
//         position: 'manager',
//         salery: 13,
//     },
//     {
//         id: '121a232asda',
//         name: 'Alin',
//         sex: 'female',
//         position: 'solider',
//         salery: 15,
//     },
//     {
//         id: '11241asda',
//         name: 'Adam',
//         sex: 'male',
//         position: 'developer',
//         salery: 7,
//     },
//     {
//         id: '94421asda',
//         name: 'Funk',
//         sex: 'female',
//         position: 'developer',
//         salery: 20,
//     },
//     {
//         id: '77221asda',
//         name: 'Gooliver',
//         sex: 'male',
//         position: 'gooliver',
//         salery: 8,
//     }
// ];
//хотим найти юзера по айдишнику
// for( let input of users) {
// if(input.sex === 'male')
// console.log(input)
// }
// console.log(users[0].id) //вывести значение определённого юзера с индексом 0


// //ishem s pomoshiu funktsii

// function findBy(value, action) {
//     for (const elem of users) {
//         // if(elem.id === id) { return elem }
//         let find = action(value, elem);
//         if (find !== null) {
//             return find;
//         }
//     };
// }
// const byId = (id, elem) => elem.id === id ? elem : null;
// const byName = (name, elem) => elem.name === name ? elem : null;
// console.log(findBy('77221asda', byId));
// console.log(findBy('Adam', byName));
// console.log(findBy('gooliver', (position, elem) => elem.position === position ? elem : null));
//-----------------------------
// const map = function(arr, change, currency, pdv) {
//     let newArr = [];

//     for(let input of arr) {
//        newArr.push(change(input.salery, currency, pdv ))
//        return newArr
//     } 
// }
// let changeSalery = (salery, currency, pdv) => (salery * currency) * (1 - pdv/100)

// console.log(map(users, changeSalery, 27, 20))

//------------------------------
/*  Перепишите все циклы for используя методы map, filter, find, reduce и т. д. */

/* 
  Функция findGreaterThan получает два аргумента - число и массив.
  Возвращает новый массив, содержащий элементы которые больше числа.
*/
// const findGreaterThan = (num, arr) => {
//     const result = [];

//     for (let i = 0, max = arr.length; i < max; i += 1) {
//       if (arr[i] > num) {
//         result.push(arr[i]);
//       }
//     }

//     return result;
//   };
//   const findGreaterThan = (num, arr) => arr.filter((i) => i > num)



//   console.log( findGreaterThan(2, [1, 2, 3, 4, 5]) ); // [3, 4, 5,]
//   console.log( findGreaterThan(3, [1, 2, 3, 4, 5]) ); // [4, 5,]
//   console.log( findGreaterThan(1, [1, 2, 3, 4, 5]) ); // [2, 3, 4, 5,]

//   /* 
//     Функция multiplyBy принимает два аргумента - число и массив. 
//     Возвращает массив все значения которого умножены на число.
//   */
// const multiplyBy = (num, arr) => arr.map(i => i * num)

//   const multiplyBy = (num, arr) => {
//     let result = [];

//     for (let i = 0, max = arr.length; i < max; i += 1) {
//       result.push(arr[i] * num);
//     }

//     return result;
//   };

//   console.log( multiplyBy(2, [1, 2, 3, 4, 5]) ); // [2, 4, 6, 8, 10]
//   console.log( multiplyBy(3, [1, 2, 3, 4, 5]) ); // [3, 6, 9, 12, 15]
//   console.log( multiplyBy(4, [1, 2, 3, 4, 5]) ); // [4, 8, 12, 16, 20]

//   /* 
//     Функция summAllNumbers принимает любое число аргументов.
//     Возвращает число - сумму всех аргументов.
//   */
// let summAllNumbers = (...args) => args.reduce((acc +=))
//   function summAllNumbers(...args) {
//     let accumulator = 0;

//     for (let i = 0, max = args.length; i < max; i += 1) {
//       accumulator += args[i];
//     }

//     return accumulator;
//   }

//   console.log( summAllNumbers(1, 2, 3) ); // 6
//   console.log( summAllNumbers(1, 2, 3, 4) ); // 10
//   console.log( summAllNumbers(1, 2, 3, 4, 5) ); // 15

//   /* 
//     Функция findEvery получает два аргумента - число и массив.
//     Возвращает true если все элементы массива больше или равны числу.
//     Иначе если есть хоть один элемент меньше числа, то возвращается false.
//   */



// const findEvery = (num, arr) => arr.every((i) => num <= i)
//   const findEvery = (num, arr) => {
//     for (let i = 0, max = arr.length; i < max; i += 1) {
//       if (arr[i] < num) {
//         return false;
//       }
//     }

//     return true;
//   };

//   console.log( findEvery(5, [5, 6, 7, 8, 9]) ); // true
//   console.log( findEvery(6, [5, 6, 7, 8, 9]) ); // false
//   console.log( findEvery(4, [5, 6, 7, 8, 9]) ); // true
//---------------------------------------
/*
  Напишите функию getPropValues(arr, prop), принимающую 
  параметры arr - массив, и prop - имя ключа в объекте. 
  
  Функция должна возвращать массив всех значений этого ключа из arr.
  
  PS: обязательно используйте функциональные методы массивов, никаких for!
*/
// const getPropValues = (arr, prop) => {
//     return arr.map((i) => i[prop])

// }
// const guests = [
//     { name: "Mango", age: 20, isActive: true },
//     { name: "Poly", age: 18, isActive: false },
//     { name: "Ajax", age: 30, isActive: true },
//     { name: "Chelsey", age: 45, isActive: false }
//   ];

//   // Вызовы функции для проверки
//   console.log( getPropValues(guests, "name") ); // ['Mango', 'Poly', 'Ajax', 'Chelsey']

//   console.log( getPropValues(guests, "age") ); // [20, 18, 30, 45]

//   console.log( getPropValues(guests, "isActive") ); // [true, false, true, false]
//----------------------------------------
/*      
  Напишите функцию setGuestState(guests, period), где
  guests - массив гостей, period - кол-во дней после
  которого считается что гость не активен.
    
  Если значение поля inactiveDays болше чем period, 
  поставить для isActive значение false.
    
  Если же значение inactiveDays меньше чем period,
  поставить для isActive значение true
  
  PS: обязательно используйте функциональные методы массивов, никаких for!
*/

// const guests = [{
//         name: 'Mango',
//         inactiveDays: 15,
//         isActive: true
//     },
//     {
//         name: 'Poly',
//         inactiveDays: 8,
//         isActive: false
//     },
//     {
//         name: 'Ajax',
//         inactiveDays: 32,
//         isActive: false
//     },
//     {
//         name: 'Chelsey',
//         inactiveDays: 85,
//         isActive: true
//     }
// ];

// console.log(guests)

// const setGuestState = (users, period) =>
//    users.map(
//      obj =>
//        obj.inactiveDays < period
//          ? { ...obj, isActive: true }
//          : { ...obj, isActive: false }
//    );

// // Вызовы функции для проверки
// console.log(
//     setGuestState(guests, 10)
// ); // Объекты Mango, Ajax, Chelsey получат isActive false, а Poly наоборот true

// console.log(
//     setGuestState(guests, 20)
// ); // Объекты Ajax, Chelsey получат isActive false, а Mango и Poly наоборот true

// console.log(
//     setGuestState(guests, 50)
// ); // Объект Chelsey получит isActive false, а Mango, Poly и Ajax наоборот true

//---------------------------------------
/*
  Напишите функию getActiveGuests(guests), принимающую 
  один параметр guests - массив объектов гостей. 
  
  Функция должна возвращать массив объектов гостей,
  значение поля isActive которых true.
         
  PS: обязательно используйте функциональные методы массивов, никаких for!
*/
// let getActiveGuests = (guests) => guests.filter(obj => obj.isActive === true)


// const guests = [
//     { name: "Mango", age: 20, isActive: true },
//     { name: "Poly", age: 18, isActive: false },
//     { name: "Ajax", age: 30, isActive: true },
//     { name: "Chelsey", age: 45, isActive: false }
//   ];

//   // Вызовы функции для проверки
//   console.log(getActiveGuests(guests)); // массив из 2-х объектов Mango и Ajax
//---------------------------------------------
/*      
  Напишите функцию getGuestsOlderThan(guests, age), где 
  guests - массив объектов гостей, age - предел возраста 
  для сортировки. 
  
  Функция возвращает массив объектов значение свойства 
  age которых больше чем параметр age.
  
  PS: обязательно используйте функциональные методы массивов, никаких for!
*/

// const guests = [
//     { name: "Mango", age: 20, isActive: true },
//     { name: "Poly", age: 18, isActive: false },
//     { name: "Ajax", age: 30, isActive: true },
//     { name: "Chelsey", age: 45, isActive: false }
//   ];

//   let getGuestsOlderThan =  (guests, age) => guests.filter( el => el.age > age)
//   // Вызовы функции для проверки
//   console.log(getGuestsOlderThan(guests, 25)); // массив из 2-х объектов Ajax и Chelsey

//   console.log(getGuestsOlderThan(guests, 35)); // [{name: 'Chelsey', age: 45, isActive: false}]

//   console.log(getGuestsOlderThan(guests, 55)); // []


//----------------------------------
/*
  Напишите функию getGuestById(guests, id), принимающую 
  guests - массив объектов гостей, id - идентификатор (число). 
  
  Функция должна возвращать объект гостя с совпадающим id.
  
  PS: обязательно используйте функциональные методы массивов, никаких for!
*/

// const guests = [
//     { id: 1, name: 'Mango', age: 20 },
//     { id: 2, name: 'Poly', age: 18 },
//     { id: 3, name: 'Ajax', age: 30 },
//     { id: 4, name: 'Chelsey', age: 45 }
//   ];


//   let getGuestById = (guests, id) => guests.find(el => el.id === id)
//   // Вызовы функции для проверки
//   console.log(
//     getGuestById(guests, 3)
//   ); // {id: 3, name: 'Ajax', age: 30}

//   console.log(
//     getGuestById(guests, 1)
//   ); // {id: 1, name: 'Mango', age: 20}

//   console.log(
//     getGuestById(guests, 5)
//   ); // undefined
//-------------------------------------
/*
  Используя метод reduce, посчитайте сумму 
  всех значений свойств объекта order.
*/
// const order = {
//     bread: 10,
//     apples: 25,
//     chicken: 60,
//     milk: 15,
//     cheese: 40
//   };
// let orderValues = Object.values(order)
// console.log(orderValues)

//   let summ = (obj) => obj.reduce((acc, value) => acc + value  ,0 )


//   console.log(summ(orderValues));  // 150

//------------------------------------------
/*
  Напишите функцию getTotalPrice(products, order), где 
  products - объект со свойствами "имя продукта":"цена за единицу"
  order - объект со свойствами "имя продукта":"количество единиц".
  
  Функция возвращает общую сумму стоимости всех продуктов заказа.
  
  PS: используйте метод reduce
*/

// const products = {
//     bread: 10,
//     milk: 15,
//     apples: 20,
//     cheese: 30,
//     chicken: 40
// };

// const orderA = {
//     bread: 2,
//     apples: 4,
//     chicken: 1
// };

// const orderB = {
//     bread: 1,
//     milk: 2,
//     cheese: 3
// };


// let getTotalPrice = (products, order) => {
//     let productsList = Object.keys(order);
//    return productsList.reduce((acc, value) => acc + order[value]*products[value], 0)

// }

// // Вызовы функции для проверки
// console.log(getTotalPrice(products, orderA)); // 140

// console.log(getTotalPrice(products, orderB)); // 130
//---------------------------------------------------------
/*     
  Напишите функию allGuestsActive(guests), принимающую 
  один параметр guests - массив объектов гостей. 
  
  Функция должна возвращать true если значение поля isActive 
  всех объектов true, в противном случае false.
  
  PS: используйте метод every или some, никаких for!
*/

// const guestsA = [
//     { name: "Mango", isActive: true },
//     { name: "Poly", isActive: false },
//     { name: "Ajax", isActive: true }
//   ];
  
//   const guestsB = [
//     { name: "Mango", isActive: true },
//     { name: "Poly", isActive: true },
//     { name: "Ajax", isActive: true }
//   ];
// let allGuestsActive = (guests) => guests.every(elem => elem.isActive)
//   // Вызовы функции для проверки
//   console.log(allGuestsActive(guestsA)); // false
  
//   console.log(allGuestsActive(guestsB)); // true
  //-------------------------------
  