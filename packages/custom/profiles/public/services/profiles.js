'use strict';

angular.module('mean.profiles').factory('Profiles', ['$resource',
  function($resource) {
    return $resource('api/profiles/:profileId', {
      profileId: '@_id'
    }, {
      update: {
        method: 'PUT'
      }
    });
  }
]);