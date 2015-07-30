'use strict';

/**
 * @ngdoc service
 * @name ideasApp.Comment
 * @description
 * # Comment
 * Service in the ideasApp.
 */
angular.module('ideasApp')
  .service('Comment', function (API_URL, User, $http) {
    var endpointURL = API_URL + 'comment';

    function getAll(query) {
      var url = (query) ? endpointURL + query : endpointURL;
      return $http.get(url);
    }

    function getOne(id) {
      return $http.get(endpointURL + '/' + id);
    }

    function create(comment) {
      comment.commenter = User.getId();
      return $http.post(endpointURL, comment);
    }

    function destroy(id) {
      return $http.delete(endpointURL + '/', id);
    }

    return {
      getAll: getAll,
      getOne: getOne,
      create: create,
      destroy: destroy
    };
  });
