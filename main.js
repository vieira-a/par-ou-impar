let userOption = ""

let userNumber = ""

let gameResult = ""

const result = document.querySelector('.result');

const winlose = document.querySelector('.winlose');

const buttonsNumbers = document.querySelectorAll('.number');

document.querySelector('.par').addEventListener('click', function () {
    userOption = "par"
    console.log(userOption)
})

document.querySelector('.impar').addEventListener('click', function () {
    userOption = "impar"
    console.log(userOption)
})

//Get user number on clicked button
buttonsNumbers.forEach(function(currentButton) {

    currentButton.addEventListener('click', function () {
        
        userNumber = Number(currentButton.textContent)
        
        console.log(userNumber)
        
    })
})

function playGame() {
    parOuImpar();
    userWinOrLose();
}

//Define o resultado do jogo: gameResult = "par"; gameResult = "impar"
function parOuImpar() {

    //let n1 = document.getElementById("usernumber").value;
    
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
    //if(userOption === "par" && gameResult === "par" || userOption === "impar" && gameResult === "impar"){
        if(userOption === gameResult){
        winlose.innerHTML = "Você ganhou";
    } else {
        winlose.innerHTML = "Você perdeu";   
    }
}