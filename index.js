(function(angular) {
  'use strict';
  angular.module('mainApp', [])
  .controller('MainController', ['$scope', function($scope) {
    $scope.cardZoom = 1;

    $scope.data = {
      cardList: cardDataList,
      currentCard: cardDataList[0],
      color: cardDataList[0].colors,
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
          background: [
            {
              type: 'solid', // one of solid, transparent, linear gradient, radical gradient, image
              value: '#7B62A3'
            },
            {
              type: 'linearGradient',
              value: [
                {color: "#7B00A3", opacity: 50},
                {color: "#8f6161", opacity: 100}
              ],
              direction: {
                showGuide: true,
                start: { x: 0, y: 0 },
                end: { x: 1, y: 1 },
              }
            }
          ],
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
    $scope.addColorLayer = (object) => {
      console.log(object)
      object.push({
        type: "solid",
        value: [{color: '#000'}],
        direction: {
          showGuide: true,
          start: { x: 0, y: 50 },
          end: { x: 100, y: 50 },
        }
      });
    }
    $scope.addColorGradient = (object) => {
      object.push({color: "#000", opacity: 100});
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


    $scope.removeItem = (object, index) => {
      console.log(object, index);
      object.splice(index, 1);
    }
  }]);
})(window.angular);
