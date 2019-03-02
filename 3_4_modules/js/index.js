/*
  Напишите функцию checkNumberType(num)
  
  Функция получает число num как аргумент и возвращает 
  строку "Even" если число четное и строку "Odd" если не четное.
*/

// Вызовы функции для проверки

// const checkNumberType = function(num) {
// if(num % 2 === 0) {
//     return "even"
// }
// else {
//     return "odd"
// }
// }
// console.log( checkNumberType(2) ); // 'Even'
// console.log( checkNumberType(46) ); // 'Even'
// console.log( checkNumberType(3) ); // 'Odd'
// console.log( checkNumberType(17) ); // 'Odd'
//--------------------------------------------
/*
  Напишите функцию formatString(str)
  
  - Функия принимает на вход строку str
  - Если длина строки не превышает 40 символов, функция возвращает ее. 
  - Если длина больше 40 символов, то функция обрезает строку до 40-ти
    символов и добавляет в конец строки троеточие '...', после чего 
    возвращает укороченную версию.
*/

// const formatString = function (str) {
//  if(str.length >= 40) {
//      return str.slice(0,39) + '...';
//  }
// return(str)
// }
// // Вызовы функции для проверки
// console.log(
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


//--------------------
/*
  Напишите функцию checkForSpam(str)
  
  Функция принимает 1 параметр str - строку,
  и проверять ее на содержание слов: spam и sale
  
  Если нашли зарещенное слово то функция возвращает true,
  если запрещенных слов нет функция возвращает false
  
  PS: слова могут быть в произвольном регистре
*/
// const checkForSpam = function(str) {

//     if(str.toLowerCase().includes('spam') || str.toLowerCase().includes('sale') ) {
//         return  true
//     }
//    return false
// }

// // Вызовы функции для проверки
// console.log( checkForSpam('Latest technology news') ); // false
// console.log( checkForSpam('JavaScript weekly newsletter') ); // false
// console.log( checkForSpam('Get best sale offers now!') ); // true
// console.log( checkForSpam('[SPAM] How to earn fast money?') ); // true

//-------------------------
/*  
  Написать функцию, getPx(str) 

  Функция getPx должна получать строку вида '10px',
  проверять была ли передана строка, если да, 
  возвращать только числовую составляющую, к примеру 10.
    
  Если была передана не строка, функция возвращает null.
*/
// const getPx = function(str) {
//     if(typeof str === 'string'){
// return parseFloat(str)
//     }
//     return null
// }
// // Вызовы функции для проверки
// console.log( getPx("10px") === 10 ); // должно быть:  true
// console.log( getPx("10.5") === 10.5 ); // должно быть:  true
// console.log( getPx("0") === 0 ); // должно быть:  true
// console.log( getPx(-1) ); // должно быть:  null
// console.log( getPx(10) ); // должно быть:  null
//--------------------------------------------------
/*  
  Создайте фукнцию findLongestWord(str),
  которая получает аргументом произвольную строку и
  возвращает самое длинное слово в этой строке.   
  
  Важное условие - в строке могут быть только пробелы,
  символы букв и цифр!
*/
// const findLongestWord = function (str) {
//     let arr = str.split(' ');
//     let longestWord = '';
//     for (let input of arr) {
//         if (input.length > longestWord.length) {
//             longestWord = input;
//         }
//     }
//     return longestWord;
// }

// // Вызовы функции для проверки
// console.log(
//     findLongestWord("The quick brown fox jumped over the lazy dog")
// ); // вернет 'jumped'

// console.log(
//     findLongestWord("Google do a roll")
// ); // вернет 'Google'

// console.log(
//     findLongestWord("May the force be with you")
// ); // вернет 'force'

//-------------------------------
/*  
  Создайте функцию findLargestNumber(numbers), 
  которая получает массив чисел numbers, и возвращает 
  самое большое число в массиве.
*/
// const findLargestNumber = function(numbers) {
//     let summ = 0;
//     for(let input of numbers) {
//         if (input > summ) {
//             summ = input;
//         }
//     }return summ
// }
// // Вызовы функции для проверки
// console.log(
//     findLargestNumber([1, 2, 3])
//   ); // вернет 3 
//   console.log(
//     findLargestNumber([27, 12, 18, 5])
//   ); // вернет 27
//   console.log(
//     findLargestNumber([31, 128, 14, 74])
//   ); // вернет 128
//---------------------------------------------------
/*  
  Есть массив уникальных чисел uniqueNumbers.
  
  Написать функцию, addUniqueNumbers(...), 
  которая получает произвольное кол-во чисел как аргументы, 
  и добавляет в массив uniqueNumbers только уникальные,
  а те которые в массиве уже есть игнорирует.
*/
// const addUniqueNumbers = function () {  
//     for (let el of arguments) {
//         if (!uniqueNumbers.includes(el)) {
//             uniqueNumbers.push(el);
//         }
//     }
//     return uniqueNumbers;
// }
// const uniqueNumbers = [2, 1, 4, 9];

// // Вызовы функции для проверки
// addUniqueNumbers(1, 2, 3);
// console.log(
//     uniqueNumbers
// ); // [2, 1, 4, 9, 3]

// addUniqueNumbers(12, 2, 3, 19);
// console.log(
//     uniqueNumbers
// ); // [2, 1, 4, 9, 3, 12, 19]

// addUniqueNumbers(4, 5, 12, 3, 1, 2, 8);
// console.log(
//     uniqueNumbers
// ); // [2, 1, 4, 9, 3, 12, 19, 5, 8]




//----------------------------------
/*  
  Напишите скрипт, который, для объекта user, последовательно: 
  
    - добавляет поле mood со значением 'happy'
    
    - заменяет значение hobby на 'javascript'
    
    - удаляет свойство premium
    
    - выводит содержимое объекта user в формате ключ:значение 
      используя цикл for...in
    
    - выводит содержимое объекта user в формате ключ:значение 
      используя Object.keys и for...of
    
    - выводит содержимое объекта user в формате ключ:значение 
      используя Object.entries и for...of
*/

// const user = {
//     name: "Mango",
//     age: 20,
//     hobby: "html",
//     premium: true
//   };
//   user.mood = 'happy';
//   user.hobby = 'javascript';
//   delete user.premium;
//   console.log('-----------------')

//   for(let keys in user) {
//       console.log(`${keys} : ${user[keys]}`)
//   }
// console.log('-----------------')
// let arr = Object.keys(user)
// for (let element of arr) {
// }console.log(`element , ':', user(element)`)
// console.log(arr)
// console.log('-----------------')
// let arr2 = Object.entries(user);
// console.log(arr2);
// for(let element of arr2) {
//     console.log(element[0], ':', element[1])
// }
// console.log('-----------------')
//   console.log(user)
//---------------------\/*
//   Напиште скрипт который определит и выведет в консоль 
//   имя сотрудника который выполнил больше всех задач.

//   Сотрудники и кол-во выполненых задач содержатся 
//   как свойства объекта в формате "имя":"кол-во задач"
// */

//----------------------------
/*  
  Создайте функцию isObjectEmpty(obj), которая получает 
  один аргумент obj - объект, и проверяет пуст ли он (есть ли в нем свойства).
  
  Возвращает true если объект пустой, false если не пустой.
*/
// u kogo bolshe zarplata
//   ann: 29,
//   david: 35,
//   helen: 1,
//   lorence: 99
// };
// let max = 0;
// let best;

// for (let kays in tasksCompleted){
//   if( tasksCompleted[kays] > max){
//     best = kays;
//     max = tasksCompleted[kays];
//   }
// }
// console.log(best, ':', max);
//-----------------------------------
/*  
  Напишите функцию countProps(obj),
  считающую кол-во свойств в объекте.
  Функция возвращает количество свойств.
*/


// let countProps = function (obj) {
//     let count = 0;
//     for (const elem in obj) {
//         count++;

//     }
//     return count
// }
// // Вызовы функции для проверки
// console.log(
//     countProps({})
// ); // 0

// console.log(
//     countProps({
//         a: 1,
//         b: 3,
//         c: 'hello'
//     })
// ); // 3
//--------------------------


/*  
  Создайте функцию isObjectEmpty(obj), которая получает 
  один аргумент obj - объект, и проверяет пуст ли он (есть ли в нем свойства).
  
  Возвращает true если объект пустой, false если не пустой.
*/
// const isObjectEmpty = function (obj) {
//     let arr = Object.keys(obj) 

//     if (arr.length > 0) {
//         return true
//     }

//     return false

// }
// // Вызовы функции для проверки
// console.log(
//     isObjectEmpty({})
// ); // true

// console.log(
//     isObjectEmpty({
//         a: 1
//     })
// ); // false

// console.log(
//     isObjectEmpty({
//         a: 1,
//         b: 2
//     })
// ); // false
//-----------------------
/*  
  Напишите функцию countTotalSalary(salaries),
  получающую объект и считающую общую сумму запрплаты работников.
  
  Каждое поле объекта передаваемого в функцию, имеет вид "имя":"зарплата"
  
  Функция возвращает общую сумму зарплаты.
*/
// const countTotalSalary = function(salaries) {
//  let obj = Object.values(salaries);
//  let summ = 0 ;
// for (let value of obj) {
// summ = summ + value
// } return summ
// }


// // Вызовы функции для проверки
// console.log(
//     countTotalSalary({})
//   ); // 0

//   console.log(
//     countTotalSalary({
//       mango: 100,
//       poly: 150,
//       alfred: 80
//     })
//   ); // 330

//-------------------------------
/*  
  Напишите функцию getAllPropValues(arr, prop), 
  которая получает массив объектов и имя ключа, 
  возвращает массив значений определенного поля prop
  из каждого объекта в массиве
*/

// const users = [
//     { name: 'Poly', age: 7, mood: 'happy' },
//     { name: 'Mango', age: 4, mood: 'blissful'},
//     { name: 'Ajax', age: 3, mood: 'tired' }
//   ];
// const getAllPropValues = function(arr, prop) {
//     let arrOfProps = [];
//     for(let object of arr) {
//         if(object.hasOwnProperty(prop)) {
//             arrOfProps.push(object[prop])
//         } 
//     }return arrOfProps
// }
//   // Вызовы функции для проверки
//   console.log(
//     getAllPropValues(users, 'name')
//   ); // ['Poly', 'Mango', 'Ajax']
//   console.log(
//     getAllPropValues(users, 'mood')
//   ); // ['happy', 'blissful', 'tired']
//   console.log(
//     getAllPropValues(users, 'active')
//   ); // []
//---------------------------------------------------
/*  
  Напишите код, который бы  с помощью 
  функции-конструкора User, позволял создавать 
  объекты пользователя со следующим свойствами:
    - name - строка (имя)
    - isActive - буль (активен)
    - age - число (возраст)
    - friends - число (кол-во друзей)

  Имя, активность, возраст и друзей, необходимо передать 
  как аргументы при вызове конструктора.
  
  Добавить метод getUserInfo(), которая, выводит строку:
  `User ${имя} is ${возраст} years old and has ${кол-во друщзей} friends`

  Создать несколько объектов пользователя User и с помощью 
  функции getUserInfo вывести строку в консоль.
*/
// const User = function(name, isActive, age, friends) {
//     this.name = name;
//     this.isActive = isActive;
//     this.age = age;
//     this.friends = friends;
//     this.getUserInfo = function() {
//       console.log(`User ${name} is ${age} years old and has ${friends} friends`)
//     }
//   }
//   let user = new User('Kate', true, 24, 5)
//   let user1 = new User('Vasia', true, 100, 0)
//   console.log(user1)
//   console.log(user1.getUserInfo())
//   console.log(user)
//   console.log(user.getUserInfo())
//--------------------------
/*  
  Расставьте отсутствующие this в методах объекта store
*/

// const store = {
//     products: ['bread', 'cheese', 'milk', 'apples'],
//     managers: ['poly', 'mango', 'ajax'],

//     addManager(manager) {
//         this.managers.push(manager);
//         console.log(this.managers);
//     },
//     removeManager(manager) {
//         const idx = this.managers.indexOf(manager);
//         this.managers.splice(idx, 1);
//         console.log(this.managers);
//     },
//     getProducts() {
//         console.log(this.products);
//         return this.products;
//     }
// }
// store.addManager('chelsey'); // ['poly', 'mango', 'ajax', 'chelsey']
// store.removeManager('mango'); // ['poly', ajax', 'chelsey']
// store.getProducts(); // ['bread', 'cheese', 'milk', 'apples']
//------------------------------
/*  
  Расставьте отсутствующие this в конструкторе объектов Account
*/

// function Account(login, password, type = "regular") {
//     this.login = login;
//     this.password = password;
//     this.type = type;
  
//     this.changePassword = function(newPassword) {
//       this.password = newPassword;
//       console.log(this.password);
//     };
  
//     this.getAccountInfo = function() {
//       console.log(`
//         Login: ${this.login}, 
//         Pass: ${this.password}, 
//         Type: ${this.type}
//       `);
//     };
//   }
  
//   const account = new Account("Mango", "qwe123", "premium");
  
//   console.log(account.login); // 'Mango'
//   console.log(account.password); // 'qwe123'
//   console.log(account.type); // 'premium'
  
//   account.changePassword("asdzxc"); // 'asdzxc'
  
//   account.getAccountInfo(); // Login: 'Mango', Pass: 'asdzxc', Type: 'premium'
  