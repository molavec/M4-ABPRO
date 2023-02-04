// --> CALCULO DE TOTALES
/**
 * Total sin impuestos
 * @param { [{price: number; quantity: number;}] } productsInCart 
 */
const getTotalWithoutTax = (productsInCart) => {
  const value = productsInCart.reduce(
      (acumulador, product) => {
          // console.log('acumulador', acumulador)
          // console.log('product.price', product.price);
          // console.log('product.quantity', product.quantity);
          const aux = parseInt(acumulador) + parseInt(product.price) * parseInt(product.quantity)
          // console.log('aux', aux);
          return aux;
      }, 0
  );
  // console.log('value', value)
  return value;
}


/**
* Total con impuestos
* @param { [{price: number; qty: number;}] } productsInCart 
*/
const getTotalWithTax = (productsInCart) => {
  const TAX = 1.19;
  const value = productsInCart.reduce(
      (acumulador, product) => (acumulador + parseInt(product.price) * parseInt(product.quantity)),
      0
  );
  return value * TAX;
}

/**
* Valor Impuesto
* @param { [{price: number; qty: number;}] } productsInCart 
*/
const getTax = (productsInCart) => {
  const TAX = 0.19;
  const value = productsInCart.reduce(
      (acumulador, product) => (acumulador + parseInt(product.price) * parseInt(product.quantity)),
      0
  );
  // console.log('value', value);
  return value * TAX;
}

/**
* Valor Impuesto
* @param { [{price: number; qty: number;}] } productsInCart 
*/
const getTotalProducts = (productsInCart) => {
  const value = productsInCart.reduce(
      (acumulador, product) => (acumulador + parseInt(product.quantity)),
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