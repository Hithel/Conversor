export default class peso {
    constructor(peso){
        this.peso = peso;
    }

    calcularPeso(){
        this.peso = Number(this.peso)*2.20462;
        return alert(`el paso en libras es de: ${this.peso}`);
    }
}