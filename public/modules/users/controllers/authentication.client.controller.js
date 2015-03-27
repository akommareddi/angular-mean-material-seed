'use strict';

angular.module('users').controller('AuthenticationController',
	function($http, $state, Authentication) {
		this.authentication = Authentication;

		// If user is signed in then redirect back home
		if (this.authentication.user) $state.go('home');

		this.signup = function() {
			var self = this;
			$http.post('/auth/signup', this.credentials).success(function(response) {
				// If successful we assign the response to the global user model
				self.authentication.user = response;

				// And redirect to the index page
				$state.go('home');
			}).error(function(response) {
				self.error = response.message;
			});
		};

		this.signin = function() {
			var self = this;
			$http.post('/auth/signin', this.credentials).success(function(response) {
				// If successful we assign the response to the global user model
				self.authentication.user = response;
				console.log(response);

				// And redirect to the index page
				$state.go('home');
			}).error(function(response) {
				self.error = response.message;
			});
		};

		this.signout = function() {
			var self = this;
			$http.post('/auth/signout').success(function(response) {
				self.authentication.user = null;

				// And redirect to the index page
				$state.go('home');
			}).error(function(response) {
				self.error = response.message;
			});
		};
});
