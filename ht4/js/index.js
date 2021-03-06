function Cashier(name, productDatabase) {
  this.name = name;
  this.productDatabase = productDatabase;
  this.customerMoney = 0;
  this.getCustomerMoney = function (value) {

      this.customerMoney = this.customerMoney + value;
  }
  this.countTotalPrice = function (order) {
      let summ = 0;
      for (let key in order) {
          summ += order[key] * productDatabase[key];

      }
      return summ
  }
  this.countChange = function (totalPrice) {
      if (totalPrice <= this.customerMoney) {
          return this.customerMoney - totalPrice
      } else {
          return null;
      }
  }
  this.onSuccess = function (change) {
      console.log(`Спасибо за покупку, ваша сдача ${change}!`)


  }
  this.onError = function (change) {
      console.log('Очень жаль, вам не хватает денег на покупки')
  }
  this.reset = function (change) {
      this.customerMoney = 0
  }
}

const order = {
  bread: 2,
  milk: 2,
  apples: 1,
  cheese: 1
};
const products = {
  bread: 10,
  milk: 15,
  apples: 20,
  chicken: 50,
  cheese: 40,
};
// Проверяем исходные значения полей
const mango = new Cashier('Mango', products);

console.log(mango.name); // Mango
console.log(mango.productDatabase); // ссылка на базу данных продуктов (объект products)
console.log(mango.customerMoney); // 0

// // Вызываем метод countTotalPrice для подсчета общей суммы
// // передавая order - список покупок пользователя
const totalPrice = mango.countTotalPrice(order);

// // Проверям что посчитали
console.log(totalPrice); // 110

// // Вызываем getCustomerMoney для запроса денег покупателя
mango.getCustomerMoney(300);

// // Проверяем что в поле с деньгами пользователя
console.log(mango.customerMoney); // 300

// // Вызываем countChange для подсчета сдачи
const change = mango.countChange(totalPrice);

// // Проверяем что нам вернул countChange
console.log(change); // 190

// Проверяем результат подсчета денег
if (change !== null) {
  // При успешном обслуживании вызываем метод onSuccess
  mango.onSuccess(change); // Спасибо за покупку, ваша сдача 190
} else {
  // При неудачном обслуживании вызываем метод onError   
  mango.onError(); // Очень жаль, вам не хватает денег на покупки
}

// // Вызываем reset при любом исходе обслуживания
mango.reset();

// // Проверяем значения после reset
console.log(mango.customerMoney); // 0