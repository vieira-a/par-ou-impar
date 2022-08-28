let n1 = document.querySelector('#usernumber').value;
let n2 = Math.floor(Math.random() * 11);
let result = document.querySelector('.result')


function parOuImpar() {
    
    let sum = n1 + n2
    
    let sumString = sum.toString().split("")
    
    const lastNumberSum = Number(sumString[sumString.length - 1]);

    if(lastNumberSum % 2 === 0){
        result.innerHTML = `N1=${n1} - N2=${n2} - ${sum} é par`;
    } else {
        result.innerHTML = `N1=${n1} - N2=${n2} - ${sum} é ímpar`;
    }
}