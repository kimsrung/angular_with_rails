(function () {
  'use strict';

  var myApp = angular.module('myApp', ['ngRoute']);
  myApp.config([
    "$httpProvider", "$routeProvider", function($httpProvider, $routeProvider) {
      $httpProvider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content');

      $routeProvider
      .when('/', {
        templateUrl: '/templates/index.html.erb',
        controller: 'IndexController'
      })
      .when('/new', {
        templateUrl: '/templates/new.html.erb',
        controller: 'NewController'
      })
      .when('/edit/:id', {
        templateUrl: '/templates/edit.html.erb',
        controller: 'EditController'
      })
    }
  ]);
})();


