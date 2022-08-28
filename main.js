

function parOuImpar() {

    let n1 = document.getElementById("usernumber").value;
    let n2 = Math.floor(Math.random() * 11);
    let result = document.querySelector('.result')
    
    let sum = Number(n1) + Number(n2)
    
    let sumString = sum.toString().split("")
    
    const lastNumberSum = Number(sumString[sumString.length - 1]);

    if(lastNumberSum % 2 === 0){
        result.innerHTML = `Você jogou ${n1}, o computador jogou ${n2}. Resultado: ${sum} é par`;
    } else {
        result.innerHTML = `Você jogou ${n1}, o computador jogou ${n2}. Resultado: ${sum} é ímpar`;
    }
}