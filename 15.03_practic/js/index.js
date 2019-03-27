/* ---------------add5 */
/*
  Дан список изображений. Сделайте так, чтобы по клику на картинку 
  алертом выводился ее src. Обязательно используйте делегирование событий.
*/
// let img = document.querySelectorAll('img');

// for (let image of img){
//   image.addEventListener('click', e =>  alert(e.target.src));

// }
//-------------------add6
/*
  Дан ul, а внутри него произвольное количество li с текстом и кнопкой. 
  Сделайте так, чтобы по нажатию на кнопку, удалялся тот li в котором
  она находится. Обязательно используйте делегирование событий.
*/
// let ul = document.querySelector('ul');
// let btn = document.querySelectorAll('button');

// let func = function (event) {
//   const nodeName = event.target.nodeName;
//   if (nodeName !== 'BUTTON') {
//     return;
//   }
//   event.target.parentElement.remove();
// }
// ul.addEventListener('click', func);

// -------------------add7
/*
  Дан набор инпутов. Сделайте так, чтобы при потере фокуса все 
  инпуты проверяли свое содержимое на правильное количество символов. 
  
  - Сколько символов должно быть в инпуте, указывается в атрибуте data-length. 
  - Если введено подходящее количество, то outline инпута становится зеленым, 
    если неправильное - красным. Для добавления стилей, на вкладке CSS есть стили valid и invalid
*/

// let inputs = document.querySelectorAll('input');

// let func = function () {
//   let valueLength = this.value.length;
//   let dataLength = this.getAttribute('data-length');

//   if (valueLength > 0) {
//     if (valueLength <= Number(dataLength)) {
//       this.classList.add('valid');
//     } else {
//       this.classList.add('invalid')
//     }
//   }
// }
// inputs.forEach(el => el.addEventListener('blur', func));

//---------------------------add8
/*
  Напишите скрипт который:
    
    - При фокусе текстового поля, в p.message рендерит строку "Input is in focus!"
    - При наборе текста в инпуте (событие input), текущее его значение должно 
      отображаться в p.input-value 
*/
// let input = document.querySelector('input');
// let p = document.querySelector('p');
// let func = function(){
//   p.textContent = "Input is in focus!";

// }
// input.addEventListener('focus', func)
//------------------add9
/*
  На вкладках HTML и CSS уже готовая верстка модального окна.
  По умолчанию модальное окно скрыто классом modal-hidden.
  
  Напишите скрипт который реализует следующее поведение:
 
  - При клике на кнопке с надписью "Open Modal", модальное окно с классом modal, 
    должно появляться. Для этого необходимо убрать класс modal-hidden. 
    Для выбора модального модального окна используйте класс js-modal-backdrop
 
  - При открытом модальном окне, клик на кнопку с крестиком (data-action="close-modal")
    или на серый фон с прозрачностью (js-modal-backdrop), модальное окно должно закрываться.
*/

// let button = document.querySelector('.btn');
// let modal = document.querySelector('.js-modal-backdrop');
// let close = document.querySelector('.close-btn');


// let func = function(){
// modal.classList.remove('modal-hidden')
// }
// let funcClose = function () {
//   modal.classList.add('modal-hidden')

// }
// button.addEventListener('click', func);
// close.addEventListener('click', funcClose);
// backdrop.addEventListener('click', funcClose);
//---------------add10
/*
  Ознакомьтесь с HTML и CSS.
  
  Есть меню навигации, необходимо написать скрипт, который
  при клике на пункт меню добавит ему класс active,
  таким образом выделив текущую (активную) ссылку,
  при этом убрав его у всех остальных элементов меню.
  
  Пунктов меню может быть произвольное количество, используйте
  прием делегирование событий. Учтите клик по самому ul, его
  необходимо игнорировать.
  
  При клике по ссылкам не должна перезагружаться страница!
*/
let menu = document.querySelector('.menu');
let func =  function(e){

let active = document.querySelector('.active');
active.classList.toggle('active')
e.target.classList.add('active') ;


}
menu.addEventListener('click', func);



/* ---------------zadachnik*/
//---Задача. Повторите поведение кнопки по нажатию на нее (она меняет текст в инпуте):
// let button = document.querySelector('button');
// let text = () => input.value = 'you are super-developer!';
// button.addEventListener('click', text);
// Задача. Повторите поведение кнопки по нажатию на нее (она выводит алертом содержимое инпута):
// let button = document.querySelector('button');
// let text = () => alert(`${input.value}`);
// button.addEventListener('click', text);
//----Задача. Повторите поведение кнопки по нажатию на нее (она выводит алертом содержимое инпута, возведенное в квадрат):
// let button = document.querySelector('button');
// let text = () => alert(input.value* input.value);
// button.addEventListener('click', text);
//--------------5.Задача. Повторите поведение кнопки по нажатию на нее (она осуществляет обмен содержимым между двумя инпутами, можете понажимать на нее несколько раз или вручную сменить содержимое инпутов):
// let button = document.querySelector('button');
// let input1 = document.querySelector('#input1');
// let input2 = document.querySelector('#input2');
// let text = () => {
//   let buf = input1.value;
//   input1.value = input2.value;
//   input2.value = buf;
// }
// button.addEventListener('click', text);
//---------Задача. Повторите поведение кнопки по нажатию на нее (поменяется ее текст):
// let button = document.querySelector('input');
// let text = () => button.value = 'i`m little button';
// button.addEventListener('click', text);

//--------Задача. Повторите поведение кнопки по нажатию на нее (она меняет цвет текста в инпуте):

// let button = document.querySelector('button');
// let input = document.querySelector('input');
// let text = () => input.style.color = 'green';
// button.addEventListener('click', text);
//----------------Задача. Дан HTML код (см. под задачей). Поменяйте содержимое абзацев на их порядковый номер в коде.
// let elems = document.getElementsByTagName('p');
// let input = document.querySelector('input');

// function func() {
// 	for (let i = 0; i < elems.length; i++) {
// 		elems[i].innerHTML = i+1;
// 	}
// }
// input.addEventListener('click', func)
//-------------------------repeta
// const btn = document.querySelector('.first');
// const btnAddListener = document.querySelector('.add');
// const btnRemoveListener = document.querySelector('.remove');


// let handButtonClick = () => alert('click!!!!!')

// let onAddListener = function () {
//   btn.addEventListener('click', handButtonClick)
// }
// let onRemoveListener = function () {
//   btn.removeEventListener('click', handButtonClick)
// }

// btnAddListener.addEventListener('click', onAddListener)
// btnRemoveListener.addEventListener('click', onRemoveListener)
//------------------------------
// const btn = document.querySelector('.first');
// const body = document.querySelector('body')

// body.addEventListener('click', e => {
//   console.log('[body]');
//   console.log('event type ',  e.type);
//   console.log('event target ',  e.target);
// })
// btn.addEventListener('click', e => {
//   e.stopPropagation();
//   console.log('[button]');
//    console.log('event type ',  e.type);
//   console.log('event target ',  e.target);
// })

//---------------gallery
// const gallery = document.querySelector('.js-gallery');
// gallery.addEventListener('click', event => {
//   alert(event.target.src)
// })
//------------- Даны ссылки. Привяжите всем ссылкам событие - по наведению на ссылку в атрибут title запишется ее текст.
// const aArr = document.querySelectorAll('a');
// let func = function(){
//   this.title = this.innerHTML;
//  console.log( this.title)
//   }
// for(let i = 0; i < aArr.length; i++){
//   aArr[i].addEventListener('mouseover', func)}
//-----------------------
// Привяжите всем ссылкам событие - по наведению на ссылку в конец ее текста дописывается ее href в круглых скобках
// const aArr = document.querySelectorAll('a');
// let func = function(){
//   this.textContent = `${this.textContent} ${this.href}`;
//  console.log( this.title)
//   }
// for(let i = 0; i < aArr.length; i++){
//   aArr[i].addEventListener('mouseover', func)}
// ------------------------Дополните предыдущую задачу: после первого наведению на ссылку следует отвязать от нее событие, которое добавляет href в конец текста
//  const aArr = document.querySelectorAll('a');
// let func = function(){
//   this.textContent = `${this.textContent} ${this.href}`;
// this.removeEventListener('mouseover', func)  }
// for(let i = 0; i < aArr.length; i++){
//   aArr[i].addEventListener('mouseover', func)}
// ----------------------------Для всех инпутов сделайте так, чтобы они выводили свой value алертом при нажатии на любой из них, но только по первому нажатию. Повторное нажатие на инпут не должно вызывать реакции
// let value = document.querySelectorAll('input');
// let func = function(){
//   alert(`${this.value}`);
//   this.removeEventListener('click', func);
// }
// for(let i = 0; i <= value.length; i++){
//   value[i].addEventListener('click', func)
// }
//------------------------------7.Даны абзацы с числами. По нажатию на абзац в нем должен появится квадрат числа, которое он содержит