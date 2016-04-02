(function () {
  'use strict';

  angular
    .module('myApp')
    .controller('NewController', NewController);

  NewController.$inject = ['$scope', '$http', '$log', '$location'];

  function NewController($scope, $http, $log, $location) {

    $scope.createNewMovie = createNewMovie;

    function createNewMovie() {
      $http({
        method: 'POST',
        url: '/api/movies',
        data: $scope.movie
      }).success(function (data) {
        $location.path('movies');
      })
      .error(function (response, status) {
        $log.warn(response);
      });
    }
  };

})();