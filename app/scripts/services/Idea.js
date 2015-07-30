'use strict';

/**
 * @ngdoc service
 * @name ideasApp.Idea
 * @description
 * # Idea
 * Service in the ideasApp.
 */
angular.module('ideasApp')
  .service('Idea', function ($http, API_URL, User) {
    var endpointURL = API_URL + 'idea';

    function getAll(query) {
      var url = (query) ? endpointURL + query : endpointURL;
      return $http.get(url);
    }

    function getOne(id) {
      return $http.get(endpointURL +'/' + id);
    }

    function create(params) {
      // Shouldn't generate ID on the client, or at least check it on the server
      params.creator = User.getId();
      return $http.post(endpointURL, params);
    }

    function destroy(id) {
      return $http.delete(endpointURL + '/' + id);
    }

    return {
      getAll: getAll,
      getOne: getOne,
      create: create,
      destroy: destroy
    };
  });
