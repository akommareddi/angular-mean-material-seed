'use strict';

angular.module('core').controller('HeaderController',
	function(Authentication, Menus, $mdSidenav) {
		this.authentication = Authentication;
		this.isCollapsed = false;
		//$scope.menu = Menus.getMenu('sidenav');

		this.toggleCollapsibleMenu = function() {
			//$scope.isCollapsed = !$scope.isCollapsed;
			$mdSidenav('left').toggle();
		};

		// Collapsing the menu after navigation
		//$scope.$on('$stateChangeSuccess', function() {
		//	$scope.isCollapsed = false;
		//});
	}
);
