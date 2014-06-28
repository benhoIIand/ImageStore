'use strict';

// Declare app level module which depends on filters, and services
angular.module('samplr', [
    'ui.router',
    'ui.bootstrap',
    'samplr.filters',
    'samplr.services',
    'samplr.directives',
    'samplr.controllers'
]);

// Declare our services namespace and dependencies
angular.module('samplr.services', []);

// Declare our controllers namespace and dependencies
angular.module('samplr.controllers', []);

// Declare our filters namespace and dependencies
angular.module('samplr.filters', []);

// Declare our directives namespace and dependencies
angular.module('samplr.directives', []);
