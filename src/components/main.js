import distancia from "./distancia.js"
import temperatura from "./temperatura.js"
import peso  from "./peso.js"

const form1 = document.querySelector('#form1');

form1.addEventListener('submit', (e)=>{
    e.preventDefault();

    let data = Object.fromEntries(new FormData(e.target));
    let accion = e.submitter.dataset.accion 

    const {metros,celsius,kilo}= data;

    if(accion === "metros"){
        let distancia1 = new distancia(metros);
        distancia1.calcularDistancia()
        form1.reset();
    }

    if(accion === "celsius"){
        let temperatura1 = new temperatura(celsius);
        temperatura1.calcularTemperatura()
        form1.reset();
    }
    if(accion === "kilo"){
        let peso1 = new peso(kilo);
        peso1.calcularPeso()
        form1.reset();
    }
});
