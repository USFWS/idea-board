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

    return {
      getAll: getAll,
      getOne: getOne,
      getUsername: getUsername,
      getId: getId
    };
  });
