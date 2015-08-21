'use strict';

/**
 * @ngdoc function
 * @name ideasApp.controller:EditideaCtrl
 * @description
 * # EditideaCtrl
 * Controller of the ideasApp
 */
angular.module('ideasApp')
  .controller('EditIdeaCtrl', function ($scope, $rootScope, $state, tags, idea, Idea, User, toastr) {
    $scope.idea = idea.data;
    $scope.tags = tags.data;

    // Redirect to ideas list if this isn't your idea
    if (User.getId() !== $scope.idea.creator.id) {
      $state.go('ideas.list');
      toastr.info('You cannot edit other employee\'s ideas.');
    }

    $scope.update = function () {
      var ideaId = $scope.idea.id;
      Idea.update($scope.idea).then(function (response) {
        toastr.success('Updated Idea!', response.statusText);
        $state.go('ideas.detail', { id: ideaId });
        $rootScope.$broadcast('idea-update');
      });
    };

    $scope.filterTags = function(query) {
      return _.filter($scope.tags, function(tag) {
        return (tag.text.indexOf(query) > -1 || tag.description.indexOf(query) > -1);
      });
    };

  });
