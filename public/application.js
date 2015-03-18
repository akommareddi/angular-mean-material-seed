'use strict';

angular.module(ApplicationConfiguration.applicationModuleName, ApplicationConfiguration.applicationModuleVendorDependencies);

angular.module(ApplicationConfiguration.applicationModuleName)
	.config(['$locationProvider',
		function($locationProvider) {
			$locationProvider.hashPrefix('!');
		}

	])
	.config(function($mdThemingProvider) {
		$mdThemingProvider.theme('default')
			.primaryPalette('blue-grey', {
				'default': '400', // by default use shade 400 from the pink palette for primary intentions
				'hue-1': '100', // use shade 100 for the <code>md-hue-1</code> class
				'hue-2': '600', // use shade 600 for the <code>md-hue-2</code> class
				'hue-3': 'A100' // use shade A100 for the <code>md-hue-3</code> class
			})
			.accentPalette('teal', {
				'default': '200' // use shade 200 for default, and keep all other shades the same
			});
	})
	.controller('GlobalController', function($rootScope, Authentication, $mdToast, $mdBottomSheet, ToastPreset, $mdSidenav) {
		this.auth = Authentication;

		this.showToast = function() {
			$mdToast.show(ToastPreset.locals({
				msg: 'Yo yo yo!'
			}));
		};

		this.toggleSidenav = function() {
			$mdSidenav('sidenav').toggle();
		};

		this.showSheet = function() {
			$mdBottomSheet.show({
				controller: 'SheetController',
				controllerAs: 'sheet',
				templateUrl: 'components/sheet/sheet.html'
			});
		};
		$rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
			console.log("$stateChangeStart --- event, toState, toParams, fromState, fromParams");
			console.log(arguments);
		});
		$rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
			console.log("$stateChangeError --- event, toState, toParams, fromState, fromParams, error");
			console.log(arguments);
		});
		$rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
			console.log("$stateChangeSuccess --- event, toState, toParams, fromState, fromParams");
			console.log(arguments);
		});
		$rootScope.$on('$viewContentLoading', function (event, viewConfig) {
			console.log("$viewContentLoading --- event, viewConfig");
			console.log(arguments);
		});
		$rootScope.$on('$viewContentLoaded', function (event) {
			console.log("$viewContentLoaded --- event");
			console.log(arguments);
		});
		$rootScope.$on('$stateNotFound', function (event, unfoundState, fromState, fromParams) {
			console.log("$stateNotFound --- event, unfoundState, fromState, fromParams");
			console.log(arguments);
		});
	});

angular.element(document).ready(function() {
	if (window.location.hash === '#_=_') window.location.hash = '#!';
	angular.bootstrap(document, [ApplicationConfiguration.applicationModuleName]);
});
