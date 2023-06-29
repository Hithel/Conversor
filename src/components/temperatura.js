export default class temperatura {
    constructor(celsius){
        this.celsius=celsius;
    }
    calcularTemperatura (){
        this.celsius = (Number(this.celsius)*9/5)+32
        return alert(`La temperatura es ${this.celsius}`)
    }
}