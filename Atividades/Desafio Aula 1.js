alert ("Cadastro para habilitação");
let nome = prompt("digite seu nome");

alert(`Então seu nome é: ${nome}?`);

let vn = prompt("essa informação esta correta? responda com S ou N");
 if (vn == "S") {
    alert ("ok seguiremos para o proximo passo")
 }

 else {
    if (vn == "N")  alert ("ok então, faremos a correção de seu nome");
    let nome  = prompt("digite seu nome corretamente");
    alert(`Nome correto é: ${nome}`);
    }

alert ("verificador de idade");

let idade = prompt("Digite sua idade:");
let idademinima = 18;

if (idade >= idademinima) {
    alert ("maior de idade, pode tirar habilitação")
}

else {
    if (idade <= idademinima) alert ("menor de idade, não pode tirar habilitação")
};