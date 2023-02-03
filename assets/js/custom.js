import catalog from "./catalog.js";
import { getProductListHome, getProductListCart } from "./dom-builders.js";

// --> EVENTOS
//variable que almacena los productos anadidos al carro
var productsInCart = [];
var contadorProductos = 0;

$(document).ready(function(){
	"use strict";

	// add products from catalog
	$('#products .feature-content .row').html(getProductListHome(catalog));

	// acciones de los botones anadir al carro 
	$('.add-to-cart-box .add-button').click( function() {
		//console.log('boton anadir', this);
		//console.log('boton anadir', $(this));
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
		const product = JSON.parse($(this).attr('info').replace(/\'/g, '\"'));
		// console.log('product', product);

		// Obtener la cantidad de productos
		const cantidad = $(this).parent().parent().children(".box-cantidad").children(".input-cantidad").val();
		// console.log('cantidad', cantidad);
		product.cantidad = cantidad;
		// console.log('product con catidad', product);

		
		// aumentar el contador de cantidad
		contadorProductos = contadorProductos + parseInt(cantidad);
		$("#cart-qty").html(contadorProductos);

		// add product 
		// TIP: utilizar array.push() para actualizar la variable 'productsInCart'

		productsInCart.push(product);
		//console.log('productsInCart', productsInCart);


		// reconstruir html con el listado de productos
		// TIP: .html() para reemplazar el $(#totalizador).html(codigohtml)

		// Actualizar totales
		const totalNeto = getTotalWithoutTax(productsInCart);
		const iva = getTax(productsInCart);
		const total = getTotalWithTax(productsInCart);
		

		// console.log('totalNeto', totalNeto);
		console.log('iva', iva);
		console.log('total', total);

		$("#total-neto").html(totalNeto);
		$("#iva").html(iva);
		$("#total").html(total);
		$("#shipping").html(getShippingCost(total));
		$("#total-with-shipping").html(total + getShippingCost(total));
		
		const productsInCartHTML = getProductListCart(productsInCart);
		//console.log('productsInCartHTML', productsInCartHTML);
		$("#totalizador .item-list").html(productsInCartHTML);

		

		// Add event to remove button
		$('#totalizador .cart-remove').click( function() {

				//console.log('uuid elemento', $(this).attr('uuid'));

				const uuid = $(this).attr('uuid'); // obtiene el id del producto a eliminar

				// eliminado elemento del arreglo
				//console.log('productsInCart', productsInCart);
				const index = productsInCart.findIndex((product) => { product.id === uuid }); // obtiene el indice en el arreglo de productos en el carro del objeto a eliminar
				productsInCart.splice(index, 1); // elimina el producto con la funcion splice
				//console.log('productsInCart', productsInCart);

				// disminuir el contador de la notificacion
				contadorProductos = contadorProductos - $(this).attr('qty');
				$("#cart-qty").html(contadorProductos);

				// remover al padre
				$(this).parent().remove();
				
				// // Reconstruye el html del totalizador
				// const productsInCartHTML = getProductListCart(productsInCart);

				// //console.log('productsInCartHTML', productsInCartHTML);
				// $("#totalizador .item-list").html(productsInCartHTML);

				// recalcular totales
				$("#total-neto").html(getTotalWithoutTax(productsInCart));
				$("#iva").html(getTax(productsInCart));
				$("#total").html(getTotalWithTax(productsInCart));
				
				$("#shipping").html(getShippingCost(getTotalWithTax(productsInCart)));
				$("#total-with-shipping").html(getTotalWithTax(productsInCart) + getShippingCost(total));


		});

	});

});