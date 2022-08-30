let userOption = ""

let userNumber = ""

let gameResult = ""

const optionPar = document.querySelector('.par');

const optionImpar = document.querySelector('.impar');

const result = document.querySelector('.result');

const winlose = document.querySelector('.winlose');

const buttonsNumbers = document.querySelectorAll('.number');

optionPar.addEventListener('click', function changeColorPar() {
    
    optionImpar.style.backgroundColor = 'inherit'
    
    optionPar.style.backgroundColor = '#24d0e0'
})

optionImpar.addEventListener('click', function changeColorImpar () {
    
    optionPar.style.backgroundColor = 'inherit'
    
    optionImpar.style.backgroundColor = '#24d0e0'
})

document.querySelector('.par').addEventListener('click', function () {
    
    userOption = "par"
    
})

document.querySelector('.impar').addEventListener('click', function () {
    
    userOption = "impar"
    
})

function cleanButtonColorNumber() {
    
    buttonsNumbers.forEach(function(currentButton) {
    
        if(currentButton.style.backgroundColor = '#24d0e0') {
    
            currentButton.style.backgroundColor = 'inherit';
        }
    })
}

//Get user number on clicked button
buttonsNumbers.forEach(function(currentButton) {

    currentButton.addEventListener('click', function () {
        
        cleanButtonColorNumber()
        
        currentButton.style.backgroundColor = '#24d0e0'

        userNumber = Number(currentButton.textContent)
        
    })
})

function playGame() {
    
    parOuImpar();
    
    userWinOrLose();
}

//Game result defined: gameResult = "par"; gameResult = "impar"
function parOuImpar() {

    let computerNumber = Math.floor(Math.random() * 11);
    
    let sum = userNumber + computerNumber
    
    let sumString = sum.toString().split("")
    
    const lastNumberSum = Number(sumString[sumString.length - 1]);

    if(lastNumberSum % 2 === 0){
        
        gameResult = "par"
        
        result.innerHTML = `Você jogou ${userNumber}, o computador jogou ${computerNumber}. Resultado: ${sum} é par`;
        
    } else {
        
        gameResult = "impar"
        
        result.innerHTML = `Você jogou ${userNumber}, o computador jogou ${computerNumber}. Resultado: ${sum} é ímpar`;
    }
}

function userWinOrLose() {
    
    if(userOption === gameResult){
 
        winlose.innerHTML = "Você ganhou";
    
    } else {
 
        winlose.innerHTML = "Você perdeu";   
    }
}