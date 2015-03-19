'use strict';

angular.module('shop').run(
	function(Menus) {
		Menus.addMenuItem('sidenav', 'Shop', 'shop', 'item', '/shop/list');
		Menus.addSubMenuItem('sidenav', 'shop', 'List Products', 'shop');
		Menus.addSubMenuItem('sidenav', 'shop', 'New Product', 'shop/create');
	}
);
