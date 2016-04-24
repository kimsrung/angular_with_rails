(function () {
  'use strict';
  angular
    .module('myApp')
    .controller('EditController', EditController);

  EditController.$inject = ['$scope', '$http', '$log', '$location', '$routeParams', 'movieFactory'];

  function EditController($scope, $http, $log, $location, $routeParams, movieFactory) {
    $scope.id = $routeParams.id;
    $scope.updateMovie = updateMovie;

    init();

    function init() {
      movieFactory.getMovie($scope.id)
        .then(function (response) {
          $scope.movie = response.data;
        }, function (response, status) {
          $log.warn(response);
        });
    }

    function updateMovie() {
      movieFactory.updateMovie($scope.id, $scope.movie)
        .then(function (response) {
          $location.path('/');
        }, function (response, status) {
          $log.warn(response);
        })
    }

  };

})();