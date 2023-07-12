(function(angular) {
  'use strict';
  angular.module('mainApp', [])
  .controller('MainController', ['$scope', function($scope) {
    $scope.cardZoom = 1;

    $scope.data = {
      cardList: cardDataList,
      currentCard: cardDataList[0],
    }

    $scope.newCard = () => {
      const cardTemplate = {
        name: "Name",
        src: "",
        mainColor: "#7B62A3",
        // "borderColor": "#FFE165",
        icon: "",
        full: false,
        mainImg: {
          "height": "auto",
          "width": 100,
          "top": 0,
          "left": 0
        },
        // "imageDesc": "image description",
        numberDesc: "hp",
        numberValue: "0",
        // "stage": 2, // false or a number
        // "evolvesFrom": "x",
        attacks: [],
        // "mainDescription": "other descriptive text"

        layout: "",
        colors: {
          background: {
            type: "solid", // one of solid, transparent, linear gradient, radical gradient, image
            value: "#7B62A3",
          },
          border: {
            type: "solid", // one of solid, transparent, linear gradient, radical gradient, image
            value: "#7B62A3",
          },
          texture: {
            value: "snow",
          }
        },
        heading: {
          name: "",
          numberDesc: "hp",
          numberValue: "0",
          icon: "",
          iconLocation: "",
        },
        image: {
          source: "link", // link or upload,
          value: "",
        },
        body: {
          attacks: [],
          left: {

          },
          right: {

          }
        },
        footer: {

        }
      }
      $scope.data.cardList.unshift(cardTemplate);
      $scope.data.currentCard = cardTemplate;
    }

    // attacks
    $scope.addAttack = () => {
      const attackTemplate = {
        name: "",
        description: ""
      };
      $scope.data.currentCard.attacks.push(attackTemplate);
    }
    $scope.removeAttack = (index) => {
      $scope.data.currentCard.attacks.splice(index, 1);
    }
  }]);
})(window.angular);
