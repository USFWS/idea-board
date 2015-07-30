'use strict';

/**
 * @ngdoc function
 * @name ideasApp.controller:ReviewtagCtrl
 * @description
 * # ReviewtagCtrl
 * Controller of the ideasApp
 */
angular.module('ideasApp')
  .controller('ReviewTagCtrl', function ($scope, toastr, Tag, proposed) {
    $scope.needReview = proposed.data;

    $scope.rejectTag = function(tag) {
      // Need to notify user that proposed the tag that it has been rejected
      Tag.destroy(tag.id).then(function () {
        removeTag(tag);
      }).catch(function (response) {
        toastr.error(response.statusText, 'Could not delete proposed tag.');
      });
    };

    $scope.approveTag = function(tag) {
      // Need to notify user that proposed the tag that it has been approved
      Tag.approve(tag.id).then(function (response) {
        toastr.success(response.statusText, 'Tag Approved!');
        $scope.tags.push(tag);
        removeTag(tag);
      }).catch(function (response) {
        toastr.error(response.statusText, 'Could not delete proposed tag.');
      });
    };

    function removeTag(tag) {
      $scope.needReview = _.reject($scope.needReview, function(t){
        return t.id === tag.id;
      });
    }
  });
