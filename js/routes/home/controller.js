angular.module('wevelopersApp')
    .controller('HomeController', function ($scope, $rootScope, infojobsFactory, $location) {
      $scope.searchOffers = function (query) {
        $location.path('/search-results/' + query)
      }
    })
