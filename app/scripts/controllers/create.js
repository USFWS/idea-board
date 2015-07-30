'use strict';

/**
 * @ngdoc function
 * @name ideasApp.controller:CreateCtrl
 * @description
 * # CreateCtrl
 * Controller of the ideasApp
 */
angular.module('ideasApp')
  .controller('CreateCtrl', function ($scope, Idea, tags, toastr) {
    $scope.idea = {};
    $scope.tags = tags.data;

    $scope.create = function() {
      Idea.create($scope.idea).then(function (response) {
        toastr.success('Created new Idea!', response.statusText);
        $scope.idea = {};
      }).catch(function (response) {
        toastr.error('Unable to create new Idea.', response.statusText);
      });
    };

    $scope.filterTags = function(query) {
      return _.filter($scope.tags, function(tag) {
        return (tag.text.indexOf(query) > -1 || tag.description.indexOf(query) > -1);
      });
    };
  });
