// let value = 20;

// const fn = function () {
//     let value = 150;
//     console.log(value + 10);
// };
// fn();




// let a = 10;

// const fn = function (value) {
//   const ifValue = Number(value) || a;
//   if(!Number.isNaN(ifValue)) {
//     console.log(ifValue + 10);
//   } else {
//     console.log('value is NaN');
//   }
// };


// fn();

// let a = 'HELLO';

// const fn = function (value) {
//     const ifValue = Number(value) || a;
//     if(!Number.isNaN(ifValue)) {
//       console.log(ifValue + 10);
//     } else {
//       console.log('value is NaN');
//     }
//   };


//   fn();

//   const printMessage = function (callback) {
//     const message = callback();
//     console.log( message );
//   };

//   const getMessage = function () {
//     return "Welcome to the jungle!";
//   }

//   printMessage(getMessage); // "Welcome to the jungle!"


/*
  Напишите функцию formatString(str)
  
  - Функия принимает на вход строку str
  - Если длина строки не превышает 40 символов, функция возвращает ее. 
  - Если длина больше 40 символов, то функция обрезает строку до 40-ти
    символов и добавляет в конец строки троеточие '...', после чего 
    возвращает укороченную версию.
*/

// Вызовы функции для проверки




//   const formatString = function(str) {
//       if(str.length < 40) {
//           console.log(`str if < 40`, str)
//           return str;

//       }
//       else {
//         let newStr = str.slice(0, 40) + '...';
//         console.log(`str if > 40`, str)
//         return (newStr);
//       }
//   }

//   console.log(
//     formatString("Curabitur ligula sapien, tincidunt non.")
//   ); // вернется оригинальная строка

//   console.log(
//     formatString("Vestibulum facilisis, purus nec pulvinar iaculis.")
//   ); // вернется форматированная строка

//   console.log(
//     formatString("Curabitur ligula sapien.")
//   ); // вернется оригинальная строка

//   console.log(
//     formatString("Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.")
//   ); // вернется форматированная строка





/*
  Напишите функцию checkForSpam(str)
  
  Функция принимает 1 параметр str - строку,
  и проверять ее на содержание слов: spam и sale
  
  Если нашли зарещенное слово то функция возвращает true,
  если запрещенных слов нет функция возвращает false
  
  PS: слова могут быть в произвольном регистре
*/

// Вызовы функции для проверки


// function checkForSpam(str) {
//     // if( str.toLowerCase().includes('spam') || str.toLowerCase().includes('sale')) {
//     //   return true
//     // } else {
//     //   return false
//     // }
//     return ( str.toLowerCase().includes('spam') || str.toLowerCase().includes('sale'))
//   }


// console.log(checkForSpam('Latest technology news')); // false

// console.log(checkForSpam('JavaScript weekly newsletter')); // false

// console.log(checkForSpam('Get best sale offers now!')); // true

// console.log(checkForSpam('[SPAM] How to earn fast money?')); // true








// const map = (arr, callback) => {
//     const resultArr = [];

//     for(const element of arr) {
//       const result = callback(element);
//       resultArr.push(result);
//     }

//     return resultArr;
//   };

//   const double = val => val * 2;

//   const triple = val => val * 3;

//   const numbers = [1, 2, 3, 4, 5];

//   const doubledNumbers = map(numbers, double);
//   console.log(doubledNumbers); // [2, 4, 6, 8, 10]

//   const tripledNumbers = map(numbers, triple);
//   console.log(tripledNumbers); // [3, 6, 9, 12, 15]



// const map = (arr, callback) => { // обьявляем функцию с аргументами arr(массивом), callback(функцией)
//     const resultArr = []; // обьявляем пустой массив, в который будет записывать новые эл-ты

//     // перебираем, входящий при вызове функции массив, записанный в аргумент arr. 
//     // в теле цикла елементы пропускаем через функцию callback, обьявленную в аргументах
//     // и записываем результат callback-функции в переменную result.
//     // поседним этапом цикла - записываем result в новый массив, выходим из массива.
//     // последним этапом функции map будет возврат(return) переменной resultArr.
//     for(const element of arr) {
//       const result = callback(element);
//       resultArr.push(result);
//     }
//     return resultArr;
//   };



// const map = (action, arr) => {
//     const newArr = [];
//     for (const element of arr) {
//         const newElement = action(element);
//         newArr.push(newElement);
//     }
    
    
//     return newArr;
// }
// const double = (number) => number *2;
// const triple = (number) => number*3;

// const numbers = [1, 2, 3, 4, 5];

// const doubledNumbers = map(double, numbers);
// console.log(doubledNumbers);
// const tripledNumbers = map(triple, numbers);
// console.log(tripledNumbers);













