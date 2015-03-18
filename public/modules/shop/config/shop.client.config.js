'use strict';

// Configuring the Articles module
angular.module('shop').run(
	function(Menus) {
		// Set top bar menu items
		Menus.addMenuItem('sidenav', 'Articles', 'shop', 'item', '/shop/list');
		Menus.addSubMenuItem('sidenav', 'articles', 'List Articles', 'shop');
		Menus.addSubMenuItem('sidenav', 'articles', 'New Article', 'shop/create');
	}
);
