// concatenar
/*console.log('Hello' + ' ' + "world")
console.log("Hello" + 'World')
myname = "Lazaro"
console.log('Hello' + ' ' + myname )
myname = 'Lazaro Henrique'
console.log(`Hello ${myname}`)
*/

//..........................

/*const x = 0
y = 'morango'
console.log(x, y)
*/

//..........................
const input = require("readline-sync")

console.log("Digite um mês");

const mes = input.question ('qual é o mês');

if (mes === 'fevereiro'){
    console.log ('é carnaval')
} else if (mes === 'junho'){
    console.log ('são joao')
} else if (mes === 'dezembro'){
    console.log ('natal')
} else {
    console.log(`${mes} nao tem festa`)
};