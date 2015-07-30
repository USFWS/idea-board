'use strict';

/**
 * @ngdoc function
 * @name ideasApp.controller:DetailCtrl
 * @description
 * # DetailCtrl
 * Controller of the ideasApp
 */
angular.module('ideasApp')
  .controller('DetailCtrl', function ($scope, idea) {
    $scope.idea = idea.data;
    $scope.idea.detailed = true;
  });
