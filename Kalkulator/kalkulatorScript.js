let currentNumber = 0;
let activeChangeNum = 1;

document.getElementById("changeActiveB").textContent = activeChangeNum;

function add (num1){
    currentNumber += activeChangeNum;
    uploadNumber(currentNumber);
}
function subtract (num1){
    currentNumber -= activeChangeNum;
    uploadNumber(currentNumber);
}
function multiply (num1){
    currentNumber *= activeChangeNum;
    uploadNumber(currentNumber);
}
function divide (num1){
    currentNumber /= activeChangeNum;
    uploadNumber(currentNumber);
}

function uploadNumber(number){
    console.log("uploading...");
    document.getElementById("sumNumber").textContent=number;
}

function changeActiveNumber(){
    activeChangeNum = prompt("What number do you want to choose: ");
    activeChangeNum = Number(activeChangeNum);

    if(isNaN(activeChangeNum)){
        alert("not a number")
        return;
    }

    document.getElementById("changeActiveB").textContent = activeChangeNum;
    
}


//kalkulator knappar
const changeActiveBtn = document.getElementById("changeActiveB")
changeActiveBtn.addEventListener('click', changeActiveNumber);

const addBtn = document.getElementById("addB")
const subtractBtn = document.getElementById("subB")
const multiplyBtn = document.getElementById("multB")
const divideBtn = document.getElementById("diviB")
addBtn.addEventListener('click', function(){add(activeChangeNum)});
subtractBtn.addEventListener('click', function(){subtract(activeChangeNum)});
multiplyBtn.addEventListener('click', function(){multiply(activeChangeNum)});
divideBtn.addEventListener('click', function(){divide(activeChangeNum)});
