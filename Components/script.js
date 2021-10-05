let TipAmount = document.getElementById('result-Amount');
let Total = document.getElementById('result');
let inputVal = document.getElementById('bill-display');
let FivePer = document.getElementById('FivePer');
let TenPer = document.getElementById('TenPer');
let FifteenPer = document.getElementById('FifteenPer');
let TwentyFivePer = document.getElementById('TwentyFivePer');
let FiftyPer = document.getElementById('FiftyPer');
let Custom = document.getElementById('Custom');

let Amount = 0.02;
let FivePercent = 5
let TenPercent = 10
let FifteenPercent = 15
let TwentyFivePercent = 25
let FiftyPercent = 50




document.getElementById('result').textContent += FivePercent;
document.getElementById("result-Amount").textContent += Amount - 2;



// function save() {
//     if (count == 0) {
//         document.getElementById("errorMessage").innerHTML = "Please Saved a Value Greater Than Zero "
//         saveEl.textContent += Container
//     } else {

//     }
//     document.getElementById("count").textContent = 0;
//     let Container = "[ " + count + "  ]";
//     saveEl.textContent += Container;
//     count = 0

// }

// function decrement() {
//     if (count < 1) {
//         count = 1
//     }
//     count--
//     document.getElementById('count').textContent = count
// }

// let errorParagraph = document.getElementById('error');

// function purchaseBtn() {
//     errorParagraph.innerHTML = "Something Went Wrong, please Try Later"
// }