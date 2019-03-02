// const user = {
//     name: 'Baron',
//   };

//   const user1 = {
//     name: 'Vasya',
//   };

//   const myFunc = function (message = '', a = '') {
//     console.log('this in myFunc:', this);
//     return `Hello my name is ${this.name}. ${message} ${a}`;
//   };
//   // console.log(myFunc()); // 'name' of undefined
//   const result = myFunc.call(user, 'How are you?');
//   console.log(result);

//   user.getMyname = myFunc;
//   console.log('call user1 to user.getMyName:',user.getMyname.call(user1));

//   console.log('from user: ', user.getMyname());


//   const action = function (callback) {
//       return callback('How are you?', 'what are you doing');

//   };
//   console.log(action(myFunc.call(user1))
// )

// moy variant s sobakami
// const dog1 = {
//     breed : 'pitbull',
// }
// const dog2 = {
//     breed : 'dalmatian',

// }
// const phrase  = function () {
// return `Sobaka porodi: ${this.breed}`
// }
// const myCallback = function(callback)
// {
//     return callback();
// }
// console.log(phrase.call(dog1))
// console.log(phrase.apply(dog2))

// console.log(myCallback(phrase.bind(dog2)))


// -------------
// const Dog = function (name = 'Poops',
//     age,
//     breed,
//     color,
//     male,
//     vegetarian,
//     facebook) {
//     this.name = name;
//     this.age = age;
//     this.breed = breed;
//     this.color = color;
//     this.male = male;
//     this.vegetarian = vegetarian;
//     this.facebook = facebook;
//     this.yelp = function () {
//         return `gav gav`
//     }
// }
// const dog = new Dog('Sharik', 3, 'chau-chau', 'red', 'feemale', true, 'http://facebook/poops.com')
// console.log(dog);

// console.log(dog.yelp());
// dog.getAboutData = function () {
//     return `name: ${this.name}; age: ${this.age}; breed: ${this.breed}; `
// }
// console.log(dog.getAboutData())
// dog.color = 'black';
// console.log('dog: ',dog);

// const dog1 = new Dog(undefined, 5, 'boxer', 'black', 'male', false, '');
// console.log('dog1: ',dog1) 



// const user = {
//     name: "Mango",
//     age: 20,
//     hobby: "html",
//     premium: true
// };
// user.mood = 'happy';
// user.hobby = 'javascript'
// delete user.premium
// for (const keysi in user) {
//     let phrase = `${keysi} : ${user[keysi]}`
//     console.log(phrase)
// }
// let show = Object.keys(user);
// let show1 = Object.entries(user)
// console.log('------------------------')

// console.log(show)


// for (let input of show) {
//     let inputShown = input;
//     console.log(inputShown)

// }



// console.log(user)
// console.log('------------------------')
// console.log(show1)


// -------------------Напиште скрипт который определит и выведет в консоль 
//   имя сотрудника который выполнил больше всех задач.
//   Сотрудники и кол-во выполненых задач содержатся 
//   как свойства объекта в формате "имя":"кол-во задач"


//------------------------map--------------
// const numbers = [1, 2, 3, 4, 5]; //not our mass

// // const ourArray =(transfer,numbersClone) => {//new mass
// //   let newMass = []; //future mass
// //   for (const numbersCloneElement of numbersClone) { //iteration of new mass
// //     const newElement = transfer(numbersCloneElement); // rewrite transfer element
// //     newMass.push(newElement); // rewrite new mass
// //   }
// //   return newMass; // return parametrs in numbersclone
// // };

// const double = (number) => number *2; // our function

// const triple = (number) => number *3;
// // const triple = function (number) {     //our function
// //   return number * 3;
// // };
// // const doubledNumbers = ourArray(double, numbers); // we need results
// // console.log(doubledNumbers); // [2, 4, 6, 8, 10]
// // const tripledNumbers = ourArray(triple,numbers);
// // console.log(tripledNumbers); // [3, 6, 9, 12, 15]

// const newMass = [];
// numbers.map(function(el){ return newMass.push(el*2) });
// newMass2 = [];
// numbers.map(function(el){
//   return newMass2.push(triple(el));
// });

// console.log(numbers);
// console.log(newMass);
// console.log(newMass2);

// const values =  [3, 6, 9, 12, 15];
// values.map(function(el, index) {
//     console.log(`${index} : ${el}`);
//     return el * 2;
// }

// )
// const newArr = values.map((el) => double(el))
// const newArr1 = values.map(double)
// console.log(newArr)
// console.log(newArr1)



let arr = [5, 16, 28, 37, 49, 56]
let inputHrivna = []
const moneyCounter = function (dollars, transfer) {
    for (dollars of arr) {
        let hrivnas = dollars * 27.6;
        inputHrivna.push(hrivnas)
       
    }
    return inputHrivna
}
console.log(moneyCounter(arr))

const arrow = (number) => number * 27.6;
moneyCounter(numbers, arrow);



// const newArr = []
// // for (let input of arr) {
// //     let inputHrivna = input * 27.3;
// //     console.log(inputHrivna)
// //     newArr.push(inputHrivna)

// // }
// console.log(newArr)