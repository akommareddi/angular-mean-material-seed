(function () {
	'use strict';

	angular.module(ApplicationConfiguration.applicationModuleName)

		.controller('SheetController', function ($scope, $mdBottomSheet) {
			var sheet = this;

			sheet.items = [
				{name: 'Plane', icon: 'plane'},
				{name: 'Lock', icon: 'lock'},
				{name: 'Tree', icon: 'tree'},
				{name: 'Copy', icon: 'copy'},
				{name: 'Facebook', icon: 'facebook'},
				{name: 'Twitter', icon: 'twitter'},
			];

			sheet.listItemClick = function ($index) {
				var clickedItem = sheet.items[$index];
				$mdBottomSheet.hide(clickedItem);
			};

		});
})();

