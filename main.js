//Objeto
let celulares = [
  {
    modelo: "Samsung Galaxy A54",
    marca: "samsung",
    precio: 50000,
  },
  {
    modelo: "Samsung Galaxy S25",
    marca: "samsung",
    precio: 100450,
  },
  {
    modelo: "Xiaomi Note ",
    marca: "xiaomi",
    precio: 76830,
  },
  {
    modelo: "Xiaomi Pocco 7",
    marca: "xiaomi",
    precio: 86500,
  },
  {
    modelo: "Motorola e4",
    marca: "motorola",
    precio: 87300,
  },
  {
    modelo: "Motorola Nixa 4",
    marca: "motorola",
    precio: 68900,
  },
];

// variables Globales de conteo y de total
let precioTotal = 0;
let cantProducto = 0;
const modeloYPrecio = celulares.map((celular) => {
  return {
    modelo: celular.modelo,
    precio: celular.precio,
  };
});
const calcularPrecio = (arr, i) => {
  precioTotal = precioTotal + arr.precio;
};
function mostrar(arr) {
  return arr.modelo + " 📱 : $ " + arr.precio;
}
//PROMPTS
let nombreUsuario = prompt(
  "Hi!✋ Bienvenido a Selecta Tech 📱, por favor ingrese su nombre de usuario"
);
let compra = prompt(
  "Hola ✋" +
    nombreUsuario +
    " " +
    "\nPor favor ingrese el numero que corresponda al producto que deseas adquirir: \n 1) " +
    mostrar(modeloYPrecio[0]) +
    "\n 2) " +
    mostrar(modeloYPrecio[1]) +
    "\n 3) " +
    mostrar(modeloYPrecio[2]) +
    "\n 4) " +
    mostrar(modeloYPrecio[3]) +
    "\n 5) " +
    mostrar(modeloYPrecio[4]) +
    "\n 0) 📥 Salir b) Filtrar por precio c)  c) 💸Desea finalizar su compra?"
);
while (compra != "0" && compra != "c") {
  switch (compra) {
    case "1":
      alert("Usted agrego : " + mostrar(modeloYPrecio[0]));
      calcularPrecio(modeloYPrecio[0]);
      console.log(precioTotal);
      cantProducto++;
      console.log(cantProducto);
      break;
    case "2":
      alert("Usted agrego : " + mostrar(modeloYPrecio[1]));
      calcularPrecio(modeloYPrecio[1]);
      console.log(precioTotal);
      cantProducto++;
      console.log(cantProducto);
      break;
    case "3":
      alert("Usted agrego : " + mostrar(modeloYPrecio[2]));
      calcularPrecio(modeloYPrecio[2]);
      console.log(precioTotal);
      cantProducto++;
      console.log(cantProducto);
      break;
    case "4":
      alert("Usted agrego : " + mostrar(modeloYPrecio[3]));
      calcularPrecio(modeloYPrecio[3]);
      console.log(precioTotal);
      cantProducto++;
      console.log(cantProducto);
      break;
    case "5":
      alert("Usted agrego : " + mostrar(modeloYPrecio[4]));
      calcularPrecio(modeloYPrecio[4]);
      console.log(precioTotal);
      cantProducto++;
      console.log(cantProducto);
      break;
    case "b":
      let pMinimo = parseInt(prompt("Seleccione el monto MINIMO :"));
      let pMaximo = parseInt(prompt("seleccione el monto MAXIMO :"));

      const filtrarXPrecio = modeloYPrecio.filter(
        (celular) => celular.precio > pMinimo && celular.precio < pMaximo
      );
      let mostrarenpantalla = prompt(
        " Estos son los productos que coinciden con su busqueda : \n 1) " +
          mostrar(filtrarXPrecio[0]) +
          "\n 2)" +
          mostrar(filtrarXPrecio[1])
      );
      if (mostrarenpantalla == "1") {
        alert("Usted agrego : " + mostrar(filtrarXPrecio[0]));
        console.table(filtrarXPrecio);
        calcularPrecio(filtrarXPrecio[0]);
        console.log(precioTotal);
        cantProducto++;
        console.log(cantProducto);
      } else if (mostrarenpantalla == "2") {
        alert("Usted agrego : " + mostrar(filtrarXPrecio[1]));
        console.table(filtrarXPrecio);
        calcularPrecio(filtrarXPrecio[1]);
        console.log(precioTotal);
        cantProducto++;
        console.log(cantProducto);
      } else {
        alert("el numero ingresado es incorrecto");
      }

      // calcularPrecio(4);
      // console.log(precioTotal);
      // cantProducto++;
      // console.log(cantProducto);
      break;
    default:
      alert("el numero ingresado es incorrecto");
      break;
  }
  if (cantProducto == 1) {
    alert(
      "Usted agrego : " +
        cantProducto +
        " producto al carrito de compras \n" +
        " El precio total es de : $ " +
        precioTotal
    );
  } else if (cantProducto > 1) {
    alert(
      "Usted agrego : " +
        cantProducto +
        " productos al carrito de compras \n" +
        " El precio total es de : $ " +
        precioTotal
    );
  } else {
    alert("Su carrito de compras esta vacio");
  }
  compra = prompt(
    "Hola " +
      nombreUsuario +
      " " +
      "\nPor favor ingrese el numero que corresponda al producto que deseas adquirir:\n 1) " +
      mostrar(modeloYPrecio[0]) +
      "\n 2) " +
      mostrar(modeloYPrecio[1]) +
      "\n 3) " +
      mostrar(modeloYPrecio[2]) +
      "\n 4) " +
      mostrar(modeloYPrecio[3]) +
      "\n 5) " +
      mostrar(modeloYPrecio[4]) +
      "\n 0)📥 Salir b) Filtrar por precio c) 💸Desea finalizar su compra? "
  );
}

//

//
if (compra == "c") {
  // variables utiles para Mostrar Indiv al usuario
  let intereses = 0;
  let precioConInteres = 0;
  let valorXCuota = 0;
  // funciones utiles para metodos de pago
  const interes = (porcentaje) => {
    intereses = precioTotal * porcentaje;
    return intereses;
  };
  const valorConTrjeta = (porcentaje) => {
    precioConInteres = precioTotal + interes(porcentaje);

    return precioConInteres;
  };
  const valorCuota = (cantCuotas) => {
    valorXCuota = precioConInteres / cantCuotas;
    return valorXCuota;
  };
  const valorCuotaSinInteres = (cantCuotas) => {
    valorXCuota = precioTotal / cantCuotas;
    return valorXCuota;
  };
  //metodo de pago
  const visaCredito = (cantCuotas) => {
    switch (cantCuotas) {
      //en un pago
      case "1":
        alert(
          "Usted eligio abonar en 1 cuota con Visa Credito 💳 \n TOTAL : " +
            precioTotal
        );
        console.log(precioTotal);
        break;
      case "2":
        valorConTrjeta(0.04);
        valorCuota(2);
        alert(
          " El monto que debe abonar es de : $ " +
            precioConInteres +
            "\n con un interes de : " +
            intereses +
            "\n en dos cutas de : $ " +
            valorXCuota
        );
        console.log(precioConInteres);
        console.log(valorXCuota);
        console.log(intereses);
        break;
      case "3":
        valorConTrjeta(0.06);
        valorCuota(3);
        alert(
          "El monto que debe abonar es de : $" +
            precioConInteres +
            "\n con un interes de : " +
            intereses +
            "\n en tres cutas de : $ " +
            valorXCuota
        );
        console.log(precioConInteres);
        console.log(valorXCuota);
        console.log(intereses);
        break;
      default:
        break;
    }
  };
  const mastercard = (cantCuotas) => {
    switch (cantCuotas) {
      //en un pago
      case "1":
        alert(
          "Usted eligio abonar en 1 cuota con Mastercard 💳 \n TOTAL : " +
            precioTotal
        );
        console.log(precioTotal);
        break;
      case "2":
        valorCuotaSinInteres(2);
        alert(
          "El monto que debe abonar es de : $" +
            precioTotal +
            "\n en dos cutas de : $ " +
            valorXCuota
        );
        console.log(precioTotal);
        console.log(valorXCuota);
        break;
      case "3":
        valorCuotaSinInteres(3);
        alert(
          "El monto que debe abonar es de : $" +
            precioTotal +
            "\n en tres cutas de : $ " +
            valorXCuota
        );
        console.log(precioTotal);
        console.log(valorXCuota);
        break;
      default:
        break;
    }
  };
  let metodo = prompt(
    "El monto actual es de : $" +
      precioTotal +
      "Elija el meodo de pago :\n" +
      "1)Trasferencia (10% descuento) 🏛 \n 2) Visa Credito 💳 (2 a 3 cuotas con interes) \n 3) Mastercard 💳 (llevando mas de 3 productos hasta 3 cuotas sin interes S) ↩ salir )"
  );
  console.log("ustede eligio    " + metodo);
  console.log(cantProducto);

  switch (metodo) {
    case "1":
      let transferencia = precioTotal - interes(0.1);
      alert(
        "El monto total es de : $ " +
          precioTotal +
          " al cual le aplicamos un 10% de descuento" +
          "\n el monto a abonar es de : $" +
          transferencia +
          "\n y su decuento fue de :  $" +
          intereses
      );
      console.log(transferencia);
      console.log(precioTotal);
      break;
    case "2":
      console.log("elegi visa");
      let cantCuotas = prompt(
        "Seleccione en cuantas cuotas desea realizar el pago :\n 1) 1 cuota sin interes  \n 2) 2 cuotas con interes \n 3) 3 cuotas con interes"
      );
      visaCredito(cantCuotas);
      console.log("elegi visa");
      break;
    case "3":
      console.log("elegi masters");
      if (cantProducto > 3) {
        let cantCuotas = prompt(
          "Usted lleva mas de 3 produtos por lo tanto puede :\n 1) 1 cuota sin interes \n 2) 2 cuotas sin interes \n 3) 3 cuotas sin interes"
        );
        mastercard(cantCuotas);
      } else {
        let cantCuotas = prompt(
          "Seleccione en cuantas cuotas desea realizar el pago :\n 1) 1 cuota sin interes \n 2) 2 cuotas con interes \n 3) 3 cuotas con interes"
        );
        visaCredito(cantCuotas);
      }
      break;
    default:
      break;
  }
}

//calcular interes

// metodos de pagos
// visa credito
