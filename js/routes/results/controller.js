angular.module('wevelopersApp')
    .controller('SearchResultsController', function ($scope, $routeParams, infojobsFactory, $location) {
      var query = $routeParams.query
      $scope.query1 = $routeParams.query

      infojobsFactory.getOffersIngenieros(query)
        .then(function (offersIngenieros) {
          infojobsFactory.getOffersInformatica(query)
                .then(function (offersInformatica) {
                  offers = offersIngenieros.concat(offersInformatica)
                  if (offers.length !== 0) {
                    $scope.offers = offers
                    $location.path('/search-results/' + query)
                    console.log(offers)
                  } else {
                    $scope.notFound = "We didn't find any result fitting your search 😞"
                    $location.path('/search-results/' + query)
                  }
                })
        })

      $scope.searchOffers = function (query) {
        $scope.offers = []
        $scope.notFound = ''
        infojobsFactory.getOffersIngenieros(query)
                .then(function (offersIngenieros) {
                  infojobsFactory.getOffersInformatica(query)
                        .then(function (offersInformatica) {
                          offers = offersIngenieros.concat(offersInformatica)
                          if (offers.length !== 0) {
                            $scope.offers = offers
                            $location.path('/search-results/' + query)
                            console.log(offers)
                          } else {
                            $scope.notFound = "We didn't find any result fitting your search 😞"
                            $location.path('/search-results/' + query)
                          }
                        })
                })
      }
    })
