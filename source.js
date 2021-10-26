/* Global variables */
let operator = ""
let num1 = ""
let answer = 0
let decider = true
/* Displaying results in calc */

function showOp(op)
{
    document.getElementById("result").innerHTML += op
    num1 += op
}

function clearOp()
{
    document.getElementById("result").innerHTML = ""
}

function hardClear()
{
    clearOp()
    answer = 0
    num1 = 0
    operator = 0
}
function choseShow() 
{
    if (answer != 0 || decider === false) {
        clearOp()
        if (decider === false){
            hardClear()
            decider = true
        }
    }
}

function numericalClear(op)
{
    num1 = parseInt(num1)
    console.log("Values when a numerical operator is used",answer,num1)
    clearOp()
    document.getElementById("result").innerHTML += op
    operator = op
    answer = num1
    console.log("After num 1 = answer",answer, num1)
    num1 = 0 
    console.log("After num1 = 0",answer,num1)
}

function solveEquation() 
{
    if (operator === "+") {
        answer = parseFloat(answer) + parseFloat(num1)
        document.getElementById("result").innerHTML = answer
        num1 = 0
    } else if (operator === "-") {
        answer = parseFloat(answer) - parseFloat(num1)
        document.getElementById("result").innerHTML = answer
        num1 = 0
    } else if (operator === "*") {
        answer = parseFloat(answer) * parseFloat(num1)
        document.getElementById("result").innerHTML = answer
        num1 = 0
    } else if (operator === "/") {
        answer = parseFloat(answer) / parseFloat(num1)
        document.getElementById("result").innerHTML = answer
        num1 = 0
    } 
}
function displayAnswer(op)
{
    num1 = parseFloat(num1)
    if ((answer != 0) & (num1 != 0)){
        solveEquation()
        console.log("Final values",answer,num1)
    } else {
        numericalClear(op)
    }
}

function showAnswer()
{
    clearOp()
    solveEquation()
    decider = false
}
/* Numerical functions */
const add = document.querySelector('#add')
add.addEventListener('click', () => {
    operator = "+"
    displayAnswer("+")
})

const minus = document.querySelector('#subtract')
minus.addEventListener('click', () => {
    operator = "-"
    displayAnswer("-")
})

const multiply= document.querySelector('#multiply')
multiply.addEventListener('click', () => {
    operator = "*"
    displayAnswer("*")
})

const divide = document.querySelector('#slash')
divide.addEventListener('click', () => {
    operator = "/"
    displayAnswer("/")
})

const equals = document.querySelector('#equals')
equals.addEventListener('click', () => {
    console.log("hi",answer,num1)
    showAnswer()
})

const ac = document.querySelector('#Ac')
ac.addEventListener('click',() => {
    hardClear()
}
)
/* Button selectors */
const decimal = document.querySelector('#decimal')
decimal.addEventListener('click', () => {
    console.log(".")
    showOp(".")
})
const zero = document.querySelector('#zero')
zero.addEventListener('click', () => {
    choseShow()
    console.log(0)
    showOp(0)
})

const one = document.querySelector('#one')
one.addEventListener('click', () => {
    choseShow()
    console.log(1)
    showOp(1)
})

const two = document.querySelector('#two')
two.addEventListener('click', () => {
    choseShow()
    console.log(2)
    showOp(2)
})

const three = document.querySelector('#three')
three.addEventListener('click', () => {
    choseShow()
    console.log(3)
    showOp(3)
})

const four = document.querySelector('#four')
four.addEventListener('click', () => {
    choseShow()
    console.log(4)
    showOp(4)
})

const five = document.querySelector('#five')
five.addEventListener('click', () => {
    choseShow()
    console.log(5)
    showOp(5)
})

const six = document.querySelector('#six')
six.addEventListener('click', () => {
    choseShow()
    console.log(6)
    showOp(6)
})

const seven = document.querySelector('#seven')
seven.addEventListener('click', () => {
    choseShow()
    console.log(7)
    showOp(7)
})

const eight = document.querySelector('#eight')
eight.addEventListener('click', () => {
    choseShow()
    console.log(8)
    showOp(8)
})

const nine = document.querySelector('#nine')
nine.addEventListener('click', () => {
    choseShow()
    console.log(9)
    showOp(9)
})

