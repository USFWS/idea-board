'use strict';

/**
 * @ngdoc directive
 * @name ideasApp.directive:toggleFlag
 * @description
 * # toggleFlag
 */
angular.module('ideasApp')
  .directive('toggleSubscribe', function () {
    return {
      templateUrl: 'views/partials/toggle-subscribe.html',
      restrict: 'E',
      scope: {
        userId: '@',
        idea: '='
      },
      controller: function($scope, Idea) {

        function subscribe(id) {
          Idea.subscribe(id).then(function() {
            Idea.getOne(id).then(function (response) {
              $scope.idea = response.data;
              isSubscribed();
            });
          });
        }

        function unsubscribe(id) {
          Idea.unsubscribe(id).then(function() {
            Idea.getOne(id).then(function (response) {
              $scope.idea = response.data;
              isSubscribed();
            });
          });
        }

        function isSubscribed() {
          $scope.subscribed = (_.findWhere($scope.idea.subscribers, { id: $scope.userId })) ? true : false;
        }

        $scope.toggleSubscribe = function() {
          if ($scope.subscribed) {
            unsubscribe($scope.idea.id);
          } else {
            subscribe($scope.idea.id);
          }
        };

        isSubscribed();
      }
    };
  });
