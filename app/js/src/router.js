'use strict';

// Declare app level module which depends on filters, and services
angular
    .module('samplr')
    .config(function(
        $stateProvider,
        $locationProvider,
        $urlRouterProvider
    ) {

        $locationProvider.html5Mode(true);

        // For any unmatched url, send to /
        $urlRouterProvider.otherwise('/');

        $stateProvider

        /**
         * Route '/'
         */
        .state('index', {
            url: '/',
            templateUrl: '/views/stream.html',
            controller: 'StreamController'
        })

        /**
         * Route '/post'
         */
        .state('post', {
            url: '/post',
            templateUrl: '/views/post/index.html',
            controller: 'DefaultController'
        })

        /**
         * Route '/suppliers'
         */
        .state('suppliers', {
            url: '/suppliers',
            templateUrl: '/views/suppliers/index.html',
            controller: 'FindSuppliersController'
        })

        /**
         * Route '/categories'
         */
        .state('categories', {
            url: '/categories',
            templateUrl: '/views/categories/index.html',
            controller: 'DefaultController'
        })

        /**
         * Route '/notifications'
         */
        .state('notifications', {
            url: '/notifications',
            templateUrl: '/views/notifications/index.html',
            controller: 'DefaultController'
        })

        /**
         * Route '/bookmarks'
         */
        .state('bookmarks', {
            url: '/bookmarks',
            templateUrl: '/views/bookmarks/index.html',
            controller: 'DefaultController'
        })

        /**
         * Route '/messages'
         */
        .state('messages', {
            url: '/messages',
            templateUrl: '/views/messages/index.html',
            controller: 'DefaultController'
        })

        /**
         * Route '/profile'
         */
        .state('profile', {
            url: '/profile',
            templateUrl: '/views/profile/index.html',
            controller: 'DefaultController'
        })

        /**
         * Route '/profile/id'
         */
        .state('profile.user', {
            url: '/:id',
            templateUrl: '/views/profile/index.html',
            controller: 'DefaultController'
        })

        /**
         * Route '/account'
         */
        .state('account', {
            url: '/account',
            templateUrl: '/views/account/index.html',
            controller: 'DefaultController'
        })

        /**
         * Route '/account/settings'
         */
        .state('account.settings', {
            url: '/settings',
            templateUrl: '/views/account/settings.html',
            controller: 'DefaultController'
        })

        /**
         * Route '/search'
         */
        .state('search', {
            url: '/search',
            templateUrl: '/views/search/index.html',
            controller: 'StreamController'
        })

        /**
         * Route '/search/term'
         */
        .state('search.term', {
            url: '/:term',
            templateUrl: '/views/search/term.html',
            controller: 'SearchController'
        })

        ;
    }
);
