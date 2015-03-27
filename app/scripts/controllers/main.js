'use strict';

/**
 * @ngdoc function
 * @name atWikiApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the atWikiApp
 */
angular.module('atWikiApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
