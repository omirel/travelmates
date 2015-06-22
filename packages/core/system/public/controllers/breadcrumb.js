'use strict';

angular.module('mean.system').controller('BreadcrumbController', ['$scope', '$rootScope', 'Menus', 'MeanUser', '$state',
  function($scope, $rootScope, Menus, MeanUser, $state) {

    var vm = this;

    vm.bcrvars = {
      activePage: 'actPage from DB'
    };

  }
]);
