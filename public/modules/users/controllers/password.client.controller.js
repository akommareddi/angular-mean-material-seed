'use strict';

angular.module('users').controller('PasswordController',
	function($stateParams, $http, $location, Authentication) {
		this.authentication = Authentication;

		//If user is signed in then redirect back home
		if (this.authentication.user) $location.path('/');

		// Submit forgotten password account id
		this.askForPasswordReset = function() {
			this.success = this.error = null;

			$http.post('/auth/forgot', this.credentials).success(function(response) {
				var self = this;
				// Show user success message and clear form
				self.credentials = null;
				self.success = response.message;

			}).error(function(response) {
				// Show user error message and clear form
				self.credentials = null;
				self.error = response.message;
			});
		};

		// Change user password
		this.resetUserPassword = function() {
			this.success = this.error = null;
			var self = this;

			$http.post('/auth/reset/' + $stateParams.token, this.passwordDetails).success(function(response) {
				// If successful show success message and clear form
				self.passwordDetails = null;

				// Attach user profile
				Authentication.user = response;

				// And redirect to the index page
				$location.path('/password/reset/success');
			}).error(function(response) {
				self.error = response.message;
			});
		};
	}
);
