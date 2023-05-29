/* ------------ NUMERO 1------------ */

let numero1 = 5;
let numero2 = 3;


if (numero1 > numero2) {
  console.log("El primer número es mayor que el segundo");
} else {
  console.log("El primer número no es mayor que el segundo");
}
/* ------------ NUMERO 2------------ */

let numero1 = 5;
let numero2 = 3;


if (numero1 === numero2) {
  console.log("Los números son iguales");
} else {
  console.log("Los números son diferentes");
}

/* ------------ NUMERO 3------------ */

let numero1 = 5;
let numero2 = 3;


if (numero1 > numero2) {
  console.log("El primer número es más grande que el segundo");
} else if (numero1 < numero2) {
  console.log("El segundo número es más grande que el primero");
} else {
  console.log("Los números son iguales");
}

/* ------------ NUMERO 4------------ */

let numero1 = 5;
let numero2 = 3;
let numero3 = 7;

// Encontrar el número más pequeño
let numeroMasChico = numero1;

if (numero2 < numeroMasChico) {
  numeroMasChico = numero2;
}

if (numero3 < numeroMasChico) {
  numeroMasChico = numero3;
}


console.log("El número más pequeño es: " + numeroMasChico);

/* ------------ NUMERO 5------------ */

let persona1 = {
  nombre: "Juan",
  edad: 25,
  altura: 170
};

let persona2 = {
  nombre: "María",
  edad: 30,
  altura: 175
};


let personaMasAlta = persona1;
let personaDeMayorEdad = persona1;

if (persona2.altura > personaMasAlta.altura) {
  personaMasAlta = persona2;
}

if (persona2.edad > personaDeMayorEdad.edad) {
  personaDeMayorEdad = persona2;
}


console.log("La persona más alta es: " + personaMasAlta.nombre);
console.log("La persona de mayor edad es: " + personaDeMayorEdad.nombre);

/* ------------ NUMERO 6------------ */

let nombre = prompt("Ingresa tu nombre:");
let edad = parseInt(prompt("Ingresa tu edad:"));
let altura = parseInt(prompt("Ingresa tu altura en cm:"));
let vision = parseFloat(prompt("Ingresa tu visión (de 0 a 10):"));


let estaCapacitado = (edad >= 18) && (altura > 150) && (vision >= 8);


if (estaCapacitado) {
  console.log(nombre + ", estás capacitado para conducir.");
} else {
  console.log(nombre + ", no estás capacitado para conducir.");
}

/* ------------ NUMERO 7------------ */
function validarIngreso(nombre, pase, tieneEntrada, dineroDisponible) {
  if (nombre === "Dory" || pase === "vip") {
    console.log("¡Bienvenido/a! Puedes ingresar.");
  } else if (tieneEntrada === "si" || tieneEntrada === "s" || tieneEntrada === true) {
    let respuesta = confirm("¿Deseas utilizar tu entrada?");
    if (respuesta) {
      console.log("¡Bienvenido/a! Puedes ingresar.");
    } else {
      console.log("¡Hasta luego! Disfruta tu día.");
    }
  } else {
    let deseaComprar = confirm("¿Deseas comprar una entrada?");
    if (deseaComprar) {
      if (dineroDisponible >= 1000) {
        console.log("¡Venta de entrada exitosa! ¡Bienvenido/a!");
      } else {
        console.log("Lo siento, no tienes suficiente dinero para comprar una entrada.");
      }
    } else {
      console.log("¡Hasta luego! Disfruta tu día.");
    }
  }
}

/* ------------ NUMERO 8------------ */
function juegoAdivinanza() {
  const numeroIncognita = Math.floor(Math.random() * 10) + 1;
  let intentos = 3;

  while (intentos > 0) {
    let numeroIngresado = parseInt(prompt("Ingresa un número del 1 al 10:"));

    if (numeroIngresado === numeroIncognita) {
      console.log("¡Ganaste, has adivinado el número!");
      return;
    } else if (numeroIngresado > numeroIncognita) {
      console.log("El número ingresado es mayor, vuelve a intentarlo.");
    } else {
      console.log("El número ingresado es menor, vuelve a intentarlo.");
    }

    intentos--;
  }

  console.log(`Lo siento, has agotado tus intentos. El número era ${numeroIncognita}.`);
}


/* ------------ NUMERO 9------------ */
function clasificarEdad(edad) {
  if (edad >= 0 && edad <= 12) {
    console.log("Eres un infante.");
  } else if (edad >= 13 && edad <= 18) {
    console.log("Eres un adolescente.");
  } else if (edad >= 19 && edad <= 45) {
    console.log("Eres un mayor joven.");
  } else if (edad > 45 && edad <= 100) {
    console.log("Eres un anciano.");
  } else {
    let respuesta = confirm("¿Realmente tienes esa edad?");
    if (respuesta) {
      console.log("Wow, eres muy longevo/a.");
    } else {
      console.log("Ingresa tu edad correcta la próxima vez.");
    }
  }
}


/* ------------ NUMERO 10------------ */
function jugarPiedraPapelTijeras(jugador1, jugador2) {
  jugador1 = jugador1.toLowerCase();
  jugador2 = jugador2.toLowerCase();

  if (
    (jugador1 === "piedra" && jugador2 === "tijeras") ||
    (jugador1 === "papel" && jugador2 === "piedra") ||
    (jugador1 === "tijeras" && jugador2 === "papel")
  ) {
    console.log("¡Jugador 1 ha ganado!");
  } else if (
    (jugador2 === "piedra" && jugador1 === "tijeras") ||
    (jugador2 === "papel" && jugador1 === "piedra") ||
    (jugador2 === "tijeras" && jugador1 === "papel")
  ) {
    console.log("¡Jugador 2 ha ganado!");
  } else if (jugador1 === jugador2) {
    console.log("¡Han empatado!");
  } else {
    console.log("¡Uno de los jugadores ha hecho trampa!");
  }
}


/* ------------ NUMERO 11------------ */
function esPrimo(numero) {
  if (numero <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(numero); i++) {
    if (numero % i === 0) {
      return false;
    }
  }

  return true;
}


console.log(esPrimo(7)); // true
console.log(esPrimo(12)); // false
console.log(esPrimo(23)); // true
console.log(esPrimo(1)); // false
console.log(esPrimo(0)); // false

/* ------------ NUMERO 12------------ */
function secuenciaFibonacci(n) {
  let secuencia = [0, 1];

  for (let i = 2; i <= n; i++) {
    secuencia[i] = secuencia[i - 1] + secuencia[i - 2];
  }

  return secuencia;
}


console.log(secuenciaFibonacci(10)); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
console.log(secuenciaFibonacci(5)); // [0, 1, 1, 2, 3, 5]
console.log(secuenciaFibonacci(2)); // [0, 1, 1]

/* ------------ NUMERO 13------------ */
function esPalindromo(palabra) {
  palabra = palabra.toLowerCase();
  let longitud = palabra.length;

  for (let i = 0; i < longitud / 2; i++) {
    if (palabra[i] !== palabra[longitud - 1 - i]) {
      return false;
    }
  }

  return true;
}


console.log(esPalindromo("reconocer")); // true
console.log(esPalindromo("casa")); // false
console.log(esPalindromo("radar")); // true
console.log(esPalindromo("Anita lava la tina")); // true
