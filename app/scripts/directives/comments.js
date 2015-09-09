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
      controller: function($scope, $rootScope, Comment, toastr) {
        $scope.newComment = { idea: $scope.ideaId };
        $scope.view = {
          isEditing: false
        };

        function addUserInfo() {
          // Adds username & picture to the comment object
          angular.forEach($scope.comments, function(comment) {
            comment = Comment.attachUserInfo(comment);
          });
        }

        $scope.addComment = function() {
          if (!$scope.newComment.body) return;
          Comment.create($scope.newComment).then(function (response) {
            $scope.comments.push(response.data.comment);
            $scope.newComment.body = '';
            addUserInfo();
            $rootScope.$broadcast('notifications-update');
            if (response.data.badges) {
              angular.forEach(response.data.badges, function (badge) {
                toastr.info('New badge: ' + badge + '!', 'Congratulations');
              });
            }
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
            $rootScope.$broadcast('notifications-update');
          });
        };

        $scope.updateComment = function(comment) {
          Comment.update(comment).then(function (response) {
            var updated = _.find($scope.comments, function(com) {
              return com.id === response.data.id;
            });
            updated.body = comment.body;
          });
          $scope.view.isEditing = false;
        };

        addUserInfo();
      }
    };
  });
