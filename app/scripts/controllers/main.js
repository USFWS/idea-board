'use strict';

/**
 * @ngdoc function
 * @name ideasApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ideasApp
 */
angular.module('ideasApp')
  .controller('MainCtrl', function ($scope, $auth, $window, $state, toastr, User) {

    $scope.authenticate = function(provider) {
      $auth.authenticate(provider).then(function (response) {
        var message = 'Welcome, ' + User.getUsername();
        $auth.setToken(response.data.token);
        $state.go('profile');
        toastr.success(message);
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
  });
