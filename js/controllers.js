angular.module('aghureport')
  .controller('TaxaDePermanenciaController', function ($scope, $http, dateService) {
      $scope.chart = Morris.Bar({
        element: 'permanencia',
        data: [{}],
        xkey: 'competencia_internacao',
        ykeys: ['taxa_ocupacao'],
        labels: ['Taxa de Permanência'],
        hideHover: 'auto',
        resize: true,
      });

      $scope.cardlabel = 'Taxa de Permanência';

      var dates = dateService.getDates();

      $scope.updateChart = function (inicio, fim) {
        $http.get('/indicador/G/' + inicio + '/' + fim)
              .success(function (data) {
                $scope.ocupacao = data;

                // $scope.xaxis = 'competencia_internacao';
                // $scope.yaxis = ['taxa_ocupacao'];
                // $scope.label = ['Taxa de Permanência'];
                $scope.chart.setData($scope.ocupacao);
              })
              .error(function (data, status) {
                $scope.error = 'Erro' + data;
              });
      };

      $scope.updateChart(dates[0], dates[1]);

      $scope.saveImage = function () {
          el = document.querySelectorAll('#permanencia svg').item(0);
          saveSvgAsPng(el, 'Taxa_de_Permanencia.png', {
              backgroundColor: '#FFFFFF',
              scale: 2,
            });
        };
    });

angular.module('aghureport')
    .controller('TaxaDeMortalidadeController', function ($scope, $http) {
      $http.get('/indicador/G/2015-03-01/2016-03-01')
            .success(function (data) {
              $scope.mortalidade = data;
              $scope.xaxis = 'competencia_internacao';
              $scope.yaxis = ['taxa_mortalidade'];
              $scope.label = ['Taxa de Mortalidade'];
              $scope.cardlabel = 'Taxa de Mortalidade';
            })
            .error(function (data, status) {
              $scope.error = 'Erro' + data;
            });
    });
