"use strict";

"use strict";

app.controller("searchDatabaseCtrl", function($scope, SearchDatabaseFactory) {


  $scope.moveies = [];

  $scope.searchDatabase = function(movieToSearch) {
    SearchDatabaseFactory.movieList(movieToSearch).then(function(monkeyButt){
      console.log("in the controller, I see movie data...", monkeyButt);

      $scope.movies = monkeyButt.Search
    })
  }
})
