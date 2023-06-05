// --------------Ejercicio 1--------------- //
// Solicitar al usuario ingresar un número
let numero = parseInt(prompt("Ingrese un número:"));

// Mostrar la tabla de multiplicar del número ingresado
console.log(`Tabla de multiplicar del número ${numero}:`);

for (let i = 1; i <= 10; i++) {
  let resultado = numero * i;
  console.log(`${numero} x ${i} = ${resultado}`);
}
// --------------Ejercicio 2--------------- //
let suma = 0;

// Pedir al usuario ingresar los números y acumularlos
while (true) {
  let numero = parseInt(prompt("Ingrese un número (0 para terminar):"));

  // Verificar si el número ingresado es cero
  if (numero === 0) {
    break; // Salir del bucle while
  }

  suma += numero; // Acumular el número ingresado a la suma total
}
// --------------Ejercicio 3--------------- //
const numeroSecreto = Math.floor(Math.random() * 100) + 1;

let intentos = 0;
let adivinado = false;

while (!adivinado) {

  let numeroIngresado = parseInt(prompt("Adivina el número secreto (entre 1 y 100):"));
  intentos++;

  if (numeroIngresado === numeroSecreto) {
    adivinado = true;
    console.log(`¡Felicitaciones! Adivinaste el número secreto en ${intentos} intentos.`);
  } else if (numeroIngresado > numeroSecreto) {
    console.log("El número ingresado es mayor al número secreto. Intenta nuevamente.");
  } else {
    console.log("El número ingresado es menor al número secreto. Intenta nuevamente.");
  }
}
// --------------Ejercicio 4--------------- //

let numero = parseInt(prompt("Ingrese un número:"));

console.log(`Los divisores de ${numero} son:`);

for (let i = 1; i <= numero; i++) {
  if (numero % i === 0) {
    console.log(i);
  }
}

// --------------Ejercicio 5--------------- //
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Recorrer el array y mostrar cada elemento por consola
console.log("Elementos del array:");

for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}
// --------------Ejercicio 6--------------- //
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Mostrar el doble de cada elemento del array por consola
console.log("El doble de cada elemento del array:");

for (let i = 0; i < array.length; i++) {
  let doble = array[i] * 2;
  console.log(doble);
}
// --------------Ejercicio 7--------------- //
// Definir un array con al menos 5 objetos representando a un grupo familiar
const grupoFamiliar = [
    {
      nombre: "Juan",
      edad: 35,
      relacion: "padre",
      ocupacion: "ingeniero"
    },
    {
      nombre: "María",
      edad: 32,
      relacion: "madre",
      ocupacion: "abogada"
    },
    {
      nombre: "Pedro",
      edad: 12,
      relacion: "hijo",
      ocupacion: "estudiante"
    },
    {
      nombre: "Laura",
      edad: 8,
      relacion: "hija",
      ocupacion: "estudiante"
    },
    {
      nombre: "Ana",
      edad: 65,
      relacion: "abuela",
      ocupacion: "jubilada"
    }
  ];
  
  // Mostrar un mensaje de presentación por cada elemento del array
  console.log("Presentación de cada miembro del grupo familiar:");
  
  for (let i = 0; i < grupoFamiliar.length; i++) {
    let persona = grupoFamiliar[i];
    console.log(`Hola, soy ${persona.nombre}, tengo ${persona.edad} años. Soy ${persona.relacion} y mi ocupación es ${persona.ocupacion}.`);
  }

// --------------Ejercicio 9--------------- //
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Mostrar los números impares del array
console.log("Números impares del array:");

for (let i = 0; i < array.length; i++) {
  if (array[i] % 2 !== 0) {
    console.log(array[i]);
  }
}
// --------------Ejercicio 10--------------- //

let sumaPares = 0;
let sumaImpares = 0;

// Solicitar al usuario ingresar números hasta que ingrese un 0
while (true) {
  let numero = parseInt(prompt("Ingrese un número (0 para terminar):"));

  if (numero === 0) {
    break; // Finalizar el bucle si se ingresa un 0
  } else if (numero % 2 === 0) {
    sumaPares += numero; // Sumar número par a la suma de pares
  } else {
    sumaImpares += numero; // Sumar número impar a la suma de impares
  }
}

// Mostrar la suma de números pares e impares
console.log(`La suma de los números pares es: ${sumaPares}`);
console.log(`La suma de los números impares es: ${sumaImpares}`);

// --------------Ejercicio 11--------------- //

const array = [5, 10, 3, 8, 1, 6, 9, 2, 7, 4];

// Encontrar el número más grande en el array
let numeroMasGrande = array[0]; // Asignar el primer número como el más grande

for (let i = 1; i < array.length; i++) {
  if (array[i] > numeroMasGrande) {
    numeroMasGrande = array[i];
  }
}

// Mostrar el número más grande por pantalla
console.log(`El número más grande es: ${numeroMasGrande}`);

