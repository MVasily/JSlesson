let money, time;


function start() {
    money = +prompt("Enter your mounth budget, please!");
    time = prompt("Please, enter date in format YYYY-MM-DD");

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Enter your mounth budget, please!");
    }
}

start();




let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpenses: function() {
        for (let i = 0; i < 1; i++) {
            answer1 = prompt("Please, enter your binding expense this mounth");
            answer2 = prompt("How mutch is it?");

            if (typeof (a) === 'string' && typeof (answer1) != null && typeof (answer2) != null &&
                answer1 != "" && answer2 != "" && answer1.lengt <= 50) {
                console.log("done");
                appData.expenses[answer1] = answer2;
            } else {
                --i;
            }
        }
    },
    detectDayBudget: function() {
        appData.moneyPerDay = (appData.budget / 30).toFixed(2);
        alert("Everyday budget: " + appData.moneyPerDay);
    },
    detectLevel: function() {
        if (appData.moneyPerDay > 100) {
            console.log("Minimum level of wealth");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log("Medium level of wealth");
        } else if (appData.moneyPerDay > 2000) {
            console.log("High level of wealth");
        } else {
            console.log("Error !");
        }
    },
    chooseOptExpenses: function() {
        for (let i = 0; i < 3; i++) {
            let optionalExpenses = prompt("What is your optional expenses?");
            if (optionalExpenses == "") {
                i--;
            }
        }
        appData.optionalExpenses[i] = optionalExpenses;
    },
    checkSavings: function() {
        if (appData.savings == true) {
            let save = +prompt("What is amount of accumulated?"),
                percent = +prompt("What is per cent?");


            appData.monthIncome = save / 10000 / 12 * percent;
            alert("Your mounth income: " + appData.monthIncome);
        }
    },
    chooseIncome: function () {
        for (i = 0; i < 1; i++) {
            let items = prompt("What helps to earn? (divide with commas)", "");
            if (items == null || items == "") {
                i--;
            } else {
                appData.income = items.split(", ");
                appData.income.push(prompt("Maybe domething else?"));
                appData.income.sort();
            }
        }
        appData.income.forEach(function(item, i) {
           console.log("index: " + (++i) + " item: " + item); 
        });
    }
};


// appData.chooseExpenses();

appData.chooseIncome();



console.log("Our Application contains data:");
for (let key in appData) {
    console.log(key);
}

