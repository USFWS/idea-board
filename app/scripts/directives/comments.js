'use strict';

/**
 * @ngdoc directive
 * @name ideasApp.directive:commentForm
 * @description
 * # commentForm
 */
angular.module('ideasApp')
  .directive('comments', function () {
    return {
      templateUrl: 'views/partials/comment.html',
      restrict: 'E',
      scope: {
        comments: '=',
        ideaId: '@'
      },
      controller: function($scope, Comment) {
        $scope.newComment = { idea: $scope.ideaId };
        console.log($scope.comments);

        $scope.addComment = function() {
          if (!$scope.newComment.body) return;

          Comment.create($scope.newComment).then(function (response) {
            console.log(response);
            $scope.comments.push(response.data);
            $scope.newComment.body = '';
            console.log($scope.comments);
          });
        };
      }
    };
  });
