'use strict';

angular
    .module('samplr.services')
    .service('ProductsService', function($http, $q) {

        var deferred;

        var endpoint = '/api/products';

        function sendSuccess(res) {
            deferred.resolve(res.data);
        }

        function sendFailure(res) {
            deferred.reject(res.data);
        }

        this.getAllProducts = function() {
            deferred = $q.defer();
            $http.get(endpoint).then(sendSuccess, sendFailure);
            return deferred.promise;
        };

        this.searchProducts = function(term) {
            deferred = $q.defer();
            $http.get(endpoint + '?term=' + term).then(sendSuccess, sendFailure);
            return deferred.promise;
        };

        this.update = function(data) {
            deferred = $q.defer();
            $http.put(endpoint, data).then(sendSuccess, sendFailure);
            return deferred.promise;
        };

    });
