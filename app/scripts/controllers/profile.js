'use strict';

/**
 * @ngdoc function
 * @name ideasApp.controller:ProfileCtrl
 * @description
 * # ProfileCtrl
 * Controller of the ideasApp
 */
angular.module('ideasApp')
  .controller('ProfileCtrl', function ($scope, user, $stateParams) {
    $scope.user = user.data;
    $scope.id = $stateParams.id;
  });
