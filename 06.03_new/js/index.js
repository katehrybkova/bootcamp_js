//Сделайте функцию inArray, которая определяет, есть в массиве элемент с заданным текстом или нет. Функция первым параметром должна принимать текст элемента, а вторым - массив, в котором делается поиск. Функция должна возвращать true или false. Показать решение.
// let inArray = function (arr, str){
// if (arr.includes(str)){
//     return true
// }return false
// }
// let arr = [6541664165164986523]

// console.log(inArray(arr, '51'))
// console.log(inArray(arr, '6'))
// console.log(inArray(arr, '16'))
//--------------
// let obj = {
//     name: 'kate',
//     surname: 'hrybkova',
//     tel: 123,
// }
// let keys = Object.keys(obj)
// console.log(keys)
// obj[0] = 'myName';
// entries = Object.entries(obj)
// console.log(entries)
//-------------
// Создайте функцию isEmpty(obj), которая возвращает true, если в объекте нет свойств и false – если хоть одно свойство есть.
// let isEmpty = function(obj) {
// let values = Object.values(obj)
// if(values.length === 0) {
//     return true
// } return false
// }
// let  myObj = {
//     // name: 'kate',
//     // surname: 'hrybkova',
//     // tel: 123,
//     // city: 'Kyiv',
// }
// alert( isEmpty(myObj) )

//---------------------Сумма свойств
// важность: 5
// Есть объект salaries с зарплатами. Напишите код, который выведет сумму всех зарплат.
// Если объект пустой, то результат должен быть 0.
// Например:
// "use strict";
// var salaries = {
//   "Вася": 100,
//   "Петя": 300,
//   "Даша": 250
// };
// //... ваш код выведет 650
// P.S. Сверху стоит use strict, чтобы не забыть объявить переменные.

// let salaries = {
//   "Вася": 100,
//   "Петя": 300,
//   "Даша": 250,
// };
// let salariesArr = Object.values(salaries);
// console.log(salariesArr)
// let summ = 0;
// for(let input of salariesArr){
// summ = summ + input;
// }
// console.log(summ)
//------------
// Свойство с наибольшим значением
// важность: 5
// Есть объект salaries с зарплатами. Напишите код, который выведет имя сотрудника, у которого самая большая зарплата.

// Если объект пустой, то пусть он выводит «нет сотрудников».

// Например:

// "use strict";

// var salaries = {
//     "Вася": 100,
//     "Петя": 300,
//     "Даша": 250
// };
// let bigSalary = function (obj) {
//     let max = 0;
//     let name = '';
//     for (let key in obj) {
//         if (obj[key] > max) {
//             console.log(obj[key])
//             max = obj[key];
//             name = key
//         }
//     }    return (name)
// }
// console.log(bigSalary(salaries))
// // ... ваш код выведет "Петя"
//-----------------
// Умножьте численные свойства на 2
// важность: 3
// Создайте функцию multiplyNumeric, которая получает объект и умножает все численные свойства на 2. Например:

// до вызова
// Умножьте численные свойства на 2
// Создайте функцию multiplyNumeric, которая получает объект и умножает все численные свойства на 2. Например:

// до вызова
// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
// };

// let multiplyNumeric = function (obj, callback) {
//     for (let key in obj) {
//         if (callback(obj[key]) === true) {
//             obj[key] = obj[key] * 2
//         }
//     } return obj;
// }
// console.log(multiplyNumeric(menu, isNumeric));
// // P.S. Для проверки на число используйте функцию:
// function isNumeric(n) {
//     return !isNaN(parseFloat(n)) && isFinite(n)
// }
//----------------------
// let x = prompt('vvedite chislo');
// let max = 0;
// let number = function (a) {
//     let i = 0;

//     do {
//         if (a % 2 === 0) {
//             a = a / 2;
//             console.log(`dellenoe na 2 ${a}`)
//         } else {
//             a = a * 3 + 1;
//             if (a > max) {
//                 max = a;
//             }
//             console.log(`umnozhennoe na 3 + 1 ${a}`)
//         }
//         i += 1;
//     } while (a !== 1);
//     console.log(i);
//     return a;
// }
// console.log(number(x))
// console.log(`max: ${max}`)
//------------------------------------
// const a = {x : 1, y : 2}
// const b = {y : 3, z : 4}
// let c = {...a, ...b}
// console.log(c)
// let d = Object.assign({}, a , b)
// console.log(d)
//--------------
/*  
  Напиши функцию getAllPropValues(arr, prop), 
  которая получает массив объектов и имя ключа. 
  Возвращает массив значений определенного поля prop
  из каждого объекта в массиве
*/

// const users = [{
//         name: 'Poly',
//         age: 7,
//         mood: 'happy'
//     },
//     {
//         name: 'Mango',
//         age: 4,
//         mood: 'blissful'
//     },
//     {
//         name: 'Ajax',
//         age: 3,
//         mood: 'tired'
//     }
// ];
// let getAllPropValues = function (arr, prop) {
//     let newArr = [];
//     for (let obj of arr) {
//         if (obj.hasOwnProperty(prop)) {
//             newArr.push(obj[prop])
//         }
//     }return newArr
// }
// // // Вызовы функции для проверки
// console.log(
//     getAllPropValues(users, 'name')
// );
// // // ['Poly', 'Mango', 'Ajax']
// console.log(
//     getAllPropValues(users, 'mood')
// ); // ['happy', 'blissful', 'tired']
//   console.log(
//     getAllPropValues(users, 'active')
//   ); // []
//-----------------------------------------