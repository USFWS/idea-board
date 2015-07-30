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

    function flag(comment) {
      var flagged = { "flagged": !comment.flagged};
      return $http.put(endpointURL + '/' + comment.id, flagged);
    }

    function create(comment) {
      comment.commenter = User.getId();
      return $http.post(endpointURL, comment);
    }

    function attachUserInfo(comment) {
      User.getOne(comment.commenter).then(function (response) {
        comment.user = {
          picture: response.data.picture,
          name: response.data.name
        };
        return comment;
      });
    }

    function destroy(id) {
      return $http.delete(endpointURL + '/' + id);
    }

    return {
      getAll: getAll,
      getOne: getOne,
      create: create,
      destroy: destroy,
      flag: flag,
      attachUserInfo: attachUserInfo
    };
  });
