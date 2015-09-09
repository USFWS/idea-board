'use strict';

/**
 * @ngdoc function
 * @name ideasApp.controller:CreateCtrl
 * @description
 * # CreateCtrl
 * Controller of the ideasApp
 */
angular.module('ideasApp')
  .controller('CreateCtrl', function ($scope, $rootScope, Idea, tags, toastr) {
    $scope.idea = {};
    $scope.tags = tags.data;

    $scope.create = function() {
      Idea.create($scope.idea).then(function (response) {
        toastr.success('Created new Idea!', response.statusText);
        if (response.data.badges) {
          angular.forEach(response.data.badges, function (badge) {
            toastr.info('New badge: ' + badge + '!', 'Congratulations');
          });
        }
        $scope.idea = {};
        if (response.data.notifications.length ) {
          $rootScope.$broadcast('notifications-update');
        }
      }).catch(function (response) {
        var message = (_.isString(response.data)) ? response.data : 'Unable to create new Idea.';
        toastr.error(message, response.statusText);
      });
    };
  });
