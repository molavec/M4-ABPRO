import catalog from "./catalog.js";
import { getProductListHome, getProductListCart } from "./dom-builders.js";

import Product from "./class/product.js";
import Cart from "./class/cart.js";

// crea un arreglo de productos a partir de la 'base de datos' catalog.js
const products = catalog.map((product)=> {
		return new Product(
			product.code,
			product.name,
			product.price,
			product.image,
			product.description,
			product.stock,
		);
	}
);

const cart = new Cart();


// --> EVENTOS
//variable que almacena los productos anadidos al carro
var productsInCart = [];
var contadorProductos = 0;

$(document).ready(function(){
	"use strict";

	// add products from products
	$('#products .feature-content .row').html(getProductListHome(products));

	// acciones de los botones anadir al carro 
	$('.add-to-cart-box .add-button').click( function() {
		// console.log('boton anadir', this);
		// console.log('boton anadir', $(this));
		// console.log('info', $(this).attr('info'));
		// console.log('info parsed', JSON.parse($(this).attr('info').replace(/\'/g, '\"')));

		// Cambiar el estado de boton anadido, esconde boton actual
		const addButton = $(this);
		const addedButton = $(this).siblings(".added-button");
		addButton.toggle();
		addedButton.toggle();

		setTimeout(
				function () {
						addButton.toggle();
						addedButton.toggle();
				},
				1000
		);

		// get product info
		const productInfo = JSON.parse($(this).attr('info').replace(/\'/g, '\"'));
		//console.log('productInfo', productInfo);
		const product = new Product(
			productInfo.id,
			productInfo.name,
			productInfo.price,
			productInfo.image,
			productInfo.description,
			productInfo.stock,
		);

		// Obtener la cantidad de productos
		const quantity = $(this).parent().parent().children(".box-cantidad").children(".input-cantidad").val();
		// console.log('quantity', quantity);
		//product.quantity = quantity;
		// console.log('product con catidad', product);
		
		// crea listado de productos en el carro
		// productsInCart.push(product);
		cart.addItem(product, quantity);
		console.log('cart items', cart.getItems());


		const productsInCartHTML = getProductListCart(cart.getItems());
		$("#totalizador .item-list").html(productsInCartHTML);
		// console.log('productsInCart', productsInCart);
		// console.log('productsInCartHTML', productsInCartHTML);

		// aumentar el contador de cantidad
		// contadorProductos = contadorProductos + parseInt(quantity);
		// $("#cart-qty").html(contadorProductos);
		$("#cart-qty").html(cart.getQuantity());

		// Actualizar totales
		updateTotals();

		// Add event to remove button
		$('#totalizador .cart-remove').click( function() {

				//console.log('uuid elemento', $(this).attr('uuid'));
				const uuid = $(this).attr('uuid'); // obtiene el id del producto a eliminar

				// eliminado elemento del carro
				cart.removeItem(uuid);
				console.log('cart items', cart.getItems());

				//console.log('productsInCart', productsInCart);
				// const index = productsInCart.findIndex((product) => { product.id === uuid }); // obtiene el indice en el arreglo de productos en el carro del objeto a eliminar
				// productsInCart.splice(index, 1); // elimina el producto con la funcion splice
				//console.log('productsInCart', productsInCart);

				// disminuir el contador de la notificacion
				// contadorProductos = contadorProductos - $(this).attr('qty');
				// $("#cart-qty").html(contadorProductos);
				$("#cart-qty").html(cart.getQuantity());

				// remover al padre
				$(this).parent().remove();
				
				// Reconstruye el html del totalizador
				const productsInCartHTML = getProductListCart(productsInCart);

				// //console.log('productsInCartHTML', productsInCartHTML);
				$("#totalizador .item-list").html(productsInCartHTML);

				// recalcular totales
				updateTotals();
		});

	});

});

const updateTotals = () => {

	const totalWithoutTax = getTotalWithoutTax(productsInCart);
	const tax = getTax(productsInCart);
	const totalWithTax = getTotalWithTax(productsInCart);
	const shippingCost = getShippingCost(getTotalWithTax(productsInCart)); 
	const totalWithShipping = getTotalWithTax(productsInCart) + getShippingCost(getTotalWithTax(productsInCart));

	$("#total-neto").html(totalWithoutTax);
	$("#iva").html(tax);
	$("#total").html(totalWithTax);
	$("#shipping").html(shippingCost);
	$("#total-with-shipping").html(totalWithShipping);
}