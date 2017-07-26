angular.module('wevelopersApp')
    .controller('searchController', function($scope, $rootScope, infojobsFactory, $location) {
        $scope.searchOffers = function(query) {
            var offers = []
            infojobsFactory.getOffersIngenieros(query)
                .then(function(offersIngenieros) {


                    infojobsFactory.getOffersInformatica(query)
                        .then(function(offersInformatica) {

                            offers = offersIngenieros.concat(offersInformatica)
                            $rootScope.offers = offers
                            $location.path('/offers')
                            console.log(offers)
                            
                        })
                })


        }

    })