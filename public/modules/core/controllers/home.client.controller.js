'use strict';


angular.module('core').controller('HomeController',
	function(Authentication) {
		// This provides Authentication context.
		this.authentication = Authentication;
		this.title = 'This is home';
	}
);
