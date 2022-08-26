let n1 = 131646619
let n1String = n1.toString().split("")

const lastNumber = Number(n1String[n1String.length - 1]);
if(lastNumber % 2 === 0){
    console.log(`${n1} é par, porque a unidade ${lastNumber} é par.`);
} else {
    console.log(`${n1} é ímpar, porque a unidade ${lastNumber} é ímpar.`);
}

