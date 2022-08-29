let userOption = ""

let result = document.querySelector('.result');

let winlose = document.querySelector('.winlose');

let gameResult = ""

document.querySelector('.par').addEventListener('click', function () {
    userOption = "par"
    console.log(userOption)
  })

  document.querySelector('.impar').addEventListener('click', function () {
    userOption = "impar"
    console.log(userOption)
  })

function playGame() {
    parOuImpar();
    userWinOrLose();
}

//Define o resultado do jogo: gameResult = "par"; gameResult = "impar"
function parOuImpar() {

    let n1 = document.getElementById("usernumber").value;
    
    let n2 = Math.floor(Math.random() * 11);
    
    let sum = Number(n1) + Number(n2)
    
    let sumString = sum.toString().split("")
    
    const lastNumberSum = Number(sumString[sumString.length - 1]);

    if(lastNumberSum % 2 === 0){
        gameResult = "par"
        result.innerHTML = `Você jogou ${n1}, o computador jogou ${n2}. Resultado: ${sum} é par`;
        
    } else {
        gameResult = "impar"
        result.innerHTML = `Você jogou ${n1}, o computador jogou ${n2}. Resultado: ${sum} é ímpar`;
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