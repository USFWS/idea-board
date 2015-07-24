'use strict';

/**
 * @ngdoc function
 * @name ideasApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the ideasApp
 */
angular.module('ideasApp')
  .controller('IdeasCtrl', function ($scope, ideas, Idea, User, toastr, $location) {
    $scope.ideas = ideas.data;
    $scope.location = $location.$$absUrl;

    $scope.hasVoted = function(vote) {
      if (!vote) return;
      var voted;
      _.each(vote.score, function(el) {
        voted = (el.id === User.getId()) ? true : false;
      });
      return voted;
    };

    $scope.submitVote = function(voteId) {
      var url = buildUrl(voteId);
      User.submitVote(url).then(function () {
        Idea.getAll().then(function (response) {
          $scope.ideas = response.data;
          $scope.hasVoted();
        });
      }).catch(function (response) {
        toastr.error('Vote Unsuccessful', response.statusText);
      });
    };

    $scope.removeVote = function(voteId) {
      var url = buildUrl(voteId);
      User.removeVote(url).then(function () {
        Idea.getAll().then(function (response) {
          $scope.ideas = response.data;
          $scope.hasVoted();
        });
      }).catch(function (response) {
        toastr.error('Could not remove your vote.', response.statusText);
      });
    };

    function buildUrl(voteId) {
      var id = User.getId();
      return 'user/' + id + '/votes/' + voteId;
    }
  });
