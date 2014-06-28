'use strict';

angular
    .module('samplr.controllers')
    .controller('StreamController', function StreamController(
        $scope,
        ProductsService
    ) {

        $scope.resetColumns = function() {
            $scope.columns = {
                0: [],
                1: [],
                2: [],
                3: []
            };
        };

        $scope.refreshLayout = function() {
            $scope.resetColumns();

            $scope.products.forEach(function(product, i) {
                $scope.columns[(i % 4)].push(product);
            });
        };

        $scope.setData = function(data) {
            $scope.products = data;
            $scope.refreshLayout();
        };

        $scope.showErrors = function(err) {
            alert('ERRORS', err);
        };

        $scope.getProducts = function() {
            ProductsService
                .getAllProducts()
                .then($scope.setData, $scope.showErrors);
        };

        $scope.getProducts();

    });
