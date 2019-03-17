//------------------do obeda ostalos
function time(millisec) {
  var seconds = (millisec / 1000).toFixed(0);
  var minutes = Math.floor(seconds / 60);
  seconds = Math.floor(seconds % 60);
  return 'До обеда осталось ' + minutes + " минут " + seconds + ' секунд';
}

let dateFuture = new Date(2019, 2, 15, 14, 0, 0, 0);

setInterval((function interval() {
  let date = new Date();
  let x = dateFuture - date;
  let p = document.querySelector('p');
  p.textContent = time(x);
}), 0)
//-----------------------
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // Если все ок, то вызываем resolve и передаем данные
//     resolve("Data passed into resolve function :)");

//     // Если что-то не так, вызваем reject и передаем ошибку
//     // reject("Error passed into reject function :(")
//   }, 2000);
// });

// // выполнится мгновенно
// console.log("BEFORE promise.then");

// const onResolve = data => {
//   console.log("INSIDE promise.then - onResolve");
//   console.log(data); // "Data passed into resolve function :)"
// };

// const onReject = error => {
//   console.log("INSIDE promise.then - onReject");
//   console.log(error); // "Error passed into reject function :("
// };

// promise.then(
//   // будет вызвана через 2 секунды, если обещание выполнится успешно
//   onResolve,
//   // будет вызвана через 2 секунды, если обещание выполнится с ошибкой
//   onReject
// );

// // выполнится мгновенно
// console.log("AFTER promise.then");