'use strict';

/**
 * @ngdoc function
 * @name ideasApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ideasApp
 */
angular.module('ideasApp')
  .controller('MainCtrl', function ($scope, $auth, $window, $state, toastr, User, Idea, Tag) {

    if ($auth.isAuthenticated()) {
      User.getOne(User.getId()).then(function (response) {
        $scope.user = response.data;
        $scope.user.headerpic = $scope.user.picture.replace('?sz=50', '?sz=40');
      });
    } else {
      $state.go('login');
    }

    Idea.getAll().then(function (response) {
      $scope.ideas = response.data;
    });

    Tag.getAll('?approved=false').then(function (response) {
      console.log(response.data);
      $scope.admin = {tags: response.data};
    });

    $scope.authenticate = function(provider) {
      $auth.authenticate(provider).then(function (response) {
        $auth.setToken(response.data.token);
        $state.go('profile');
        toastr.success('Welcome, ' + User.getUsername());
      }).catch(function (response) {
        toastr.error(response.data);
      });
    };

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

    $scope.formatInput = function(idea) {
      if (idea) return idea.title;
    };
  });
