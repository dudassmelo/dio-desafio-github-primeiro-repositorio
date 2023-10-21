// Exercício 2 - Cálculo de IMC

/*
    2) O IMC – Indice de Massa Corporal é um critério da Organização Mundial de Saúde para dar uma indicação sobre a condição de peso de uma pessoa adulta. 

    Formula do IMC:
    IMC = peso / (altura * altura)

    Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo.

    IMC em adultos Condição:
    - Abaixo de 18.5 Abaixo do peso;
    - Entre 18.5 e 25 Peso normal;
    - Entre 25 e 30 Acima do peso;
    - Entre 30 e 40 Obeso;
    - Acima de 40 Obsesidade Grave;
*/

let peso = 55;
let altura = 1.60;

const IMC = (peso / Math.pow(altura,2));

if (IMC < 18.5) {
    condiçãoAdulto = 'abaixo do peso';
} else if (IMC >= 18.5 && IMC < 25) {
    condiçãoAdulto = 'peso normal';
} else if (IMC >= 25 && IMC < 30) {
    condiçãoAdulto = 'acima do peso';
} else if (IMC >= 30 && IMC < 40) {
    condiçãoAdulto = 'obesidade'
} else {
    condiçãoAdulto = 'obesidade grave' 
};

console.log ('O IMC do paciente é de ' + IMC.toFixed(2) + 'e sua condição é de ' + condiçãoAdulto + ".");