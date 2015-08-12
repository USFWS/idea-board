'use strict';

/**
 * @ngdoc function
 * @name ideasApp.controller:FlagCtrl
 * @description
 * # FlagCtrl
 * Controller of the ideasApp
 */
angular.module('ideasApp')
  .controller('FlagCtrl', function ($scope, flags) {
    $scope.flags = flags.data;
    console.log(flags.data);
  });
