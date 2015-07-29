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
    var getAll = function(query) {
      var url = (query) ? API_URL + 'tag' + query : API_URL + 'tag';
      return $http.get(url);
    };

    var getOne = function(id) {
      return $http.get(API_URL + 'tag/' + id);
    };

    return {
      getAll: getAll,
      getOne: getOne
    };
  });
