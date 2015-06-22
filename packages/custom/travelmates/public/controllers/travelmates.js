'use strict';

/* jshint -W098 */
angular.module('mean.travelmates', ['pascalprecht.translate']);

angular.module('mean.travelmates').config(function ($translateProvider) {
  $translateProvider.translations('de', {
      APP_HEADLINE:  'Travelmates deutsch'
  });

  $translateProvider.translations('en_US', {
    APP_HEADLINE:  'Travelmates english'
  });

  $translateProvider.preferredLanguage('en_US');
});

angular.module('mean.travelmates').controller('TravelmatesController', ['$scope', 'Global', 'Travelmates',
  function($scope, Global, Travelmates) {
    $scope.global = Global;
    $scope.package = {
      name: 'travelmates'
    };
  }
]);