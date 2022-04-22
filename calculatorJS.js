let answer;
function Calculator (displayValue,firstValue,secondValue,operator) {
    this.displayValue = displayValue
    this.firstValue = firstValue
    this.secondValue =secondValue
    this.operator = operator
    Object.defineProperty(Calculator,'answer',{
        get: answer
    })
}
let calculator = new Calculator()
//Initial Values
calculator.displayValue ='';
let answerArray =[];
let finalAnswer ;

//Making Buttons Operational
let numbers = document.querySelectorAll('.number')
let operators =document.querySelectorAll('.operator')  
let display = document.getElementById('total')

numbers.forEach(element =>element.addEventListener('click',combineNumbers))
operators.forEach(element=>element.addEventListener('click',calculate))
document.getElementById('equal').addEventListener('click',equals)
document.getElementById('clear').addEventListener('click',clearAll)


//Concatenate Selected Numbers
function combineNumbers(event){
    calculator.displayValue += event.target.innerHTML.trim()
    display.innerHTML = calculator.displayValue
}


//Save Operator Selected and First number
function calculate (event) {
    // Set the operater in the Calculator object = to the operator selected
    calculator.operator = event.target.innerHTML.trim()
    // Typed number = firstvalue if it is empty (at the beginning) otherwise it = second value
    if(!calculator.firstValue){
        calculator.firstValue = parseInt(calculator.displayValue)
    } else{
        calculator.secondValue = parseInt(calculator.displayValue)
    }
    // 

    //Getting operator to show in display
    calculator.displayValue += `  ${calculator.operator}`
    display.innerHTML = calculator.displayValue
    calculator.displayValue=''
}

function equals () {
    if(calculator.firstValue !== calculator.displayValue){
        calculator.secondValue = parseInt(calculator.displayValue)
    }
  
    switch(calculator.operator){
        case '+':
           calculator.displayValue = Number((calculator.firstValue+calculator.secondValue).toFixed(3));
            break
        case '-':
            calculator.displayValue = Number((calculator.firstValue-calculator.secondValue).toFixed(3));
            break
        case 'X':
            calculator.displayValue = Number((calculator.firstValue*calculator.secondValue).toFixed(3));
            break
        case '/':      
        if(calculator.secondValue == 0){
            calculator.displayValue ='Undefined'
        }else{
            calculator.displayValue  = Number((calculator.firstValue/calculator.secondValue).toFixed(3));
        }
            console.log(calculator.secondValue)
            break
    }
   
    display.innerHTML = calculator.displayValue
    calculator.firstValue = calculator.displayValue
    answer = calculator.firstValue
}

function clearAll(){
    calculator.displayValue =''
    calculator.firstValue = ''
    calculator.secondValue =''
    calculator.operator =''
    display.innerHTML =''
}