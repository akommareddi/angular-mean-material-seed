'use strict';

angular.module(ApplicationConfiguration.applicationModuleName)
.directive('rsMessage', rsMessageDirective);

function rsMessageDirective($mdTheming, mdThemeColors, $mdAria) {

	return {
		restrtict: 'E',
		template: '<span ng-transclude></span>',
		replace: true,
		transclude: true,
		scope: {
			type: '@'
		},
		link: postLink
	};

	function postLink(scope, element, attr) {
		var node = element[0];
		var th = mdThemeColors;

		var type = attr.type;
		var color = th.primary['default'];

		if (type && type === 'info') {
			color = th.accent['default'];
		} else if (type === 'warn') {
			color = th.warn['default'];
		}
		element.css('color', color);

		$mdTheming(element);

		var elementHasText = node.textContent.trim();
		if (!elementHasText) {
			$mdAria.expect(element, 'aria-label');
		}
	}

}
