const getStockAlert = (stock) => {
  if(stock == 0) {
   return 'No hay stock';
  } else if (stock == 3) {
    return 'Último disponible';
  } else if (stock <= 3) {
    return `Últimos ${stock} disponibles`;
  } else {
    return '';
  }
};



const getProductListHome = (productList) => {

  const productListHome = productList.map((product) => {

    const productBlock = `
      <div id="${product.getId()}" class="col-sm-3">
        <div class="single-feature">
          <img src="${product.getImage()}" alt="feature image">
          <div class="single-feature-txt text-center">
            <h3><a href="#">${product.getName()}</a></h3>
            <p class="stock-message"> ${getStockAlert(product.getStock())} </p>
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
    `;
    return productBlock;
    });

    return productListHome.join('\n');
};

const getProductListCart = (itemList) => {

  const productListCart = itemList.map( (item) => {
      return `

        <li>
        
        <div class="row">
          <div class="col-4 cart-image-box">
            <img src="${item.product.getImage()}" class="cart-image" alt="Image ${item.product.getName()}">
          </div>

          <div class="col-8 cart-info-box py-2">
              <p><b>${item.product.getName()}</b></p>
              <p style="font-size: 10px;">${item.product.getId()}</p>
              <div class="row">
                <div class="col-4">
                  <input class="cart-quantity pr-0" style="width: 100%" type="number" value=${item.quantity}></input>
                </div>
                <div class="col-8 pl-0">
                  x ${item.product.getPrice()}
                </div>
              </div>
              <div class="cart-cta-box py-2">
                  <button class="cart-refresh pr-2" qty=${item.quantity} uuid="${item.product.getId()}"> Actualizar </button>
                  <button class="cart-remove" qty=${item.quantity} uuid="${item.product.getId()}"> Eliminar </button>
              </div>

          </div>
        </div>
              
          

        </li>
          <br>

  `
  });
  return productListCart.join('\n');
};

export { getProductListHome, getProductListCart };