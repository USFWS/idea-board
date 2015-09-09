'use strict';

/**
 * @ngdoc function
 * @name ideasApp.controller:NotificationListCtrl
 * @description
 * # NotificationListCtrl
 * Controller of the ideasApp
 */
angular.module('ideasApp')
  .controller('NotificationListCtrl', function ($scope, $rootScope, messages, toastr, Notify) {
    $scope.messages = messages.data;

    $scope.toggleRead = function (message) {
      Notify.toggleRead(message).catch(function (error) {
        toastr.error('Could not toggle read status.', error.statusText);
      }).finally(function () {
        $rootScope.$broadcast('notifications-update');
      });
    };

    $scope.deleteMessage = function (message) {
      Notify.destroy(message).then(function (response) {
        $scope.messages = _.reject($scope.messages, function(message) {
          return message.id === response.data.id;
        });
      }).catch(function (error) {
        toastr.error('Could not delete message.', error.statusText);
      }).finally(function () {
        $rootScope.$broadcast('notifications-update');
      });
    };
  });
