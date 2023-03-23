//function alcancia(monedas){
//    let guardarMonedas = 0;
//    guardarMonedas += monedas;
//    console.log('alcancia: $' +(guardarMonedas));
//}
//
//alcancia(10);
//alcancia(6);

function alcancia() {
    let guardarMonedas = 0;
    function contarMonedas(monedas){
        guardarMonedas += monedas;
        console.log('alcancia: $' +(guardarMonedas));
    }
    return contarMonedas;
}
const miAlcancia = alcancia();

miAlcancia(10);
miAlcancia(15);
miAlcancia(20);

const laAlcanciaJohn = alcancia();
laAlcanciaJohn(40);
laAlcanciaJohn(65);
laAlcanciaJohn(70);