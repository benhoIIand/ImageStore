'use strict';

angular.module('samplr.filters')
    .filter('findMain', function() {
        return function(arr) {
            var url;

            arr.forEach(function(image) {
                if(image.main === true) {
                    url = image.url;
                    return false;
                }
            });

            return url;
        };
    });
