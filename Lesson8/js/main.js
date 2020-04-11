let startBtn = document.querySelector('#start'),
    budgetValue = document.querySelector('.budget-value'),
    dayBudgetValue = document.querySelector('.daybudget-value'),
    levelValue = document.querySelector('.level-value'),
    expensesValue = document.querySelector('.expenses-value'),
    optionalExpensesValue = document.querySelector('.optionalexpenses-value'),
    incomeValue = document.querySelector('.income-value'),
    monthSavingsValue = document.querySelector('.monthsavings-value'),
    yearSavingsValue = document.querySelector('.yearsavings-value');

let expensesItems = document.getElementsByClassName('expenses-item');

let acceptExpensesBtn = document.getElementsByTagName('button')[0];
let acceptOptionalExpenses = document.getElementsByTagName('button')[1];
let calculateExpenses = document.getElementsByTagName('button')[2];

let optionalExpensesItems = document.querySelectorAll('.optionalexpenses-item');

let choseIncome = document.querySelector('.choose-income');
let checkSavings = document.querySelector('#savings');
let sum = document.querySelector('#sum');
let percent = document.querySelector('#percent');

let yearValue = document.querySelector('.year-value');
let monthValue = document.querySelector('.month-value');
let dayValue = document.querySelector('.day-value');

let money,
    time;

acceptExpensesBtn.disabled = true;
acceptOptionalExpenses.disabled = true;
calculateExpenses.disabled = true;

startBtn.addEventListener('click', function () {
    switchButtons();
    time = prompt('Введите дату в формате YYYY-MM-DD', '');
    money = +prompt('Ваш бюджет на месяц?', '');

    while (isNaN(money) || money == '' || money == null) {
        money = +prompt('Ваш бюджет?', '');
    }
    appData.budget = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed();
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDate();
});

acceptExpensesBtn.addEventListener('click', function () {
    let sum = 0;
    for (let i = 0; i < expensesItems.length; i++) {
        let a = expensesItems[i].value,
            b = expensesItems[++i].value;

        if ((typeof (a)) != null && (typeof (b)) != null && a != '' && b != '' && a.length < 50) {
            console.log("Всё верно!");
            appData.expenses[a] = b;
            sum += +b;
        } else {
            --i;
        }
    }
    expensesValue.textContent = sum;
});


acceptOptionalExpenses.addEventListener('click', function () {
    for (let i = 0; i < optionalExpensesItems.length; i++) {
        let optionalExpenses = optionalExpensesItems[i].value;
        appData.optionalExpenses[i] = optionalExpenses;
        optionalExpensesValue.textContent += optionalExpenses + ' ';
    }
});

calculateExpenses.addEventListener('click', function () {

    let needenExpenses = 0;
    //calculate sum of needed expenses
    for (const item in appData.expenses) {
        needenExpenses += +appData.expenses[item];
    }

    if (appData.budget != undefined) {
        appData.moneyPerDay = ((appData.budget - needenExpenses) / 30).toFixed();
        dayBudgetValue.textContent = appData.moneyPerDay;

        if (appData.moneyPerDay < 100) {
            levelValue.textContent = "Minimum level of wealth";
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            levelValue.textContent = "Medium level of wealth";
        } else if (appData.moneyPerDay > 2000) {
            levelValue.textContent = "High level of wealth";
        } else {
            levelValue.textContent = "Error !";
        }
    } else {
        dayBudgetValue.textContent = 'Произошла ошибка!';
    }
});

choseIncome.addEventListener('input', function () {
    let items = choseIncome.value;
    appData.income = items.split(', ');
    incomeValue.textContent = appData.income;
});

//checkbox controll
checkSavings.addEventListener('click', function () {
    appData.savings = !appData.savings;
});

sum.addEventListener('input', function () {
    if (appData.savings) {
        let summ = +sum.value,
            percentt = +percent.value;

        appData.monthIncome = summ / 100 / 12 * percentt;
        appData.yearIncome = summ / 100 * percentt;

        monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});

percent.addEventListener('input', function () {
    if (appData.savings) {
        let summ = +sum.value,
            percentt = +percent.value;

        appData.monthIncome = summ / 100 / 12 * percentt;
        appData.yearIncome = summ / 100 * percentt;

        monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});

function switchButtons() {
    acceptExpensesBtn.disabled = false;
    acceptOptionalExpenses.disabled = false;
    calculateExpenses.disabled = false;
}









const appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
};