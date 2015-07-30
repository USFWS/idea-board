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

        angular.forEach($scope.comments, function(comment) {
          comment = Comment.attachUserInfo(comment);
        });

        $scope.addComment = function() {
          if (!$scope.newComment.body) return;
          Comment.create($scope.newComment).then(function (response) {
            $scope.comments.push(response.data);
            $scope.newComment.body = '';
          });
        };

        $scope.toggleFlag = function(comment) {
          Comment.flag(comment).then(function(response) {
            comment.flagged = response.data.flagged;
          });
        };

        $scope.destroy = function(comment) {
          Comment.destroy(comment.id).then(function() {
            $scope.comments = _.reject($scope.comments, function(com){
              return com.id === comment.id;
            });
          });
        };
      }
    };
  });
