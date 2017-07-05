import angular from "angular";
import angularMeteor from "angular-meteor";

import template from "./playerStatChart.html";

class PlayerStatChart {
    constructor($scope) {
        $scope.chart = undefined;
        Tracker.autorun(() => {
            let player = $scope.getReactively('$ctrl.player');
            if (!player) return;
            var stats = [];
            var labels = [];
            for (var i = 0; i < player.Stats.length; ++i) {
                var stat = player.Stats[i];

                labels.push(stat.name);
                stats.push($scope.getReactively('$ctrl.player.Stats[' + i + '].value'));
            }

            var canvas = document.getElementById(player._id + "-chart");
            if ($scope.chart)
                $scope.chart.destroy();
            $scope.chart = new Chart(canvas, {
                type: 'radar',
                data: {
                    labels: labels,
                    datasets: [{

                        data: stats,
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255,99,132,1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    scale: {
                        ticks: {
                            beginAtZero: true,
                            min: 0,
                            max: 99
                        }
                    }
                }
            });
        });
    }
}

const name = 'playerStatChart'

export default angular.module(name, [
    angularMeteor

])
    .component(name, {
        templateUrl: template,
        controller: ['$scope', PlayerStatChart],
        bindings: {
            player: "="
        }
    });