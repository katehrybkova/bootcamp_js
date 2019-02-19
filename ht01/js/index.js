// Напишите скрипт имитирующий авторизацию администратора в панели управления.

//   При загрузке страницы у посетителя запрашивается логин через prompt:

//     - Если посетитель нажал Cancel — показывать alert с текстом 'Отменено пользователем!'
//     - Если было введено что либо другое, что не совпадает со значением константы adminLogin, 
//        показывать alert с текстом 'Доступ запрещен, неверный логин!'   
//     - Если был введен логин совпадающий со значением константы adminLogin, 
//       спрашивать пароль через prompt.

//   При вводе пароля:

//       - Если нажали Cancel, показывать alert с текстом 'Отменено пользователем!'
//       - Если введен пароль который не совпадает со значением константы adminPassword,
//         показывать alert с текстом 'Доступ запрещен, неверный пароль!'        
//       - Если введён пароль который совпадает со значением константы adminPassword, 
//         показывать alert с текстом 'Добро пожаловать!'

//   🔔 PS: для удобства и чистоты кода сохраните в переменные сообщения отображаемые в alert



// const adminLogin = 'admin';
// const adminPassword = 'm4ngo1zh4ackz0r';
const name = prompt('Введите логин');
console.log(name);


if (name === null) {
    alert('Отменено пользователем!')

} else if (name !== 'admin') {
    alert('Доступ запрещен, неверный логин!');
} else {
    const adminPass = prompt('Введите пароль');
    console.log(name);

    if (adminPass === null) {
        alert('Отменено пользователем!')
    } else if (adminPass !== 'm4ngo1zh4ackz0r') {
        alert('Доступ запрещен, неверный пароль!');
    } else {
        alert('Добро пожаловать!')

    }
}



// ⚠️ ДОПОЛНИТЕЛЬНОЕ ЗАДАНИЕ - ВЫПОЛНЯТЬ ПО ЖЕЛАНИЮ

//   Создайте скрипт турагенства, продающего поездки в 3-х группах: sharm, hurgada и taba.
//   Кол-во мест в группах ограничено (создайте переменные для хранения мест в группах): 
//     * sharm - 15
//     * hurgada - 25
//     * taba - 6.
//   Когда пользователь посещает страницу, ему необходимо предложить ввести число необходимых мест,
//   результат сохранить в переменную.
//   Необходимо проверить являются ли введенные данные целым положительным числом. 

//     - В случае неверного ввода от пользователя, скрипт показывает alert с текстом 
//       "Ошибка ввода" и больше ничего не делает.
//     - Если пользователь нажал Cancel, скрипт показывает alert с текстом "Нам очень жаль, приходите еще!".
//     - В случае верного ввода, последовательно проверить кол-во мест в группах, 
//       и кол-во необходимых мест введенных пользователем.
//   Если была найдена группа в которой количество мест больше либо равно необходимому, 
//   вывести сообщение через confirm, что есть место в группе такой-то, согласен ли 
//   пользоваетель быть в этой группе?
//     * Если ответ да, показать alert с текстом 'Приятного путешествия в группе <имя группы>'
//     * Если ответ нет, показать alert с текстом 'Нам очень жаль, приходите еще!'

//   Если мест нигде нет, показать alert с сообщением 'Извините, столько мест нет ни в одной группе!'
// */

// const sharm = 15;
// const hurgada = 25;
// const taba = 6;
// const places = prompt('Введите количество мест');
// if (Number.isInteger(+places) && +places > 0) {

//     if (+places <= taba) {
//         hotel = 'taba';

//     } else if (+places <= hurgada) {
//         hotel = 'hurgada';

//     } else if (+places <= sharm) {
//         hotel = 'sharm';
//     }


//     if (hotel && confirm(`Хотите ли вы остаться в $(hotel)?`)) {
//         alert(`добро пожаловать в $(hotel)`);
//     } 
    
//     else if (!hotel) {
//         alert('Нам очень жаль, приходите еще!');
//     }
//     else



    // } else if (+places <= hurgada) {

    //     if (confirm('Хотите ли вы остаться в hurgada')) {
    //         alert('добро пожаловать в hurgada')
    //     } else if (+places <= taba) {

    //         if (confirm('Хотите ли вы остаться в taba')) {
    //             alert('добро пожаловать в taba')
    //         }
    //     }
    // } else {
    //     alert('Нам очень жаль, приходите еще!');
    // }
    // }
    // } else if (!places) {
    //     alert('Нам очень жаль, приходите еще!');
// }