// const User = function(name, isActive) {
//     this.name = name;
//     this.isActive = isActive;
//     this.getStatus = function() {
//       return `${this.name} is ${this.isActive ? 'active' : 'unactive'}`;
//     }
//   };


//   const user = new User('Boris', false);

//   console.log(user.getStatus());

//----------------------
/*
  Напиши функцию-конструктор Account, которая добавляет будущему
  объекту поля login, email. 
  
  В prototype функции-конструктора добавь метод getInfo(), 
  который выводит в консоль значения полей login и email. 
  
  Обрати внимание, метод всего один, в поле prototype функции-конструктора, 
  а использовать его смогут все экземпляры, по ссылке.
  
  Создать несколько экземпляров с разными значениями свойств, вывесди их в консоль.
*/
// const Account = function(login, email) {
//   this.login = login;
//   this.email = email;
// }
// Account.prototype.getInfo = function() {
// console.log(`Login : ${this.login}, Email : ${this.email}`)
// }
// const account = new Account('Mangozedog', 'mango@dog.woof');
// console.log(Account.prototype.getInfo); // function
// account.getInfo(); // Login: Mangozedog, Email: mango@dog.woof

//-----------------------------------

/*
  Напиши ES6 класс StringBuilder.
  
  На вход (в конструкторе) он получает один параметр string - строку,
  которую записывает в свойство _value.
  
  Добавь классу следующие методы:
  
    - геттер value - возвращает текущее значение поля _value
  
    - append(str) - получает парметр str (строку) и добавляет ее в конец _value
    
    - prepend(str) - получает парметр str (строку) и добавляет ее в начало value
  
    - pad(str) - получает парметр str (строку) и добавляет ее в начало и в конец _value
*/

// const StringBuilder = function(value) {
//   this.value = value;
// };

// StringBuilder.prototype.getValue = function () {
//   return this.value;
// };

// StringBuilder.prototype.toAppend = function(str) {
//   return (this.value = this.value + str);
// };

// StringBuilder.prototype.toPrepend = function(str) {
//   return (this.value = str + this.value);
// };

// StringBuilder.prototype.toPad = function(str) {
//   return (this.value = str + this.value + str);
// };
// const builder = new StringBuilder('.');

// builder.toAppend('^'); 
// console.log(builder.value); // '.^'

// builder.toPrepend('^'); 
// console.log(builder.value); // '^.^'

// builder.toPad('='); 
// console.log(builder.value); // '=^.^='
//-----------------------------------------
/*
 * Напиши класс Car с указанными свойствами и методами
 */
// const Car = function({maxSpeed}){
// this.speed = 0;
// this.maxSpeed = maxSpeed;
// this.running = false;
// this.distance = 0;
// }
// Car.prototype.running = function() {
//   return this.running = true;
// }
// Car.prototype.turnOn = function ( ){
//   return this.running = true;
// }
// Car.prototype.turnOff = function() {
//   return this.running = false;

// }
// Car.prototype.accelerate = function(spd) {
//   if (spd <= this.maxSpeed){
//     return this.speed += spd
//   } return `shvidkist perevisheno`
// }
// Car.prototype.decelerate = function(spd) {
// if(spd <=  this.maxSpeed && spd > 0) {
//   return this.speed = spd
// }
// }
// Car.prototype.drive = function(hours){
// if(this.turnOn) {
//   return this.distance = hours * this.speed;
// }
// }
// const car = new Car({ maxSpeed: 100 });
// console.log (`turn on the car: ${car.turnOn()}`)
// console.log (`change speed: ${car.accelerate(40)}`)
// console.log (`change speed: ${car.accelerate(120)}`)
// console.log (`your distance: ${car.drive(3)}`)


// class Car {
//   constructor({ maxSpeed = 0 }) {
//     /*
//       Добавь свойства:
//         - speed - для отслеживания текущей скорости, изначально 0.
//         - maxSpeed - для хранения максимальной скорости 
//         - running - для отслеживания заведен ли автомобиль, возможные значения true или false. Изначально false.
//         - distance - содержит общий киллометраж, изначально с 0
//     */
//   }
//   turnOn() {
//     // Добавь код для того чтобы завести автомобиль
//     // Просто записывает в свойство running значание true
//   }
//   turnOff() {
//     // Добавь код для того чтобы заглушить автомобиль
//     // Просто записывает в свойство running значание false
//   }
//   accelerate(spd) {
//     // Записывает в поле speed полученное значение, при условии что
//     // оно не больше чем значение свойства maxSpeed
//   }
//   decelerate(spd) {
//     // Записывает в поле speed полученное значение, при условии что
//     // оно не больше чем значение свойства maxSpeed и не меньше нуля
//   }
//   drive(hours) {
//     // Добавляет в поле distance киллометраж (hours умноженное на значение поля speed),
//     // но только в том случае если машина заведена!
//   }
// }
//-------------------------------------------
/*
 * Добавь к классу Car из предыдущего задания статический
 * метод getSpecs, который принимает объект-машину как параметр
 * и выводит в консоль значения полей maxSpeed, speed, running и distance.
 */
// const getSpecs = function(car) {
//   console.log (`maxSpeed: ${car.maxSpeed}, speed: ${car.speed}, running: ${car.running}, distance: ${car.distance}`)
// }
// car.turnOn();
// car.accelerate(50);
// car.drive(2);

// car.getSpecs(car); // maxSpeed: 100, speed: 50, running: true, distance: 100

//-----------------------------------classi
/*
  Напиши функцию-конструктор Account, которая добавляет будущему
  объекту поля login, email. 
  
  В prototype функции-конструктора добавь метод getInfo(), 
  который выводит в консоль значения полей login и email. 
  
  Обрати внимание, метод всего один, в поле prototype функции-конструктора, 
  а использовать его смогут все экземпляры, по ссылке.
  
  Создать несколько экземпляров с разными значениями свойств, вывесди их в консоль.
*/
// class Account {
//   constructor(login, email){
//     this.login = login;
//     this.email = email;
//   }
//   getInfo(){
//     console.log(`this is login: ${this.login} , and this is email ${this.email}`)
//   }
// }

// const account = new Account('Mangozedog', 'mango@dog.woof');

// // console.log(Account.prototype.getInfo); // function
// account.getInfo(); // Login: Mangozedog, Email: mango@dog.woof
//---------------------------
// Напиши ES6 класс StringBuilder. 
// На вход (в конструкторе) он получает один параметр string - строку,
// которую записывает в свойство _value.
// Добавь классу следующие методы:
//   - геттер value - возвращает текущее значение поля _value
//   - append(str) - получает парметр str (строку) и добавляет ее в конец _value
//   - prepend(str) - получает парметр str (строку) и добавляет ее в начало value
//   - pad(str) - получает парметр str (строку) и добавляет ее в начало и в конец _value


//==========variant s classom

// class StringBuilder {
//   constructor(value) {
//      this._value = value;
//   }

//   get value (){
//      return this._value;
//   }
//   toAppend(str){
//      return this._value = this._value + str;
//   }
//   toPrepend(str){
//      return this._value = str + this._value;
//   }
//   toPad(str){
//      return this._value = str + this._value + str;
//   }
// }

// const builderClass = new StringBuilder(' and ');

// builderClass.toAppend('Jerry'); 
// console.log(builderClass.value); // and Jerry

// builderClass.toPrepend('Tom'); 
// console.log(builderClass.value); //Tom and Jerry

// builderClass.toPad(' ! '); 
// console.log(builderClass.value); // ! Tom and Jerry !

//---------------------
/*
 * Напиши класс Car с указанными свойствами и методами
 */

// class Car {
//   constructor({ maxSpeed = 0 }) {
//     this.speed = 0;
//     this.maxSpeed = maxSpeed;
//     this.running = false;
//     this.distance = 0;

//     /*
//       Добавь свойства:
//         - speed - для отслеживания текущей скорости, изначально 0.
//         - maxSpeed - для хранения максимальной скорости 
//         - running - для отслеживания заведен ли автомобиль, возможные значения true или false. Изначально false.
//         - distance - содержит общий киллометраж, изначально с 0
//     */
//   }

//   turnOn() {
//     return this.running = true;
//     // Добавь код для того чтобы завести автомобиль
//     // Просто записывает в свойство running значание true
//   }

//   turnOff() {
//     return this.running = false;

//     // Добавь код для того чтобы заглушить автомобиль
//     // Просто записывает в свойство running значание false
//   }

//   accelerate(spd) {
//     if(spd < this.maxSpeed) {
//       return this.speed = spd
//     }
//     // Записывает в поле speed полученное значение, при условии что
//     // оно не больше чем значение свойства maxSpeed
//   }

//   decelerate(spd) {
//     if(spd >= 0 && spd < this.maxSpeed){
//       return this.speed = spd
//     }
//     // Записывает в поле speed полученное значение, при условии что
//     // оно не больше чем значение свойства maxSpeed и не меньше нуля
//   }

//   drive(hours) {
//     if (this.running) {
//       return this.distance = hours * this.speed
//     }
//     // Добавляет в поле distance киллометраж (hours умноженное на значение поля speed),
//     // но только в том случае если машина заведена!
//   }
// }

// const newCar = new Car({ maxSpeed: 180 });
// console.log(newCar.turnOn());
// console.log(newCar.accelerate(150));
// console.log(newCar.drive(5));
// console.log(newCar.decelerate(50));

//-------------------------------------domashkaaaaaaaaa
