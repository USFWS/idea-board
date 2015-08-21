'use strict';

/**
 * @ngdoc directive
 * @name ideasApp.directive:ideaCard
 * @description
 * # ideaCard
 */
angular.module('ideasApp')
  .directive('idea', function () {
    return {
      templateUrl: 'views/partials/idea.html',
      restrict: 'E',
      scope: {
        idea: '=',
        userId: '@',
        detailed: '@'
      },
      controller: function($scope, $state, Idea, User, toastr) {

        $scope.myIdea = function () {
          return User.getId() === $scope.idea.creator.id;
        };

        $scope.deleteIdea = function() {
          Idea.destroy($scope.idea.id).then(function (response) {
            $state.go('ideas.list', {}, {reload: true});
            toastr.info('Deleted Idea', response.statusText);
          }).catch(function (response) {
            toastr.error('Could not delete Idea', response.statusText);
          });
        };
      }
    };
  });
