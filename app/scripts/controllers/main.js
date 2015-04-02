'use strict';

/**
 * @ngdoc function
 * @name atWikiApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the atWikiApp
 */
angular.module('atWikiApp')
  .controller('MainCtrl', function ($scope, $location, $anchorScroll) {

    $scope.content = [
      {
        title: 'What is AT?',
        subTitles: [
          {title: 'Why we need AT?', partial: ''},
          {title: 'Looking through an AT\'s eye', partial: ''},
          {title: 'Philosophy behind AT', partial: ''}
        ]
      },
      {
        title: 'Getting started',
        subTitles: [
          {title: 'The basics', partial: ''},
          {title: 'How to jumpstart', partial: ''},
          {title: 'External resources', partial: ''}
        ]
      },
      {
        title: 'Best practices',
        subTitles: [
          {title: 'Tips', partial: ''},
          {title: 'Dos and Don\'ts', partial: ''},
          {title: 'What we learnt', partial: ''}
        ]
      },
      {
        title: 'Lets code',
        subTitles: [
          {title: 'Samples', partial: ''},
          {title: 'Snippets', partial: ''},
          {title: 'How to structure your code', partial: ''}
        ]
      }
    ];

    $scope.scrollTo = function (e) {
      $location.hash(e.target.href.split('#').pop());
      $anchorScroll();
    };
  });
