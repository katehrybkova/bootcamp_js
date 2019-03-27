// let preview = document.querySelector('.preview');
// let imgArr = document.querySelectorAll('[data-fullview="img/fullview-1.jpeg"]')
// let full = document.querySelector('[data-fullview="full"]')
// console.log(full)

// let func = function (){
//   full.src = this.src;
// }

// for (let i = 0; i < imgArr.length; i++){
//   imgArr[i].addEventListener('click', func)
// }
let p = document.querySelector('p');
let start = document.querySelector('.js-start');
let lap = document.querySelector('.js-take-lap');
let reset = document.querySelector('.js-reset');
// let timeNull =  new Date(2019, 2, 17, 0, 0, 0, 0);
// console.log(timeNull)
let seconds = 0.0;
let minutes = 0;
let interval;
let func = function () {
   interval = setInterval((function interval() {
        seconds = (seconds + 0.1);
        if (seconds > 59) {
            minutes = seconds / 60;
            seconds = seconds % 60;
        }
start.textContent = 'Continue'
        p.textContent = `${minutes.toFixed(0)} : ${seconds.toFixed(1)}`;
    }), 100);
}
let funcStop = function () {
    clearInterval(interval);}
let resetFunc = function(){
    seconds = 0;
    minutes = 0;
}
start.addEventListener('click', func);
lap.addEventListener('click', funcStop);
reset.addEventListener('click', resetFunc)



// -------------------------podskazka
// t=0;
// function a(){
//     document.getElementById('.js-time').innerHTML = t;
//     t++;
//     setTimeout("a()", 1000);
//     console.log(t)
// }
// -------------------------podskazka



// let time = function(milisec){
// let sec = (milisec / 1000).toFixed(1);
// let minutes = (sec / 60).toFixed(0);

// return `${minutes} ${sec}`
// }


/* <button class="btn js-start">Start</button>
    <button class="btn js-take-lap">Lap</button>
    <button class="btn js-reset">Reset</button> */