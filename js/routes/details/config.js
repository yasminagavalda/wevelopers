angular.module('wevelopersApp')
    .config(function($routeProvider) {
        $routeProvider
            .when('/details', {
                templateUrl: 'js/routes/details/template.html'
                //controller: 'detailsController'
            })

    })