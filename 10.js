//10 Пользователь вводит сумму вклада в банк на 2 месяца, с процентной ставкой депозита 5%
// годовых. Вывести сумму начисленных процентов.
let summ = +prompt("Введите сумму вклада");
let twomonth = 0.05 / 12 * 2;
let percent = summ * twomonth;
alert(`За два месяца вы получите ${percent.toFixed(2)}грн.`);