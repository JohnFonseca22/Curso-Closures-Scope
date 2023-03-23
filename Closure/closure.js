function Saluda(){
    let nombreUsuario = 'John';


    function PantallanombreUsuario(){
        return 'HOLA' +(nombreUsuario);
    }
    return PantallanombreUsuario ;

}

const s = Saluda();
console.log(s);
console.log(g());