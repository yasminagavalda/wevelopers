angular.module('wevelopersApp')
    .controller('viewDetailsController', function ($routeParams, $scope, infojobsFactory, $location) {
      var id = $routeParams.id
      console.log(id)

      infojobsFactory.getDetails(id)
        .then(function (response) {
          console.log(response)
          $scope.offerDetails = response
        })
    })
