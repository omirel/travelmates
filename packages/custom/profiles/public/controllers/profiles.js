'use strict';

/* jshint -W098 */
angular.module('mean.profiles').controller('ProfilesController', ['$scope', 'Global', 'Profiles',
  function($scope, Global, Profiles) {
    $scope.global = Global;
    $scope.package = {
      name: 'profiles'
    };
  }
]);
