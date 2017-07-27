angular.module('wevelopersApp')
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'js/routes/home/template.html',
                controller: 'HomeController'
            })

    })