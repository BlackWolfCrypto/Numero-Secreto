let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 5;

console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento); 
    elementoHTML.innerHTML = texto; 
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p',`FELICIDADES. Descubriste el número en ${intentos} ${(intentos === 1) ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //El usuario no acerto
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p','El número secreto es menor');
        } else {
            asignarTextoElemento('p','El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return; 
}


function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
} 

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya sorteamos todos los numeros 
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p','¡GRACIAS! El juego ha terminado');
    } else {
        //Si el numero generado esta incluido en la lista 
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}
function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del número secreto');
    asignarTextoElemento('p',`Dame un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    //Limpiar caja
    limpiarCaja();
    //Indicar mensaje de intervalo de numeros
    //generar el número aleatorio
    //Iniciar el numero de intentos
    condicionesIniciales();
    //Deshabilitar el boton de juego nuevo
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesIniciales();

function calcularIMC(peso, altura) {
    // Verificar que los parámetros son números positivos
    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
      return "Por favor, ingresa valores válidos para peso y altura.";
    }
  
    // Calcular el IMC
    const imc = peso / (altura * altura);
  
    // Devolver el resultado redondeado a dos decimales
    return imc.toFixed(2);
  }
  
  // Ejemplo de uso
  const peso = 70; // en kilogramos
  const altura = 1.75; // en metros
  
  const resultadoIMC = calcularIMC(peso, altura);
  console.log(`El IMC es: ${resultadoIMC}`);
  

  function calcularFactorial(numero) {
    // Verificar si el número es no negativo
    if (numero < 0) {
      return "Por favor, ingresa un número no negativo para calcular el factorial.";
    }
  
    // Caso base: el factorial de 0 es 1
    if (numero === 0) {
      return 1;
    }
  
    // Calcular el factorial usando un bucle
    let factorial = 1;
    for (let i = 1; i <= numero; i++) {
      factorial *= i;
    }
  
    return factorial;
  }
  
  // Ejemplo de uso
  const numero = 5;
  
  const resultadoFactorial = calcularFactorial(numero);
  console.log(`El factorial de ${numero} es: ${resultadoFactorial}`);
  