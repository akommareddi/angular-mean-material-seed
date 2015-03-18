(function() {
    'use strict';

    angular.module(ApplicationConfiguration.applicationModuleName)

    .factory('ToastPreset', function($mdToast) {
        var preset = {};
        preset.template = $mdToast.build()
            .templateUrl('components/toast/toast.html')
            .hideDelay(5000)
            .position('bottom right')
            .controller('ToastController')
            .controllerAs('toast');

            //helper function to add locals key
        preset.locals = function(obj) {
            this.template._options.locals = obj;
            return this.template;
        };

        return preset;
    });

})();
