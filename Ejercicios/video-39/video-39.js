/*18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, 
pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.*/
//Función declarada
function contarVoCo1(cadena = undefined) {
  try {
    if (cadena === undefine) throw new Error("No ingresaste una cadena");
    if (typeof cadena !== "string")
      throw new Error("No ingresaste una cadena validad");

    let palabras = cadena.toLowerCase().split(""),
      contadorV = 0,
      contadorC = 0;

    for (let i = 0; i < palabras.length; i++) {
      if (palabras[i] === "a") contadorV++;
      else if (palabras[i] === "e") contadorV++;
      else if (palabras[i] === "i") contadorV++;
      else if (palabras[i] === "o") contadorV++;
      else if (palabras[i] === "u") contadorV++;
      else if (palabras[i] === " ") continue;
      else {
        contadorC++;
      }
    }
    return `Vocales:${contadorV}, Consonantes:${contadorC}`;
  } catch (error) {
    console.error(error);
  }
}
//Arrow function
const contarVoCo2 = (cadena = undefined) => {
  try {
    if (cadena === undefine) throw new Error("No ingresaste una cadena");
    if (typeof cadena !== "string")
      throw new Error("No ingresaste una cadena validad");

    let palabras = cadena.toLowerCase().split(""),
      contadorV = 0,
      contadorC = 0;

    for (let i = 0; i < palabras.length; i++) {
      if (palabras[i] === "a") contadorV++;
      else if (palabras[i] === "e") contadorV++;
      else if (palabras[i] === "i") contadorV++;
      else if (palabras[i] === "o") contadorV++;
      else if (palabras[i] === "u") contadorV++;
      else if (palabras[i] === " ") continue;
      else {
        contadorC++;
      }
    }
    return `Vocales:${contadorV}, Consonantes:${contadorC}`;
  } catch (error) {
    console.error(error);
  }
};

//Solución del video
const contarVoCo3 = (cadena = "") => {
  if (!cadena) return console.warn("no ingresaste una cadena de texto");
  if (typeof cadena !== "string")
    return console.error(
      `El valor ${cadena} ingresado, NO es una caena de texto`
    );
  let vocales = 0,
    consonantes = 0;
  cadeba = cadena.toLowerCase();
  for (let letra of cadena) {
    if (/[aeiouáéíóúü]/.test(letra)) {
      vocales++;
    }
    if (/[bcdfghjklmnñpqrstvwxyz]/.test(letra)) {
      consonantes++;
    }
  }
  return console.info({
    cadena,
    vocales,
    consonantes,
  });
};
//--------------------------------------------------------------------------------------------------------------------

/*19) Programa una función que valide que un texto sea un nombre válido, 
pe. miFuncion("Jonathan MirCha") devolverá verdadero. */

//Función declarada
function validarNombre1(nombre = undefined) {
  try {
    if (nombre === undefined) throw new Error("No ingresaste un nombre");
    if (typeof nombre != "String") throw new Error("No ingresaste una cadena");
    let expReg = /^([A-Z]{1}[a-zñáéíóú]+[\s]*)+$/;
    return expReg.test(nombre) ? true : false;
  } catch (error) {
    console.error(error);
  }
}

//Arrow Function
const validarNombre2 = (nombre = undefined) => {
  try {
    if (nombre === undefined) throw new Error("No ingresaste un nombre");
    if (typeof nombre != "String") throw new Error("No ingresaste una cadena");
    let expReg = /^([A-Z]{1}[a-zñáéíóú]+[\s]*)+$/;
    return expReg.test(nombre) ? true : false;
  } catch (error) {
    console.error(error);
  }
};

//Solución del video
const validarNombre3 = (nombre = "") => {
  if (!nombre) return console.warn("no ingresaste una cadena de texto");
  if (typeof nombre !== "string")
    return console.error(
      `El valor ${nombre} ingresado, NO es una cadena de texto`
    );
  let expReg = /^[A-Za-zÑñÁáÉéÍíÓóÚú\s]+$/g.test(nombre);
  return expReg
    ? console.info(`${nombre}, es un nombre válido`)
    : console.info(`${nombre}, NO es un nombre válido`);
};
//--------------------------------------------------------------------------------------------------------------------

/*20) Programa una función que valide que un texto sea un email válido, 
pe. miFuncion("jonmircha@gmail.com") devolverá verdadero. */

//Función declarada
function validarEmail1(email = undefined) {
  try {
    if (email === undefined) throw new Error("No ingresaste un email");
    if (typeof email !== "string")
      throw new Error("No ingresaste un email válido");
    let expReg = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    return expReg.test(email) ? true : false;
  } catch (error) {
    console.error(error);
  }
}

// Arrow function
const validarEmail2 = (email = undefined) => {
  try {
    if (email === undefined) throw new Error("No ingresaste un email");
    if (typeof email !== "string")
      throw new Error("No ingresaste un email válido");
    let expReg = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    return expReg.test(email) ? true : false;
  } catch (error) {
    console.error(error);
  }
};

//Solución del video
const validarEmail3 = (email = "") => {
  if (!email) return console.warn("no ingresaste una cadena de texto");
  if (typeof email !== "string")
    return console.error(
      `El valor ${email} ingresado, NO es una cadena de texto`
    );
  let expReg = /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test(
    email
  );
  return expReg
    ? console.info(`${nombre}, es un email válido`)
    : console.info(`${nombre}, NO es un email válido`);
};

//--------------------------------------------------------------------------------------------------------------------
//Bonus
const validarPatron = (cadena = "", patron = undefined) => {
  if (!cadena) return console.warn("no ingresaste una cadena de texto");
  if (patron === undefined) return console.warn("no ingresaste un patron a evaluar");
  if (typeof cadena !== "string")
    return console.error(
      `El valor ${cadena} ingresado, NO es una cadena de texto`
    );
  if (!(patron instanceof RegExp))
    return console.error(
      `El valor ${patron} ingresado, NO es un expresión regular`
    );
  let expReg = patron.test(cadena);
  return expReg
    ? console.info(`${cadena}, cumple con el patron ingresado`)
    : console.info(`${cadena}, NO cumple con el patron ingresado`);
};
