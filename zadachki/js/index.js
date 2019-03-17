'use strict'

//Задача. Дан объект obj с ключами 'Минск', 'Москва', 'Киев' с элементами 'Беларусь', 'Россия', 'Украина'. С помощью цикла for-in выведите на экран строки такого формата: 'Минск - это Беларусь.'
// var obj = {
//     Минск : 'Беларусь',
//     Москва : 'Россия',
//     Киев : 'Украина',

// }
// for (const key in obj) {
// console.log(`${key} это ${obj[key]}`)
// }



// //Выведите столбец чисел от 1 до 100

// let i = 0;
// while(i < 100) {
//     i += 1;
//   console.log(i);
// }



// Выведите столбец чисел от 11 до 33.
// let i = 10;
// while(i < 33) {
//     i += 1;
//     console.log(i);
// }

//Выведите столбец четных чисел в промежутке от 0 до 100. Показать решение.


// for (let i = 0; i < 100 ; i++) {
//     if  (i % 2 === 0) {
//     console.log(i);

//     }
// }
//С помощью цикла найдите сумму чисел от 1 до 100

// let sum = 0;
// for (let i = 0; i <= 100; i++) {
//     sum = sum + i;
// }
// console.log(sum)

//Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for выведите все эти элементы на экран.
// let arr = [1, 2, 3, 4, 5];

// for(let i = 0; i < arr.length ; i++) {
//     console.log(arr[i]) ;
// }
//Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for найдите сумму элементов этого массива. Запишите ее в переменную result.
// let sum = 0;
// let arr = [1, 2, 3, 4, 5];
// for (const input of arr) {
//     sum = sum + input;
// }
// console.log(sum); //perviy variant


// let numbers = [1, 2, 3, 4, 5];
// let sum = 0;

// for (let i = 0; i <= numbers.length; i += 1) {
//     sum = sum + i;
// }
// console.log(sum); //vtoroy variant




//Дан объект obj с ключами Коля, Вася, Петя с элементами '200', '300', '400'. С помощью цикла for-in выведите на экран строки такого формата: 'Коля - зарплата 200 долларов.'
// let obj = {
//     Коля : 200,
//     Вася : 300,
//     Петя : 400,}


//     for (const key in obj) {
//         console.log(`${key} -зарплата ${obj[key]} долларов`)
//     }








//Дан массив с элементами 2, 5, 9, 15, 0, 4. С помощью цикла for и оператора if выведите на экран столбец тех элементов массива, которые больше 3-х, но меньше 10

// let arr = [2, 5, 9, 15, 0, 4]
// for (const input of arr) {
//     if (input < 10 && input > 3) {
//         console.log(input)
//     }
// }




//Дан массив с числами. Числа могут быть положительными и отрицательными. Найдите сумму положительных элементов массива. 
// let arr = [-5, 2, 0, 98]
// let sum = 0;
// for(const input of arr) 
// {
//     if(input >= 0){
//         sum = sum + input;
//     }
// }
// console.log(sum)

//Дан массив с элементами 1, 2, 5, 9, 4, 13, 4, 10. С помощью цикла for и оператора if проверьте есть ли в массиве элемент со значением, равным 4. Если есть - выведите на экран 'Есть!' и выйдите из цикла. Если нет - ничего делать не надо
// let arr = [1, 2, 5, 9, 4, 13, 4, 10];
// for (let input of arr) {
//     if(input = 4) {
//         alert('Est`!')
//         break
//     }
// }


//Дан массив числами, например: [10, 20, 30, 50, 235, 3000]. Выведите на экран только те числа из массива, которые начинаются на цифру 1, 2 или 5.
//??????????????????????????????????????????????????
// var arr = ['10', '20', '30', '50', '235', '3000'];
// for (var i = 0; i < arr.length; i++) {
// 	if (arr[i][0] == '1' || arr[i][0] == '2' || arr[i][0] == '5') {
// 		alert(arr[i]);
// 	}
// }

//Дан массив с элементами 1, 2, 3, 4, 5, 6, 7, 8, 9. С помощью цикла for создайте строку '-1-2-3-4-5-6-7-8-9-'
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// for (const input of arr) {

//     console.log(arr.join('-'));
// }




//Дано число n=1000. Делите его на 2 столько раз, пока результат деления не станет меньше 50. Какое число получится? Посчитайте количество итераций, необходимых для этого (итерация - это проход цикла), и запишите его в переменную num. 
// let n = 1000;
// while(n/2 >= 50) {
//     n = n/2;
//     console.log(n)
// }

//Переменная num может принимать 4 значения: 1, 2, 3 или 4. Если она имеет значение '1', то в переменную result запишем 'зима', если имеет значение '2' – 'весна' и так далее. Решите задачу через switch-case.
// let num = 1 || 2 || 3 || 4;
// let result;
// switch(num) {
//     case 1 : result = 1; alert('zima') ;
//     case 2 : result = 2; alert('vesna');
//     case 3 : result = 3; alert('leto');
//     case 4 : result = 4; alert('osen`');

// }
//Дана строка, состоящая из символов, например, 'abcde'. Проверьте, что первым символом этой строки является буква 'a'. Если это так - выведите 'да', в противном случае выведите 'нет'

// let string = 'abcde';
// const letter = string.split('');
// console.log(letter);
// console.log(letter[0])
// if (letter[0] = 'a') {
//     alert('da!');
// }
// else {
//     alert('net!')
// }


//Дана строка с цифрами, например, '12345'. Проверьте, что первым символом этой строки является цифра 1, 2 или 3. Если это так - выведите 'да', в противном случае выведите 'нет'.
// let string = '12345';
// const letter = string.split('');
// console.log(letter)
// if(letter[0] = 1) {
// alert('da');
// };



//------------------------------------------------------------------------------
//---------------------------funktsii-------------------------------------------
//------------------------------------------------------------------------------

// Задача. Дан массив с числами. Создайте из него новый массив, где останутся лежать только положительные числа. Создайте для этого вспомогательную функцию isPositive(), которая параметром будет принимать число и возвращать true, если число положительное, и false - если отрицательное.
// const isPositive = function(number){
//     if (number > 0){
//         return(true);
//     }
//     else {
//         return(false);
//     }
// }
// let arr = [1, 2, 3, -1, -2, -3];
// for (const newNumber of arr) {
//     if(isPositive(newNumber))
// console.log(newNumber)
// }

// Сделайте функцию isNumberInRange, которая параметром принимает число и проверяет, что оно больше нуля и меньше 10. Если это так - пусть функция возвращает true, если не так - false. 
// const isNumberInRange = function (number) {
//     if (number > 0 && number < 10) {
//         return (true);
//     } else {
//         return (false);
//     }
// }
// let arr = [ -5, 4, 6, 51, 4];
// for (let input of arr) {
// console.log(isNumberInRange(input))}


//Дан массив с числами. Запишите в новый массив только те числа, которые больше нуля и меньше 10-ти. Для этого используйте вспомогательную функцию isNumberInRange из предыдущей задачи.
// const isNumberInRange = function (number) {
//     if (number > 0 && number < 10) {
//         return (number);

//     }
// }
// let arr = [1, 3, 5, 6, 9, 11, 15, 30]
// let newArr = []
// for (const input of arr) {
//     if (isNumberInRange(input)) {
//         newArr.push(input)

//     }
// }
// console.log(newArr)


//Сделайте функцию getDigitsSum (digit - это цифра), которая параметром принимает целое число и возвращает сумму его цифр.
// const getDigitsSum = function (digit) {
//     if (digit !== 0) {
//         let integer = Math.round(digit)
//         console.log(integer)

//         let string = integer.toString().split('');
//         console.log(string)

//         let summ = 0;
//         for (let input of string) {
//             let inputNumber = Number(input)
//             summ = summ + inputNumber;
//         }
//         return(summ)
//     }
// }

// const matrix = getDigitsSum(125.245)
// console.log(matrix)



//5.Найдите все года от 1 до 2019, сумма цифр которых равна 13. Для этого используйте вспомогательную функцию getDigitsSum из предыдущей задачи. Показать решение.

// const getDigitsSum = function (year) {
//     if (summ = 13) {
//         return (summ)
//     }
// }

// let arr = [];
// let i = 0;
// while (i < 2019) {
//     i = i + 1;
//     arr.push(i)
// }
// console.log(arr);



// for (let input of arr) {
//     let string = input.toString().split('')
//     let summ = 0;
//     let inputYear = Number(string);
//     con


// }



//Сделайте функцию isEven() (even - это четный), которая параметром принимает целое число и проверяет: четное оно или нет. Если четное - пусть функция возвращает true, если нечетное - false
// let isEven = function(number) {
//     if (number % 2 === 0) {
//         return(true)
//     }
//     if (number % 2 !== 0) {
//         return(false)
//     }
// }
// let arr = [1, -1 ,5, 17, 22, 16, 27, 30];
// for ( let input of arr) {
//     console.log(isEven(input))

// }


//Дан массив с целыми числами. Создайте из него новый массив, где останутся лежать только четные из этих чисел. Для этого используйте вспомогательную функцию isEven из предыдущей задачи
// let isEven = function(number) {
//     if (number % 2 === 0) {
//         return(true)
//     }
//     if (number % 2 !== 0) {
//         return(false)
//     }
// }
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let newArr = [];
// for (const input of arr) {
//     if (isEven(input) === true){
//         newArr.push(input);
//     }
// }
// console.log(newArr)





//----------------objekti
// Создайте объект obj. Выведите на экран элемент с ключом 'c' двумя способами: через квадратные скобки и как свойство объекта:
// let obj = {
//     a: 1,
//     b: 2,
//     c: 3,
// }
// console.log(obj.c);
// console.log(obj['c'])


// Создайте массив заработных плат obj. Выведите на экран зарплату Пети и Коли.
//  let salaries = {
     
//  }
//--------------------------metodi masivov
// Задача. Даны два массива: ['a', 'b', 'c'] и [1, 2, 3]. Объедините их вместе.

// let a = ['a', 'b', 'c'];
// let b = [1, 2, 3];
// let c = a.concat(b)
// console.log(c)
//==================Задача. Дан массив ['a', 'b', 'c']. Добавьте ему в конец элементы 1, 2, 3.

// let a = ['a', 'b', 'c'];
// a.push (1,2,3);
//  console.log(a)
//--------------------
// Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1]
// let arr = [1, 2, 3];
// console.log(arr.reverse())
//------------------	Дан массив ['js', 'css', 'jq']. Выведите на экран первый элемент
// let arr = ['js', 'css', 'jq'];
// let cutArr = arr.shift()
// console.log(cutArr)
// console.log(arr)
//----------------------
// Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [1, 2, 3]
// let arr = [1, 2, 3, 4, 5];
// let slicedArr = arr.slice(0,3)
// console.log(slicedArr)
// console.log(arr)
//------------------Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5]
// let arr = [1, 2, 3, 4, 5];
// let splicedArr = arr.splice(1,2);
// console.log(splicedArr)
// console.log(arr)
//-------------Дан массив [1, 2, 3, 4, 5]. 
//С помощью метода splice сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e']
// let arr = [1, 2, 3, 4, 5];
// let splicedArr = arr.splice(1,0,'a','b')
//  splicedArr = arr.splice(6,0,'c')
//  splicedArr = arr.splice(8,0,'e')
// console.log(splicedArr)
// console.log(arr)
//---------------	Дан массив [3, 4, 1, 2, 7]. Отсортируйте его. Показать решение.
// let arr = [3, 4, 1, 2, 7];
// let sortedArr = arr.sort()
// console.log(sortedArr)
//------------	Дан объект {js:'test', jq: 'hello', css: 'world'}. Получите массив его ключей.
// let obj = {js:'test', jq: 'hello', css: 'world'}
// let keys = Object.keys(obj)
// console.log(keys)

