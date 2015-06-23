'use strict';

/* jshint -W098 */
angular.module('mean.adverts').controller('AdvertsController', ['$scope', 'Global', 'Adverts',
  function($scope, Global, Adverts) {
    $scope.global = Global;
    $scope.package = {
      name: 'adverts'
    };
  }
]);
