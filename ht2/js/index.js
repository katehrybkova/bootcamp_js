// /*
//   Написать следующий скрипт:
  
//     - При загрузке страницы пользователю предлагается ввести через prompt число. 
//       Число введенное пользователем записывается в массив чисел.
      
//     - Операция ввода числа пользователем и сохранение в массив продолжается до
//       тех пор, пока пользователь не нажмет Cancel в prompt. Используйте цикл do...while.
      
//     - После того как пользователь прекратил ввод нажав Cancel, необходимо взять 
//       массив введенных чисел, сложить общую сумму всех элементов массива и 
//       записать ее в переменную. Используйте цикл for или for...of.
      
//     - По окончанию ввода, если массив не пустой, вывести alert с текстом `Общая сумма чисел равна ${сумма}`
      
//   🔔 PS: Делать проверку того, что пользователь ввел именно число, а не произвольный набор 
//       символов, не обязательно. Если хотите, в случае некорректного ввода покажите alert с текстом 
//       'Было введено не число, попробуйте еще раз', при этом результат prompt записывать 
//       в массив чисел не нужно, после чего снова пользователю предлагается ввести число в prompt.
// */

// let userInput;
// const numbers = [];
// let total = 0;


// /*



let userNum;
let mass = []
let summ = 0;
do {
userNum = Number(prompt('give me a number'));
if (userNum !== 0) {
    mass.push(userNum);
}
console.log(userNum); 
console.log(mass);
} while (userNum);

if(mass.length !== 0) {
    for (const result of mass) {
        summ += result;
    }
} 
console.log('The sum is: ' + summ)



// let num = [];
// let ask
// let sum = 0;
// do {
//   ask = Number(prompt('Введите цыфру:'));
//   if (ask !== 0) {
//     num.push(ask);
//   }
//   console.log(ask);
//   console.log(num);
// } while(ask);

// if(num.length !== 0) {
//   for (const iteration of num) {
//     sum += iteration;
//   }
// }
// console.log('The sum is: ' + sum);
