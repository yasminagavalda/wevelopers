angular.module('wevelopersApp')
    .controller('viewDetailsController', function ($routeParams, $scope, infojobsFactory, $location) {
      var id = $routeParams.id
      console.log(id)

      infojobsFactory.getDetails(id)
        .then(function (response) {
          console.log(response)
          $scope.offerDetails = response
          if (!response.minPay) {
          	$scope.salary = 'No disponible'
          } else {
          	$scope.salary = response.minPay.amountValue + ' - ' + response.maxPay.amountValue + ' ' + response.minPay.periodValue
          }
          if (!response.studiesMin) {
          	$scope.studies = 'No disponible'
          } else {
          	$scope.studies = response.studiesMin.value
          }
          if (!response.minRequirements) {
          	$scope.requirements = 'No disponible'
          } else {
          	$scope.requirements = response.minRequirements
          	console.log(response.minRequirements)
          }
          if (!response.experienceMin) {
          	$scope.experience = 'No disponible'
          } else {
          	$scope.experience = response.experienceMin.value
          }
        })
    })
