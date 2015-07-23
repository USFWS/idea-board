'use strict';

/**
 * @ngdoc function
 * @name ideasApp.controller:DetailCtrl
 * @description
 * # DetailCtrl
 * Controller of the ideasApp
 */
angular.module('ideasApp')
  .controller('DetailCtrl', function ($scope, $stateParams, Idea, toastr) {
    Idea.getOne($stateParams.id).then(function (response) {
      console.log(response.data);
      $scope.idea = response.data;
    }).catch(function (response) {
      toastr.error(response.statusText);
    });
  });
