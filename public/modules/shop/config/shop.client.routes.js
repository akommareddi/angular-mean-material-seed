'use strict';

angular.module('shop').config(['$stateProvider',
	function($stateProvider) {
		$stateProvider.
		state('shop', {
			url: '/shop',
			templateUrl: 'modules/shop/views/shop.list.client.view.html',
			controller: 'ShopController',
			controllerAs: 'shop'
		}).
		state('shopList', {
			url: '/shopList/:productIndex',
			templateUrl: 'modules/shop/views/shop.client.view.html',
			controller: 'ShopController',
			controllerAs: 'shop',
			resolve: {
				selectedProduct: function(Products, $stateParams) {

					var productIndex = $stateParams.productIndex;
					console.log('resolving...'+JSON.stringify(Products.get(productIndex)));
					Products.selectProduct(productIndex);
					return Products.get(productIndex);
				}
			}}).
		state('cubes', {
			url: '/cubes',
			templateUrl: 'modules/shop/views/cubes.client.view.html'
		});
	}
]);
