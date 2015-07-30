'use strict';

/**
 * @ngdoc function
 * @name ideasApp.controller:TagsCtrl
 * @description
 * # TagsCtrl
 * Controller of the ideasApp
 */
angular.module('ideasApp')
  .controller('TagCtrl', function ($scope, tags) {
    $scope.tags = tags.data;
  });
