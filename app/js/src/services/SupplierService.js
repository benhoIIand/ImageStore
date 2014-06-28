'use strict';

angular
    .module('samplr.services')
    .service('SupplierService', function(
        $http,
        $q
    ) {

        var deferred;

        var endpoint = '/api/users';

        function sendSuccess(res) {
            deferred.resolve(res.data);
        }

        function sendFailure(res) {
            deferred.reject(res.data);
        }

        this.getAllSuppliers = function() {
            deferred = $q.defer();
            $http.get(endpoint).then(sendSuccess, sendFailure);
            return deferred.promise;
        };

    });
