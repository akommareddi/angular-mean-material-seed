(function() {
  'use strict';

  angular.module(ApplicationConfiguration.applicationModuleName)

  .directive('sidenav', function() {
    return {
      restrtict: 'E',
      templateUrl: 'components/sidenav/sidenav.html',
      controller: 'SidenavController',
      controllerAs: 'sidenav',
      bindToController: true,
      scope: {
        close: '&'
      },
      link: function(scope, elem, attrs) {
      }
    };
  });

})();
