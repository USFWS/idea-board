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
        templateUrl: 'views/ideas/main.html',
        controller: 'IdeasCtrl',
        resolve: {
          ideas: function(Idea) {
            return Idea.getAll();
          }
        }
      })

      .state('create', {
        url: '/create',
        templateUrl: 'views/ideas/create.html',
        controller: 'CreateCtrl',
        resolve: {
          tags: function(Tag) {
            return Tag.getAll('?approved=true');
          }
        }
      })

      .state('detail', {
        url: '/ideas/:id',
        templateUrl: 'views/ideas/detail.html',
        controller: 'DetailCtrl',
        resolve: {
          idea: function(Idea, $stateParams) {
            return Idea.getOne($stateParams.id);
          }
        }
      })

      .state('tags', {
        url: '/tags',
        templateUrl: 'views/tags/main.html',
        controller: 'TagCtrl',
        resolve: {
          tags: function(Tag) {
            var query = '?approved=true';
            return Tag.getAll(query);
          }
        }
      })

      .state('tags.detail', {
        url: '/detail/:id',
        templateUrl: 'views/tags/detail.html',
        controller: 'TagDetailCtrl',
        resolve: {
          tag: function(Tag, $stateParams) {
            return Tag.getOne($stateParams.id);
          }
        }
      })

      .state('tags.create', {
        url: '/create',
        templateUrl: 'views/tags/create.html',
        controller: 'NewTagCtrl'
      })

      .state('tags.review', {
        url: '/review',
        templateUrl: 'views/tags/review.html',
        controller: 'ReviewTagCtrl',
        resolve: {
          proposed: function(Tag) {
            return Tag.getAll('?approved=false');
          }
        }
      })

      .state('profile', {
        url: '/profile',
        templateUrl: 'views/profile/edit.html',
        controller: 'ProfileCtrl',
        resolve: {
          me: function(User) {
            return User.getOne(User.getId());
          }
        }
      })

      .state('user-detail', {
        url: '/profile/:id',
        templateUrl: 'views/profile/detail.html',
        controller: 'UserDetailCtrl',
        resolve: {
          user: function(User, $stateParams) {
            return User.getOne($stateParams.id);
          },
          ideas: function(Idea, $stateParams) {
            var query = '?creator=' + $stateParams.id;
            return Idea.getAll(query);
          }
        }
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
