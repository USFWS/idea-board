'use strict';

/**
 * @ngdoc function
 * @name ideasApp.controller:NewtagCtrl
 * @description
 * # NewtagCtrl
 * Controller of the ideasApp
 */
angular.module('ideasApp')
  .controller('NewTagCtrl', function ($scope, Tag, toastr) {
    $scope.createTag = function() {
      Tag.create($scope.newTag).then(function (response) {
        toastr.success(response.statusText, 'Your tag will be reviewed by a moderator.');
        $scope.newTag = {};
      });
    };
  });
