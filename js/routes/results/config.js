angular.module('wevelopersApp')
    .config(function ($routeProvider) {
      $routeProvider
            .when('/search-results/:query', {
              templateUrl: 'js/routes/results/template.html',
              controller: 'SearchResultsController'
            })
    })
