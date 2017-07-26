angular.module('wevelopersApp')
    .controller('offersController', function($scope, $rootScope, infojobsFactory) {

        $scope.searchDetails = function(offerID) {
            infojobsFactory.getDetails(offerID)
                .then(function(response) {
                    console.log(response)
                    $scope.offerDetails = response;
                })
        }
    })