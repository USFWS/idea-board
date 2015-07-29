'use strict';

/**
 * @ngdoc service
 * @name ideasApp.Comment
 * @description
 * # Comment
 * Service in the ideasApp.
 */
angular.module('ideasApp')
  .service('Comment', function (API_URL, $http) {
    var getAll = function(query) {
      var url = (query) ? API_URL + 'comment' + query : API_URL + 'comment';
      return $http.get(url);
    };

    var getOne = function(id) {
      return $http.get(API_URL + 'comment/' + id);
    };

    return {
      getAll: getAll,
      getOne: getOne
    };
  });
