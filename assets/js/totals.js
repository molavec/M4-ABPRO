// --> CALCULO DE TOTALES
/**
 * Total sin impuestos
 * @param { [{precio: number; cantidad: number;}] } productsInCart 
 */
const getTotalWithoutTax = (productsInCart) => {
  const value = productsInCart.reduce(
      (acumulador, product) => {
          // console.log('acumulador', acumulador)
          // console.log('product.precio', product.precio);
          // console.log('product.cantidad', product.cantidad);
          const aux = parseInt(acumulador) + parseInt(product.precio) * parseInt(product.cantidad)
          // console.log('aux', aux);
          return aux;
      }, 0
  );
  // console.log('value', value)
  return value;
}


/**
* Total con impuestos
* @param { [{precio: number; qty: number;}] } productsInCart 
*/
const getTotalWithTax = (productsInCart) => {
  const TAX = 1.19;
  const value = productsInCart.reduce(
      (acumulador, product) => (acumulador + parseInt(product.precio) * parseInt(product.cantidad)),
      0
  );
  return value * TAX;
}

/**
* Valor Impuesto
* @param { [{precio: number; qty: number;}] } productsInCart 
*/
const getTax = (productsInCart) => {
  const TAX = 0.19;
  const value = productsInCart.reduce(
      (acumulador, product) => (acumulador + parseInt(product.precio) * parseInt(product.cantidad)),
      0
  );
  return value * TAX;
}

/**
* Valor Impuesto
* @param { [{precio: number; qty: number;}] } productsInCart 
*/
const getTotalProducts = (productsInCart) => {
  const value = productsInCart.reduce(
      (acumulador, product) => (acumulador + parseInt(product.cantidad)),
      0
  );
  return value;
}

/**
* Valor comision
* @param { totalSinImpuesto: number } totalSinImpuesto 
*/
const getShippingCost = (total) => {
  const comision = 0.05;
  return (total < 100000) ? total * comision : 0;
}

/**
* Sumatoria de todos los items
* @param {number} totalSinImpuesto 
* @param {number} Impuesto 
* @param {number} Comision 
* @returns 
*/
const getTotal = (totalSinImpuesto, Impuesto, Comision) => {
  const comision = 0.05;
  return totalSinImpuesto * comision;
}