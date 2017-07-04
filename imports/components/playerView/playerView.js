import angular from "angular";
import angularMeteor from "angular-meteor";
import uiRouter from "angular-ui-router";
import {Teams} from "../../api/Teams";

import template from "./playerView.html";

class playerViewCtrl {
    constructor($scope,$reactive,player) {
        // $scope.viewModel(this);
        $reactive(this).attach($scope);

        this.subscribe('teams');

        $scope.player={};

        $scope.helpers({
            player() {
                return player;
                // let toto = Teams.findOne({Players : {$elemMatch:{_id:$stateParams.userId}}});
                // if(toto === undefined){
                //     return toto;
                // }else{
                //     for(var i=0;i<toto.Players.length; i++){
                //         if(toto.Players[i]._id == $stateParams.userId){
                //             return toto.Players[i];
                //         }
                //     }
                //     return undefined;
                // }
            }
        });

        $scope.autorun(() => {
            console.log("testPL : " + $scope.getReactively('player'));
            if(!$scope.getReactively('player')) return;
            console.log("do graph !:");
            var stats = [];
            for(key in $scope.getReactively('player').Stats){
                stats.push($scope.getReactively('player').Stats[key]);
            }

            var ctx = document.getElementById($scope.getReactively('player._id')+"-chart");
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
        controller: ['$scope', '$reactive', playerViewCtrl],
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
