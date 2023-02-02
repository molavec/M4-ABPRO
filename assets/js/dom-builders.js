const getProductListCart = (productList) => {

  const productListCart = productList.map( (product) => {
      return `

          <li>
              <img src="${product.imagen}" class="cart-image" alt="Image ${product.nombre}">
              <p id="nombreP">${product.nombre}</p>
              <p>${product.cantidad} x ${product.precio}</p>
              <p>${product.codigo}</p>
              <button class="cart-remove" qty=${product.cantidad} uuid="${product.codigo}"> Eliminar </button>
          </li>
          <br>
          
  `
  });
  return productListCart.join('\n');
};

const getProductListHome = (productList) => {

  const productListHome = productList.map((product) => {
    return `
    
      <div class="col-md-3 my-3">
        <div id="${product.codigo}" class="product-block">
            <img class="d-block w-100 foto" src="${product.imagen}" alt="Product">
            <h3 id=nombreP>${product.nombre}</h3>
            <p>Codigo ${product.codigo}</p>
            <p>${product.descripcion}</p>
            <p>${product.precio}</p>
            <div class="row">
                <div class="box-cantidad col-md-6">
                    <input class="input-cantidad" type="number" placeholder="cantidad" value="1"/>
                </div>
                <div class="col-md-6">
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



