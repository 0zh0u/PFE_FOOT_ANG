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
    }).filter("formatPost", function(){
            return function(x) {
                console.log(x);
                var side;
                var post;

                if (x.includes("L") || x.includes("LC_")) {
                    side = "Gauche";
                } else if (x.includes("R") || x.includes("RC_")) {
                    side = "Droit";
                } else if (x.includes("C")) {
                    side = "Central";
                }

                if (x.includes("B") || x.includes("DM")) {
                    post = "Defenseur";
                } else if (x.includes("M") || x.includes("AM")) {
                    post = "Milieu";
                } else if (x.includes("F") || x.includes("RC_")) {
                    post = "Droit";
                } else if (x.includes("F")) {
                    post = "Attaquant";
                }
                else if (x.includes("GK")) {
                    post = "Goal";
                }


                return post == "Goal" ? post : post + " - " + side;
            }
    });
