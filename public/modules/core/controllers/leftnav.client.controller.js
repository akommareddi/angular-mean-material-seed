'use strict';

angular.module(ApplicationConfiguration.applicationModuleName).controller('LeftNavController',
	function(Authentication, $mdSidenav, Menus, $log) {
		this.authentication = Authentication;
		this.isCollapsed = false;
		this.menu = Menus.getMenu('sidenav');
		this.selected = '';

		this.isSelected = function(item) {
			return this.selected === item;
		};

		this.selectItem = function(item) {
			this.selected = item;
		};

		//this.toggleCollapsibleMenu = function() {
		//	this.isCollapsed = !this.isCollapsed;
		//};
        //
		//// Collapsing the menu after navigation
		//this.$on('$stateChangeSuccess', function() {
		//	this.isCollapsed = false;
		//});
        //
		//this.toggleMenu = function() {
		//	$mdSidenav('left').toggle();
		//};
        //
        //$mdSidenav('lefty').open();
		this.toggleCollapsibleMenu = function() {
			$mdSidenav('left').toggle();
			console.log($mdSidenav('left').isOpen());
			//$mdSidenav('left').close()
			//	.then(function(){
			//		$log.debug('close LEFT is done');
			//	});
		};
	}
);
