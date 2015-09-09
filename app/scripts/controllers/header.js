'use strict';

/**
 * @ngdoc function
 * @name ideasApp.controller:HeaderCtrl
 * @description
 * # HeaderCtrl
 * Controller of the ideasApp
 */
angular.module('ideasApp')
  .controller('HeaderCtrl', function ($scope, $auth, $state, User, Tag, Idea, Flag, Notify) {
    $scope.admin = {};

    User.getPicture(40).then(function (picture) {
      $scope.picture = picture;
    });

    Tag.getAll('?approved=false').then(function (response) {
      $scope.admin.tags = response.data;
    });

    Idea.getAll().then(function (response) {
      $scope.ideas = response.data;
    });

    Flag.list().then(function (response) {
      $scope.admin.flags = response.data;
    });

    Notify.getAll(false).then(function (response) {
      $scope.notifications = response.data;
    });

    $scope.logOut = function () {
      $auth.logout();
      $auth.removeToken();
      $state.go('login');
    };

    $scope.isAuthenticated = function() {
      return $auth.isAuthenticated();
    };

    $scope.isAdmin = function() {
      return User.isAdmin();
    };

    $scope.isModerator = function() {
      return User.isModerator();
    };

    $scope.formatInput = function(idea) {
      if (idea) return idea.title;
    };

    $scope.$on('tags-update', function() {
      Tag.getAll('?approved=false').then(function (response) {
        $scope.admin.tags = response.data;
      });
    });

    $scope.$on('idea-update', function() {
      Idea.getAll().then(function (response) {
        $scope.ideas = response.data;
      });
    });

    $scope.$on('notifications-update', function() {
      Notify.getAll(false).then(function (response) {
        $scope.notifications = response.data;
      });
    });

  });
