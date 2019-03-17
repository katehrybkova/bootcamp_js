let preview = document.querySelector('.preview');
let imgArr = document.querySelectorAll('[data-fullview="img/fullview-1.jpeg"]')
let full = document.querySelector('[data-fullview="full"]')
console.log(full)

let func = function (){
  full.src = this.src;
}

for (let i = 0; i < imgArr.length; i++){
  imgArr[i].addEventListener('click', func)
}
