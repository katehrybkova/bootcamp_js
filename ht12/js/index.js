/*
  Реализуйте форму фильтра товаров в каталоге и список отфильтрованных товаров.
  Используйте шаблонизацию для создания карточек товаров.
  
  Есть массив объектов (дальше в задании), каждый из которых описывает 
  ноутбук с определенными характеристиками.
  
  Поля объекта по которым необходимо производить фильтрацию: size, color, release_date.
  Поля объекта для отображения в карточке: name, img, descr, color, price, release_date.
    
  Изначально есть форма с 3-мя секциями, состоящими из заголовка и группы 
  чекбоксов (разметка дальше в задании). После того как пользователь выбрал 
  какие либо чекбоксы и нажал кнопку Filter, необходимо собрать значения чекбоксов по группам. 
  
  🔔 Подсказка: составьте объект формата
      const filter = { size: [], color: [], release_date: [] }
    
  После чего выберите из массива только те объекты, которые подходят 
  под выбраные пользователем критерии и отрендерите список карточек товаров.
  
  🔔 Каждый раз когда пользователь фильтрует товары, список карточек товаров очищается, 
      после чего в нем рендерятся новые карточки товаров, соответствующих текущим критериям фильтра.
*/




const leptops = [{
    size: 13,
    color: 'white',
    price: 28000,
    release_date: 2015,
    name: 'Macbook Air White 13"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
  },
  {
    size: 13,
    color: 'gray',
    price: 32000,
    release_date: 2016,
    name: 'Macbook Air Gray 13"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
  },
  {
    size: 13,
    color: 'black',
    price: 35000,
    release_date: 2017,
    name: 'Macbook Air Black 13"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
  },
  {
    size: 15,
    color: 'white',
    price: 45000,
    release_date: 2015,
    name: 'Macbook Air White 15"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
  },
  {
    size: 15,
    color: 'gray',
    price: 55000,
    release_date: 2016,
    name: 'Macbook Pro Gray 15"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
  },
  {
    size: 15,
    color: 'black',
    price: 45000,
    release_date: 2017,
    name: 'Macbook Pro Black 15"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
  },
  {
    size: 17,
    color: 'white',
    price: 65000,
    release_date: 2015,
    name: 'Macbook Air White 17"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
  },
  {
    size: 17,
    color: 'gray',
    price: 75000,
    release_date: 2016,
    name: 'Macbook Pro Gray 17"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
  },
  {
    size: 17,
    color: 'black',
    price: 80000,
    release_date: 2017,
    name: 'Macbook Pro Black 17"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
  },
];



let inputs = document.querySelectorAll('input')
let sizes = document.querySelectorAll('[name="size"]');
let colors = document.querySelectorAll('[name="color"]');
let releases = document.querySelectorAll('[name="release_date"]');
let clear = document.querySelector('[type="reset"]');
let p = document.querySelector('p');


let cards = document.querySelector('.cards');
let cardTemplate = document.querySelector('.cardTemplate').innerHTML.trim();
  let template = Handlebars.compile(cardTemplate);

let filterBtn = document.querySelector('[type="submit"]');

let sizesArr = Array.from(sizes);
let colorsArr = Array.from(colors);
let releasesArr = Array.from(releases);
let inputArr = Array.from(inputs);


let laptopResult = [];


let func = function (e) {
  e.preventDefault();
  let a = [];
  let b = [];
  let c = [];
  let result = [];
  let objCards = {
    data: result,
  }

  
  
  for (let obj of leptops) {
    for (let keys in obj) {
      for (let sizeEl of sizesArr) {
        if (sizeEl.checked === true) {
          if (obj.size === Number(sizeEl.value)) {
            if (!a.includes(obj)) {
              a.push(obj)
            }
          }
        }
      }
    }

    for (let colorEl of colorsArr) {
      if (colorEl.checked === true) {
        if (obj.color === colorEl.value) {
          if (!b.includes(obj)) {
            b.push(obj)
          }
        }
      }
    }
    for (let releaseEl of releasesArr) {
      if (releaseEl.checked === true) {
        if (obj.release_date === Number(releaseEl.value)) {
          if (!c.includes(obj)) {
            c.push(obj)
          }
        }
      }
    }
    for (let elA of a) {
      if (b.includes(elA)) {
        if (c.includes(elA)) {
          if (!result.includes(elA)) {
            result.push(elA);
          }
        }
      }
    }
  }
  console.log(result);
  
  let markup = template(objCards);
cards.insertAdjacentHTML("beforeend" , markup);

}



let reset = function () {
  for (let input of inputArr) {
    if (input.checked === true) {
      input.checked === false;
    }
  }
}


filterBtn.addEventListener('click', func);
clear.addEventListener('click', reset)

// p.innerHTML = `${laptopResult}`;