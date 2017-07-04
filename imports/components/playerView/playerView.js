import angular from "angular";
import angularMeteor from "angular-meteor";
import uiRouter from "angular-ui-router";
import {Teams} from "../../api/Teams";

import template from "./playerView.html";

class playerViewCtrl {
    constructor($scope) {
        Tracker.autorun(() => {
            let player = $scope.getReactively('$ctrl.player');
            if(!player) return;
            var stats = [];
            for(key in player.Stats){
                stats.push($scope.getReactively('$ctrl.player').Stats[key]);
            }

            var ctx = document.getElementById(player._id+"-chart");
            var myChart = new Chart(ctx, {
                type: 'radar',
                data: {
                    labels: ["Speed", "Control", "Teamwork", "Attack", "Defense"],
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
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero:true
                            }
                        }],
                        display:false
                    }
                }
            });
        });
    }
}

const name = 'playerView'

export default angular.module(name, [
    angularMeteor

])
    .component(name, {
        templateUrl: template,
        controller: ['$scope', playerViewCtrl],
        bindings: {
            player: "="
        }
    });
    // .config(function ($stateProvider) {
    //     'ngInject';
    //
    //     $stateProvider
    //         .state('playerView', {
    //             url: '/playerView/:userId',
    //             template: '<player-view></player-view>'
    //         });
    // });
