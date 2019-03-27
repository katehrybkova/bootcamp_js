/*add1
 * Есть массив цветов в hex-формате и кнопки Start и Stop. 
 * 
 * Напиши скрипт, который после нажатия кнопки Start, раз в секунду
 * меняет цвет фона body на случайное значение из массива. Используй
 * инлайн-стиль для изменения background-color.
 *
 * При нажатии на кнопку Stop, изменении цвета фона должно останавливаться.
 * 
 * Учти, что на кнопку Start можно нажать бесконечное количество раз.
 * Сделай так, чтобы пока изменение темы запушено, кнопка Start была не активна.
 */

// const colors = [
//   "#FFFFFF",
//   "#2196F3",
//   "#4CAF50",
//   "#FF9800",
//   "#009688",
//   "#795548"
// ];
// const start = document.querySelector('[data-action="start"]');
// const stop = document.querySelector('[data-action="stop"]');
// const body = document.querySelector('body');
// start.addEventListener('click', changColor);
// stop.addEventListener('click', stopColor);
// let inter;

// function changColor(){
//   inter = setInterval(() => {
//     let rand = Math.floor(Math.random() * colors.length);
//     body.style.backgroundColor = colors[rand];
//     console.log(rand);    
//   }, 1000);
//   start.disabled = true;

// };

//   function stopColor(){
//     clearInterval(inter);
//     start.disabled = false;
//   }
//---------------------add2
// function getFormattedTime(time) {
//   let date = new Date (time)
//   let minutes = date.getMinutes();
//   let seconds = date.getSeconds();
//   if(seconds < 10){
//    seconds = '0' + seconds;
//   }
//   let milisec = parseInt((date.getMilliseconds()) / 100);

//    return `${minutes} : ${seconds}. ${milisec}`;
//   }
//   console.log(getFormattedTime(Date.now()))
//   console.log(
//    getFormattedTime(1523621052858)
//   ); // 04:12.8

//   console.log(
//    getFormattedTime(1523621161159)
//   ); // 06:01.1

//   console.log(
//    getFormattedTime(1523621244239)
//   ); // 07:24.2
//------------------add4/*
//  * Есть переменная quantity хранящиая в себе
//  * текущее количество единиц какого-то товара на складе.
//  * 
//  * Напиши функцию processOrder(value), получающую
//  * кол-во товаров заказанных покупателем, и возвращающую промис.
//  * 
//  * Для имитации проверки достаточного количества товаров
//  * на складе используй setTimeout с задержкой 500мс.
//  * 
//  * Если на складе товаров больше либо равно заказанному
//  * количеству, функция возвращает промис который исполняется
//  * успешно со строкой "Ваш заказ готов!".
//  * 
//  * В противном случае, со строкой "К сожалению на складе не достаточно товаров!".
//  * 
//  * Если же пользователь ввел не число, то промис выполняется с ошибкой
//  * и значением "Некорректный ввод!".
// */

// const DELAY = 1000;
// const quantity = 100;

// function processOrder(order) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (!isNaN(order)) {
//         if (order <= quantity) {

//           resolve('Ваш заказ готов!')
//         } else {
//           resolve('К сожалению на складе не достаточно товаров!');

//         }
//       } else {
//         reject('Некорректный ввод!')
//       }
//     }, DELAY)
//   })
// }

// // Вызовы функции для проверки
// processOrder(50)
//   .then(console.log) // Ваш заказ готов!
//   .catch(console.log);

// processOrder(50)
//   .then(console.log) // Ваш заказ готов!
//   .catch(console.log);

// processOrder(500)
//   .then(console.log) // К сожалению на складе недостаточно товаров!
//   .catch(console.log);

// processOrder("lorem")
//   .then(console.log)
//   .catch(console.log); // Некорректный ввод!