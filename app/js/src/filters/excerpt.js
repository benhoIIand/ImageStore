'use strict';

angular.module('samplr.filters')
    .filter('excerpt', function() {
        return function(str, len) {
            var words = str.split(' ').splice(0, parseInt(len));
            words.push('...');
            return words.join(' ');
        };
    });
