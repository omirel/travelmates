'use strict';

angular.module('mean.travelmates').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('travelmates example page', {
      url: '/travelmates/example',
      templateUrl: 'travelmates/views/index.html'
    });
  }
]);
