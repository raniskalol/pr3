'use strict';

// ЗАДАНИЕ 1

let stoimosttovara = Number(prompt("Введите стоимость товара"));
let kolvomoney = Number(prompt("Введите количество денег клиента"));

if (stoimosttovara < 0 || kolvomoney < 0){
    alert ("Неверный формат данных");
}
else if(stoimosttovara == kolvomoney){
    alert ("Покупка совершена");
}else if(stoimosttovara > kolvomoney){
    let nehvataet = stoimosttovara - kolvomoney;
    alert (`Вам не хватает ${nehvataet}`);
}else{
    let sdacha = kolvomoney - stoimosttovara;
    alert (`Ваша сдача ${sdacha}`);
}

// ЗАДАНИЕ 2

let num = Number(prompt("Введите число"));

if(num>0){
    alert ("1");
}else if(num<0){
    alert ("-1");
}else if(num == 0){
    alert ("0");
}

// ЗАДАНИЕ 3

let a = Number(prompt("Введите число номер 1"));
let b = Number(prompt("Введите число номер 2"));
let result = (a + b < 4) ? 'Мало' :
'Много';
alert (result);

// ЗАДАНИЕ 4

let login = prompt("Введите вашу роль");

let message = (login == "Сотрудник") ? "Привет" :
(login == "Директор") ? "Здравствуйте" : 
(login == "") ? "Нет логина" : " "
alert (message);

// ЗАДАНИЕ 5

let logina = prompt("Напишите свой логин");

if (logina == "Админ"){
    let password = prompt("Напишите свой пароль");
    if(password == ""){
        alert ("Отменено");
    }else if (password == "Я главный"){
        alert ("Здравствуйте");
    }else{
        alert ("Неверный пароль");
    }
}else{
    alert ("Я не знаю кто вы")
}
  
// ЗАДАНИЕ 6