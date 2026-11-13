function calcularTotal(precio, descuento) {
  if (precio < 0) {
    throw new Error("El precio no puede ser negativo");
  }
  return precio - descuento;
}

function calcularPrecioFinal(precio, tipoCliente){
  const descuento = tipoCliente == "estudiante"
  ? precio * 0.15
  : 0;

  return calcularTotal(precio, descuento);
}

module.exports = { calcularTotal, calcularPrecioFinal };
