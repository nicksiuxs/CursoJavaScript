/*9) Programa una función que obtenga un numero aleatorio entre 501 y 600.*/

//Función declarada
function numeroAleatorio1() {
  return parseInt(Math.random() * (600 - 501) + parseInt(501));
}

//Arrow function
const numeroAleatorio2 = () => {
  return parseInt(Math.random() * (600 - 501) + parseInt(501));
};

//Solución de video
const numeroAleatorio3 = () =>
  console.info(Math.ceil(Math.random() * 100 + 500));
//-------------------------------------------------------------------------------------------------------------------------------

/* 10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro),
 pe. miFuncion(2002) devolverá true. */

//Función declarada
function esCapicua1(numero) {
  try {
    if (!numero) {
      throw new Error("No ingresaste un número");
    }
    let inver = numero.toString().split("").reverse().join("");
    if (numero.toString() === inver) return true;
    else return false;
  } catch (error) {
    console.error(error);
  }
}

//Arrow function
const esCapicua2 = (numero = undefined) => {
  try {
    if (!numero) {
      throw new Error("No ingresaste un número");
    }
    let inver = numero.toString().split("").reverse().join("");
    if (numero.toString() === inver) return true;
    else return false;
  } catch (error) {
    console.error(error);
  }
};

//Solución del video
const esCapicua3 = (numero = 0) => {
  if (!numero) return console.warn("No ingresaste un numero");
  if (typeof numero !== "number")
    return console.error("No ingresaste un numero");

  numero = numero.toString();
  let alReves = numero.split("").reverse().join("");
  return numero === alReves
    ? console.info(
        `Sí es capícua, Número original ${numero}, Número al revés ${alReves}`
      )
    : console.info(
        `No es capícua, Número original ${numero}, Número al revés ${alReves}`
      );
};

//-------------------------------------------------------------------------------------------------------------------------------

/* 11) Programa una función que calcule el factorial de un número 
 (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), 
 pe. miFuncion(5) devolverá 120. */

//Función declarada
function factorial(numero = undefined) {
  try {
    if (numero === undefined) throw new Error("No ingresaste un numero");
    if (numero === 0) return 1;
    if (numero < 0) throw new Error("No hay factoriales de numero negativos");
    let factorial = 1;
    for (let i = numero; i > 0; i--) {
      factorial *= i;
    }
    return factorial;
  } catch (error) {
    console.error(error);
  }
}

//Arrow function
const factorial2 = (numero = undefined) => {
  try {
    if (numero === undefined) throw new Error("No ingresaste un numero");
    if (numero === 0) return 1;
    if (numero < 0) throw new Error("No hay factoriales de numero negativos");
    let factorial = 1;
    for (let i = numero; i > 0; i--) {
      factorial *= i;
    }
    return factorial;
  } catch (error) {
    console.error(error);
  }
};

//Solución del video
const factorial3 = (numero = undefined) => {
  if (numero === undefined) return console.warn("No ingresaste un numero");
  if (typeof numero !== numero)
    return console.error(`el valor ${numero} np es un número`);
  if (numero === 0) return console.error("El numero no puede ser cero");
  if (Math.sign(numero) === -1)
    return console.error("No hay factoriales de numeros negativos");
  let factorial = 1;
  for (let i = numero; i > 0; i--) {
    factorial *= factorial;
  }
  return console.info(`El factorial de ${numero} es ${factorial}`);
};
