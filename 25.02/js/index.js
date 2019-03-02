'use strict'


//------------------------versiya bex funktsiy
// let userIndex;
// let users = ['Greengo', 'Riki', 'Floyd', 'Marchellos'];

// let enterIndex = prompt('enter name')
// if (!users.includes(enterIndex)) {
// users.push(enterIndex);
// }


// users.splice(userIndex,1);
// console.log(users)


// //obnovim usera po indexu
// users[1] = 'Max';
// console.log(users)


//--------------------versiya s funktsiyami

// let getUserById = function(id) {
//     for(let input of users) {
//         if(input === id) {
//             userIndex = users.indexOf(input);
//         }
//     }
//     if (userIndex !== undefined){
//         return userIndex;
//     }
//     else {
//         alert('user is not fined')
//     }
//     console.log(userIndex)
// }
// const addUser = function(arr, name) {
// if(arr.includes(name)){
//     alert('user has already exists')
// }
// else{
//     arr.push(name)
// }
// }
// const deleteUser = (userIndex) => {
//     users.splice(userIndex,1 )
// }
// console.log(users)
// const updateUser = function(arr, name, index){
//     arr[index] = name;
//     return(arr)

// }

// deleteUser(2);

// addUser(users, 'Ajax');
// addUser(users, 'Pablo');

// getUserById(enterIndex);
// console.log(users)
// deleteUser(getUserById('Riki'))
// console.log(users)
// console.log(getUserById('Ajax'))
// console.log(updateUser(users, 'privetik', getUserById('Pablo') ))

// console.log(userIndex);
// let ask = prompt('Add a new user');
// for(let user of users) {
// let exsist = false;
//     if(ask === user) {
//         exsist = true;
//         console.log(exsist)
//     }
//     if(exsist === true) {
//         alert('This user has allready');
//     }
//     else {
//         users.push(ask);

//     }
// }
// console.log(users)


// const users = [{
//         id: 'user_id_111',
//         name: 'Greengo'
//     },
//     {
//         id: 'user_id_222',
//         name: 'Riki'
//     },
//     {
//         id: 'user_id_333',
//         name: 'Floyd'
//     },
//     {
//         id: 'user_id_444',
//         name: 'Marchellos'
//     },
// ];

// let getUserById = function (id) {
//     let userIndex = '';
//     for (let input of users) {
//         if (input.id === id) {
//             userIndex = users.indexOf(input);
//         }
//     }
//     if (userIndex !== '') {
//         return userIndex;
//     } else {
//         alert('user is not fined')
//     }
//     console.log(userIndex)
// }
// console.log(users)

// const deleteUser = (userIndex) => {
//     users.splice(userIndex, 1)
//     return(users)
// }
// const updateUser = function (index, name, arr) {
//     arr[index].name = name;
//     return arr[index];
// }
// const addUser  = function(arr,obj) {
//     arr.push(obj)
// }
// console.log('-----------------')

// addUser(users, {id: 'user_id_555', name:'Ajax'});
// addUser(users, {id: 'user_id_666', name:'Pablo'});
// console.log(users);

// console.log('-----------------')

// console.log(deleteUser(getUserById('user_id_111')));

// const update = updateUser(getUserById('user_id_222'),'Guamalungma' ,users )
// console.log(update)





//--------------------------------------objects(second part)

// let Student = function (name, birthday, slogan) {
//     this.name = name;
//     this.birthday = birthday;
//     this.slogan = slogan;
//     this.getSlogan = function () {
//         alert(`${this.slogan}`);
//     }
// };
// const newStudent = new Student('Ben', '2.08.2019', 'Winter is coming')
// console.log(newStudent);
// newStudent.getSlogan();







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