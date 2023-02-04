const getProductListHome = (productList) => {

  const productListHome = productList.map((product) => {

    let productBlock =  `<div id="${product.getId()}" class="col-sm-3">`;

    const productInfo = `
    
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
    `

    productBlock += productInfo;

    let productStock = '';

    if(product.getStock()==0){
      productStock= `<p class="stock-message"> No hay stock</p>`
    }
    else if (product.getStock()<=3){
      productStock= `<p class="stock-message"> Disponible ${product.getStock()} </p>`
    } else {
      productStock= `<p class="stock-message"></p>`
    }

    productBlock += productStock;

    productBlock += `</div>`;
  
    return productBlock;



    });
    return productListHome.join('\n');
};

const getProductListCart = (itemList) => {

  const productListCart = itemList.map( (item) => {
      return `

        <li>

          <div class="cart-image-box">
            <img src="${item.product.getImage()}" class="cart-image" alt="Image ${item.product.getName()}">
          </div>

          <div class="cart-info-box">
              <p>${item.product.getName()}</p>
              <input class="cart-quantity" type="number" value=${item.quantity}></input>
              <p>${item.quantity} x ${item.product.getPrice()}</p>
              <p>${item.product.getId()}</p>
          </div>
              
          <div class="cart-cta-box">
              <button class="cart-refresh" qty=${item.quantity} uuid="${item.product.getId()}"> Actualizar </button>
              <button class="cart-remove" qty=${item.quantity} uuid="${item.product.getId()}"> Eliminar </button>
          </div>

        </li>
          <br>

  `
  });
  return productListCart.join('\n');
};

export { getProductListHome, getProductListCart };