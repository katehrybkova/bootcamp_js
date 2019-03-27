/* ---------------add5 */
/*
  Дан список изображений. Сделайте так, чтобы по клику на картинку 
  алертом выводился ее src. Обязательно используйте делегирование событий.
*/
// let img = document.querySelectorAll('img');
// let clickFunc = () => {
//   for (let i of Array.from.img) {

//   }
//   alert(`${img.src}`);
// }
// img.addEventListener('click', clickFunc);
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
