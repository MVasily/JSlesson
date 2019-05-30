'use strict';

let money;
let time;

money = prompt("Enter your mounth budget, please!");

time = prompt("Please, enter date in format YYYY-MM-DD");

let appData = {
    budget : money,
    timeData : time,
    expenses: {},
    optionalExpenses: {},
    income : [],
    savings : false
};

let answer1 = prompt("Please, enter your binding expense this mounth");

appData.expenses[answer1] = prompt("How mutch is it?");

console.log(appData);

alert(appData.budget / 30);
