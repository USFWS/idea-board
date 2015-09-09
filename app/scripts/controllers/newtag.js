'use strict';

/**
 * @ngdoc function
 * @name ideasApp.controller:NewtagCtrl
 * @description
 * # NewtagCtrl
 * Controller of the ideasApp
 */
angular.module('ideasApp')
  .controller('NewTagCtrl', function ($scope, $rootScope, Tag, toastr) {
    $scope.newTag = {};

    $scope.createTag = function() {
      Tag.create($scope.newTag).then(function (response) {
        toastr.success(response.statusText, 'Your tag will be reviewed by a moderator.');
        $scope.newTag = {};
        $rootScope.$broadcast('tags-update');
      }).catch(function (response) {
        toastr.error(response.statusText, 'Could not capture your proposed tag.');
      });
    };

  });
