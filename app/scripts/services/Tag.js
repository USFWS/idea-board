'use strict';

/**
 * @ngdoc service
 * @name ideasApp.Tag
 * @description
 * # Tag
 * Service in the ideasApp.
 */
angular.module('ideasApp')
  .service('Tag', function ($http, API_URL, User) {
    var endpointURL = API_URL + 'tag';

    function getAll(query) {
      var url = (query) ? endpointURL + query : endpointURL;
      return $http.get(url);
    }

    function getOne(id) {
      return $http.get(endpointURL + '/' + id);
    }

    function create(tag) {
      return $http.post(endpointURL, tag);
    }

    function destroy(id) {
      return $http.delete(endpointURL + '/' + id );
    }

    function approve(id) {
      var approved = { "approved": true };
      return $http.put(endpointURL + '/' + id, approved);
    }

    function subscribe(id) {
      return $http.post(endpointURL + '/' + id + '/subscribers/' + User.getId());
    }

    function unsubscribe(id) {
      return $http.delete(endpointURL + '/' + id + '/subscribers/' + User.getId());
    }

    return {
      getAll: getAll,
      getOne: getOne,
      create: create,
      destroy: destroy,
      approve: approve,
      subscribe: subscribe,
      unsubscribe: unsubscribe
    };
  });
