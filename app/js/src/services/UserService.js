'use strict';

angular
    .module('samplr.services')
    .service('UserService', function UserService(
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

        this.getAllProducts = function() {
            deferred = $q.defer();
            $http.get(endpoint).then(sendSuccess, sendFailure);
            return deferred.promise;
        };

        this.addFriend = function(id) {
            deferred = $q.defer();
            $http.put(endpoint, {
                _id: id,
                friendId: id,
            }).then(sendSuccess, sendFailure);
            return deferred.promise;
        };

    });
