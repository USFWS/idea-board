'use strict';

/**
 * @ngdoc function
 * @name ideasApp.controller:CreateCtrl
 * @description
 * # CreateCtrl
 * Controller of the ideasApp
 */
angular.module('ideasApp')
  .controller('CreateCtrl', function ($scope, Idea, toastr) {
    $scope.idea = {};

    $scope.create = function() {
      Idea.create($scope.idea).then(function (response) {
        toastr.success('Created new Idea!', response.statusText);
        $scope.idea = {};
      }).catch(function (response) {
        toastr.error('Unable to create new Idea.', response.statusText);
      });
    };
  });
