'use strict';

/**
 * @ngdoc function
 * @name ideasApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the ideasApp
 */
angular.module('ideasApp')
  .controller('IdeasCtrl', function ($scope, ideas, User) {
    $scope.ideas = ideas.data;
    $scope.detailed = false;
    $scope.userId = User.getId();
  });
