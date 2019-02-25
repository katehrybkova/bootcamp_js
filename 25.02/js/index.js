'use strict'
let userIndex;
let users = ['Greengo', 'Riki', 'Floyd', 'Marchellos'];

let enterIndex = prompt('enter name')
if (!users.includes(enterIndex)) {
users.push(enterIndex);
}


users.splice(userIndex,1);
console.log(users)


//obnovim usera po indexu
users[1] = 'Max';
console.log(users)




let getUserById = function(id) {
    for(let input of users) {
        if(input === id) {
            userIndex = users.indexOf(input);
        }
    }
    if (userIndex !== undefined){
        return userIndex;
    }
    else {
        alert('user is not fined')
    }
    console.log(userIndex)
}


getUserById(enterIndex);
console.log(users)














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

