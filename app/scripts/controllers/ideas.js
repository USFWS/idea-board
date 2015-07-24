'use strict';

/**
 * @ngdoc function
 * @name ideasApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the ideasApp
 */
angular.module('ideasApp')
  .controller('IdeasCtrl', function ($scope, ideas, $location) {
    $scope.ideas = ideas.data;
    $scope.location = $location.$$absUrl;
  });
