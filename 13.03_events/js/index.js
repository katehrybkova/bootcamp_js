`use strict`
// const singleBtn = document.querySelector('button');

// Для обработчика события можно (и желательно) 
// использовать отдельную функцию, ссылку на которую 
// передаем вторым аргументом в addEventListener
// const handleClick = () => alert('CLICK!');

// singleBtn.addEventListener('click', handleClick);
//-----------------------------------1
// /Задача №1
//Алерт по нажатию на кнопку.
//При нажатии на кнопку "Нажми на меня"
//выводиться сообщение 'Привет!
// let button = document.querySelector('button')
// const buttonClick = () => alert('click!');
// button.addEventListener('click', buttonClick);
//-----------------------2
//Изменение текста в инпуте.
//По нажатию на кнопку - изменяеться текст в импуте
// let pushedButton = document.querySelector('button');
// const enteredValue = () => input.value = 'hello world';
// pushedButton.addEventListener('click', enteredValue);
//-------------------3
//Изменение текста в инпуте.
//По нажатию на кнопку -  она выводит алертом содержимое инпута
// let pushedButton = document.querySelector('button')
// const enteredValue = () => alert(`${input.value}`)
// pushedButton.addEventListener('click', enteredValue)
//-----------------------4
//Изменение текста в инпуте.
//По нажатию на кнопку -  она выводит алертом содержимое инпута, возведенное в квадрат
// let pushedButton = document.querySelector('button')
// const enteredValue = () => alert(`${(Number(input.value))*(Number(input.value))}`)
// pushedButton.addEventListener('click', enteredValue)
//----------------------5
// Задача. Кнопка осуществляет обмен содержимым между двумя инпутами, можете понажимать на нее несколько раз или вручную сменить содержимое инпутов:
// let value1 = document.querySelector('#input1');
// let value2 = document.querySelector('#input2');
// let button = document.querySelector('button')
// let change = () =>{
//   let buf = value1.value;
//   value1.value = value2.value;
//   value2.value = buf;

// }

// button.addEventListener('click', change)
//------------------------6
// Задача. При нажатии на кнопку - поменяется ее текст:
// let button = document.querySelector('input');
// let change = () => button.value = 'i`m little button';
// button.addEventListener('click', change)
//-------------------------8
//  Задача. При нажатии на кнопки -  одна из них блокирует инпут с помощью атрибута disabled, а другая разблокирует:
// let button1 = document.querySelector('.b1');
// let button2 = document.querySelector('.b2');
// let block = () => document.querySelector('input').disabled = true;
// let opened = () => document.querySelector('input').disabled = false;

// button1.addEventListener('click', block)
// button2.addEventListener('click', opened)
//---------------------------add1
/*
  Напишите скрипт который реализует следующий функционал.
  
  Есть кнопка с классом button, текст которой отображает 
  кол-во раз которое по ней кликнули, обновляется при каждом клике.
*/



// let pushedButton = document.querySelector('button');
// let enteredValue = () => pushedButton.textContent = Number(pushedButton.textContent) + 1;
// pushedButton.addEventListener('click', enteredValue);


//---------------------------add2

/*
  Даны 2 инпута, абзац и кнопка. По нажатию на кнопку 
  получите числа которые бьудут введены в инпуты и запишите их сумму в span.result.
*/
// let input1 = document.querySelector('.input1');
// let input2 = document.querySelector('.input2');
// let button = document.querySelector('button');
// let span = document.querySelector('.result');

// let counter = () => span.textContent = Number(input1.value) + Number(input2.value);
// button.addEventListener('click', counter)
//---------------------------add3
/*
  Есть счетчик (спан) и кнопки +1, -1, которые должны увеличивать и уменьшать значение счетчика на 1. 
  
  - Создайте класс Counter, который хранит одно поле value - текущее значение счетчика
  - Класс принимает один параметр - onChange, функцию для обновления интерфейса при изменении счетчика
  - Добавьте классу методы increment и decrement для увеличения и ументшение значения счетчика
  - Привяжите вызовы методов и значение счетчика к раметке
*/
// let btn1 = document.querySelector('.btn1');
// let btn2 = document.querySelector('.btn2');
// let span = document.querySelector('span');
// let increment = () => span.textContent = Number(span.textContent) + Number(btn2.textContent);
// let decrement = () => span.textContent = Number(span.textContent) - Number(btn2.textContent);
// btn1.addEventListener('click', decrement);
// btn2.addEventListener('click', increment)
//cherez class----------------
// class Counter {
//   constructor(onChange) {
//     this.value = 0;
//     this.onChange = onChange;
//     this.increment = this.increment.bind(this);
//     this.decrement = this.decrement.bind(this);
//   }

//   increment() {
//     this.value += 1;
//     this.onChange(this.value);
//   }
//   decrement() {
//     this.value -= 1;
//     this.onChange(this.value);
//   }

// }

// let plus = document.querySelector('button[data-action="add"]');
// let minus = document.querySelector('button[data-action="sub"]');
// let valueSpan = document.querySelector('.value');

// function changeValue(value) {
//   valueSpan.textContent = value;
// }

// const counter = new Counter(changeValue);

// console.log(counter.onChange);

// plus.addEventListener('click', counter.increment);
// minus.addEventListener('click', counter.decrement);
/*//---------------------------add4

  Есть форма с набором радиокнопок. Пользователь выбирает вариант ответа, 
  после чего нажимает кнопку "Submit" и происходит отправка формы.
  
  При отправке формы:
    - не должна перезагружаться страница
    - необходимо получить выбранную опцию и вывести в параграф с классом .result
*/
const chkd = document.querySelectorAll('input');
const btn = document.querySelector('.btn');
const result = document.querySelector('.result');

btn.addEventListener('click', show);

function show(e) {
  e.preventDefault();
  Array.from(chkd).find(i => i.checked === true ? result.textContent += `${i.parentElement.textContent};` : null);
}




//-------------------------------vsplivanie
// let firstUl = document.querySelector('.firstUl');
// let secondUl = document.querySelector('.secondUl');
// let firstLevel =  document.querySelectorAll('.firstLevel');
// let secondLevel =  document.querySelectorAll('.secondLevel');
// let push = () => alert('Roditel');
// firstUl.addEventListener('click', push);