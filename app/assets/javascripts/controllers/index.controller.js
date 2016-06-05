(function () {
  'use strict';
  angular
    .module('myApp')
    .controller('IndexController', IndexController);

  IndexController.$inject = ['$scope', '$http', '$log', '$filter', 'movieFactory'];

  function IndexController($scope, $http, $log, $filter, movieFactory) {
    $scope.deleteMovie = deleteMovie;

    init();

    function successCallback(data) {
      $scope.movies = data;
    }

    function errorCallback(response) {
      $log.warn(response);
    }

    function init() {
      movieFactory.all(successCallback, errorCallback);
    }

    function deleteMovie(id, index) {
      movieFactory.deleteMovie(id)
        .then(function (response) {
          $scope.movies.splice(index, 1)
        }, function (response, status) {
          $log.warn(response);
        });
    }
  };

})();