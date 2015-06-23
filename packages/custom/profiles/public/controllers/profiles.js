'use strict';

angular.module('mean.profiles').controller('ProfilesController', ['$scope', '$stateParams', '$location', 'Global', 'Profiles', 'MeanUser',
  function($scope, $stateParams, $location, Global, Profiles, MeanUser) {
    $scope.global = Global;
    $scope.package = {
      name: 'profiles'
    };

    $scope.getPartial = function (partial) {
      return '/profileViews/' + partial + '.html';
    }

    $scope.hasAuthorization = function(profile) {
      if (!profile|| !profile.user) return false;
      return MeanUser.isAdmin || profile.user._id === MeanUser.user._id;
    };

    $scope.create = function(isValid) {
      if (isValid) {
        var profile = new Profiles({
          title: this.title,
          content: this.content,
          content2: this.content2
        });
        profile.$save(function(response) {
          $location.path('profiles/' + response._id);
        });

        this.title = '';
        this.content = '';
        this.content2 = '';
      } else {
        $scope.submitted = true;
      }
    };

    $scope.remove = function(profile) {
      if (profile) {
        profile.$remove(function(response) {
          for (var i in $scope.profiles) {
            if ($scope.profiles[i] === profile) {
              $scope.profiles.splice(i,1);
            }
          }
          $location.path('profiles');
        });
      } else {
        $scope.profile.$remove(function(response) {
          $location.path('profiles');
        });
      }
    };

    $scope.update = function(isValid) {
      if (isValid) {
        var profile = $scope.profile;
        if(!profile.updated) {
          profile.updated = [];
        }
        profile.updated.push(new Date().getTime());

        profile.$update(function() {
          $location.path('profiles/' + profile._id);
        });
      } else {
        $scope.submitted = true;
      }
    };

    $scope.find = function() {
      Profiles.query(function(profiles) {
        $scope.profiles = profiles;
      });
    };

    $scope.findOne = function() {
      Profiles.get({
        profileId: $stateParams.profileId
      }, function(profile) {
        $scope.profile = profile;
      });
    };
  }
]);
