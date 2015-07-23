'use strict';

angular.module('ideasApp')
  .config(function($stateProvider, $urlRouterProvider, $authProvider) {
    $urlRouterProvider.otherwise("/login");

    $stateProvider
      .state('login', {
        url: '/',
        templateUrl: 'views/login.html'
      })

      .state('ideas', {
        url: '/ideas',
        templateUrl: 'views/ideas.html',
        controller: 'IdeasCtrl',
        resolve: {
          ideas: function(Idea) {
            return Idea.getAll();
          }
        }
      })

      .state('create', {
        url: '/create',
        templateUrl: 'views/create.html',
        controller: 'CreateCtrl'
      })

      .state('detail', {
        url: '/ideas/:id',
        templateUrl: 'views/detail.html',
        controller: 'DetailCtrl'
      })

      .state('profile', {
        url: '/profile',
        templateUrl: 'views/profile.html',
        controller: 'ProfileCtrl'
      });

    $authProvider.loginUrl = 'http://localhost:1337/auth/login';
    $authProvider.registerUrl = 'http://localhost:1337/auth/register';
    $authProvider.google({
      url: 'http://localhost:1337/auth/google',
      redirectUri: 'http://localhost:9000/',
      clientId: '84365983115-813872s0vvncdfdl40938hf13ahvm9h4.apps.googleusercontent.com'
    });
  })

  .constant('API_URL', 'http://localhost:1337/')

  // Redirect user to login page if they're not logged in
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
