'use strict'


// const users = ['Mango', 'Poly', 'Ajax', 'Chelsey'];
// console.log(users.lenght); // 4
// console.log(users[1]); // Poly
// console.log(users[3]); // Chelsey
// console.log(users[0]); // Mango
// console.log(users[2]); // Ajax



/* Есть массив имен пользователей */

// const users = ["Mango", "Poly", "Ajax", "Chelsey"];

// /* Используя методы массива, последовательно выполнить следующие операции */

// // Удалить из начала массива нулевой элемент
// users.shift();
// console.log(users); // ["Poly", "Ajax", "Chelsey"]

// // Удалить из конца массив последний элемент
// users.pop();
// console.log(users); // ["Poly", "Ajax"]

// // Добавить в начало массива любое имя
// users.unshift('Oleg')
// console.log(users); // ["добавленое имя", "Poly", "Ajax"]

// // Добавить в конец массива два любых имени за одну операцию
// users.push('Wass', 'Up')
// console.log(users); //  ["добавленое ранее имя", "Poly", "Ajax", "имя 1", "имя 2"]














// /*
//   Попросить пользователя ввести произвольную строку
//   и записать ее в переменную string
  
//   PS: для перебора массива используте цикл for или for...of
// */

// let string = 'Какой то текст для масива и добавления строки';
// let arr;

// // Разбить строку в массив, пусть разделителем будет пробел, и записать в переменную arr
// arr = string.split(' ');
// console.log(arr);

// // Вывести в консоли общую длину массива arr
// console.log(arr.length);

// // Используя цикл, вывести в консоль все индексы массива arr
// for(let i = 0; i < arr.length; i +=1) {
//   console.log(arr.indexOf(arr[i]));
// }

// // Используя цикл, вывести в консоль все элементы массива arr
// for(let i = 0; i < arr.length; i +=1) {
//   console.log(arr[i]);
// }


// // Используя цикл, bывести в консоли все пары индекс:значение массива arr

// for(const i of arr) {
//   console.log(arr.indexOf(i) + ':' + i);
// }
// console.log();





// /*
//   Напишите цикл, который предлагает, через prompt, ввести число больше 100. 
  
//    Если посетитель ввёл другое число или нажал Cancel – попросить ввести ещё раз, 
//    и так далее, пока не введет число больше 100.
  
//   Предполагается, что посетитель вводит только числа, обрабатывать невалидный ввод 
//   вроде строк 'qweqwe' в этой задаче необязательно.
  
//   PS: используйте цикл do...while
// */

// let biggest = 0;
// let minNum = 100;

// do {
//   biggest = Number(prompt('Введите число больше 100'));
// } while (biggest <=minNum);






/*
  Напишите скрипт, который выводит через console.log все 
  числа от min до max, с двумя исключениями: 
    
    - Для чисел, нацело делящихся на 3, вместо числа выводится строка 'Fizz'
    
    - Для чисел, нацело делящихся на 5, но не на 3, вместо числа выводится строка 'Buzz'
    
  PS: используйте цикл for
*/

// const min = 1;
// const max = 100;


// for (let i = min; i < max; i +=1) {
//   if(i%3 === 0) {
//     console.log('Fizz');
//   }
//   else if(i % 5 === 0 && i % 3 !== 0) {
//     console.log('Buzz');
//   }
//   else {
//     console.log(i);
//   }
// }








/*
  Напишите скрипт, который выбирает из массива numbers 
  все числа, которые больше чем значение переменной num, 
  записывая эти числа в массив newArray.
      
  В результате в массиве newArray будут все подходяшие числа.
      
  PS: используйте цикл for или for...of и оператор ветвления if
*/

// const numbers = [1, 3, 17, 5, 9, 14, 8, 14, 34, 18, 26];
// const num = 10;
// const newArray = [];


// for(const value of numbers) {
//   if(value > num) {
//     newArray.push(value);
//   }
// }
// console.log(newArray);









// /*
//   Напишите скрипт, который проверяет произвольную строку 
//   в переменной string и находит в ней самое длинное слово,
//   записывая его в переменную longestWord.
// */

// const string = "May the force be with you";
// let longestWord;

// const newArray = string.split(' ');
// longestWord = newArray[0];
// for(const value of newArray) {
//   if(value.length > longestWord.length){
//     longestWord = value;
//   }
// }
// console.log(longestWord); // 'force'









/*
  Напишите скрипт который:
  
  - Запрашивает по очереди числа при помощи prompt и сохраняет их в массиве.
    Используйте do...while.
  - Проверять что пользователь ввел не число не обязательно
  - Заканчивает запрашивать числа как только пользователь нажмёт Cancel.
  - После того как ввод был завершен, если массив не пустой, 
    скрипт выводит сумму всех значений массива: "Сумма: <сумма всех значений в массиве>"
    Используйте цикл for...of
*/


// let num = [];
// let ask
// let sum = 0;
// do {
//   ask = Number(prompt('Введите цыфру:'));
//   if (ask !== 0) {
//     num.push(ask);
//   }
//   console.log(ask);
//   console.log(num);
// } while(ask);

// if(num.length !== 0) {
//   for (const iteration of num) {
//     sum += iteration;
//   }
// }
// console.log('The sum is: ' + sum);

let tes = prompt('enter');
console.log(typeof(test));
let newStr = Number('test');
console.log(typeOf(newStr));
console.log(typeOf(test));


let newMas = ['maksim', 'igor', 'vasia']