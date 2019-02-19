// 'use strict'
// var year = 2018;
// let month = "November";
// const date = 27;
// let number = 10;
// // let Number = 50;
// let numBer = 100;
// let peoplename = "Bob";
// let peopleName = "Bob";
// const UAH = 8;


// // let summ = number * Number + numBer;
// // console.log('summ', summ);

// // alert('summ', summ);
// // const answer1 = confirm('Are you ready? ${month}');
// // const answer2 = prompt('How are you');
a

// // console.log('answer1', answer1);
// // console.log('answer2', answer2); 

// console.log(typeof number);
// console.log(typeof month);
// console.log(typeof month === typeof number);

// console.log(month.lenght);
// console.log(month.indexOf('N'));
// console.log(month.indexOf('w'));
// console.log(month.includes('Now'));
// console.log(month.includes('now'));


// const fontSize = '5.5px';
// const usersLenght = 20;


// console.log('преобразхование в целое число', Number.parseInt(fontSize)); // 5
// console.log('преобразование в число с дробью', Number.parseFloat(fontSize)); // 5.5

// console.log('Проверка на число', Number.isNaN(Number(fontSize)));
// console.log('Проверка на число', Number.isNaN(usersLenght));

// const a = 0.3;
// const b = 0.5;
// console.log('a + b', a + b);
// console.log('a + b', (a + b).toFixed(10));




// const text = 'Преобразование в целое число';
// console.log('Преобразование к нижнему регистру', text.toLowerCase());
// console.log('Преобразование к верхнему регистру', text.toUpperCase());


// const name = 'John';
// const surname = 'Connor';
// const years = 40;
// const height = 180;

// console.log('Message:',
//     `Hello ${name} ${surname}. I'm ${years} and ${height +2 + 'sm'}.`
// )



// const num = 25;
// const result = num < 30 && num > 20;
// console.log(result); // true

// const numb = 25;
// const resultat = numb < 30 && num > 26;
// console.log(resultat); // falce

// const obj = {
//     id: 'asdasd',
//     name: 'Alex',
//     role: 'admin',
//     age: 30,
// };
// const resultObj = obj.role === 'admin' || obj['role'] === 'moderator';

// console.log(resultObj);

// if (resultObj) {
//     const name = 'Bob';
// }

// if (resultObj !== true) {
//     var varName = 'Bob';
// }

// const resultPrompt = prompt('Введите значение');

// if (resultPrompt !== 'admin' && obj.age) {
//     alert('нет прав');
// } else {
//     alert('добро пожалывать');
// };

// console.log('name', name);
// // console.log(surname);
// console.log('varName', varName);

// // const surname = 'Dilslsl';


// let season;
// const monthName = "January";

// if (monthName === "June") {
//     season = "summer";
// } else if (monthName === "May") {
//     season = "spring";
// } else if (monthName === "September") {
//     season = "autumn";
// } else {
//     season = "winter";
// }


// let season;
// const monthName = "January";

// if (monthName === "June" || monthName === "July" || monthName === "August") {
//  season = "summer";
// } else if (monthName === "May") {
//  season = "spring";
// } else if (monthName === "September") {
//  season = "autumn";
// } else {
//  season = "winter";
// }


// const monthName = "January";
// let result;

// if (monthName === "June") {
//   result = "summer";
// } else {
//   result = "winter";
// }

// // Конструкция выше записанная тернарным оператором
// const season = monthName === "June" ? "summer" : "winter"; //если июнь то лето если любое другое значение то зима


// let value = 0;
// value +=50;
// value +=50;
// value -=30;

// console.log ('value', value);




// let guest, name;
// name = 'Mango';
// guest = 'Mango';
// console.log(guest);

/* 
  Напишите скрипт который:
  - при загрузке страницы спрашивает имя пользователя (используйте prompt)
  - после того как было введено имя показывает alert с тем что ввели в prompt
*/

// const name = ptompt ('Введите имя:');
// alert (name);


/*
  Есть три переменные name, date и roomType, содержащие 
  имя гостя, дату его прибытия на отдых и тип комнаты отеля.
  
  Используя шаблонные строки необходимо записать 
  в перменную message сообщение формата:
  "имя гостя" прибывает на отдых "дата прибытия" в "тип комнаты".
  
  Найти ошибки в коде и исправить их, при верном решении 
  в консоль будет выведена строка идентичная той что 
  напротив console.log
*/

// const name = 'Mango';
// const date = '14/08/2031';
// const roomType = 'люкс';

// const message = `${name} прибывает на отдых ${date} в ${roomType}`;

// console.log(message); // Mango прибывает на отдых 14/08/2031 в люкс.
/*
  Есть 3 переменные в которых хранится  размер составляющих 
  блочной модели в формате Npx, где N это целое число.
  
  Используя эти переменные, запишите в переменную totalWidth 
  общую ширину блока в формате Npx.
  
  К примеру "сумма" '20px' и '30px' будет равна '50px'.
  
  Если все верно, то в консоли будет выведена строка '125px'
*/

const padding = "20px";
const border = "5px";
const contentWidth = "100px";

let totalWidth;
totalWidth = Number.parseInt(padding) + Number.parseInt(border) + Number.parseInt(contentWidth) + 'px';


console.log(totalWidth); // '125px'
