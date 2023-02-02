import catalog from "./catalog.js";
import { getProductListHome, getProductListCart } from "./dom-builders.js";

$(document).ready(function(){
	"use strict";

	// add products from catalog
	$('#products .feature-content .row').html(getProductListHome(catalog));

});