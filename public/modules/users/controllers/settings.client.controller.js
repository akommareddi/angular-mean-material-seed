'use strict';

angular.module('users').controller('SettingsController',
	function($http, $location, Users, Authentication) {
		this.user = Authentication.user;
		var self = this;

		// If user is not signed in then redirect back home
		if (!this.user) $location.path('/');

		// Check if there are additional accounts
		this.hasConnectedAdditionalSocialAccounts = function(provider) {
			for (var i in self.user.additionalProvidersData) {
				return true;
			}

			return false;
		};

		// Check if provider is already in use with current user
		this.isConnectedSocialAccount = function(provider) {
			return this.user.provider === provider || (this.user.additionalProvidersData && this.user.additionalProvidersData[provider]);
		};

		// Remove a user social account
		this.removeUserSocialAccount = function(provider) {
			this.success = this.error = null;
			var self = this;

			$http.delete('/users/accounts', {
				params: {
					provider: provider
				}
			}).success(function(response) {
				// If successful show success message and clear form
				self.success = true;
				self.user = Authentication.user = response;
			}).error(function(response) {
				self.error = response.message;
			});
		};

		// Update a user profile
		this.updateUserProfile = function(isValid) {
			if (isValid) {
				this.success = this.error = null;
				var user = new Users(this.user);
				var self = this;

				user.$update(function(response) {
					self.success = true;
					Authentication.user = response;
				}, function(response) {
					self.error = response.data.message;
				});
			} else {
				this.submitted = true;
			}
		};

		// Change user password
		this.changeUserPassword = function() {
			this.success = this.error = null;
			var self = this;

			$http.post('/users/password', this.passwordDetails).success(function(response) {
				// If successful show success message and clear form
				self.success = true;
				self.passwordDetails = null;
			}).error(function(response) {
				self.error = response.message;
			});
		};
	}
);
