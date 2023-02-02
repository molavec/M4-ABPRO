const getProductListHome = (productList) => {

  const productListHome = productList.map((product) => {
    return `
    
      <div id="${product.code}" class="col-sm-3">
        <div class="single-feature">
          <img src="${product.image}" alt="feature image">
          <div class="single-feature-txt text-center">
            <h3><a href="#">${product.name}</a></h3>
            <h5>$${product.price}</h5>
            <p class="">${product.code}</p>
            <p class="text-left">${product.description}</p>
          </div>
          <div class="add-to-cart-box row my-4">
            <div class="box-cantidad col-md-4 pl-2">
                <input class="input-cantidad" type="number" placeholder="cantidad" value="1"/>
            </div>
            <div class="box-cta col-md-8">
                <button info="${JSON.stringify(product).replace(/\"/g, '\'')}" class="add-button btn btn-outline-success btn-sm" type="button">Añadir</button>
                <button class="added-button btn btn-outline-success btn-sm" type="button" style="display:none;">Añadido</button>
            </div>
          </div>
        </div>
      </div>

    `
    });
    return productListHome.join('\n');
};

const getProductListCart = (productList) => {

  const productListCart = productList.map( (product) => {
      return `

          <li>
              <img src="${product.image}" class="cart-image" alt="Image ${product.nombre}">
              <p id="nombreP">${product.nombre}</p>
              <p>${product.cantidad} x ${product.price}</p>
              <p>${product.code}</p>
              <button class="cart-remove" qty=${product.cantidad} uuid="${product.code}"> Eliminar </button>
          </li>
          <br>

  `
  });
  return productListCart.join('\n');
};

export { getProductListHome, getProductListCart };