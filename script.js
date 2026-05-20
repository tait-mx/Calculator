let actualNum = 0;
let previousNum = 0;
let operation;
let firstNum;
let secondNum;

console.log("Calculator project begins!")

// Principal operation functions

let add = function (a, b) { return a + b};
let substract = function (a, b) { return a - b};
let multiply = function (a, b) { return a * b};
let divide = function (a, b) { return a / b};
let equal = function (n1, operator, n2) { return operator(n1, n2)};

/*
console.log("3 + 5 = " + add(3, 5));
console.log("3 - 5 = " + substract(3, 5));
console.log("3 * 5 = " + multiply(3, 5));
console.log("3 / 5 = " + divide(3, 5));
*/ 

let operate = function (num1, operation, num2) {

    return  operation(num1, num2)
}

//console.log(operate(3, add, 6))

let display = document.querySelector("input");

const but0 = document.querySelector("#but0");
but0.addEventListener("click", () => {
    previousNum = actualNum ;
    actualNum = previousNum + "0";
    display.value = actualNum;
});

const but1 = document.querySelector("#but1");
but1.addEventListener("click", () => {
    previousNum = actualNum ;
    actualNum = previousNum + "1";
    display.value = Number(actualNum);
});

const but2 = document.querySelector("#but2");
but2.addEventListener("click", () => {
    previousNum = Number(actualNum) ;
    actualNum = previousNum + "2";
    display.value = Number(actualNum);
});

const but3 = document.querySelector("#but3");
but3.addEventListener("click", () => {
    previousNum = Number(actualNum) ;
    actualNum = previousNum + "3";
    display.value = Number(actualNum);
});
const but4 = document.querySelector("#but4");
but4.addEventListener("click", () => {
    previousNum = Number(actualNum) ;
    actualNum = previousNum + "4";
    display.value = Number(actualNum);
});
const but5 = document.querySelector("#but5");
but5.addEventListener("click", () => {
    previousNum = Number(actualNum) ;
    actualNum = previousNum + "5";
    display.value = Number(actualNum);
});
const but6 = document.querySelector("#but6");
but6.addEventListener("click", () => {
    previousNum = Number(actualNum) ;
    actualNum = previousNum + "6";
    display.value = Number(actualNum);
});
const but7 = document.querySelector("#but7");
but7.addEventListener("click", () => {
    previousNum = Number(actualNum) ;
    actualNum = previousNum + "7";
    display.value = Number(actualNum);
});
const but8 = document.querySelector("#but8");
but8.addEventListener("click", () => {
    previousNum = Number(actualNum) ;
    actualNum = previousNum + "8";
    display.value = Number(actualNum);
});
const but9 = document.querySelector("#but9");
but9.addEventListener("click", () => {
    previousNum = Number(actualNum) ;
    actualNum = previousNum + "9";
    display.value = Number(actualNum);
});

const butMul = document.querySelector("#mul");
butMul.addEventListener("click", () => {
    actualNum = " *";
    display.value = display.value + " * ";
});
const butDiv = document.querySelector("#div");
butDiv.addEventListener("click", () => {
    actualNum = " /";
    display.value = display.value + " / ";
});
const butAdd = document.querySelector("#add");
butAdd.addEventListener("click", () => {
    actualNum = " +";
    display.value = display.value + " + ";
});
const butSub = document.querySelector("#sub");
butSub.addEventListener("click", () => {
    firstNum = actualNum;
    actualNum = 0;
    previousNum = 0;
    opFunc = substract;
});

const butEqual = document.querySelector("#equal");
butEqual.addEventListener("click", () => {
    secondNum = actualNum;
    actualNum = 0;
    previousNum = 0;
   display.value = equal(firstNum, opFunc, secondNum);
});

const butClear = document.querySelector("#clear");
butClear.addEventListener("click", () => {
    actualNum = 0;
    previousNum = 0;
    display.value = actualNum;      
});
