'use strict';

/**
 * @ngdoc function
 * @name ideasApp.controller:TagdetailCtrl
 * @description
 * # TagdetailCtrl
 * Controller of the ideasApp
 */
angular.module('ideasApp')
  .controller('TagDetailCtrl', function ($scope, tag, ideas, user) {
    $scope.tag = tag.data;
    $scope.ideas = ideas.data;
    $scope.user = user.data;
  });
