'use strict';

/**
 * @ngdoc service
 * @name ideasApp.Attachment
 * @description
 * # Attachment
 * Service in the ideasApp.
 */
angular.module('ideasApp')
  .service('Attachment', function ($http, API_URL) {
    var getAll = function(query) {
      var url = (query) ? API_URL + 'attachment/' + query : API_URL + 'attachment';
      return $http.get(url);
    };

    var getOne = function(id) {
      return $http.get(API_URL + 'attachment/' + id);
    };

    return {
      getAll: getAll,
      getOne: getOne
    };
  });
