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
    function getAll() {
      return $http.get(API_URL + 'idea');
    }

    function getOne(id) {
      return $http.get(API_URL + 'idea/' + id);
    }

    function create(params) {
      params.creator = User.getId();
      return $http.post(API_URL + 'idea', params);
    }

    return {
      getAll: getAll,
      getOne: getOne,
      create: create
    };
  });
