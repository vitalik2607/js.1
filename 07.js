//7 Пользователь указывает объем флешки в Гб. Программа должна посчитать сколько файлов
// размером в 820 Мб помещается на флешку.
let gigabyte = +prompt("введите обьем флешки в Гб");
let megabyte = gigabyte * 1024;
let file = megabyte - megabyte % 820 
let numberOfFile = file / 820;
alert(numberOfFile + " Файла размером 820 мб можно поместить на флешку");