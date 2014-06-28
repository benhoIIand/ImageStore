'use strict';

angular
    .module('samplr.controllers')
    .controller('FindSuppliersController', function FindSuppliersController(
        $scope,
        SupplierService,
        UserService
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

            $scope.suppliers.forEach(function(supplier, i) {
                $scope.columns[(i % 4)].push(supplier);
            });
        };



        $scope.suppliers = []

        $scope.updateSuppliers = function(data) {
            $scope.suppliers = data;
            $scope.refreshLayout();
        };

        $scope.addAsFriend = function(id) {
            UserService
                .addFriend(id)
                .then($scope.updateSuppliers)
        };

        $scope.findSuppliers = function() {
            SupplierService
                .getAllSuppliers()
                .then($scope.updateSuppliers)
        };

        $scope.findSuppliers();

    });
