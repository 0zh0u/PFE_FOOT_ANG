import angular from "angular";
import angularMeteor from "angular-meteor";
import angularSlider from "angularjs-slider";
import "angularjs-slider/dist/rzslider.css";

import template from "./playerCreate.html";

const STAT_DEFAULT_VALUE = 50;

class PlayerCreateCtrl {
    constructor($scope) {

        this.player = {
            _id: 'tocreate',
            firstName: '',
            lastName: '',
            Stats: [
                {name: 'attaque', value: STAT_DEFAULT_VALUE},
                {name: 'défense', value: STAT_DEFAULT_VALUE},
                {name: "jeu d'équipe", value: STAT_DEFAULT_VALUE},
                {name: 'vitesse', value: STAT_DEFAULT_VALUE}
            ]
        };

        this.statToAdd = "";

        this.sliderOptions = {
            floor: 1,
            ceil: 99,
            step: 1
        };

        this.refreshSlider = function() {
                $scope.$broadcast('rzSliderForceRender');
        };

        this.refreshSlider();
    }

    addStat() {
        for(var i = 0; i < this.player.Stats.length; ++i)
            if(this.player.Stats[i].name === this.statToAdd)
                return;

        this.player.Stats.push({name: this.statToAdd, value: STAT_DEFAULT_VALUE});

        this.statToAdd = "";

        this.refreshSlider();
    }

    removeStat(statToRemove) {
        console.log("test : " + statToRemove);
        this.player.Stats = _.reject(this.player.Stats, function(el) { return el.name === statToRemove.name });
    }
}

const name = 'playerCreate'

export default angular.module(name, [
    angularMeteor,
    angularSlider
])
    .component(name, {
        templateUrl: template,
        controllerAs: name,
        controller: ['$scope', PlayerCreateCtrl]
    });