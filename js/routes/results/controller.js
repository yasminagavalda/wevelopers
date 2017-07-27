angular.module('wevelopersApp')
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
                        })
                })
        }
    })