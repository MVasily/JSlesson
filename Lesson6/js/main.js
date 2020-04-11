let startCalculateBtn = document.querySelector('#start'),
    resultValues = document.querySelectorAll('.result-table [class$=value]'),

    budgetValue = resultValues[0],
    dayBudgetValue = resultValues[1],
    levelValue = resultValues[2],
    expensesValue = resultValues[3],
    optionalExpensesValue = resultValues[4],
    incomeValue = resultValues[5],
    monthSavingsValue = resultValues[6],
    yearSavingsValue = resultValues[7],

    expensesAcceptBtn = document.querySelector('.main .data .expenses-item-btn'),
    expensesItems = document.querySelectorAll('.main .data .expenses-item'),
    calculateExpensesBtn = document.querySelector('.main .data .count-budget-btn'),
    optionalExpensesItems = document.querySelectorAll('.main .data .optionalexpenses-item'),
    optionalExpensesAcceptBtn = document.querySelector('.main .data .optionalexpenses-btn'),
    choseIncome = document.querySelector('.main .data .choose-income'),
    checkBox = document.querySelector('.main .data .checksavings #savings'),
    sum = document.querySelector('.main .data .choose-sum'),
    percent = document.querySelector('.main .data .choose-percent'),
    year = document.querySelector('.main .result .time-data .year .year-value'),
    month = document.querySelector('.main .result .time-data .month .month-value'),
    day = document.querySelector('.main .result .time-data .day .day-value'),
    buttons = document.querySelectorAll('button');



console.log(resultValues);

function initButtons() {
    buttons.forEach(function(button) {
        if (button.className != 'start'){
            button.disabled = !button.disabled; 
        }
    });
}

initButtons();

console.log(buttons);
    
let money, time;

startCalculateBtn.addEventListener('click', function(){
    initButtons();
    time = prompt("Please, enter date in format YYYY-MM-DD");
    money = +prompt("Enter your mounth budget, please!");

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Enter your mounth budget, please!");
    }
    appData.budget = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed();
    year.value = new Date(Date.parse(time)).getFullYear();
    month.value = new Date(Date.parse(time)).getMonth() + 1;
    day.value = new Date(Date.parse(time)).getDate();
});

expensesAcceptBtn.addEventListener('click', function() {
    console.log(expensesItems);
    let sum = 0;
    for (let i = 0; i < expensesItems.length; i++) {
        let a = expensesItems[i].value,
            b = expensesItems[++i].value;

        if ((typeof (a)) != null && (typeof (b)) != null && a != '' && b != '' && a.length < 50) {
            console.log("done");
            appData.expenses[a] = b;
            sum += +b;
        } else {
            --i;
        }
    }
    expensesValue.textContent = sum;
});

optionalExpensesAcceptBtn.addEventListener('click', function(){
    for (let i = 0; i < optionalExpensesItems.length; i++) {
        let optionalExpenses = optionalExpensesItems[i].value;
        appData.optionalExpenses[i] = optionalExpenses;
        optionalExpensesValue.textContent += optionalExpenses + ' ';
    }
});

calculateExpensesBtn.addEventListener('click', function () {
    let avaliableBudget = appData.budget;

    //substraction expenses from budget
    for (let key in appData.expenses) {
        avaliableBudget -= +appData.expenses[key];
    }

    if (appData.budget != undefined) {
        appData.moneyPerDay = (avaliableBudget / 30).toFixed(2);
        dayBudgetValue.textContent = appData.moneyPerDay;
        if (appData.moneyPerDay > 100) {
            levelValue.textContent = "Minimum level of wealth";
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            levelValue.textContent = "Medium level of wealth";
        } else if (appData.moneyPerDay > 2000) {
            levelValue.textContent = "High level of wealth";
        } else {
            levelValue.textContent = "Error !";
        }
    } else {
        dayBudgetValue.textContent = "Error !";
    }

});

choseIncome.addEventListener('input', function(){
    let items = choseIncome.value;
    appData.income = items.split(', ');
    incomeValue.textContent = appData.income;
});

checkBox.addEventListener('click', function() {
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


const appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
};




