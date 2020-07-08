/*5) Programa una función que invierta las palabras de una cadena de texto, 
pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".*/

//Función declarada
function invertirCadena1(cadena = undefined) {
  try {
    if (!cadena) {
      throw new Error(" No ingreso una cadena");
    } else {
      let inv = "";
      for (let i = cadena.length - 1; i >= 0; i--) {
        inv += cadena[i];
      }
      return inv;
    }
  } catch (error) {
    return console.error(error);
  }
}

//Arrow function
const invertirCadena2 = (cadena = "") => {
  try {
    if (!cadena) {
      throw new Error(" No ingreso una cadena");
    } else {
      let inv = "";
      for (let i = cadena.length - 1; i >= 0; i--) {
        inv += cadena[i];
      }
      return inv;
    }
  } catch (error) {
    return console.error(error);
  }
};

//Solución video
const invertirCadena3 = (cadena = "") => {
  !cadena
    ? console.warn("No ingresaste una cadena")
    : console.info(cadena.split("").reverse().join(" "));
};

//--------------------------------------------------------------------------------------------------------------------------------

/*6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, 
pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.*/

//Función declarada
function contarRepeticion1(cadena, palabra) {
  try {
    if (!cadena || !palabra) {
      throw new Error("No ingresaste la cadena");
    } else if (!isNaN(palabra)) {
      throw new Error("Ingresaste un numero, recuerda que es una cadena");
    } else {
      let contador = 0;
      let palabras = cadena.split(" ");
      for (let i = 0; i < cadena.length; i++) {
        if (palabras[i] === palabra) {
          contador++;
        }
      }
      return contador;
    }
  } catch (error) {
    console.error(error);
  }
}

//Arrow function
const contarRepeticion2 = (cadena = "", palabra = "") => {
  try {
    if (!cadena || !palabra) {
      throw new Error("No ingresaste la cadena");
    } else if (!isNaN(palabra)) {
      throw new Error("Ingresaste un numero, recuerda que es una cadena");
    } else {
      let contador = 0;
      let palabras = cadena.split(" ");
      for (let i = 0; i < cadena.length; i++) {
        if (palabras[i] === palabra) {
          contador++;
        }
      }
      return contador;
    }
  } catch (error) {
    console.error(error);
  }
};

//Solución del video
const contarRepeticion3 = (cadena = "", texto) => {
  if (!cadena) return console.warn("No ingresaste el texto largo");
  if (!texto) return console.warn("No ingresaste la palabra a evaluar");
  let i = 0,
    contador = 0;
  while (i !== -1) {
    i = cadena.indexOf(texto, i);
    if (i !== -1) {
      i++;
      contador++;
    }
  }
  return console.info(`La palabra ${texto} se repite ${contador} veces`);
};

//--------------------------------------------------------------------------------------------------------------------------------

/*7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), 
pe. mifuncion("Salas") devolverá true.*/

//Función declarada
function esPalindromo1(cadena = "") {
  try {
    if (!cadena) {
      throw new Error("No ingreso la una cadena");
    }
    palabra = palabra.toLowerCase();
    let inv = cadena.length - 1;
    let aux = 0;
    let bool;
    for (let i = 0; i < cadena.length; i++) {
      if (cadena[i] === cadena[inv]) {
        aux++;
      }
      inv--;
    }
    aux === cadena.length ? (bool = true) : (bool = false);
    return bool;
  } catch (error) {
    console.error(error);
  }
}

//Arrow function
const esPalindromo2 = (cadena = "") => {
  try {
    if (!cadena) {
      throw new Error("No ingreso la una cadena");
    }
    palabra = palabra.toLowerCase();
    let inv = cadena.length - 1;
    let aux = 0;
    let bool;
    for (let i = 0; i < cadena.length; i++) {
      if (cadena[i] === cadena[inv]) {
        aux++;
      }
      inv--;
    }
    aux === cadena.length ? (bool = true) : (bool = false);
    return bool;
  } catch (error) {
    console.error(error);
  }
};

//Solución del video
const esPalindromo3 = (palabra = "") => {
  if (!palabra) return console.warn("No ingresaste una palabra o frase");
  palabra = palabra.toLowerCase();
  let alReves = palabra.split("").reverse().join("");

  return palabra === alReves
    ? console.info(
        `Sí es palíndromo, Palabra original ${palabra}, palabra al revés ${alReves}`
      )
    : console.info(
        `No es palíndromo, Palabra original ${palabra}, palabra al revés ${alReves}`
      );
};

//--------------------------------------------------------------------------------------------------------------------------------

/*8) Programa una función que elimine cierto patrón de caracteres de un texto dado, 
pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.*/

//Función declarada
function eliminarPatron1(cadena = "", patron = "") {
  try {
    if (!cadena || !isNaN(cadena)) {
      throw new Error("No ingreso una cadena");
    }
    let regExp = new RegExp(patron, "gi");
    let res = cadena.replace(regExp, "");
    return res;
  } catch (error) {
    console.error(error);
  }
}

//Arrow function
const eliminarPatron2 = (cadena = "", patron = "") => {
  try {
    if (!cadena || !isNaN(cadena)) {
      throw new Error("No ingreso una cadena");
    }
    let regExp = new RegExp(patron, "gi");
    let res = cadena.replace(regExp, "");
    return res;
  } catch (error) {
    console.error(error);
  }
};

//Solución del video
const eliminarPatron3 = (texto = "", patron = "") => {
  !texto
    ? console.warn("No ingresaste un texto")
    : !patron
    ? console.warn("No ingresaste un patrón de carcateres")
    : console.info(texto.replace(new RegExp(patron, "ig"), ""));
};
