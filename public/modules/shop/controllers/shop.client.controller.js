
'use strict';


angular.module('shop').controller('ShopController',
	function (Authentication, Products) {

		this.auth = Authentication;
		this.products = Products.all();
		this.selectedProduct = Products.getSelectedProduct();

		console.log('************');
		console.log(this.products);
	});

