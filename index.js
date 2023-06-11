// let x =1;
// let y=3;
// let z = x % y
// console.log(z)


// saturday 
// easiest calculator
let calculation = []
let accumulativeCalculation
const buttons = document.querySelectorAll('button')

// console.log(buttons)

const screenDisplay = document.querySelector('.screen')



buttons.forEach(button => button.addEventListener('click', event=> calculate(button)))