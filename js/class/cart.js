/**
 * Cart Class
 * Class to manage a shopping cart
 * @class
 */
function Cart() {
  /**
   * @property {Array} items - An array of shopping cart items
   */
  this.items = [];

  this.TAX = 0.19;
  this.SHIPPING_COMMISSION = 0.05;
}

/**
 * Get the items in the cart
 * @returns {Array} An array of shopping cart items
 */
Cart.prototype.getItems = function() {
  return this.items;
};
/**
 * Remove an item from the cart by id
 * @param {Number} id - The id of the product to remove
 */
Cart.prototype.getItem = function(id) {
  let item = this.items.find(i => {
    return i.product.id === id 
  });
  return item;
};
/**
 * Add an item to the cart
 * @param {Object} product - A product object
 * @param {Number} quantity - The quantity of the product to add
 */
Cart.prototype.addItem = function(product, quantity) {
  let item = this.items.find(i => i.product.id === product.id);
  if (item) {
    item.quantity += parseInt(quantity);
  } else {
    this.items.push({product: product, quantity: parseInt(quantity)});
  }
};

/**
 * Remove an item from the cart by id
 * @param {Number} id - The id of the product to remove
 */
Cart.prototype.removeItem = function(id) {
  let index = this.items.findIndex(i => i.product.id === id);
  if (index !== -1) {
    this.items.splice(index, 1);
  }
};

/**
 * Remove an item from the cart by id and quantity
 * @param {Number} id - The id of the product to remove
 * @param {Number} quantity - The quantity of the product to remove
 */
Cart.prototype.updateItem = function(id, quantity) {
  let item = this.items.find(i => i.product.id === id);
  if (item) {
    item.quantity = parseInt(quantity);
    if (item.quantity <= 0) {
      this.removeItem(id);
    }
  }
};

/**
 * Get the quantity items in the cart
 * @returns {Integer} A number with sumatory of quantity in Items
 */
Cart.prototype.getQuantity = function() {
  let totalQuantity = this.items.reduce((accumulator, i) => accumulator += i.quantity, 0);
  // console.log('totalQuantity', totalQuantity);
  return totalQuantity;
};

/**
 * Clear all items from the cart
 */
Cart.prototype.clear = function() {
  this.items = [];
};

/**
 * Get Total of Items
 */
Cart.prototype.getTotal = function() {
  const value = this.items.reduce(
    (acumulador, item) => {
        // console.log('acumulador', acumulador)
        // console.log('item.product.price', item.product.price);
        // console.log('item.product.quantity', item.product.quantity);
        const aux = parseInt(acumulador) + parseInt(item.product.price) * parseInt(item.quantity)
        // console.log('aux', aux);
        return aux;
    }, 0
  );
  // console.log('value', value)
  return value;
};

/**
 * Get Tax of items
 */
Cart.prototype.getTax = function() {
  return this.getTotal() * (this.TAX);
};

/**
 * Get Shipping Comision
 */
Cart.prototype.getShippingCost = function() {
  return this.getTotal() * (1 + this.SHIPPING_COMMISSION);
};

export default Cart;