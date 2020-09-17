/*24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, 
el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, 
pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.*/

//Función declarada
function ordenarArreglo1(arreglo = undefined) {
  if (arreglo === undefined)
    throw new Error("No ingresaste un arreglo de numeros");
  if (!(arreglo instanceof Array))
    throw new Error("El valor no es del tipo arreglo");
  if (arreglo.length === 0) return console.error("El arreglo esta vacio");
  for (let num of arreglo) {
    if (typeof num !== "number") {
      return console.error(`El valor ${num} ingresado no es un número`);
    }
  }

  let ordenado, asc, desc;
  ordenado = arreglo.slice();

  for (let i = 0; i < ordenado.length; i++) {
    for (let j = 0; j < ordenado.length - 1; j++) {
      if (ordenado[j] > ordenado[j + 1]) {
        let aux = ordenado[j];
        ordenado[j] = ordenado[j + 1];
        ordenado[j + 1] = aux;
      }
    }
  }
  asc = ordenado;
  desc = asc.slice();

  return {
    arreglo,
    asc,
    desc: desc.reverse(),
  };
}

//Arrow Function
const ordenarArreglo2 = (arreglo = undefined) => {
  if (arreglo === undefined)
    throw new Error("No ingresaste un arreglo de numeros");
  if (!(arreglo instanceof Array))
    throw new Error("El valor no es del tipo arreglo");
  if (arreglo.length === 0) return console.error("El arreglo esta vacio");
  for (let num of arreglo) {
    if (typeof num !== "number") {
      return console.error(`El valor ${num} ingresado no es un número`);
    }
  }

  let ordenado, asc, desc;
  ordenado = arreglo.slice();

  for (let i = 0; i < ordenado.length; i++) {
    for (let j = 0; j < ordenado.length - 1; j++) {
      if (ordenado[j] > ordenado[j + 1]) {
        let aux = ordenado[j];
        ordenado[j] = ordenado[j + 1];
        ordenado[j + 1] = aux;
      }
    }
  }
  asc = ordenado;
  desc = asc.slice();

  return {
    arreglo,
    asc,
    desc: desc.reverse(),
  };
};

//Solución del video
const ordenarArreglo3 = (arreglo = undefined) => {
  if (arreglo === undefined)
    throw new Error("No ingresaste un arreglo de numeros");
  if (!(arreglo instanceof Array))
    throw new Error("El valor no es del tipo arreglo");
  if (arreglo.length === 0) return console.error("El arreglo esta vacio");
  for (let num of arreglo) {
    if (typeof num !== "number") {
      return console.error(`El valor ${num} ingresado no es un número`);
    }
  }

  return console.info({
    arreglo,
    asc: arreglo.map((el) => el).sort(),
    desc: arreglo
      .map((el) => el)
      .sort()
      .reverse(),
  });
};

//-----------------------------------------------------------------------------------------------

/*25) Programa una función que dado un arreglo de elementos, elimine los duplicados, 
pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].*/

//Solución del video
const quitarDuplicados3 = (arreglo = undefined) => {
  if (arreglo === undefined)
    throw new Error("No ingresaste un arreglo de numeros");
  if (!(arreglo instanceof Array))
    throw new Error("El valor no es del tipo arreglo");
  if (arreglo.length === 0) return console.error("El arreglo esta vacio");
  if (arreglo.length === 1)
    return console.error("El arreglo debe tener al menos dos elementos");

  return {
    original: arreglo,
    sinDuplicados: arreglo.filter(
      (value, index, self) => self.indexOf(value) === index
    ),
  };
};

//-----------------------------------------------------------------------------------------------

/*26) Programa una función que dado un arreglo de números obtenga el promedio, 
pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.*/

// Función declarada
function promedio1(arreglo = undefined) {
  if (arreglo === undefined)
    throw new Error("No ingresaste un arreglo de numeros");
  if (!(arreglo instanceof Array))
    throw new Error("El valor no es del tipo arreglo");
  if (arreglo.length === 0) return console.error("El arreglo esta vacio");
  for (let num of arreglo) {
    if (typeof num !== "number") {
      return console.error(`El valor ${num} ingresado no es un número`);
    }
  }
  let sumatoria = 0;
  for (let i = 0; i < arreglo.length; i++) {
    sumatoria += arreglo[i];
  }

  return sumatoria / arreglo.length;
}

//Arrow function
const promedio2 = (arreglo = undefined) => {
  if (arreglo === undefined)
    throw new Error("No ingresaste un arreglo de numeros");
  if (!(arreglo instanceof Array))
    throw new Error("El valor no es del tipo arreglo");
  if (arreglo.length === 0) return console.error("El arreglo esta vacio");
  for (let num of arreglo) {
    if (typeof num !== "number") {
      return console.error(`El valor ${num} ingresado no es un número`);
    }
  }
  let sumatoria = 0;
  for (let i = 0; i < arreglo.length; i++) {
    sumatoria += arreglo[i];
  }

  return sumatoria / arreglo.length;
};

//Solución video
const promedio3 = (arreglo = undefined) => {
  if (arreglo === undefined)
    throw new Error("No ingresaste un arreglo de numeros");
  if (!(arreglo instanceof Array))
    throw new Error("El valor no es del tipo arreglo");
  if (arreglo.length === 0) return console.error("El arreglo esta vacio");
  for (let num of arreglo) {
    if (typeof num !== "number") {
      return console.error(`El valor ${num} ingresado no es un número`);
    }
  }

  return console.info(
    arreglo.reduce((total, num, index, arr) => {
      total += num;
      if (index === arr.length - 1) {
        return `El promedio de ${arr.join("+")} es: ${total / arr.length}`;
      }
      else{
        return total;
      }
    })
  );
};
