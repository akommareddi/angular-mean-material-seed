
  'use strict';

  angular.module(ApplicationConfiguration.applicationModuleName)

	  .controller('SidenavController',

		  function(Authentication, Products, Menus) {
			  this.authentication = Authentication;

			  this.menu = Menus.getMenu('sidenav');

			  this.selected = '';

			  this.isSelected = function(item) {
				  return this.selected === item;
			  };

			  this.selectItem = function(item) {
				  this.selected = item;
			  };

		  });

