'use strict';

/**
 * @ngdoc service
 * @name ideasApp.Flag
 * @description
 * # Flag
 * Service in the ideasApp.
 */
angular.module('ideasApp')
  .service('Flag', function (API_URL, $http) {
    var ENDPOINT_URL = API_URL + 'flag';

    function idea (params) {
      return $http.post(ENDPOINT_URL, params);
    }

    function removeIdea(id) {
      return $http.delete(ENDPOINT_URL + '/' + id);
    }

    function comment() {

    }

    function removeComment() {

    }

    function list() {
      return $http.get(ENDPOINT_URL);
    }

    function find(id) {
      return $http.get(ENDPOINT_URL + '/' + id);
    }

    return {
      list: list,
      find: find,
      idea: idea,
      removeIdea: removeIdea,
      comment: comment,
      removeComment: removeComment
    };

  });
