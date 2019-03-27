/*
  Написать приложение для работы с REST сервисом, 
  все функции делают запрос и возвращают Promise 
  с которым потом можно работать. 
  
  Реализовать следующий функционал:
  - функция getAllUsers() - должна вернуть текущий список всех пользователей в БД.
  
  - функция getUserById(id) - должна вернуть пользователя с переданным id.
  
  - функция addUser(name, age) - должна записывать в БД юзера с полями name и age.
  
  - функция removeUser(id) - должна удалять из БД юзера по указанному id.
  
  - функция updateUser(id, user) - должна обновлять данные пользователя по id. 
    user это объект с новыми полями name и age.
  Документацию по бэкенду и пример использования прочитайте 
  в документации https://github.com/trostinsky/users-api#users-api.
  Сделать минимальный графический интерфейс в виде панели с полями и кнопками. 
  А так же панелью для вывода результатов операций с бэкендом.
*/
let add = document.querySelector('.add');
let remove = document.querySelector('.remove');
let viewUser = document.querySelector('.seeUser');
let view = document.querySelector('.seeAll');


let inputName = document.querySelector('.name');
let inputAge = document.querySelector('.age');
let inputId = document.querySelector('.id');

let users = [];

let api = `https://test-users-api.herokuapp.com/users/`
fetch(api)
  .then(response => {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response.json();
  })
  .then(data => {
    users = data.data;
    data.data = users;
  });




let getAllUsers = function () {
  for (let obj of users) {
    console.log(obj);
  }
}
let getUserById = function (id) {
  for (let obj of users) {
    if (obj.id === inputId.value) {
      console.log(obj)
    }
  }
}
let addUser = function (event) {
  event.preventDefault();
  const newUser = {
    name: $ {
      inputName.value
    },
    age: $ {
      inputAge.value
    },
  };
  // fetch(api, {
  //   method: 'POST',
  //   body: JSON.stringify(newUser),
  //   headers: {
  //     "Content-type": "application/json; charset=UTF-8"
  //   }
  // })
  // .then(response => response.json())
  // .then(data => console.log(data))
  // .catch(error => console.log('ERROR' + error));
  // }
}
let removeUser = function (id) {
  for (let obj of users) {
    if (obj.id === inputId.value) {
      users.splice(obj)
    }
  }





}

view.addEventListener('click', getAllUsers)
viewUser.addEventListener('click', getUserById)

add.addEventListener('click', addUser)
remove.addEventListener('click', removeUser)