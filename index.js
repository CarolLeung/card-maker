(function(angular) {
  'use strict';
  angular.module('mainApp', [])
  .controller('MainController', ['$scope', function($scope) {
    $scope.cardZoom = 1;

    $scope.data = {
      cardList: cardDataList,
      currentCard: cardDataList[0],
      color: cardDataList[0].colors.background.linearGradient,
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
            solid: "#7B62A3",
            linearGradient: [{value: "#555"}],
            radicalGradient: [{value: "#aaa"}],
          },
          border: {
            type: "solid", // one of solid, transparent, linear gradient, radical gradient, image
            value: "#646464",
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

    // colors
    $scope.addColor = (object) => {
      object.push({value: "#000"});
    }
    $scope.removeColor = (object, index) => {
      object.splice(index, 1);
    }

    // card body text
    $scope.addRow = () => {
      const rowTemplate = {
        type: "name",
        text: ""
      };
      $scope.data.currentCard.body.attacks.push(rowTemplate);
    }
    $scope.removeRow = (index) => {
      $scope.data.currentCard.body.attacks.splice(index, 1);
    }
  }]);
})(window.angular);
