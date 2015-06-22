'use strict';

angular.module('mean.system').controller('FooterController', ['$scope', '$rootScope', 'Menus', 'MeanUser', '$state',
  function($scope, $rootScope, Menus, MeanUser, $state) {

    var vm = this;

    vm.ftctrvars = {
      copyright: 'Travelmates 2015 © All Rights Reserved.'
    };

  }
]);
