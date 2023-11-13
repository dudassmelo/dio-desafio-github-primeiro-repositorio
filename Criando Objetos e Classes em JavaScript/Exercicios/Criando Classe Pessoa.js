class Pessoa {
    nome;
    peso;
    altura;

    constructor (nome,peso,altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularIMC () {
        
        return this.peso / (this.altura * this.altura);
    }

    classificarImc () {

    const IMC = this.calcularIMC ();

    if (IMC < 18.5) {
        return 'abaixo do peso';
    } else if (IMC >= 18.5 && IMC < 25) {
        return 'peso normal';
    } else if (IMC >= 25 && IMC < 30) {
        return 'acima do peso';
    } else if (IMC >= 30 && IMC < 40) {
        return 'obesidade'
    } else {
        return 'obesidade grave' 
    };

    }
}

const jose = new Pessoa ('José', 70, 1.75);
console.log ('O IMC do paciente é de ' + jose.calcularIMC() + ' e sua condição é de ' + jose.classificarImc () + ".");

const duda = new Pessoa ('Eduarda', 52, 1.60);
console.log ('O IMC do paciente é de ' + duda.calcularIMC() + ' e sua condição é de ' + duda.classificarImc () + ".");
