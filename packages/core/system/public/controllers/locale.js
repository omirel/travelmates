'use strict';

angular.module('mean.system').controller('LocaleController', function ($scope, $translate) {

  $scope.changeLang = function (key) {
    $translate.use(key).then(function (key) {
      console.log("Sprache zu " + key + " gewechselt.");
    }, function (key) {
      console.log("Irgendwas lief schief.");
    });
  };
});