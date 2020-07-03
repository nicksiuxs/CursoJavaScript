/* 1) Programa una función que cuente el número de caracteres de una cadena de texto,
pe. miFuncion("Hola Mundo") devolverá 10.*/

//Función declarada
function numeroCaracteres1(cadena = "") {
  try {
    if (!cadena) {
      throw new Error("No ingresaste una cadena");
    } else if (isNaN(cadena)) {
      return cadena.length;
    } else {
      throw new Error("Ingresaste un número");
    }
  } catch (error) {
    console.error(error);
  }
}

//Arrow function
const numeroCaracteres2 = (cadena = undefined) => {
  try {
    if (!cadena) {
      throw new Error("No ingresaste una cadena");
    } else if (isNaN(cadena)) {
      return cadena.length;
    } else {
      throw new Error("Ingresaste un numero");
    }
  } catch (error) {
    console.error(error);
  }
};

//Solución del vídeo
const numeroCaracteres3 = (cadena = "") =>
  !cadena
    ? console.warn("No ingresaste una cadena")
    : console.info(`la  palabra ${cadena} tiene  ${cadena.length} caracteres`);

//-------------------------------------------------------------------------------------------------------

/* 2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados,
pe. miFuncion("Hola Mundo", 4) devolverá "Hola".*/

//Función declarada
function devolverTextoRecortado1(cadena = "", longitud = undefined) {
  try {
    if (isNaN(longitud) || longitud === "") {
      throw new Error(`${longitud} no es un numero`);
    } else if (longitud === undefined) {
      throw new Error("No esta definido el numero");
    } else if (isNaN(cadena)) {
      return cadena.slice(0, longitud);
    } else {
      throw new Error(`${cadena} es un numero`);
    }
  } catch (error) {
    console.error(error);
  }
}

//Arrow function
const devolverTextoRecortado2 = (cadena, numero) => {
  try {
    if (isNaN(numero) || numero === "") {
      throw new Error(`${numero} no es un numero`);
    } else if (numero === undefined) {
      throw new Error("No esta definido el numero");
    } else if (isNaN(cadena)) {
      return cadena.slice(0, numero);
    } else {
      throw new Error(`${cadena} es un numero`);
    }
  } catch (error) {
    console.error(error);
  }
};

//Solución del vídeo
const devolverTextoRecortado3 = (cadena = "", longitud = undefined) =>
  !cadena
    ? console.warn("No ingresaste una cadena")
    : longitud === undefined
    ? console.error("No ingresaste la longitud a cortar")
    : console.info(cadena.slice(0, longitud));

//-------------------------------------------------------------------------------------------------------

/* 3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter,
pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].*/

//Función declarada
function separarCadenas1(cadena, caracter) {
  try {
    if (isNaN(cadena) === false) {
      throw new Error(`${cadena} no es una cadena`);
    } else if (cadena === undefined) {
      throw new Error("La cadena no esta definida");
    } else if (caracter === undefined) {
      throw new Error("el caracter no esta definido");
    } else {
      return cadena.split(caracter);
    }
  } catch (error) {
    console.error(error);
  }
}

//Arrow function
const separarCadenas2 = (cadena, caracter) => {
  try {
    if (isNaN(cadena) === false) {
      throw new Error(`${cadena} no es una cadena`);
    } else if (cadena === undefined) {
      throw new Error("La cadena no esta definida");
    } else if (caracter === undefined) {
      throw new Error("el caracter no esta definido");
    } else {
      return cadena.split(caracter);
    }
  } catch (error) {
    console.error(error);
  }
};

//Solución del vídeo
const separarCadenas3 = (cadena = "", separador = undefined) =>
  !cadena
    ? console.warn("No ingresaste una cadena")
    : separador === undefined
    ? console.warn("no ingresaste el caracter separador")
    : cadena.split(separador);

/* 4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) 
devolverá Hola Mundo Hola Mundo Hola Mundo.*/

//-------------------------------------------------------------------------------------------------------

//Función declarada
function repetirTexto1(cadena, numero) {
  try {
    if (isNaN(cadena) === false) {
      throw new Error(`${cadena} es un número`);
    } else if (isNaN(numero) || numero === "") {
      throw new Error("no esta ingresando un número");
    } else {
      let texto = "";
      for (let i = 0; i < numero; i++) {
        texto += `${cadena} `;
      }
      return texto;
    }
  } catch (error) {
    console.error(error);
  }
}

//Arrow function
const repetirTexto2 = (cadena, numero) => {
  try {
    if (isNaN(cadena) === false) {
      throw new Error(`${cadena} es un número`);
    } else if (isNaN(numero) || numero === "") {
      throw new Error("no esta ingresando un número");
    } else {
      let texto = "";
      for (let i = 0; i < numero; i++) {
        texto += `${cadena} `;
      }
      return texto;
    }
  } catch (error) {
    console.error(error);
  }
};

//Solución del vídeo
const repetirTexto3 = (texto = "", veces = undefined) => {
  if (!texto) {
    return console.warn("No ingresaste un texto");
  }
  if (veces === undefined) {
    return console.warn("No ingresaste el número de veces a repetir el texto");
  }
  if (veces === 0) {
    return console.error("El número de veces no puede ser 0");
  }
  if (Math.sign(veces) === -1) {
    return console.error("El número de vcees no puede ser negativo");
  }

  for (let i = 1; 1 <= veces; i++) {
    console.info(`${texto}, ${i}`);
  }
};
