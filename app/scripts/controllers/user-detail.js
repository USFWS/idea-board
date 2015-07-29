'use strict';

/**
 * @ngdoc function
 * @name ideasApp.controller:UserDetailCtrl
 * @description
 * # UserDetailCtrl
 * Controller of the ideasApp
 */
angular.module('ideasApp')
  .controller('UserDetailCtrl', function ($scope, user, ideas){
    $scope.user = user.data;
    $scope.ideas = ideas.data;
  });
