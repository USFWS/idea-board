'use strict';

/**
 * @ngdoc function
 * @name ideasApp.controller:TagdetailCtrl
 * @description
 * # TagdetailCtrl
 * Controller of the ideasApp
 */
angular.module('ideasApp')
  .controller('TagDetailCtrl', function ($scope, tag, ideas, user, Tag, toastr) {
    $scope.tag = tag.data;
    $scope.ideas = ideas.data;
    $scope.user = user.data;
    console.log($scope.ideas);

    function subscribe() {
      Tag.subscribe($scope.tag.id).then(function (response) {
        $scope.tag = response.data;
        isSubscribed();
        toastr.info('You have subscribed to ' + $scope.tag.text + '!');
      }).catch(function (error) {
        toastr.error('Could not subscribe.', error.statusText);
      });
    }

    function unsubscribe() {
      Tag.unsubscribe($scope.tag.id).then(function (response) {
        $scope.tag = response.data;
        isSubscribed();
        toastr.info('You have unsubscribed from ' + $scope.tag.text + '!');
      }).catch(function (error) {
        toastr.error('Could not unsubscribe.', error.statusText);
      });
    }

    function isSubscribed() {
      $scope.subscribed = _.find($scope.tag.subscribers, function (subscriber) {
        return subscriber.id === $scope.user.id;
      });
    }

    $scope.toggleSubscribe = function() {
      if ($scope.subscribed) {
        unsubscribe();
      } else {
        subscribe();
      }
    };

    isSubscribed();
  });
