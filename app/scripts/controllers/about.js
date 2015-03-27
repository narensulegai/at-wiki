'use strict';

/**
 * @ngdoc function
 * @name atWikiApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the atWikiApp
 */
angular.module('atWikiApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
