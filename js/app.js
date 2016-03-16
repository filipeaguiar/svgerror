/* global angular */
var aghureport = angular.module('app', []);

angular.module('app')
  .controller('TaxaDePermanenciaController', function ($scope, $http) {
      $scope.name = 'taxas';
      $scope.chart = Morris.Bar({
        element: 'permanencia',
        data: [
          { y: '2006', a: 100, b: 90 },
          { y: '2007', a: 75,  b: 65 },
          { y: '2008', a: 50,  b: 40 },
          { y: '2009', a: 75,  b: 65 },
          { y: '2010', a: 50,  b: 40 },
          { y: '2011', a: 75,  b: 65 },
          { y: '2012', a: 100, b: 90 }
        ],
        xkey: 'y',
        ykeys: ['a', 'b'],
        labels: ['a', 'b'],
        hideHover: 'auto',
        resize: true,
      });

      $scope.saveImage = function () {
          el = document.querySelectorAll('#permanencia svg').item(0);
          saveSvgAsPng(el, 'Taxa_de_Permanencia.png', {
              backgroundColor: '#FFFFFF',
              scale: 2,
            });
        };
    });
