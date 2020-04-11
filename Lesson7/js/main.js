let startBtn = document.querySelector('#start'),
    budgetValue = document.querySelector('.budget-value'),
    dayBudgetValue = document.querySelector('.daybudget-value'),
    levelValue = document.querySelector('.level-value'),
    expensesValue = document.querySelector('.expenses-value'),
    optionalExpensesValue = document.querySelector('.optionalexpenses-value'),
    incomeExpensesValue = document.querySelector('.income-value'),
    monthSavingsValue = document.querySelector('.monthsavings-value'),
    yearSavingsValue = document.querySelector('.yearsavings-value');

let inputs = document.getElementsByClassName('expenses-item');

let acceptExpenses = document.getElementsByTagName('button')[0];
let acceptOptionalExpenses = document.getElementsByTagName('button')[1];
let calculateExpenses = document.getElementsByTagName('button')[2];

let optionalExpensesItems = document.querySelectorAll('.optionalexpenses-item');

let choseIncome = document.querySelector('.choose-income');
let savings = document.querySelector('#savings');
let sum = document.querySelector('#sum');
let percent = document.querySelector('#percent');

let yearValue = document.querySelector('.year-value');
let monthValue = document.querySelector('.month-value');
let dayValue = document.querySelector('.day-value');

let money,
    time;


startBtn.addEventListener('click',)


const appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
};