'use strict';

angular.module('mean.profiles').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider
      .state('all profiles', {
        url: '/profiles',
        templateUrl: '/profiles/views/list.html',
        resolve: {
          loggedin: function(MeanUser) {
            return MeanUser.checkLoggedin();
          }
        }
      })
      .state('create profile', {
        url: '/profiles/create',
        templateUrl: '/profiles/views/create.html',
        resolve: {
          loggedin: function(MeanUser) {
            return MeanUser.checkLoggedin();
          }
        }
      })
      .state('edit profile', {
        url: '/profiles/:profileId/edit',
        templateUrl: '/profiles/views/edit.html',
        resolve: {
          loggedin: function(MeanUser) {
            return MeanUser.checkLoggedin();
          }
        }
      })
      .state('profile by id', {
        url: '/profiles/:profileId',
        templateUrl: '/profiles/views/view.html',
        resolve: {
          loggedin: function(MeanUser) {
            return MeanUser.checkLoggedin();
          }
        }
      });
  }
]);