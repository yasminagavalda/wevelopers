angular.module('wevelopersApp')
    .controller('SearchResultsController', function ($scope, $routeParams, infojobsFactory, $location) {
      var query = $routeParams.query

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
                            $scope.notFound = 'No se han encontrado ofertas paras los parámetros de busqueda introducidos'
                            $location.path('/search-results' + query)
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
                            $scope.notFound = 'No se han encontrado ofertas paras los parámetros de busqueda introducidos'
                            $location.path('/search-results' + query)
                          }
                        })
                })
      }
    })
