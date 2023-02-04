const getProductListHome = (productList) => {

  const productListHome = productList.map((product) => {
    return `
    
      <div id="${product.getId()}" class="col-sm-3">
        <div class="single-feature">
          <img src="${product.getImage()}" alt="feature image">
          <div class="single-feature-txt text-center">
            <h3><a href="#">${product.getName()}</a></h3>
            <h5>$${product.getPrice()}</h5>
            <p class="">${product.getId()}</p>
            <p class="text-left">${product.getDescription()}</p>
          </div>
          <div class="add-to-cart-box row my-4">
            <div class="box-cantidad col-md-4 pl-2">
                <input class="input-cantidad" type="number" placeholder="cantidad" value="1"/>
            </div>
            <div class="box-cta col-md-8">
                <button info="${JSON.stringify(product).replace(/\"/g, '\'')}" class="add-button btn btn-outline-success btn-sm" type="button">Añadir</button>
                <button class="add-button btn btn-outline-success btn-sm" type="button" style="display:none;">Añadido</button>
            </div>
          </div>
        </div>
      </div>

    `
    });
    return productListHome.join('\n');
};

const getProductListCart = (itemList) => {

  const productListCart = itemList.map( (item) => {
      return `

          <li>
              <img src="${item.product.getImage()}" class="cart-image" alt="Image ${item.product.getName()}">
              <p>${item.product.getName()}</p>
              <p>${item.quantity} x ${item.product.getPrice()}</p>
              <p>${item.product.getId()}</p>
              <button class="cart-remove" qty=${item.quantity} uuid="${item.product.getId()}"> Eliminar </button>
          </li>
          <br>

  `
  });
  return productListCart.join('\n');
};

export { getProductListHome, getProductListCart };