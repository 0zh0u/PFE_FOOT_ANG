import angular from "angular";
import angularMeteor from "angular-meteor";
// import hammer from 'hammerjs';


import template from "./playerCreate.html";

const STAT_DEFAULT_VALUE = 50;

class PlayerCreateCtrl {
    constructor($scope,$mdDialog) {

        $scope.viewModel(this);

        this.player = {
            _id: 'tocreate',
            firstName: '',
            lastName: '',
            Stats: [
                {name: 'Attaque', value: STAT_DEFAULT_VALUE},
                {name: 'Défense', value: STAT_DEFAULT_VALUE},
                {name: "Jeu d'équipe", value: STAT_DEFAULT_VALUE},
                {name: 'Vitesse', value: STAT_DEFAULT_VALUE}
            ]
        };

        this.statToAdd = "";

        this.closeDialog = function() {
            $mdDialog.hide();
        };
    }

    createPlayer() {
        Meteor.call('teams.createPlayer', this.teamId, angular.copy(this.player));
    }

    addStat() {
        for(var i = 0; i < this.player.Stats.length; ++i)
            if(this.player.Stats[i].name === this.statToAdd)
                return;

        this.player.Stats.push({name: this.statToAdd, value: STAT_DEFAULT_VALUE});

        this.statToAdd = "";
    }

    removeStat(statToRemove) {
        this.player.Stats = _.reject(this.player.Stats, function(el) { return el.name === statToRemove.name });
    }
}

const name = 'playerCreate'

export default angular.module(name, [
    angularMeteor
])
    .component(name, {
        templateUrl: template,
        controllerAs: name,
        controller: ['$scope','$mdDialog', PlayerCreateCtrl],
        bindings: {
            teamId: "<"
        }
    });