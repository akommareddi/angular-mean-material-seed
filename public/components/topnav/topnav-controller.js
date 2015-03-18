(function() {
    'use strict';

    angular.module(ApplicationConfiguration.applicationModuleName)

    .controller('TopnavCtrl', function(Authentication, $mdSidenav, $location) {
        this.auth = Authentication;

        //this.signout = function() {
			//console.log('kkk');
        //    this.auth.logout()
        //        .then(function(data) {
        //            console.log(data);
        //        }, function() {
        //            console.log('logout failed...');
        //        });
        //};
        //
        this.currentPath = function() {
            return $location.path();
        };
    });

})();
