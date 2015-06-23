'use strict';

angular.module('mean.profiles').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('profiles example page', {
      url: '/profiles/example',
      templateUrl: 'profiles/views/index.html'
    });
  }
]);
