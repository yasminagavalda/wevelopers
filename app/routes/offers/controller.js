angular.module('wevelopersApp')
    .controller('offersController', function($scope, $rootScope, infojobsFactory, $location) {
    	
        $scope.searchOffers = function(query) {
            var offers = []
            infojobsFactory.getOffersIngenieros(query)
                .then(function(offersIngenieros) {


                    infojobsFactory.getOffersInformatica(query)
                        .then(function(offersInformatica) {

                            offers = offersIngenieros.concat(offersInformatica)
                            if (offers.length !== 0) {
                                $rootScope.offers = offers
                                $location.path('/offers')
                                console.log(offers)
                            } else {
                                $rootScope.notFound = 'No se han encontrado ofertas paras los parámetros de busqueda introducidos'
                                $location.path('/offers')
                            }
                            
                            
                        })
                })



        }

        $scope.searchDetails = function(offerID) {
            infojobsFactory.getDetails(offerID)
                .then(function(response) {
                    console.log(response)
                    $rootScope.offerDetails = response;
                    $location.path('/details')
                    
                })
        }
    })