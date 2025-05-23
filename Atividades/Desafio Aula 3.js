let numero = parseInt(prompt("digite um numero inicial"));
let terminal = parseFloat(prompt("digite até onde contar"));

//Enquanto o numero digitado não for igual ao numero terminal.
while (numero != terminal) {
    console.log(numero);

    //Se numero digitado for maior que terminal então o mesmo sera reduzido
    if (numero > terminal) {
        numero --;
    } else {

        //Se o numero digitado for menor que o terminal então o mesmo será aumentado
        if (numero < terminal)
        numero ++;
    }
}

console.log(terminal);