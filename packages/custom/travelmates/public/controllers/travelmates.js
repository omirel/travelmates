'use strict';

angular.module('mean.travelmates', ['pascalprecht.translate']);

angular.module('mean.travelmates').config(function ($translateProvider) {
  //$translateProvider.translations('de_DE', {
  //  "APP_HEADLINE":  "Travelmates deutsch",
  //  "APP_LANGUAGES": "Sprachen",
  //  "APP_LANGUAGES_GERMAN": "Deutsch",
  //  "APP_LANGUAGES_ENGLISH": "Englisch",
  //  "APP_LANGUAGES_SPANISH": "Spanisch",
  //  "APP_HELP": "Hilfe"
  //});

  $translateProvider.useStaticFilesLoader({
    prefix: 'locale/locale-',
    suffix: '.json'
  });

  $translateProvider.preferredLanguage('de_DE');
});

angular.module('mean.travelmates').controller('TravelmatesController', ['$scope', 'Global', 'Travelmates',
  function($scope, Global, Travelmates) {
    $scope.global = Global;
    $scope.package = {
      name: 'travelmates'
    };
  }
]);