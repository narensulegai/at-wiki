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
        title: 'What is it?', partial: 'views/titles/1.html',
        subTitles: [
          {title: 'Why we need it?', partial: 'views/sub-section/1.1.html'},
          {title: 'Looking through an AT\'s eye', partial: ''},
          {title: 'Philosophy behind AT', partial: ''}
        ]
      },
      {
        title: 'How do I start',
        subTitles: [
          {title: 'The basics', partial: ''},
          {title: 'How to jumpstart', partial: ''},
          {title: 'External resources', partial: ''}
        ]
      },
      {
        title: 'What I need to keep in mind?',
        subTitles: [
          {title: 'Tips', partial: ''},
          {title: 'Dos and Don\'ts', partial: ''},
          {title: 'Best practices', partial: ''}
        ]
      },
      {
        title: 'How to code',
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
