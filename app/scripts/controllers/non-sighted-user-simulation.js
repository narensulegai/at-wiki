'use strict';

/**
 * @ngdoc function
 * @name atWikiApp.controller:NonSightedUserSimulationCtrl
 * @description
 * # NonSightedUserSimulationCtrl
 * Controller of the atWikiApp
 */
angular.module('atWikiApp')
  .controller('NonSightedUserSimulationCtrl', function ($scope, $element) {
    $scope.step = 0;
    $scope.start = function () {
      $scope.step = 1;
      $scope.started = true;
    };

    $scope.$watch('step', function () {
      $($element.find('*[tabindex]')[$scope.step - 1]).focus();
    });

    $element.bind("keydown keypress", function (event) {
      if ((event.keyCode == 40 || event.keyCode == 39) && $scope.step < 5) {
        $scope.step++;
        event.preventDefault();
      }
      if ((event.keyCode == 38 || event.keyCode == 37) && $scope.step > 0) {
        $scope.step--;
        event.preventDefault();
      }
      $scope.$apply();
    });
  });
