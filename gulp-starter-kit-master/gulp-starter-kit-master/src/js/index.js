let wrapper = document.querySelector('.wrapper');
let input = document.querySelector('input');
let add = document.querySelector('.add');
let del;



let cardTemplate = document.querySelector('.cardTemplate').innerHTML.trim();

let template = Handlebars.compile(cardTemplate);

let addSite = function (e) {
  e.preventDefault();

  let objSite = {
    title: input.value
  };

  let markup = template(objSite);
  if (!wrapper.textContent.includes(input.value)) {
    wrapper.insertAdjacentHTML('afterbegin', markup);
  } else(alert('takaya zakladka uzhe est`'))


  //-----------------------------delete
  del = document.querySelector('.del');

  let delSite = function (e) {
    e.preventDefault();
    e.target.parentNode.remove();
  }
  input.value = '';
  del.addEventListener('click', delSite);
};



add.addEventListener('click', addSite);
