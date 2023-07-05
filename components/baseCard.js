(function(angular) {
  'use strict';
  angular.module('mainApp').component('baseCard', {
    templateUrl: 'components/baseCard.html',
    bindings: {
      data: '='
    }
  });
})(window.angular);
