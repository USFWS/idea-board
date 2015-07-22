'use strict';

/**
 * @ngdoc function
 * @name ideasApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ideasApp
 */
angular.module('ideasApp')
  .controller('MainCtrl', function ($scope, $auth, $window) {

    $scope.authenticate = function(provider) {
      $auth.authenticate(provider).then(function (response) {
        $window.localStorage.user = JSON.stringify(response.data.user);
      });
    };

    $scope.isAuthenticated = function() {
      return $auth.isAuthenticated();
    };

  });
