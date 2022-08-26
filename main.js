let n1 = 5
let n2 = 8

sum = n1 + n2

let sumString = sum.toString().split("")

const lastNumberSum = Number(sumString[sumString.length - 1]);

if(lastNumberSum % 2 === 0){
    console.log(`${sum} é par, porque o número ${lastNumberSum} é divisível por 2`);
} else {
    console.log(`${sum} é ímpar, porque o número ${lastNumberSum} não é divisível por 2.`);
}

