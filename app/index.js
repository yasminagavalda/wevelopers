angular.module('wevelopersApp')
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'app/routes/search/template.html',
                controller: 'searchController'
            })
            .when('/offers', {
                templateUrl: 'app/routes/offers/template.html',
                controller: 'offersController'
            })
    })