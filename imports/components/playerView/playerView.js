import angular from "angular";
import angularMeteor from "angular-meteor";
import uiRouter from "angular-ui-router";
import {Teams} from "../../api/Teams";

import template from "./playerView.html";

class playerViewCtrl {
    constructor($scope,$stateParams) {
        $scope.viewModel(this);

        this.subscribe('teams');

        this.player={};

        this.helpers({
            player() {
                let toto = Teams.findOne({Players : {$elemMatch:{_id:$stateParams.userId}}});
                console.log(toto);
                if(toto === undefined){
                    return toto;
                }else{
                    for(var i=0;i<toto.Players.length; i++){
                        if(toto.Players[i]._id == $stateParams.userId){
                            return toto.Players[i];
                        }
                    }
                    return undefined;
                }
            }
        });


    }
}

playerViewCtrl.prototype.test = function(){
    console.log(this.player);
    var stats = [5,7,2,3,5];
    for(var j = 0; j < this.player.Stats.lenght ; j++){
        console.log(this.player.Stats[j]);
     stats[j] = this.player.Stats[j]; // PROBLEM player undefined pendant le constructeur
     }

    var ctx = document.getElementById("myChart");
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
}

const name = 'playerView'

export default angular.module(name, [
    angularMeteor,
    uiRouter

])
    .component(name, {
        templateUrl: template,
        controllerAs: name,
        controller: ['$scope',"$stateParams", playerViewCtrl]
    }).config(function ($stateProvider) {
        'ngInject';

        $stateProvider
            .state('playerView', {
                url: '/playerView/:userId',
                template: '<player-view></player-view>'
            });
    });
