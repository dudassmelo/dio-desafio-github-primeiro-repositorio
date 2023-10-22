// Exercício 3 - Valor Pago de um Produto

/*
    3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. 
    Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

    Código Condição de pagamento:
    1- À vista no Dinheiro ou PIX, recebe 15% de desconto;
    2- À vista Débito, recebe 10% de desconto;
    3- Em duas vezes, preço normal de etiqueta sem juros;
    4- Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/

function aplicarDesconto (valor, formaPagamento) {

    if (formaPagamento === 1) {
        console.log ('O valor final do produto é de ' + (valor - (valor * 0.10)) + ' reais.');
    } else if (formaPagamento === 2) {
        console.log ('O valor final do produto é de ' + (valor - (valor * 0.15)) + ' reais.');
    } else if (formaPagamento === 3) {
        console.log ('O valor final do produto é de ' + valor + ' reais.');
    }else {
        console.log ('O valor final do produto é de ' + (valor + (valor * 0.1)) + ' reais.');
    }
}

aplicarDesconto (100,2)