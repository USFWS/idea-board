'use strict';

/**
 * @ngdoc function
 * @name ideasApp.controller:NotificationCtrl
 * @description
 * # NotificationCtrl
 * Controller of the ideasApp
 */
angular.module('ideasApp')
  .controller('NotificationCtrl', function ($scope, $rootScope, Notify, toastr) {
    $scope.notification = {};

    $scope.submit = function () {
      Notify.global($scope.notification).then(function (response) {
        toastr.success('Notification created!', response.statusText);
        $scope.notification = {};
        $rootScope.$broadcast('notifications-update');
      }).catch(function (error) {
        toastr.error('Could not create notification', error.statusText);
      });
    };
  });
