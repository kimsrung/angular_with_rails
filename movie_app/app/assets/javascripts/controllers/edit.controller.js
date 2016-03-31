(function () {
  'use strict';
  angular
    .module('myApp')
    .controller('EditController', EditController);

  EditController.$inject = ['$scope', '$http', '$log', '$location', '$routeParams'];

  function EditController($scope, $http, $log, $location, $routeParams) {
    $scope.id = $routeParams.id;
    $scope.updateMovie = updateMovie;

    init();

    function init() {
      $http.get('/api/movies/'+ $scope.id)
        .success(function (data) {
          $scope.movie = data;
        })
        .error(function (response, status) {
          $log.warn(response);
        });
    }

    function updateMovie() {
      $http({
        method: 'PUT',
        url: '/api/movies/' + $scope.id,
        data: $scope.movie
      }).success(function (data) {
        $location.path('/');
      })
      .error(function (response, status) {
        $log.warn(response);
      });
    }

  };

})();