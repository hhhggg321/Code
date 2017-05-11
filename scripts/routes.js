'use strict';

angular.module('Code')
  .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');

    $stateProvider
            .state('home', {
              url: '/home',
              templateUrl: 'home.html',
              controller: 'HomeCtrl'
            })
            .state('login', {
              url: '/login',
              templateUrl: 'login.html',
              controller: 'LoginCtrl'
            })
            ;
        }]);
