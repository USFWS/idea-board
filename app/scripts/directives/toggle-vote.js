'use strict';

/**
 * @ngdoc directive
 * @name ideasApp.directive:toggle
 * @description
 * # toggle
 */
angular.module('ideasApp')
  .directive('toggleVote', function () {
    return {
      templateUrl: 'views/partials/toggle-vote.html',
      restrict: 'EA',
      scope: {
        userId: '@',
        idea: '='
      },
      controller: function($scope, Idea, User) {

        function buildUrl(id) {
          return 'user/' + User.getId() + '/votes/' + id;
        }

        function submitVote(url) {
          User.submitVote(url).then(function() {
            Idea.getOne($scope.idea.id).then(function (response) {
              $scope.idea = response.data;
              hasVoted();
            });
          });
        }

        function removeVote(url) {
          User.removeVote(url).then(function() {
            Idea.getOne($scope.idea.id).then(function (response) {
              $scope.idea = response.data;
              hasVoted();
            });
          });
        }

        function hasVoted() {
          $scope.voted = (_.findWhere($scope.idea.score, { id: $scope.userId })) ? true : false;
        }

        $scope.toggleVote = function() {
          var url = buildUrl($scope.idea.id);
          if ($scope.voted) {
            removeVote(url);
          } else {
            submitVote(url);
          }
        };

        hasVoted();
      }
    };
  });
