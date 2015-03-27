'use strict';

/**
 * @ngdoc filter
 * @name atWikiApp.filter:idFy
 * @function
 * @description
 * # idFy
 * Filter in the atWikiApp.
 */
angular.module('atWikiApp')
  .filter('idfy', function () {
    return function (input) {
      return _.snakeCase(input);
    };
  });
