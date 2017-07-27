angular.module('wevelopersApp')
    .config(function ($routeProvider) {
      $routeProvider
            .when('/details/:id', {
              templateUrl: 'js/routes/details/template.html',
              controller: 'viewDetailsController'
            })
    })
