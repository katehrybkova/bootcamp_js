'strict'

/*  
// --------------3 модуль. 3е задание---------------

  Создайте фукнцию findLongestWord(str),
  которая получает аргументом произвольную строку и
  возвращает самое длинное слово в этой строке.   
  
  Важное условие - в строке могут быть только пробелы,
  символы букв и цифр!
*/
// const findLongestWord = function(str) {
//     let mass = str.split(' ')
//     // console.log(mass);
//     let maxWord = '';
//     for( let word of mass) {
//       if ( word.length > maxWord.length) {
//         maxWord = word 
//           }
//     }

//     return maxWord;




//   };

//   // Вызовы функции для проверки
//   console.log(
//     findLongestWord("The quick brown fox jumped over the lazy dog")
//   ); // вернет 'jumped'

//   console.log(
//     findLongestWord("Google do a roll")
//   ); // вернет 'Google'

//   console.log(
//     findLongestWord("May the force be with you")
//   ); // вернет 'force'




// ---------------Вариант Макса---------------
// function findLongestWord(str) {
//   let string = str.split(' ');
//   let longestWord = 0;
//   let word;
//   for (let i = 0; i < string.length; i++){

//     if (string[i].length > longestWord) {
//       longestWord = string[i].length;
//       word = string[i]
//     }
//   }
//   return word
// }


//----------------probnoe



// const arr1 = [1 ,2 ,3 ,6 ,8 ,4];
// const newArr1 = findNumbers(arr1, 3);
// console.log(newArr1)

// const arr2 = [4 ,5 ,7 ,9 ,2 ,1];
// const newArr2 = findNumbers(arr2, 3);
// console.log(newArr2)




// const findNumbers = function(arr, value){ //-------to zhe samoe s pomoshiu funktsii
// const numbers = [];
// for(let item of arr) {
//   if (item > value) {
//     numbers.push(item);
//   }
//   return numbers;
// }
// }



// const arr1 = [1 ,2 ,3 ,6 ,8 ,4];
// const arr2 = [4 ,5 ,7 ,9 ,2 , 1];
// const newArr = [];
// for (let item of arr1) { //---------perebor s pomoshiu 'for if'
//   if (item > 3) {
//     newArr.push(item);
//   }
// }
// console.log(newArr)
// const newArr2 = [];
// for (let item of arr2) {
//   if (item > 3) {
//     newArr2.push(item);
//   }
// }
// console.log(newArr2)




//Задача. Выведите столбец чисел от 1 до 50.

//Решение: воспользуемся циклом while (отделим числа тегом br друг от друга, чтобы получить столбец, а не строку):

// for ( let i = 0; i < 50; i += 1) {
//   console.log(i);
// }

//---------odno i tozhe

// let i = 0;
// while ( i < 50) {
//   console.log(i);
//   i += 1;
// }



// Задача. Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for выведите все эти элементы на экран.
// const arr = [1, 2, 3, 4, 5];
// for( let i = 0; i < arr.length; i++) {
//   console.log(i,':', i)
// }



const hotel = {
  name: 'HappyHotel',
  stars: 6,
  capacity: 25,
}
console.log(hotel)


const user = {
  name: 'Evgen',
  age: 23,
  gender: 'man',
  getInfo: function () {
    return `name: ${this.name} age: ${this.age} gender: ${this.gender} `

  },
};
console.log(user.name);
console.log(user['age']);
console.log(user['gender']);

user.age = 26;
user.height = 180;

console.log('user', user);
console.log(user.getInfo());
console.log('------------------')

for(const key in user) {
  console.log(`${key}: ${user[key]}`)
}


console.log('------------------')



const userArr = Object.entries(user);
for (const el of userArr) {
  console.log(`${el[0]}: ${el[1]}`)
}
console.log('---------sliyanie---------')

const first = {name: 'Tony'};
const last = {lastName: 'Stark'};

const person = Object.assign(first, last);
console.log(person); // {name: 'Tony', lastName: 'Stark'}

// target (first) тоже изменился
console.log(first); // first = {name: 'Tony', lastName: 'Stark'}
console.log(last); 

console.log('---------dobavlenie vtorogo k pervomu---------')
const defaultSettings = {
  name: "Mango",
  age: 2,
  status: "happy",
  isActive: false,
  isAdmin: false,
};

const updatedSettings = {
  age: 3,
  status: "cheerful",
  isActive: true,
};

Object.assign(defaultSettings, updatedSettings);

console.log(defaultSettings);
// {
//  name: "Mango",
//  age: 3,
//  status: "cheerful",
//  isActive: true,
//  isAdmin: false
// }
console.log('---------neponiatno---------')

// const first = {name: 'Tony'};
// const last = {lastName: 'Stark'};

// const person = Object.assign(first, last);
// console.log(person); // {name: 'Tony', lastName: 'Stark'}
// console.log(first);
// console.log(last);
// // target (first) тоже изменился
// console.log(first); // first = {name: 'Tony', lastName: 'Stark'}
// const a = Object.assign({foo: 0}, {bar: 1}, {baz: 2});
// console.log(a); // {foo: 0, bar: 1, baz: 2}
// const a = Object.assign({foo: 0}, {foo: 1}, {foo: 2});
// console.log(a);// {foo: 2}
// const obj = {person: 'Thor Odinson'};
// const clone = Object.assign({}, obj);
// console.log.log(clone); // {person: 'Thor Odinson'}

// console.log('-------spreaaaaaaad-----------')
// const a = {x: 1, y: 2};
// const b = {x: 0, z: 3};

// const c = Object.assign({}, a, b);
// console.log(c); // {x: 0, y: 2, z: 3}

// То же самое используя оператор spread ...
// const c = { ...a, ...b };

// console.log(c); // {x: 0, y: 2, z: 3}

const arr1 = [1,2,3];
const arr2 = [4,5,6];

const newArr = [...arr1, ...arr2];
console.log(newArr);

//---------parnie chisla
/*
  Напишите функцию checkNumberType(num)

  Функция получает число num как аргумент и возвращает
  строку "Even" если число четное и строку "Odd" если не четное.
*/

// Вызовы функции для проверки

// const checkNumberType  = function (num) {
//   const even = num % 2 === 0;
//   const odd = num % 2 === 1; // или можно так написать: const odd = num % 2 !==0;
//
//   // return even ? 'even' : 'odd';  // это через тернарный оператор первый вариант
//
//   if (even === true){   // Это второй вариант
//     return('Even');
//   }
//   else {
//     return ('Odd')
//   }
//
// }
// console.log( checkNumberType(2) ); // 'Even'
//
// console.log( checkNumberType(46) ); // 'Even'
//
// console.log( checkNumberType(3) ); // 'Odd'
//
// console.log( checkNumberType(17