
let condicao = true
while (condicao) {
    //enquanto a condição for verdadeira 
    // as linhas de codigo dentro dos conchetes
    //serão repetidas
}

let i = 0;
while (i < 10) {
    console.log(i);

    i++
}

let estomago = 0;

while (estomago) {
    console.log('Quero comer mais coxinhas');

    estomago = estomago + 10;
}



let soma = 0;
let numero = Number(prompt('Digite um numero'));

while (numero !== 0) {
    soma = soma + numero;
    numero = Number(prompt('Digite um numero'));
}

console.log('A soma dos nueros inseridos é: ' + soma);


let i = 0;
for (let i = 0; i < 10; i++) {
    console.log(i);
}

const numeros = [14, 67, 89, 15, 23];

for (let i = 0; i < 5; i++) {
    const elemento = numeros[i]
console.log(elemento);
}

function encontrarMaiorNumero(arr) {
    let maior = arr[0];
    for (let i = 0; i < arr.length; i++){
        if (arr[i] > maior) {
            maior = arr[i]
        }
    }
    return "O maior numero é " + maior;
}
const numeral = [10, 20, 30, 40, 50, 60];
console.log(encontrarMaiorNumero(numeral));


for (const numero of numeros) {
    console.log(numero);
}

let meuArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (const elemento of meuArray) {
    console.log(elemento);
}
meuArray.forEach(elemento => {
    console.log(elemento);
})

let palavras= ["a", "b", "c", "d"];
function retornaFraseCompleta(arrayDePalavras) {
    let frase = " ";
    for ( let i = 0; i < arrayDePalavras.length; i++)
    {
        const elemento = arrayDePalavras[i];
        frase = frase + " " + elemento;
    }
    return frase;
}

console.log(retornaFraseCompleta(palavras));
