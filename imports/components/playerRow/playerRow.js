import angular from "angular";
import angularMeteor from "angular-meteor";
import {name as PlayerViewCtrl} from "../playerView/playerView";

import template from "./playerRow.html";

class PlayerRow {
    constructor($scope,player) {

        $scope.viewModel(this);

        //$reactive(this).attach($scope);

        this.player={};

        this.helpers({
            player : function(){
                return player;
            }
        });
    }
}

const name = 'playerRow'

export default angular.module(name, [
    angularMeteor,
    PlayerViewCtrl
])
    .component(name, {
        templateUrl: template,
        transclude: true,
        controllerAs: name,
        controller : ["$scope",PlayerRow],
        bindings: {
            player: "="
        }
    });