'use strict';

/**
 * @ngdoc function
 * @name ideasApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ideasApp
 */
angular.module('ideasApp')
  .controller('MainCtrl', function ($scope, $auth, $window, $state, toastr) {

    $scope.authenticate = function(provider) {
      $auth.authenticate(provider).then(function (response) {
        var message = 'Welcome, ' + response.data.user.name;
        $window.localStorage.user = JSON.stringify(response.data.user);
        $state.go('profile');
        toastr.success(message);
      }).catch(function (response) {
        toastr.error(response.data);
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
