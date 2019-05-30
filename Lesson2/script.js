let money = +prompt("Enter your mounth budget, please!");

let time = prompt("Please, enter date in format YYYY-MM-DD");

let appData = {
    budget : money,
    timeData : time,
    expenses: {},
    optionalExpenses: {},
    income : [],
    savings : false
};



for (let i = 0; i < 1; i++) {
    answer1 = prompt("Please, enter your binding expense this mounth");
    answer2 = prompt("How mutch is it?");
    
    if ( typeof(a) === 'string' && typeof(answer1) != null && typeof(answer2) != null
    && answer1 != "" && answer2 != "" && answer1.lengt <= 50){
        console.log("done");
        appData.expenses[answer1] = answer2; 
    }
    else {
        --i;
    }
}

let i = 0;
while(i < 2){
    answer1 = prompt("Please, enter your binding expense this mounth");
    answer2 = prompt("How mutch is it?");
    
    if ( typeof(a) === 'string' && typeof(answer1) != null && typeof(answer2) != null
    && answer1 != "" && answer2 != "" && answer1.lengt <= 50){
        console.log("done");
        appData.expenses[answer1] = answer2; 
    }
    i ++;
}



appData.moneyPerDay = appData.budget / 30;


alert("Everyday budget: " + appData.moneyPerDay);

if(appData.moneyPerDay > 100){
    
}
