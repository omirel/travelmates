'use strict';

/* jshint -W098 */
angular.module('mean.travelmates').controller('TravelmatesController', ['$scope', 'Global', 'Travelmates',
  function($scope, Global, Travelmates) {
    $scope.global = Global;
    $scope.package = {
      name: 'travelmates'
    };
  }
]);
