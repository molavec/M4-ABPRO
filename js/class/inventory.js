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


  /**
   * Obtain products by a searchText that match with name, description or label
   * @param {String} searchText search Text
   * @returns products array that matched with search text.
   */
  searchProducts(searchText) {
    const products = [];
    //TODO: search products by name, description or label
    return products;
  }


  /**
   * Obtain products filtered by min and max price
   * @param {Number} minPrice minimal price
   * @param {Number} searchText maximal price
   * @returns products array in range price.
   */
  filterByPrice(minPrice = 0, maxPrice) {
    const products = [];
    //TODO: search products in price range
    return products;
  }


  /**
   * Obtain filtered by Category
   * @param {String} categoryId categoryId
   * @returns products array filtered by category.
   */
  filterByCategory(categoryId) {
    const products = [];
    //TODO: search products by category Id
    return products;
  }

}



export default Inventory;