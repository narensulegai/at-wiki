'use strict';

/**
 * @ngdoc overview
 * @name atWikiApp
 * @description
 * # atWikiApp
 *
 * Main module of the application.
 */
angular
  .module('atWikiApp', [
    'ngAria',
    'ngCookies',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
