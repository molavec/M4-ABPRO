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
   * @returns {Product[]} products
   */
  getProducts() {
    return this.products;
  }

  /**
   * Obtain product by id
   * @param {*} productId product id 
   * @returns product found
   */
  getProductById(productId) {
    return this.products.find((product) => {
      return product.getId() === productId;
    });
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
   * Remove quantity from the stock for a product selected from some id. 
   * @param {*} productId product id
   * @param {*} quantity quantity to be removed from stock
   * @returns new stock quantity
   */
  consumeStock(productId, quantity) {
    const product = this.products.getProductById(productId);
    const newStock = product.getStock() - parseInt(quantity); 
    product.setStock((newStock >= 0) ? newStock : 0 );
    return product.getStock();
  }


  /**
   * Obtain products by a searchText that match with name, description or label
   * @param {String} searchText search Text
   * @returns products array that matched with search text.
   */
  searchProducts(searchText) {
    //TODO: search products by name, description or 
    const product = this.products.filter((product)=>{
      console.log(product.getName())
      console.log(product.getDescription())
      // console.log(product.getLabels())
      // TODO: falta comparar las etiquetas
      return product.getName() === searchText || product.getDescription() === searchText 
    })
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
    // console.log('this.products', this.products);
    // this.products.filter(()=>{})
    // Carlos Vezquez
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