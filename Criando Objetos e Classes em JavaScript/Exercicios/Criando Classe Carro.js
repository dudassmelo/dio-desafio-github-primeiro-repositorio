class Carro {
    marca;
    cor;
    gastoMédioPorKM;

    constructor (marca,cor,gastoMédioPorKM) {
        
        this.marca = marca;
        this.cor = cor;
        this.gastoMédioPorKM = gastoMédioPorKM;

    } 
    
    calcularViagem (distanciaEmKM,preçoCombustivel){
        return distanciaEmKM * this.gastoMédioPorKM * preçoCombustivel;
    }
}

const uno = new Carro ('Fiat','Vermelho', 1/12);
console.log ('Você gastou ' + uno.calcularViagem (70,5) + ' reais de combustível');

const palio = new Carro ('Fiat','prata', 1/10);
console.log ('Você gastou ' + palio.calcularViagem (70,5) + ' reais de combustível');