/*  
  Напишите функцию countProps(obj),
  считающую кол-во свойств в объекте.
  Функция возвращает количество свойств.
*/

// Вызовы функции для проверки

// const countProps = function (obj) {
//     for (values in obj) {
//         values = Object.values(obj);
//         return(values.length)
//     }
// }
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
//-----------------------------------
/*  
  Создайте функцию isObjectEmpty(obj), которая получает 
  один аргумент obj - объект, и проверяет пуст ли он (есть ли в нем свойства).
  
  Возвращает true если объект пустой, false если не пустой.
*/

// let isObjectEmpty = function(obj) {
//     for(values in obj) {
//     if(values.length > 0){
//         return true;
//     }
//     else {
//         return false;
//     }}
// }




// // Вызовы функции для проверки
// console.log(
//     isObjectEmpty({})
//   ); // true
  
//   console.log(
//     isObjectEmpty({a: 1})
//   ); // false
  
//   console.log(
//     isObjectEmpty({a: 1, b: 2})
//   ); // false
  //------------------------------------

/*  
  Напишите функцию countTotalSalary(salaries),
  получающую объект и считающую общую сумму запрплаты работников.
  
  Каждое поле объекта передаваемого в функцию, имеет вид "имя":"зарплата"
  
  Функция возвращает общую сумму зарплаты.
*/

// const countTotalSalary = function(salaries) {
//     let summ = 0;
//    for(let values in salaries) {
// summ = summ + salaries(values);
// console.log(values)
//    }
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
  
  
