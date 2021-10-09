let TipAmount = document.getElementById('result-Amounts'); // Tip 
let Total = document.getElementById('results'); // Tip
let inputVal = document.getElementById('bill-display'); // input bill
let inputVals = document.getElementById('number-displays'); // input number of people
// let Reset = docue.getElementById("Reset")
let FivePer = 0.5;
let TenPer = 0.10;
let FifteenPer = 0.15;
let TwentyFivePer = 0.25;
let FiftyPer = 0.50;
let Custom = document.getElementById('custom');

let TotalPercentage = 1.15


function calc() {
    if (inputVal.value == 0) {
        document.getElementById('error-message').textContent = "";
    } else {
        //DO SOMETHING
    }
    if (inputVals.value < 1) {
        document.getElementById('error-messages').textContent = "Can't be Zero";
    } else {
        //do this
    }
    let Sumtotals = inputVal.value * FifteenPer
    let SumTotals = Sumtotals / inputVals.value
    let SumTotal = inputVal.value * Custom.value / inputVals.value;
    let TotalPerson = inputVal.value * TotalPercentage / inputVals.value
    document.getElementById('result-Amounts').textContent = SumTotal.toFixed(2);
    document.getElementById('result-Amounts').textContent = SumTotals.toFixed(2);
    document.getElementById('results').textContent = TotalPerson.toFixed(2);

}

function point1() {
    Sumtotals = inputVal.value * FivePer
    SumTotals = Sumtotals / inputVals.value
    document.getElementById('result-Amounts').textContent = SumTotals.toFixed(2);
}

function point2() {
    Sumtotals = inputVal.value * TenPer
    SumTotals = Sumtotals / inputVals.value
    document.getElementById('result-Amounts').textContent = SumTotals.toFixed(2);
}

function point3() {
    Sumtotals = inputVal.value * FifteenPer
    SumTotals = Sumtotals / inputVals.value
    document.getElementById('result-Amounts').textContent = SumTotals.toFixed(2);
}

function point4() {
    Sumtotals = inputVal.value * TwentyFivePer
    SumTotals = Sumtotals / inputVals.value
    document.getElementById('result-Amounts').textContent = SumTotals.toFixed(2);
}

function point5() {
    Sumtotals = inputVal.value * FiftyPer
    SumTotals = Sumtotals / inputVals.value
    document.getElementById('result-Amounts').textContent = SumTotals.toFixed(2);
}

//The Formula here is

//For TIP AMOUNT
// BILL* 0.PERCENT DIVIDED BY THE NUMBER OF PERSONS

// FOR TOTAL AMOUNT
// BILL* 1.PERCENT DIVIDED BY THE NUMBER OF PERSONS