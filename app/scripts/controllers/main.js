'use strict';

/**
 * @ngdoc function
 * @name ideasApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ideasApp
 */
angular.module('ideasApp')
  .controller('MainCtrl', function ($scope, $auth, $window, $state) {

    $scope.authenticate = function(provider) {
      $auth.authenticate(provider).then(function (response) {
        $window.localStorage.user = JSON.stringify(response.data.user);
        $state.go('home');
      });
    };

    $scope.logOut = function () {
      $auth.logout();
      delete $window.localStorage.user;
      $state.go('login');
    };

    $scope.isAuthenticated = function() {
      return $auth.isAuthenticated();
    };

  });
