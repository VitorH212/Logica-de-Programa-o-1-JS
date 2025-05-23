let nome = prompt("Digite Seu nome:");
console.log (`Boas Vindas ${nome}`);

let LF = prompt("Qual sua linguagem de programação favorita?");
console.log (LF);

let idade = prompt("Qual a sua idade?");
let maioridade = idade >= 18 ? "Maior de idade":"Menor de Idade";
console.log (maioridade);

let Conta = prompt("Deseja fazer Soma ou Subtração?");

while (Conta != "Soma" && Conta!= "Subtração") {
Conta = prompt("Deseja fazer ''Soma'' ou ''Subtração''?");
}

let valorA = parseInt (prompt("Digite um numero A"));
let valorB = parseInt(prompt("Digite um numero B"));
let resultado = parseInt(0);


if (Conta == "Soma") {
    resultado = parseInt(valorA + valorB);
    console.log (`A soma de ${valorA} e ${valorB} é igual a ${resultado}.`);
} else { if (Conta == "Subtração")
    resultado = parseInt(valorA - valorB);
    console.log (`A diferença entre ${valorA} e ${valorB} é igual a ${resultado}.`);
}

let valorF = resultado > 0? "positivo": (resultado < 0?"negativo":"zero");
console.log (`${resultado} é ${valorF}`);

console.log ("Agora vamos para contagem")

let Ninicial = parseInt(prompt("Digite um numero inicial"));
let Nterminal = parseInt(prompt("Digite um numero terminal"));

while (Ninicial != Nterminal) {
    console.log (Ninicial);

    if (Ninicial < Nterminal) {
        Ninicial ++;
    } else {if (Ninicial > Nterminal)
        Ninicial --;
    }
}

console.log (Nterminal);

console.log ("Agora vamos para a geração de numeros")

let numeral = prompt("Deseja um numero aleatório de até quantos Digitos?");
let multiplo = 10 ** numeral;
let numeoaelatório = parseInt((Math.random()*multiplo + 1));

console.log(numeoaelatório);