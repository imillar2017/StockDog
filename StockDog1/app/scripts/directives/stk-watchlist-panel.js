'use strict';

angular.module('stockDog1App')
  // [1] Register directive and inject dependencies
  .directive('stkWatchlistPanel', function ($location, $modal, WatchlistService) {
    return {
      templateUrl: 'views/templates/watchlist-panel.html',
      restrict: 'E',
      scope: {},
      link: function ($scope) {
        // [2] Initialize variables
        $scope.watchlist = {};
        var addListModal = $modal({
          scope: $scope,
          template: 'views/templates/addlist-modal.html',
          show: false
        });

        // [3] Bind model from service to this scope
        $scope.watchlists = WatchlistService.query();

        // [4] Display addlist modal
		// I'm chaning some things and adding a file
		// poppin' blunts!
        $scope.showModal = function () {
          addListModal.$promise.then(addListModal.show);
        };

        // [5] Create a new list from fields in modal
        $scope.createList = function () {
          WatchlistService.save($scope.watchlist);
          addListModal.hide();
          $scope.watchlist = {};
        };

        // [6] Delete desired list and redirect to home
        $scope.deleteList = function (list) {
          WatchlistService.remove(list);
          $location.path('/');
        };
      }
    };
  });
