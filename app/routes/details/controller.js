// angular.module('wevelopersApp')
//     .controller('offersController', function($scope, $rootScope, $routeParams, infojobsFactory) {
//         var offerID = $routeParams.id
//         $scope.searchDetails = function(offerID) {
//             infojobsFactory.getDetails(offerID)
//                 .then(function(response) {
//                     console.log(response)
//                     $scope.offerDetails = response;
//                     $location.path('/details')
//                 })
//         }
//     })