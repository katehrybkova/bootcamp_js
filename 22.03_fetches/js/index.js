//-------------------pogoda
// let timezone = document.querySelector('.location-timezone');
// let temperatureDegree = document.querySelector('.temperature-degree');
// let temperatureDescription = document.querySelector('.temperature-description')
// let iconID = document.querySelector('.icon1');
// let body = document.querySelector('body');
// let temperatureSection = document.querySelector('.temperature-section');
// let temperatureUnit = document.querySelector('.temperature-unit');

// let handler = function () {
//   let lat;
//   let long;
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(position => {
//       console.log(position);

//       lat = position.coords.latitude;
//       long = position.coords.longitude;
//       let proxy = 'https://cors-anywhere.herokuapp.com/';
//       let api = `${proxy}https://api.darksky.net/forecast/d71c8dd12e60cc8dfdbeee7bb6c1a2d5/${lat}, ${long}`;


//       fetch(api)
//         .then(response => response.json())
//         .then(data => {
//           console.log(data);
//           let {
//             icon,
//             temperature,
//             summary
//           } = data.currently;

//           temperatureDegree.textContent = temperature; //// вместо записи: data.currently.temperatureDegree.textContent = temperature
//           temperatureDescription.textContent = summary;
//           timezone.textContent = data.timezone;
// celsus = 5/9*(temperature-32);
//           setIcon(icon, iconID);
// tempbBuffer = temperature;

//           temperatureSection.addEventListener('click', setTemperature)
//         })
//     })
//   }

//   let setTemperature = function () {
//     if (temperatureUnit.textContent==='F'){
//       temperatureUnit.textContent='C';
//       temperatureDegree.textContent = Math.floor(celsus);
//     } else {
//       temperatureUnit.textContent='F';
//       temperatureDegree.textContent = tempBuffer;
//     }
//   }

//   let setIcon = function (icon, iconID) {

//     const skycons = new Skycons({
//       color: 'white'

//     });
//     const currentIcon = icon.replace(/-/g, '_').toUpperCase();
//     skycons.play();

//     return skycons.set(iconID, Skycons[currentIcon]);
//   }
// }
// window.addEventListener('load', handler);
//------------add1
/*
  Написать функцию fetchCountryData, которая использует
  API_URL + текущее значение input для составления запроса.
  
  Формат полного url таков:
    https://restcountries.eu/rest/v2/name/имя-страны
    
  С помощью fetch сделать запрос по составленому адресу. 
  Обязательно обработать вариант с ошибкой запроса используя catch. 
  
  Результат запроса вывести в поле result в формате:
    Country name: имя страны
    Capital: столица
    Main currency: название денежной единицы
    Flag: флаг страны
  
  Все необходимые данные есть в ответе от API.
  
  PS: при отправке формы перезагружается страница,
  решите эту задачу вспомнив о том, как остановить
  поведение по умолчанию.
*/

// const input = document.querySelector("input");
// const form = document.querySelector(".search-form");
// const result = document.querySelector(".result");

// form.addEventListener("submit", fetchCountryData);

// /*
// @param {FormEvent} evt
// */
// function fetchCountryData(evt) {
//     evt.preventDefault();
//     let API_URL = `https://restcountries.eu/rest/v2/name/${input.value}?fullText=true`;
//     fetch(API_URL)
//     .then(response=> response.json())
//     .then(data=>{
//         console.log(data);
//         result.innerHTML = `<p>Country name:${data[0].name}</p><p>Capital: ${data[0].capital}</p><p>Main currency: ${data[0].currencies[0].code}</p><p>Flag: <img style="width:300px" src="${data[0].flag}"></p>`;
//     })
//     .catch(error => ('Netu takoi strani'));
// }
// -------------------add2
/*
  Написать функцию fetchUserData, которая использует
  API_URL + текущее значение input для составления запроса.
  
  Формат полного url таков:
    https://api.github.com/users/имя-пользователя
    
  Документация по Git API:
    https://developer.github.com/v3/
    
  С помощью fetch сделать запрос по составленому адресу. 
  Обязательно обработать вариант с ошибкой запроса используя catch. 
  
  Результат запроса вывести в поле result в формате:
    Avatar: аватартка 
    Username: логин
    Bio: описание профиля
    Public repos: кол-во открытых репозиториев
  
  Все необходимые данные есть в ответе от API.
*/

// const input = document.querySelector("input");
// const form = document.querySelector(".search-form");
// const result = document.querySelector(".result");

// form.addEventListener("submit", fetchUserData);

// /*
// @param {FormEvent} evt
// */
// function fetchUserData(evt) {
//     evt.preventDefault();
// const API_URL = `https://api.github.com/users/${input.value}`;
//     fetch(API_URL)
//     .then(response=>response.json())
//     .then(data=>{
//         console.log(data);
//         result.innerHTML = `<p>Avatar:<img style="width:300px" src=   "${data.avatar_url}"></p><p>Username: ${data.login}</p><p>Bio:   ${data.bio}</p><p> Public repos: ${data.public_repos}</p>`;
//     })
//     .catch(result.innerHTML = `<p>NETU TAKOGO CHELOVEKA</p>`)
// }
//---------------3
/*
  Документация API: https://jsonplaceholder.typicode.com/

  Просмотр всех пользователей: https://jsonplaceholder.typicode.com/users/ 

  Написать функцию fetchUsers, которая посылает get запрос.
  Результатом fetch будет массив объектов.
  
  В таблицу .user-table добавить строки для каждого пользователя.
  Каждая строка состоит из 5-ти столбцов указанного формата.
  Кол-во строк будет такое как и кол-во объектов пользователей в ответе.
  
    Имя | Почта | Город | Вебсайт | Компания
    Имя | Почта | Город | Вебсайт | Компания
    и так далее для каждого пользователя...
*/


// const form = document.querySelector(".search-form");
// const userTable = document.querySelector(".user-table");

// form.addEventListener("submit", fetchUsers);

/*
  @param {FormEvent} evt
*/
// function fetchUsers(evt) {
//     evt.preventDefault();
//     let API_URL = `https://jsonplaceholder.typicode.com/users/`;
//     fetch(API_URL, {
//         method: 'Get',
//         headers: {
//             'Content-Type': 'application/json',
//         }
//     })
//     .then(response => response.json())
//     .then((data) => {
//         console.log(data);
//     userTable.innerHTML = data.reduce((acc, i) => acc+ `<tr><td>${i.name}</td><td>${i.email}</td><td>${i.address.city}</td><td>${i.website}</td><td>${i.company.name}</td></tr>`,'');
//     });
// }
//---------------4
/*
  Документация API: https://jsonplaceholder.typicode.com/

  Написать функцию getUserById, которая посылает запрос 
  на получение информации о пользоватеьте с id (число) введенным в input. 
  Не забывайте что значение input это строка.
 
  Объект что придет в ответе используйте для вывода информации
  о пользователе в элементе .result
  
  Если пользователя с таким идентификатором в базе данных нет,
  в элемент .result вывести строку "Ошибка! Пользователя с таким id не существует"
*/

const input = document.querySelector("input");
const form = document.querySelector(".search-form");
const result = document.querySelector(".result");
let userId = Number(input.value);

form.addEventListener("submit", getUserById);

function getUserById(evt) {


  evt.preventDefault();
  fetch(`https://jsonplaceholder.typicode.com/todos/${input.value}`)
  .then(response => {
      if (!response.ok) {
        throw Error(response.statusText);}
        return response.json()})    
    .then(data => {
      console.log(data);
    })

    .catch(() => {
      result.innerHTML = `<p>Ошибка! Пользователя с таким id не существует</p>`
    })


}


// .then(response => {
//   if (!response.ok) {
//     throw Error(response.statusText);}
//     return response.json()})
//     .then(data => {
//       console.log(data);
//       result.innerHTML = `<p>id: ${data.id}</p><p>title: ${data.title}</p><p> completed: ${data.completed}</p>`
//     })
//       .catch(() => {result.innerHTML = `<p>Ошибка! Пользователя с таким id не существует</p>`})}