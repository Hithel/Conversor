export default class distancia {
    constructor(metros) {
        this.metros = metros;
    };

    calcularDistancia(){
        this.metros = Number(this.metros) * 3.28084
        return alert(`La conversion es ${this.metros}`)
    }
}