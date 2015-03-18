(function() {
  'use strict';

  angular.module(ApplicationConfiguration.applicationModuleName)

  .directive('topnav', function() {
    return {
      restrict: 'E',
      templateUrl: 'components/topnav/topnav.html',
      controller: 'TopnavCtrl',
      controllerAs: 'topnav',
      bindToController: true,
      scope: {
        openSidenav: '&'
      },
      link: function(scope, elem, attrs) {
      }
    };
  });

})();
