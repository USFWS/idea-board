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
      }
    };
  });
