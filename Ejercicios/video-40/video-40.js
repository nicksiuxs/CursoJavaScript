/*21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, 
pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].*/

//Función declarada
function elevarNumeros1(arreglo = undefined) {
  try {
    if (arreglo === undefined) throw new Error("No ingresaste un arreglo");
    if (!(arreglo instanceof Array))
      throw new Error("El valor no es del tipo arreglo");

    let aux = [];

    for (let i = 0; i < arreglo.length; i++) {
      aux[i] = arreglo[i] * arreglo[i];
    }
    return aux;
  } catch (error) {
    console.error(error);
  }
}

//Arrow Function
const elevarNumeros2 = (arreglo = undefined) => {
  try {
    if (arreglo === undefined) throw new Error("No ingresaste un arreglo");
    if (!(arreglo instanceof Array))
      throw new Error("El valor no es del tipo arreglo");

    let aux = [];

    for (let i = 0; i < arreglo.length; i++) {
      aux[i] = arreglo[i] * arreglo[i];
    }
    return aux;
  } catch (error) {
    console.error(error);
  }
};

//Solución del video
const elevarNumeros3 = (arre = undefined) => {
  if (arre === undefined)
    throw new Error("No ingresaste un arreglo de numeros");
  if (!(arre instanceof Array))
    throw new Error("El valor no es del tipo arreglo");
  if (arre.length === 0) return console.error("El arreglo esta vacio");
  for (let num of arre) {
    if (typeof num !== "number") {
      return console.error(`El valor ${num} ingresado no es un número`);
    }
  }

  const newArr = arre.map((el) => el * el);
  return console.info(
    `Arreglo original: ${arre}, \nArreglo elevado al cuadradp: ${newArr}`
  );
};
//----------------------------------------------------------------------------------------------------

/*22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, 
pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].*/

//Función declarada
function mayorMenor1(arreglo = undefined) {
  if (arreglo === undefined) throw new Error("No ingresaste un arreglo");
  if (!(arreglo instanceof Array))
    throw new Error("El valor no es del tipo arreglo");
  let aux = [],
    mayor = arreglo[0],
    menor = arreglo[0];

  for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i] > mayor) {
      mayor = arreglo[i];
    }
    if (arreglo[i] < menor) {
      menor = arreglo[i];
    }
  }
  return [mayor, menor];
}

//Arrow function
const mayorMenor2 = (arreglo = undefined) => {
  if (arreglo === undefined) throw new Error("No ingresaste un arreglo");
  if (!(arreglo instanceof Array))
    throw new Error("El valor no es del tipo arreglo");
  let aux = [],
    mayor = arreglo[0],
    menor = arreglo[0];

  for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i] > mayor) {
      mayor = arreglo[i];
    }
    if (arreglo[i] < menor) {
      menor = arreglo[i];
    }
  }
  return [mayor, menor];
};

//Solución del video
const mayorMenor3 = (arre = undefined) => {
  if (arre === undefined)
    throw new Error("No ingresaste un arreglo de numeros");
  if (!(arre instanceof Array))
    throw new Error("El valor no es del tipo arreglo");
  if (arre.length === 0) return console.error("El arreglo esta vacio");
  for (let num of arre) {
    if (typeof num !== "number") {
      return console.error(`El valor ${num} ingresado no es un número`);
    }
  }

  return console.info(
    `Arreglo original: [${arre}] \nValor mayor: ${Math.max(
      ...arre
    )} \nValor menor: ${Math.min(...arre)}`
  );
};
//----------------------------------------------------------------------------------------------------

/*23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, 
pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.*/

//Función declarada
function parImpar1(arreglo = undefined) {
  if (arreglo === undefined) throw new Error("No ingresaste un arreglo");
  if (!(arreglo instanceof Array))
    throw new Error("El valor no es del tipo arreglo");
  let pares = [],
    impares = [];

  for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i] % 2 === 0) {
      pares.push(arreglo[i]);
    } else {
      impares.push(arreglo[i]);
    }
  }
  return `pares: [${pares}], impares: [${impares}]`;
}

//Arrow function
const parImpar2 = (arreglo = undefined) => {
  if (arreglo === undefined) throw new Error("No ingresaste un arreglo");
  if (!(arreglo instanceof Array))
    throw new Error("El valor no es del tipo arreglo");
  let pares = [],
    impares = [];

  for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i] % 2 === 0) {
      pares.push(arreglo[i]);
    } else {
      impares.push(arreglo[i]);
    }
  }
  return `pares: [${pares}], impares: [${impares}]`;
};

//Solución del video
const parImpar3 = (arre = undefined) => {
  if (arre === undefined)
    throw new Error("No ingresaste un arreglo de numeros");
  if (!(arre instanceof Array))
    throw new Error("El valor no es del tipo arreglo");
  if (arre.length === 0) return console.error("El arreglo esta vacio");
  for (let num of arre) {
    if (typeof num !== "number") {
      return console.error(`El valor ${num} ingresado no es un número`);
    }
  }
  return console.info({
    pares: arre.filter((num) => num % 2 === 0),
    impares: arre.filter((num) => num % 2 === 1),
  });
};
