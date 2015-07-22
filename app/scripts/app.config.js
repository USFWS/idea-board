'use strict';

angular.module('ideasApp')
  .config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/login");

    $stateProvider
      .state('login', {
        url: "/login",
        templateUrl: "views/login.html"
      });
  });
