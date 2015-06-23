'use strict';

/* jshint -W098 */
angular.module('mean.maps').controller('MapsController', ['$scope', 'Global', 'Maps',
  function($scope, Global, Maps) {
    $scope.global = Global;
    $scope.package = {
      name: 'maps'
    };
  }
]);
