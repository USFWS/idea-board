'use strict';

angular.module('ideasApp')
  .config(function($stateProvider, $urlRouterProvider, $authProvider) {
    $urlRouterProvider.otherwise("/login");

    $stateProvider
      .state('login', {
        url: "/",
        templateUrl: "views/login.html"
      })

      .state('home', {
        url: "/home",
        templateUrl: "views/home.html",
        controller: 'HomeCtrl'
      });

    $authProvider.loginUrl = 'http://localhost:1337/auth/login';
    $authProvider.registerUrl = 'http://localhost:1337/auth/register';
    $authProvider.google({
      url: 'http://localhost:1337/auth/google',
      redirectUri: 'http://localhost:9000/',
      clientId: '84365983115-813872s0vvncdfdl40938hf13ahvm9h4.apps.googleusercontent.com'
    });
  })

  .run(function($rootScope, $location, $state, $auth) {

    $rootScope.$on( '$stateChangeStart', function(e, toState) {
        if (toState.name === 'login'){
          return;
        }

        if(!$auth.isAuthenticated()) {
          e.preventDefault();
          $state.go('login');
        }
    });
});
