// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

(function () {
  'use strict';

  var myApp = angular.module('myApp', []);
  myApp.config([
    "$httpProvider", function($httpProvider) {
      $httpProvider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content');
    }
  ]);

  myApp.controller('myCtrl', myCtrl);
  myCtrl.$inject = ['$scope', '$http', '$log'];

  function myCtrl($scope, $http, $log) {
    $scope.new = false;
    $scope.pageTitle='Movie List';

    $scope.createNewMovie = createNewMovie;
    $scope.editMovie = editMovie;
    $scope.updateMovie = updateMovie;

    init();

    function init() {
      $http.get('/api/movies')
        .success(function (data) {
          $scope.movies = data;
        })
        .error(function (response, status) {
          $log.warn(response);
        });
    }

    function createNewMovie() {
      $http({
        method: 'POST',
        url: '/api/movies',
        data: $scope.movie
      }).success(function (data) {
        $scope.movies.push(data);
        $scope.isForm = false;
      })
      .error(function (response, status) {
        $log.warn(response);
      });
    }

    function editMovie(movie) {
      $scope.movie = movie;
      $scope.isForm = true;
      $scope.isEdit = true;
      $scope.isNew = false;
      $scope.pageTitle = 'Edit Movie';
    }

    function updateMovie() {
      $http({
        method: 'PUT',
        url: '/api/movies/' + $scope.movie.id,
        data: $scope.movie
      }).success(function (data) {
        angular.extend($scope.movies, data)
        $scope.isForm = false;
      })
      .error(function (response, status) {
        $log.warn(response);
      });
    }


  };

})();
