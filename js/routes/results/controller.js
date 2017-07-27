angular.module('wevelopersApp')
<<<<<<< HEAD
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
=======
    .controller('SearchResultsController', function($scope, $rootScope, infojobsFactory, $location) {
        $scope.searchOffers = function(query) {
            $rootScope.offers = []
            $rootScope.notFound = ''
            infojobsFactory.getOffersIngenieros(query)
                .then(function(offersIngenieros) {
                    infojobsFactory.getOffersInformatica(query)
                        .then(function(offersInformatica) {
                            offers = offersIngenieros.concat(offersInformatica)
                            if (offers.length !== 0) {
                                $rootScope.offers = offers
                                $location.path('/search-results')
                                console.log(offers)
                            } else {
                                $rootScope.notFound = "We didn't find any result fitting whith your search 😔"
                                $location.path('/search-results')
                            }
>>>>>>> d6e966819db078ce5765c39f0357fd16cb02ca5a
                        })
                })
        }
    })