class Inventory {
  /**
   * @param {Array} products - Array of products
   */
  constructor(products = []) {
    this.products = products;
  }

  /**
   * Returns the array of products
   * 
   * @returns {Array} products
   */
  getProducts() {
    return this.products;
  }

  /**
   * Adds a new product to the array of products if it doesn't exist
   * 
   * @param {Product} product - Product to be added
   */
  addProduct(product) {
    const existingProduct = this.products.find(p => p.id === product.id);
    if (!existingProduct) {
      this.products.push(product);
    }
  }

  /**
   * Removes a product from the array of products based on id
   * 
   * @param {Number} id - Id of the product to be removed
   */
  removeProduct(id) {
    const index = this.products.findIndex(p => p.id === id);
    if (index !== -1) {
      this.products.splice(index, 1);
    }
  }

  /**
   * Updates a product in the array of products based on id
   * 
   * @param {Product} product - Product to be updated
   */
  updateProduct(product) {
    const index = this.products.findIndex(p => p.id === product.id);
    if (index !== -1) {
      this.products[index] = product;
    }
  }
}
