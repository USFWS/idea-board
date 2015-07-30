'use strict';

/**
 * @ngdoc service
 * @name ideasApp.Tag
 * @description
 * # Tag
 * Service in the ideasApp.
 */
angular.module('ideasApp')
  .service('Tag', function ($http, API_URL) {
    var endpointURL = API_URL + 'tag';

    function getAll(query) {
      var url = (query) ? endpointURL + query : endpointURL;
      return $http.get(url);
    }

    function getOne(id) {
      return $http.get(endpointURL + '/' + id);
    }

    function create(tag) {
      return $http.create(endpointURL, tag);
    }

    function destroy(id) {
      return $http.delete(endpointURL + '/' + id );
    }

    return {
      getAll: getAll,
      getOne: getOne,
      create: create,
      destroy: destroy
    };
  });
