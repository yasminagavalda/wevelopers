angular.module('wevelopersApp')

    .factory('infojobsFactory', function($http) {
        var getOffersIngenieros = function(query) {
            var url = 'https://boiling-plains-16324.herokuapp.com/offer?q=' + query + '&category=ingenieros-tecnicos'
            return $http.get(url)
                .then(function(response) {
                    return response.data.offers
                })

        }

        var getOffersInformatica = function(query) {
            var url = 'https://boiling-plains-16324.herokuapp.com/offer?q=' + query + '&category=informatica-telecomunicaciones'
            return $http.get(url)
                .then(function(response) {
                    return response.data.offers
                })
        }

        var getDetails = function(offerId) {
            var url = 'https://boiling-plains-16324.herokuapp.com/offer/' + offerId
            return $http.get(url)
                .then(function(response) {
                    console.log(response)
                    return response.data
                })

        }

        return {
            getOffersIngenieros: getOffersIngenieros,
            getOffersInformatica: getOffersInformatica,
            getDetails: getDetails
        }
    })