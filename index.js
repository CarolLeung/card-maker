(function(angular) {
  'use strict';
  angular.module('mainApp', [])
  .controller('MainController', function() {
    const controller = this;
    controller.data = {
      template: template,
      cardList: cardDataList,
    }

  });
})(window.angular);
