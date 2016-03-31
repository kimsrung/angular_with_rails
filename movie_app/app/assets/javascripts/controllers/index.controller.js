(function () {
  'use strict';
  angular
    .module('myApp')
    .controller('IndexController', IndexController);

  IndexController.$inject = ['$scope', '$http', '$log', '$filter'];

  function IndexController($scope, $http, $log, $filter) {
    $scope.deleteMovie = deleteMovie;

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

    function deleteMovie(id, index) {
      $http({
        method: 'DELETE',
        url: '/api/movies/' + id
      }).success(function (data) {
        $scope.movies.splice(index, 1)
      })
      .error(function (response, status) {
        $log.warn(response);
      });
    }
  };

})();