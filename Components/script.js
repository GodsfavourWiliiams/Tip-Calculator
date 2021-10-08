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



function sum() {
    if (inputVal.value == 0) {
        document.getElementById('error-message').textContent = "Sorry please input a Value";
        // document.getElementById('reset').ariaDisabled;
    } else {

    }

    document.getElementById('result-Amounts').textContent = inputVal.value / inputVals.value

    if (inputVals.value == 0) {
        document.getElementById('error-message').textContent = "Sorry please input a Value";
    } else {
        //do this
    }

}