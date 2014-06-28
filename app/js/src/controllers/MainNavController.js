'use strict';

angular
    .module('samplr.controllers')
    .controller('MainNavController', function(
        $scope,
        $modal,
        $log,
        $state,
        $stateParams
    ) {

        $scope.searchTerm = '';

        $scope.search = function() {
            $state.go('search.term', {
                term: $scope.searchTerm
            });
        };

        $scope.items = ['item1', 'item2', 'item3'];

        $scope.createPost = function() {
            var modalInstance = $modal.open({
                templateUrl: 'templates/modal/window.html',
                controller: 'CreatePostController',
                resolve: {
                    items: function () {
                        return $scope.items;
                    }
                }
            });

            modalInstance.result.then(function (selectedItem) {
                $scope.selected = selectedItem;
            }, function () {
                $log.info('Modal dismissed at: ' + new Date());
            });
        };

    });
