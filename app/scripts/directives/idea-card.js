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
        id: '@'
      },
      controller: function ($scope, User, Idea, toastr) {

        $scope.hasVoted = function() {
          var voted;
          _.each($scope.idea.score, function(el) {
            voted = (el.id === $scope.id) ? true : false;
          });
          return voted;
        };

        $scope.submitVote = function(ideaId) {
          var url = buildUrl(ideaId);
          User.submitVote(url).then(function () {
            Idea.getOne(ideaId).then(function (response) {
              $scope.idea = response.data;
            });
          }).catch(function (response) {
            toastr.error('Vote Unsuccessful', response.statusText);
          });
        };

        $scope.removeVote = function(ideaId) {
          var url = buildUrl(ideaId);
          User.removeVote(url).then(function () {
            Idea.getOne(ideaId).then(function (response) {
              $scope.idea = response.data;
            });
          }).catch(function (response) {
            toastr.error('Could not remove your vote.', response.statusText);
          });
        };

        function buildUrl(ideaId) {
          var id = User.getId();
          return 'user/' + id + '/votes/' + ideaId;
        }
      }
    };
  });
