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
}

/**
 * Get the items in the cart
 * @returns {Array} An array of shopping cart items
 */
Cart.prototype.getItems = function() {
  return this.items;
};

/**
 * Add an item to the cart
 * @param {Object} product - A product object
 * @param {Number} quantity - The quantity of the product to add
 */
Cart.prototype.addItem = function(product, quantity) {
  let item = this.items.find(i => i.product.id === product.id);
  if (item) {
    item.quantity += quantity;
  } else {
    this.items.push({product: product, quantity: quantity});
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
Cart.prototype.removeItem = function(id, quantity) {
  let item = this.items.find(i => i.product.id === id);
  if (item) {
    item.quantity -= quantity;
    if (item.quantity <= 0) {
      this.removeItem(id);
    }
  }
};

/**
 * Clear all items from the cart
 */
Cart.prototype.clear = function() {
  this.items = [];
};
