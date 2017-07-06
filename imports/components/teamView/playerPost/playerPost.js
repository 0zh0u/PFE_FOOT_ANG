import angular from "angular";
import angularMeteor from "angular-meteor";
import {name as playerRow} from "../../playerRow/playerRow";

import template from "./playerPost.html";

import {Teams} from "../../../api/Teams";

class PlayerPost {
    constructor($scope,post,team) {
        this.player=undefined;

    }
    addPlayer(player){
        this.player=player;
        console.log(player);
        console.log(this.player);
    }
}

const name = 'playerPost'

export default angular.module(name, [
    angularMeteor,
    playerRow

])
    .component(name, {
        templateUrl: template,
        controllerAs: name,
        controller : ["$scope",PlayerPost],
        bindings : {
            post : "=",
            team : "="
        }
    }).filter("formatPostShort", function(){
            return function(x) {
                console.log(x);
                var side;
                var post;

                if(x === undefined){
                    return "";
                }
                if (x.includes("L") || x.includes("LC_")) {
                    side = "G";
                } else if (x.includes("R") || x.includes("RC_")) {
                    side = "D";
                } else if (x.includes("C")) {
                    side = "C";
                }

                if (x.includes("B") || x.includes("DM")) {
                    post = "D";
                } else if (x.includes("M") || x.includes("AM")) {
                    post = "M";
                } else if (x.includes("F")) {
                    post = "A";
                }
                else if (x.includes("GK")) {
                    post = "G";
                }


                return post == "G" ? post : post + "." + side;
            }
        });
