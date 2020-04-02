//9 Запросите у пользователя трехзначное число и выведите его задом наперед. 
//Для решения задачи вам понадобится оператор % (остаток от деления).
let number = +prompt("Введите трехзначное число");
let lastNumber = number % 10;  //последняя цифра
let secondNumber = ((number - lastNumber) / 10) %10; //вторая цифра
let firstNumber =(number - (number%100))/100; // первая
alert(lastNumber,secondNumber,firstNumber);
