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
        $scope.newComment = { ideaId: $scope.ideaId };
        $scope.comments = ($scope.comments) ? $scope.comments : [];

        $scope.addComment = function() {
          if (!$scope.newComment.body) return;
          // $scope.comments.push($scope.newComment);

          Comment.create($scope.newComment).then(function (response) {
            console.log(response);
            $scope.newComment.body = '';
          });
        };
      }
    };
  });
