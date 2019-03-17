`use strict`
/*
  Есть список категорий с классом categories (на вкладке HTML).
  
  Напишите код, который для каждого элемента li (первая вложенность) 
  в списке categories выведет в консоль:
  - Текст непосредственно в нём (название категории)
  - Количество всех вложенных в него элементов li
``
  К примеру:
    Категория: Животные
    Количество вложенных li: 4
*/
// let el = document.querySelectorAll('.categories > li');
// el.forEach(item => console.log(`category: ${item.firstChild.textContent} length: ${item.childNodes[1].childElementCount} `))
//------------------------------------#2
/*
  Дан список с классом .list
	- Найдите первого потомка списка и сделайте его текст красного цвета
	- Найдите последнего потомка списка и сделайте его текст синего цвета
*/
// let mainUl = document.querySelector('.list')
// mainUl.firstElementChild.style.color = 'red';
// mainUl.lastElementChild.style.color = 'blue';
//--------------------#3
/*
  Дан ul склассом .list и массив строк. 
  
  Вставьте элементы этого массива в ul так, чтобы каждый элемент стоял в своем li.
*/

// const elements = ['HTML', 'CSS', 'JavaScript', 'React', 'Node'];
// let parent = document.querySelector('.list')
// for (let el of elements){
// parent+=el
// }
// console.log(parent)
//--------------------Repeeta
const body = document.querySelector('body')
let list = body.firstElementChild;
console.log(list.childNodes);
const secondItem = list.children[1];
console.log(secondItem.parentNode)
