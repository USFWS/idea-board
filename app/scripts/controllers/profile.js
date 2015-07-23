'use strict';

/**
 * @ngdoc function
 * @name ideasApp.controller:ProfileCtrl
 * @description
 * # ProfileCtrl
 * Controller of the ideasApp
 */
angular.module('ideasApp')
  .controller('ProfileCtrl', function ($scope, profile) {
    $scope.user = profile.data;
    console.log(profile.data);
  });
