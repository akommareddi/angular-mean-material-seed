(function() {
        'use strict';

        angular.module(ApplicationConfiguration.applicationModuleName)

        .controller('ToastController', function(msg) {
                this.msg = msg;
        });
})();
