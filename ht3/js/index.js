const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

//-----------functions-------------
const isLoginValid = function (login) {
  if (login.length >= 4 && login.length <= 16) {
  
    const isLoginUnique = function(allLogins, login) {
      if(allLogins.includes(login)){
        return(alert('Такой логин уже используется!'));
      }
      else{
        arr.push(login);
        return(alert('Логин успешно добавлен!'));
      }
    }
    return (isLoginUnique(logins, enteredLogin))
  }
  else {
    return (alert('Ошибка! Логин должен быть от 4 до 16 символов'))
  }
}

//------------
let arr = [];
let enteredLogin = prompt('enter your login!')
let loginIsValid = isLoginValid(enteredLogin)
console.log(arr)





