'use strict';

/**
 * @ngdoc function
 * @name ideasApp.controller:ProfileCtrl
 * @description
 * # ProfileCtrl
 * Controller of the ideasApp
 */
angular.module('ideasApp')
  .controller('ProfileCtrl', function ($scope, User, me, toastr) {
    $scope.user = me.data;

    $scope.update = function() {
      var user = _.omit($scope.user, 'votes', 'ideas');
      User.update(user).then(function(response) {
        toastr.success(response.statusText, 'User updated.');
      }).catch(function(response) {
        toastr.error(response.statusText, 'Could not update user.');
      });
    };
  });
