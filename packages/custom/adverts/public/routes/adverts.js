'use strict';

angular.module('mean.adverts').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('adverts example page', {
      url: '/adverts/example',
      templateUrl: 'adverts/views/index.html'
    });
  }
]);
