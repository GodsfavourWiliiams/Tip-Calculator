let TipAmount = document.getElementById('result-Amounts'); //
let Total = document.getElementById('results');
let inputVal = document.getElementById('bill-display'); // input bill
let inputVals = document.getElementById('number-displays');
let FivePer = document.getElementById('FivePer');
let TenPer = document.getElementById('TenPer');
let FifteenPer = document.getElementById('FifteenPer');
let TwentyFivePer = document.getElementById('TwentyFivePer');
let FiftyPer = document.getElementById('FiftyPer');
let Custom = document.getElementById('Custom');



function calc() {
    if (inputVal.value == 0) {
        document.getElementById('error-message').textContent = "Sorry please input a Value";
    } else {

    }
    let SumTotal = inputVal.value / inputVals.value
    document.getElementById('result-Amounts').textContent = SumTotal.toFixed(1);

    if (inputVals.value == 0) {
        document.getElementById('error-messages').textContent = "Sorry please input a Value";
    } else {
        //do this
    }

}