'use strict';


//loops

// while

// 1) лічильник
// 2) Умова виконання циклу
// 3) Тіло циклу
// 4) Лічильник має змінюватися

// let counter = 0;
//
// let arr = [];
// while(counter < 5) {
//   let a = prompt('Enter number');
//   arr.push(a);
//   counter++;
//     // counter +=1;
//     // counter = counter + 1;
// }

// let counter = 10;
// let arr = [];
//
// do {
//   let a = prompt('Enter number');
//   arr.push(a);
//   counter++;
// } while (counter < 5)

// console.log(arr);
// let arr = [];
// for(let i = 0; i < 5; i++) {
//     let a = prompt('Enter n');
//     arr.push(+a);
// }
// console.log(arr);

// let number = 0;
// let arr = [];
// // // // поки номер меньше 3 виводь в консоль цей номер і потім збільшуй на 1
// // console.log(number < 3);
// while (number < 4) {
//     let userNumber = prompt('Enter number');
//     if(userNumber !== null && userNumber !== '') {
//       if (Number(userNumber) === 9) {
//         alert('9 це погане число');
//         number+=1;
//         continue;
//       } else {
//         arr.push(Number(userNumber));
//         number+=1;
//       }
//     }  else {
//       break;
//     }
// }
// console.log(userNumber);
// console.log(arr);

// // do while

// let number = 10;
// do {
//   console.log(number);
//   number++;
// }
// while (number < 5);

// while (number < 5) {
//   console.log(number);
//   number++;
// }
// console.log(condition);

//
// for
// особливість let i var
// let arr = [];
// for(let i = 0; i < 10; i+=1) {
//   let number = prompt('Enter number');
//   arr.push(number);
// }
// console.log(arr);

// let arr = [5, 10, 25, 68, 78, 95];
// let total = 0;
// // for(let i = 0; i <arr.length; i++) { // імперативний код
// //     total += arr[i];
// // }

// for (let el of arr) { // декларативний код
//     total += el;
// }
// console.log(total);

// let arrTenPrc = [];
// // for(let i = 0, max = arr.length; i < max; i+=1) {
// //   arrTenPrc.push(Number((arr[i]*1.1).toFixed(2)));
// // }
// // console.log(arrTenPrc);

// for(let element of arr) {
//   arrTenPrc.push(Number((element*1.1).toFixed(2)))
// }

// 1) спитатися в користувача скільки товарі він хоче купити в магазині
// 2) На основаі пункта 1 стільки разів має спрацювати цикл
// 3) Цикл має пропонувати користуівачу ввести назву покупки
// 4) Ці назви зберігати в масиві
// 5) Вивести масив з покупками по закінченю цикла в консоль.

// let number = prompt('Enter number');
// let arr = [];
// for (let i = 0; i < number; i++) {
//     let answer = prompt('Enter goods');
//     arr.push(answer);
// }
// console.log(arr);

// let arr = [];
// for(let i =0; i < Infinity; i++) {
//     let number = prompt('Enter number');
//     if(Number(number) === 9) {
//         break;
//     }
//     arr.push(number);
// }

// console.log(arr);

// let arr = [5,10,15,20,25,30,35,40,48,51];
//
// for(let i = 0; i < arr.length; i++) {
//     if(arr[i] % 2 !==0) { // пропустит итерацию(повторение) если arr[i] будет не четным
//         continue;
//     }
//     console.log(arr[i]);
// }

//

let empty = [];
let teamNumber = +prompt('Введите количество команд');
let teamAmount = +prompt('Какое количество играков?');

// сделаем цикл, который будет присваивать порядковый номер
// let i = 0;
// let first = [];
// for(let a = 1;a <= teamAmount;a++) {
//   first.push(a);
// }
// console.log(first);
// for(let i = 0; i < teamNumber;i++){
//     let first = [];
//     for(let a = 1;a <= teamAmount;a++) {
//        first.push(a+i*teamAmount);
//     }
//     console.log(first);
//     empty.push(first);
// }
// console.log(empty);
// console.log(empty[1][1][0]);
