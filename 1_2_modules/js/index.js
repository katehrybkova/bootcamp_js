//-------------ternarniy operator

//у нас есть семья из трёх человек: Игорь Ира и Коленька
//Дома в данный момент мама и Коленька
//спросить кто пришел если кто-то из семьи то пускаем
//если кто-то чужой спрашиваем "к кому пришёл?"
//
// let input = prompt('vvedite imya');
// const mother = 'Ira';
// const father = 'Igor';
// const child = 'Kolenka';
// if (input === 'Igor' || input === 'Ira' || input === 'Kolenka') {
//     alert('privet, zahodi')
// } else {
//     let kKomu = prompt('k komu prishel')
//     if (kKomu === 'Igor') {
//         alert('Igoria netu doma')
//     }
//     if (kKomu.includes('Ira')) {
//         alert('dobro pozhalovat no bez surprizov')
//     } else {
//         alert('ne otkroem')
//     }
// }
// if (input !== null) {
//     if (input === 'Igor' || input === 'Ira' || input === 'Kolenka') {
//         alert('privet, zahodi');

//     } else {
//         let kKomu = prompt('k komu prishel');
//         switch (true) {
//             case kKomu.includes(father):
//                 alert('ego net ddoma');
//                 break;
//             case kKomu.includes(mother):
//                 alert('oberezhnishe');
//                 break;
//             case kKomu.includes(child):
//                 alert('on uchit uroki');
//                 break;
//                 default: alert('don`t worry')

//         }
//     }
// }

//-------------------
///*
// - Объявите две переменные: guest и name
// - В переменную name запишите строку 'Mango'
// - Скопируйте значение из name в guest
// - Выведите в консоли значение переменной guest (должно вывести 'Mango')
// */

// let guest ;
// let name = 'Mango';
// guest = name;
// console.log('guest')

//---------------------
/* 
  Напишите скрипт который:
  - при загрузке страницы спрашивает имя пользователя (используйте prompt)
  - после того как было введено имя показывает alert с тем что ввели в prompt
*/
// let name = prompt('enter your name');
// alert(name)
//-------------------
/* 
  Создайте срипт поиска отелей, где пользователь 
  с помощью prompt должен ввести число от 1 до 5
  
  Проверить что пользователь ввел именно цифру от 1 до 5
  
  Если пользователь нажал Cancel, то вывести 
  alert с текстом 'очень жаль, приходите еще!'
  
  Если было введено что либо кроме чисел 1-5, 
  вывести alert с текстом 'Неверный ввод, возможные варианты 1-5!'
  
  Если же пользовател ввел валидное число, 
  в зависимости от числа, используя switch, 
  вывести alert с одной из строк:
  
    1 - "Каталог хостелов" 
    2 - "Каталог бюджетных отелей"
    3 - "Каталог отелей ***"
    4 - "Каталог отелей ****"
    5 - "Каталог лучших отелей"
*/

// let enterNumber = Number(prompt('vvedite chislo'));
// if (enterNumber) {
//     if (enterNumber <= 5 && enterNumber >= 0) {
//         switch (enterNumber) {
//             case 1:
//                 alert('Каталог хостелов');
//                 break;
//             case 2:
//                 alert('Каталог бюджетных отелей');
//                 break;
//             case 3:
//                 alert('Каталог отелей ***');
//                 break;
//             case 4:
//                 alert('Каталог отелей ****`');
//                 break;
//             case 5:
//                 alert('Каталог лучших отелей`');
//                 break;
//         }
//     }
//     if(!Number.isNaN(enterNumber)) {
//         alert('Неверный ввод, возможные варианты 1-5!');
//     }
//     else {
//         alert('Неверный ввод, возможные варианты 1-5!');
//     }
// } else {
//     alert('очень жаль, приходите еще!');
// }

//------------------2 modul
///*
// Есть массив имен пользователей.
// В первом console.log вывести длину массива.

// В последующих console.log дополнить конструкцию
// так, чтобы в консоль вывелись указаные в комментариях 
// элементы массива.
// */

// const users = ['Mango', 'Poly', 'Ajax', 'Chelsey'];

// console.log(users); // 4

// console.log(users[1]); // Poly
// console.log(users[3]); // Chelsey
// console.log(users[0]); // Mango
// console.log(users[2]); // Ajax

//--------------------------------------------------

/* Есть массив имен пользователей */

// const users = ["Mango", "Poly", "Ajax", "Chelsey"];

// /* Используя методы массива, последовательно выполнить следующие операции */
// users.shift();
// // Удалить из начала массива нулевой элемент
// console.log(users); // ["Poly", "Ajax", "Chelsey"]
// users.pop()
// // Удалить из конца массив последний элемент
// console.log(users); // ["Poly", "Ajax"]
// users.unshift('lUSIA')
// // Добавить в начало массива любое имя
// console.log(users); // ["добавленое имя", "Poly", "Ajax"]
// users.push('Taras', 'Радион')
// // Добавить в конец массива два любых имени за одну операцию
// console.log(users); //  ["добавленое ранее имя", "Poly", "Ajax", "имя 1", "имя 2"]

//---------------------------

/*
  Попросить пользователя ввести произвольную строку
  и записать ее в переменную string
  
  PS: для перебора массива используте цикл for или for...of
*/

// let string = prompt('vvedite stroku') 
// let arr;
// arr = string.split(' ');


// // Разбить строку в массив, пусть разделителем будет пробел, и записать в переменную arr
// console.log(arr);

// // Вывести в консоли общую длину массива arr
// console.log(arr.length);

// // Используя цикл, вывести в консоль все индексы массива arr

// for (let input of arr) {
//     console.log(arr.indexOf(input));
// }
// console.log();

// // Используя цикл, вывести в консоль все элементы массива arr
// for(let input of arr) {
//      console.log(input);
//      }
// console.log();

// // Используя цикл, bывести в консоли все пары индекс:значение массива arr
// for(let input of arr) {
//     console.log(`${input} : ${arr.indexOf(input)} `);
//     }
// console.log();
//-----------------------------------
/*
  Напишите цикл, который предлагает, через prompt, ввести число больше 100. 
  
   Если посетитель ввёл другое число или нажал Cancel – попросить ввести ещё раз, 
   и так далее, пока не введет число больше 100.
  
  Предполагается, что посетитель вводит только числа, обрабатывать невалидный ввод 
  вроде строк 'qweqwe' в этой задаче необязательно.
  
  PS: используйте цикл do...while
*/
// let enterNumber

// do {
//     enterNumber = Number(prompt('enter number more then 100'));
// alert('vvedite eshe raz')
// }
// while(enterNumber < 100 && enterNumber !== null)

//-------------------------------------
///*
// Напишите скрипт, который выводит через console.log все 
// числа от min до max, с двумя исключениями: 
  
//   - Для чисел, нацело делящихся на 3, вместо числа выводится строка 'Fizz'
  
//   - Для чисел, нацело делящихся на 5, но не на 3, вместо числа выводится строка 'Buzz'
  
// PS: используйте цикл for
// */

// const min = 1;
// const max = 100;
// for (let i = min; i < max; i+=1) {
//     if(i % 3 === 0) {
       
//         console.log(`${i} 'Fizz'`)

//     }
//     if(i % 5 === 0 && i % 3 !== 0){
       
//         console.log(`${i} 'Buzz'`)  
//     }
//     else{
//         console.log(i)
//     }
// }

//-------------------------
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
// for (let number of numbers) {
//     if(number > num) {
//         newArray.push(number)
//     }
// }
// console.log(newArray)

//-------------------------
///*
// Напишите скрипт, который проверяет произвольную строку 
// в переменной string и находит в ней самое длинное слово,
// записывая его в переменную longestWord.
// */

// const string = "May the force be with you dfghjkl";
// let longestWord;
// let arr = string.split(' ');
// console.log(arr)

// let i = 0;
// for(let input of arr) {
// if( i < input.length) {
//     i = input.length;
//    longestWord = input;
// }
// }console.log(longestWord)



// console.log(longestWord); // 'force'
//------------------------------
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
// let enterNumber;
// let arr = [];

// do {
//   enterNumber = prompt("vvedite chislo");
//   if (enterNumber !== null) {
//     arr.push(Number(enterNumber));
//     console.log(arr);
//   }
// } while (enterNumber !== null);

// let summ = 0;
// if (arr.length > 0) {
//   for (let input of arr) {
//     summ = summ + input;
//   }
//   console.log(`'summa vseh chisel:' ${summ}`);
// }