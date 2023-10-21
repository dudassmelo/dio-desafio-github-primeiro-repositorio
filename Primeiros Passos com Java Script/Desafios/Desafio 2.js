const preçoGasolina = 5.77;
const preçoEtanol = 2.2 ;
const KmPorLitroGasolina = 11;
const KmPorLitroEtanol = 7;

let tipoCombustivel = 'Gasolina';
let kmViagem = 160;



if (tipoCombustivel === 'Gasolina') {
    valorDaViagem= (kmViagem/KmPorLitroGasolina)*preçoGasolina
} else {
    valorDaViagem= (kmViagem/KmPorLitroEtanol)*preçoEtanol
};

console.log ('O valor da viagem com o combustivel ' + tipoCombustivel + ' será de ' + valorDaViagem.toFixed(2) + ' reais.')