'use strict';

/**
 * @ngdoc directive
 * @name ideasApp.directive:toggleFlag
 * @description
 * # toggleFlag
 */
angular.module('ideasApp')
  .directive('toggleFlag', function () {
    return {
      templateUrl: 'views/partials/toggle-flag.html',
      restrict: 'E',
      scope: {
        userId: '@',
        idea: '='
      },
      controller: function($scope, Flag, Idea) {


        function submitFlag(params) {
          Flag.idea(params).then(function() {
            Idea.getOne($scope.idea.id).then(function (response) {
              $scope.idea = response.data;
              isFlagged();
            });
          });
        }

        function removeFlag(id) {
          Flag.removeIdea(id).then(function() {
            Idea.getOne($scope.idea.id).then(function (response) {
              $scope.idea = response.data;
              isFlagged();
            });
          });
        }

        function isFlagged() {
          $scope.flagged = (_.findWhere($scope.idea.flags, { flagger: $scope.userId })) ? true : false;
        }

        $scope.toggleFlag = function() {
          if ($scope.flagged) {
            var id = _.findWhere($scope.idea.flags, { flagger: $scope.userId }).id;
            removeFlag(id);
          } else {
            var params = { flagger: $scope.userId, idea: $scope.idea.id };
            submitFlag(params);
          }
        };

        isFlagged();
      }
    };
  });
