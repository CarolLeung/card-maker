(function(angular) {
  'use strict';
  angular.module('mainApp', [])
  .controller('MainController', ['$scope', function($scope) {
    $scope.cardZoom = 1;

    $scope.data = {
      template: template,
      cardList: cardDataList,
      currentCard: cardDataList[0],
    }
    // $scope.$apply();

    $scope.changeZoom = (zoom) => {
      $scope.cardZoom = zoom;
    }
  }]);
})(window.angular);
