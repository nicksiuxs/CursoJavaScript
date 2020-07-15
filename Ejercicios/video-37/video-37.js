/*12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) 
o no, pe. miFuncion(7) devolverá true.*/
//Función declarada
function esPrimo1(numero = undefined) {
  try {
    if (numero === 0) throw new Error("Cero no es un numero primo");
    if (typeof numero !== "number")
      throw new Error(`${numero} no es un numero`);
    for (let i = 2; i < numero; i++) {
      if (numero % i === 0) {
        return false;
      }
    }
    return true;
  } catch (error) {
    console.error(error);
  }
}

//Arrow function
const esPrimo2 = (numero = undefined) => {
  try {
    if (numero === 0) throw new Error("Cero no es un numero primo");
    if (typeof numero !== "number")
      throw new Error(`${numero} no es un numero`);
    for (let i = 2; i < numero; i++) {
      if (numero % i === 0) {
        return false;
      }
    }
    return true;
  } catch (error) {
    console.error(error);
  }
};

//Solución del video
const esPrimo3 = (numero = undefined) => {
  if (numero === undefined) return console.warn("No ingresaste un numero");
  if (typeof numero !== "number")
    return console.error(`el valor ${numero} no es un número`);
  if (numero === 0) return console.error("El numero no puede ser cero");
  if (numero === 1) return console.error("El numero no puede ser 1");
  if (Math.sign(numero) === -1)
    return console.error("El numero no puede ser negativo");

  let divisible = false;
  for (let i = 2; i < numero; i++) {
    if (numero % i === 0) {
      divisible = true;
      break;
    }
  }
  return divisible
    ? `${numero} no es un número primo`
    : `${numero} es un número primo`;
};

//------------------------------------------------------------------------------------------------------------

/*13) Programa una función que determine si un número es par o impar, 
pe. miFuncion(29) devolverá Impar.*/

//Función declarada
function esPar1(numero = undefined) {
  try {
    if (numero === undefined) throw new Error("No ingresaste un número");
    if (typeof numero) throw new Error(`el valor ${numero} no es un número`);
    if (numero % 2 === 0) {
      return `${numero} es par`;
    } else {
      return `${numero} no es par`;
    }
  } catch (error) {
    console.error(error);
  }
}

//Arrow function
const esPar2 = (numero = undefined) => {
  try {
    if (numero === undefined) throw new Error("No ingresaste un número");
    if (typeof numero) throw new Error(`el valor ${numero} no es un número`);
    if (numero % 2 === 0) {
      return `${numero} es par`;
    } else {
      return `${numero} no es par`;
    }
  } catch (error) {
    console.error(error);
  }
};

//Solución del video
const esPar3 = (numero = undefined) => {
  if (numero === undefined) return console.warn("No ingresaste un número");
  if (typeof numero !== "number")
    return console.error(`El valor ${numero} ingresado, no es un número`);

  return numero % 2 === 0
    ? console.info(`El número ${numero} es Par`)
    : console.info(`El número ${numero} es impar`);
};

//------------------------------------------------------------------------------------------------------------

/*14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, 
pe. miFuncion(0,"C") devolverá 32°F.*/

//Función declarada
function conversionCF1(valor = undefined, unidad = "") {
  try {
    if (valor === undefined) throw new Error("No ingresaste un valor");
    if (typeof unidad !== "string")
      throw new Error("No ingresaste una caracter");
    if (unidad === undefined)
      throw new Error("No ingresaste una unidad valida");
    let conversion;
    if (unidad === "C") {
      conversion = valor * 1.8 + 32;
      return `${conversion}°F`;
    }

    if (unidad === "F") {
      conversion = (valor - 32) / 1.8;
      return `${conversion}°C`;
    }
  } catch (error) {
    console.error(error);
  }
}

//Arrow function
const conversionCF2 = (valor = undefined, unidad = "") => {
  try {
    if (valor === undefined) throw new Error("No ingresaste un valor");
    if (typeof unidad !== "string")
      throw new Error("No ingresaste una caracter");
    if (unidad === undefined)
      throw new Error("No ingresaste una unidad valida");
    let conversion;
    if (unidad === "C") {
      conversion = valor * 1.8 + 32;
      return `${conversion}°F`;
    }

    if (unidad === "F") {
      conversion = (valor - 32) / 1.8;
      return `${conversion}°C`;
    }
  } catch (error) {
    console.error(error);
  }
};

//Solución del video
const conversionCF3 = (grados = undefined, unidad = undefined) => {
  if (grados === undefined)
    return console.warn("no ingresaste grados a convertir");
  if (typeof grados !== "number")
    return console.error(`El valor ${grados} ingresado, NO es un número`);
  if (unidad === undefined)
    return console.warn("No ingresaste el tipo de grados a convertir");
  if (typeof unidad !== "string")
    return console.error(
      `El valor ${unidad} ingresado, NO es una cadena de texto`
    );
  if (unidad.length !== 1 || !/(C|F)/.test(unidad))
    console.warn("Valor de unidad no reconocido");

  if (unidad === "C") {
    return console.info(`${grados}°C = ${Math.round(grados * (9 / 5) + 32)}°F`);
  } else if (unidad === "F") {
    return console.info(
      `${grados}°F = ${Math.round((grados - 32) * (5 / 9))}°C`
    );
  }
};
