(function () {
  'use strict';

  angular
    .module('myApp')
    .controller('NewController', NewController);

  NewController.$inject = ['$scope', '$http', '$log', '$location', 'movieFactory'];

  function NewController($scope, $http, $log, $location, movieFactory) {

    $scope.createNewMovie = createNewMovie;

    function createNewMovie() {
      movieFactory.createMovie($scope.movie)
        .then(function (response) {
          $location.path('/');
        }, function (response, status) {
          $log.warn(response);
        });
    }
  };

})();