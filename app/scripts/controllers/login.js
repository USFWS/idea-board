'use strict';

/**
 * @ngdoc function
 * @name ideasApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the ideasApp
 */
angular.module('ideasApp')
  .controller('LoginCtrl', function ($scope, $auth, $state, toastr, User) {

    if ($auth.isAuthenticated()) $state.go('profile');

    $scope.authenticate = function(provider) {
      $auth.authenticate(provider).then(function (response) {
        $auth.setToken(response.data.token);
        $state.go('ideas.list');
        toastr.success('Welcome, ' + User.getUsername());
      }).catch(function (response) {
        toastr.error(response.data);
      });
    };
  });
