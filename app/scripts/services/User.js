'use strict';

/**
 * @ngdoc service
 * @name ideasApp.user
 * @description
 * # user
 * Service in the ideasApp.
 */
angular.module('ideasApp')
  .service('User', function ($http, $auth, API_URL) {
    var payload = $auth.getPayload();

    function isAdmin() {
      return  payload.act === 'Admin';
    }

    function getAll() {
      return $http.get(API_URL + 'user');
    }

    function getOne(id) {
      return $http.get(API_URL + 'user/' + id);
    }

    function getUsername() {
      return payload.name;
    }

    function getId() {
      return payload.sub;
    }

    function submitVote(url) {
      return $http.post(API_URL + url);
    }

    function removeVote(url) {
      return $http.delete(API_URL + url);
    }

    function update(profileData) {
      return $http.put(API_URL + 'user/' + getId(), profileData);
    }

    return {
      isAdmin: isAdmin,
      getAll: getAll,
      getOne: getOne,
      getUsername: getUsername,
      getId: getId,
      submitVote: submitVote,
      removeVote: removeVote,
      update: update
    };
  });
