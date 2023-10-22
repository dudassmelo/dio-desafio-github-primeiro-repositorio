// Exercicio 1 - escrevaMeuNome

function sayMyName (nome) {
    return 'Seu nome é ' + nome;
}


//Exercicio 2 - verificarIdade

function verificarIdade (idade) {

    if (idade < 18) {
        return'menor'
    } else {
       return 'maior'
    }
}

//Exercicio 3 - Invocar função dentro de função

function main () {
    console.log (sayMyName('Eduarda')+ ' e você é ' + verificarIdade (23) + ' de idade.');
}

main ();
