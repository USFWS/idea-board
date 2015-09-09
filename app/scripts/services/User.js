'use strict';

/**
 * @ngdoc service
 * @name ideasApp.user
 * @description
 * # user
 * Service in the ideasApp.
 */
angular.module('ideasApp')
  .service('User', function ($http, $auth, $q, API_URL) {
    var payload = $auth.getPayload();

    function isAdmin() {
      return  payload.act === 'Admin';
    }

    function isModerator() {
      return payload.act === 'Moderator' || payload.act === 'Admin';
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

    function getPicture(size) {
      var d = $q.defer();
      getOne(getId()).then(function (response) {
        var picture = response.data.picture;
        if (size) picture = picture.replace('?sz=50', '?sz=' + size);
        d.resolve(picture);
      }).catch(function (response) {
        d.reject(response);
      });
      return d.promise;
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
      isModerator: isModerator,
      getAll: getAll,
      getOne: getOne,
      getUsername: getUsername,
      getId: getId,
      submitVote: submitVote,
      removeVote: removeVote,
      update: update,
      getPicture: getPicture
    };
  });
