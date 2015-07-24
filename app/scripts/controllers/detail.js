'use strict';

/**
 * @ngdoc function
 * @name ideasApp.controller:DetailCtrl
 * @description
 * # DetailCtrl
 * Controller of the ideasApp
 */
angular.module('ideasApp')
  .controller('DetailCtrl', function ($scope, $stateParams, $location, idea, Idea, User, toastr) {
    $scope.idea = idea.data;
    $scope.idea.link = $location.$$absUrl;

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
      User.submitVote(url).then(function (response) {
        toastr.success('Vote Successful.', response.statusText);
        Idea.getOne($stateParams.id).then(function (response) {
          $scope.idea = response.data;
          $scope.hasVoted();
        });
      }).catch(function (response) {
        toastr.error('Vote Unsuccessful', response.statusText);
      });
    };

    $scope.removeVote = function(voteId) {
      var url = buildUrl(voteId);
      User.removeVote(url).then(function (response) {
        toastr.success('Your vote has been removed.', response.statusText);
        Idea.getOne($stateParams.id).then(function (response) {
          $scope.idea = response.data;
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
