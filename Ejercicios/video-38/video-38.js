/*15) Programa una función para convertir números de base binaria a decimal y viceversa, 
pe. miFuncion(100,2) devolverá 4 base 10.*/

//Función declarada
function convertirBase1(numero = undefined, caracter = undefined) {
  try {
    if (numero === undefined)
      throw new Error("No ingresaste un numero a convertir");

    if (caracter === undefined || (caracter !== "B" && caracter !== "D"))
      throw new Error("No ingresaste una Base valida");

    if (typeof numero !== "number")
      throw new Error(`${numero} no es un número`);

    if (typeof caracter !== "string")
      throw new Error(`${caracter} no es un carcater valido`);

    if (caracter === "B") {
      return `El ${numero} en binario es ${numero.toString(2)}`;
    }
    if (caracter === "D") {
      let binario = parseInt(numero, 2);
      return `El ${numero} en decimal es ${binario}`;
    }
  } catch (error) {
    console.error(error);
  }
}

//Arrow Function
const convertirBase2 = (numero = undefined, caracter = undefined) => {
  try {
    if (numero === undefined)
      throw new Error("No ingresaste un numero a convertir");

    if (caracter === undefined || (caracter !== "B" && caracter !== "D"))
      throw new Error("No ingresaste una Base valida");

    if (typeof numero !== "number")
      throw new Error(`${numero} no es un número`);

    if (typeof caracter !== "string")
      throw new Error(`${caracter} no es un carcater valido`);

    if (caracter === "B") {
      return `El ${numero} en binario es ${numero.toString(2)}`;
    }
    if (caracter === "D") {
      let binario = parseInt(numero, 2);
      return `El ${numero} en decimal es ${binario}`;
    }
  } catch (error) {
    console.error(error);
  }
};

//Solución del video
const convertirBase3 = (numero = undefined, base = undefined) => {
  if (numero === undefined)
    return console.warn("No ingresaste el número a convertir");
  if (typeof numero !== "number")
    return console.Error(`El valor "${numero} ingresado, NO es un número"`);
  if (typeof base !== "number")
    return console.Error(`El valor "${base} ingresado, NO es un número"`);
  if (base === 2) {
    return console.info(
      `El ${numero} base ${base} = ${parseInt(numero, base)} base 10`
    );
  } else if (base === 10) {
    return console.info(
      `El ${numero} base ${base} = ${numero.toString(2)} base 2`
    );
  } else {
    return console.error("El tipo de base a convertir no es valido");
  }
};
//--------------------------------------------------------------------------------------------------------------------------------------------------

/*16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, 
pe. miFuncion(1000, 20) devolverá 800.*/

//Función declarada
function descuentoTotal1(valor = undefined, descuento = undefined) {
  try {
    if (valor === undefined) throw new Error("No ingresaste un valor");
    if (valor < 0) throw new Error("El valor debe ser mayor a 0");
    if (descuento === undefined) throw new Error("No ingresaste un valor");
    if (descuento < 0 && descuento > 100)
      throw new Error("El descuento debe ser entre 0 y 100");
    return valor * (1 - descuento / 100);
  } catch (error) {
    console.error(error);
  }
}

//Arrow function
const descuentoTotal2 = (valor = undefined, descuento = undefined) => {
  try {
    if (valor === undefined) throw new Error("No ingresaste un valor");
    if (valor < 0) throw new Error("El valor debe ser mayor a 0");
    if (descuento === undefined) throw new Error("No ingresaste un valor");
    if (descuento < 0 && descuento > 100)
      throw new Error("El descuento debe ser entre 0 y 100");
    return valor * (1 - descuento / 100);
  } catch (error) {
    console.error(error);
  }
};

//Solución del video
const descuentoTotal3 = (monto = undefined, descuento = 0) => {
  if (monto === undefined) return console.warn("No ingresaste el monto");
  if (typeof monto !== "number")
    return console.Error(`El valor "${monto} ingresado, NO es un número"`);
  if (monto === 0) return console.error("El monto no puede ser 0");
  if (Math.sign(monto) === -1)
    return console.error("El monto no puede ser negativo");
  if (typeof descuento !== "number")
    return console.Error(`El valor "${descuento} ingresado, NO es un número"`);
  if (Math.sign(descuento) === -1)
    return console.error("El descuento no puede ser negativo");

  return console.info(
    `${monto} - ${descuento}% = ${monto - (monto * descuento) / 100}`
  );
};

//--------------------------------------------------------------------------------------------------------------------------------------------------

/*17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, 
pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).*/

//Función declarada
function determinarEdad1(fecha = undefined) {
  if (fecha === undefined)
    return console.error("No ingresaste una fecha válidad");
  let hoy = new Date();
  return `${hoy.getFullYear() - fecha.getFullYear()} años`;
}

//Arrow Function
const determinarEdad2 = (fecha) => {
  if (fecha === undefined)
    return console.error("No ingresaste una fecha válidad");
  let hoy = new Date();
  return `${hoy.getFullYear() - fecha.getFullYear()} años`;
};

//Solución del video
const determinarEdad3 = (fecha = undefined) => {
  if (fecha === undefined)
    return console.error("No ingresaste una fecha válidad");
  if (!(fecha instanceof Date))
    return console.Error(`El valor que ingresaste no es una fecha válida"`);

  let hoyMenosFecha = new Date().getTime() - fecha.getTime(),
    aniosEnMS = 1000 * 60 * 60 * 24 * 365,
    aniosHumanos = Math.floor(hoyMenosFecha / aniosEnMS);

  return Math.sign(aniosHumanos) === -1
    ? console.info(
        `Faltan ${Math.abs(aniosHumanos)} años para el ${fecha.getFullYear()}`
      )
    : Math.sign(hoyMenosFecha) === 1
    ? console.info(
        `Han pasado ${aniosHumanos} años desde ${fecha.getFullYear()}`
      )
    : console.info(`Estamos en el año actual ${fecha.getFullYear()}`);
};
