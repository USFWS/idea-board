'use strict';

angular.module('ideasApp')
  .config(function($stateProvider, $urlRouterProvider, $authProvider) {
    $urlRouterProvider.otherwise('/login');

    $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })

      .state('ideas', {
        url: '/ideas',
        abstract: true,
        template: '<div ui-view/>'
      })

      .state('ideas.list', {
        url: '/list',
        templateUrl: 'views/ideas/list.html',
        controller: 'IdeasCtrl',
        resolve: {
          ideas: function(Idea) {
            return Idea.getAll();
          }
        }
      })

      .state('ideas.create', {
        url: '/create',
        templateUrl: 'views/ideas/create.html',
        controller: 'CreateCtrl',
        resolve: {
          tags: function(Tag) {
            return Tag.getAll('?approved=true');
          }
        }
      })

      .state('ideas.detail', {
        url: '/:id',
        templateUrl: 'views/ideas/detail.html',
        controller: 'DetailCtrl',
        resolve: {
          idea: function(Idea, $stateParams) {
            return Idea.getOne($stateParams.id);
          },
          user: function(User) {
            return User.getOne(User.getId());
          }
        }
      })

      .state('tags', {
        url: '/tags',
        abstract: true,
        template: '<div ui-view/>',
        resolve: {
          tags: function(Tag) {
            return Tag.getAll('?approved=true');
          },
          proposed: function(Tag) {
            return Tag.getAll('?approved=false');
          }
        }
      })

      .state('tags.list', {
        url: '/list',
        templateUrl: 'views/tags/list.html',
        controller: 'TagCtrl'
      })

      .state('tags.new', {
        url: '/new',
        templateUrl: 'views/tags/create.html',
        controller: 'NewTagCtrl'
      })

      .state('tags.review', {
        url: '/review',
        templateUrl: 'views/tags/review.html',
        controller: 'ReviewTagCtrl'
      })

      .state('tags.detail', {
        url: '/:id',
        templateUrl: 'views/tags/detail.html',
        controller: 'TagDetailCtrl',
        resolve: {
          tag: function(Tag, $stateParams) {
            return Tag.getOne($stateParams.id);
          },
          ideas: function(tag, Idea) {
            return Idea.getAll('?tags.text[]='+ tag.data.text);
          },
          user: function(User) {
            return User.getOne(User.getId());
          }
        }
      })

      .state('profile', {
        url: '/profile',
        abstract: true,
        template: '<div ui-view/>'
      })

      .state('profile.me', {
        url: '/me',
        templateUrl: 'views/profile/edit.html',
        controller: 'ProfileCtrl',
        resolve: {
          me: function(User) {
            return User.getOne(User.getId());
          }
        }
      })

      .state('profile.detail', {
        url: '/:id',
        templateUrl: 'views/profile/detail.html',
        controller: 'UserDetailCtrl',
        resolve: {
          user: function(User, $stateParams) {
            return User.getOne($stateParams.id);
          },
          ideas: function(user, Idea) {
            return Idea.getAll(user.id);
          }
        }
      })

      .state('help', {
        url: '/help',
        template: '<div ui-view/>'
      })

      .state('help.rules', {
        url: '/rules',
        templateUrl: 'views/help/rules.html'
      })

      .state('help.support', {
        url: '/support',
        templateUrl: 'views/help/support.html'
      })

      .state('help.documentation', {
        url: '/documentation',
        templateUrl: 'views/help/documentation.html'
      })

      .state('flags', {
        url: '/flags/review',
        templateUrl: 'views/partials/flags.html',
        controller: 'FlagCtrl',
        resolve: {
          flags: function(Flag) {
            return Flag.list();
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
