let numeroSecreto = 0;
let intentos = 1;
let listaNumeroSorteados = [];
let numeroMaximo = 10;



function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numerodeUsuario = parseInt(document.getElementById('valorUsuario').value);

      
     if(numerodeUsuario == numeroSecreto){
        asignarTextoElemento('p', `Acertaste el numero en ${intentos} ${(intentos === 1) ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        //el usuario no acerto
        if(numerodeUsuario > numeroSecreto){
            asignarTextoElemento('p','El numero secreto es menor');
        }else{
            asignarTextoElemento('p','El numero secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }

    return;

}

function generarNumerosecreto(){
   let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;


   console.log(numeroGenerado);
   console.log(listaNumeroSorteados);
   //si ya sorteamos todos los numeros
   if(listaNumeroSorteados.length == numeroMaximo ){

        asignarTextoElemento('p','ya has utilizado todos los numeros posibles'); 

   }else {
    if(listaNumeroSorteados.includes(numeroGenerado)) {
        return generarNumerosecreto();
   }else{
        listaNumeroSorteados.push(numeroGenerado);
        return numeroGenerado;
        }
    }

}

   


function condicionesIniciales(){

    numeroSecreto = generarNumerosecreto();
    asignarTextoElemento('h1','Juego del numero secreto');
    asignarTextoElemento('p',`indica un numero del 1 al ${numeroMaximo}`);
    intentos = 1;

}




function limpiarCaja(){
document.querySelector('#valorUsuario').value = '';

}

function reiniciarJuego() {
    limpiarCaja();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled','true');

}

condicionesIniciales();
