(function () {
  'use strict';
  angular
    .module('myApp')
    .factory('movieFactory', movieFactory);

  movieFactory.$inject = ['$http'];

  function movieFactory($http) {
    var url = '/api/movies/';

    function all(successHandler, errorHandler) {
      $http.get(url)
        .then(function (response) {
          return successHandler(response.data);
        }, function (response, status) {
          return errorHandler(response);
        });
    };

    function deleteMovie(id) {
      return $http.delete(url + id);
    }

    function updateMovie(id, movie) {
      return $http.put(url + id, {movie: movie});
    }

    function createMovie(movie) {
      return $http.post(url, {movie: movie});
    }

    function getMovie(id) {
      return $http.get(url + id);
    }

    return {
      all: all,
      getMovie: getMovie,
      updateMovie: updateMovie,
      createMovie: createMovie,
      deleteMovie: deleteMovie
    }
  }
})();