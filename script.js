// Calculator project   

console.log("Calculator project begins!")

// Variables    

let actualNum = 0;
let previousNum = 0;
let operation = null;
let firstNum = 0;
let secondNum = 0;
let opFunc = null;

// Principal operation functions

let add = function (a, b) { return a + b};
let substract = function (a, b) { return a - b};
let multiply = function (a, b) { return a * b};
let divide = function (a, b) { return a / b};
let sqrt = function (a) { return Math.sqrt(a)};
let percent = function (a, b) { return a * (b / 100)};

let equal = function (n1, operator, n2) { return Math.round(operator(n1, n2) * 1000000) / 1000000};
let operate = function (num1, operation, num2) {
    return  operation(num1, num2)
}

// Display

let display = document.querySelector("input");

// Number buttons

const sortedNumButtons = [...document.querySelectorAll(".numButton")].sort((a, b) => a.textContent.localeCompare(b.textContent));

sortedNumButtons.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        if(opFunc == null) {
            actualNum = Number(String(i));  // i = 0 → button 1, i = 1 → button 2, ...
            display.value = actualNum;
        } else {
        previousNum = actualNum;
        actualNum = Number(previousNum + String(i));  // i = 0 → button 1, i = 1 → button 2, ...
        display.value = actualNum;

        }
    });
});

// Operation buttons

const butSqrt = document.querySelector("#root");
butSqrt.addEventListener("click", () => {
    butEqual.click();
    firstNum = actualNum;
    actualNum = 0;
    previousNum = 0;
    display.value = (sqrt(firstNum));
});
const butPercent = document.querySelector("#percent");
butPercent.addEventListener("click", () => {
    butEqual.click();
    firstNum = actualNum;
    actualNum = 0;
    previousNum = 0;
    opFunc = percent;
});
const butMul = document.querySelector("#mul");
butMul.addEventListener("click", () => {
    butEqual.click();
    firstNum = actualNum;
    actualNum = 0;
    previousNum = 0;
    opFunc = multiply;
});
const butDiv = document.querySelector("#div");
butDiv.addEventListener("click", () => {
    butEqual.click();
    firstNum = actualNum;
    actualNum = 0;
    previousNum = 0;
    opFunc = divide;
});
const butAdd = document.querySelector("#add");
butAdd.addEventListener("click", () => { 
    butEqual.click();
    firstNum = actualNum;
    actualNum = 0;
    previousNum = 0;
    opFunc = add;
});
const butSub = document.querySelector("#sub");
butSub.addEventListener("click", () => {
    butEqual.click();
    firstNum = actualNum;
    actualNum = 0;
    previousNum = 0;
    opFunc = substract;
});

// Equal and clear buttons  

const butClear = document.querySelector("#clear");
butClear.addEventListener("click", () => {
    actualNum = 0;
    previousNum = 0;
    display.value = actualNum;   
    opFunc = null;   
});

const butEqual = document.querySelector("#equal");
butEqual.addEventListener("click", () => {
    if(opFunc != null) {
    secondNum = actualNum;
    //actualNum = 0;
    previousNum = 0;
   display.value = actualNum = equal(Number(firstNum), opFunc, Number(secondNum));  
    opFunc = null;   
    }
});
