$(document).ready(function(){
	"use strict";

	// add products from catalog
	$('#products .feature-content .row').html(getProductListHome(catalog));

});